import { generateUrlPattern } from "../../utils";
import { WEB_URL, OTHER_WEB_URLS } from "../../../../config/dist/config.build.json";
import { isExtensionEnabled } from "./utils";
import { Variable, onVariableChange } from "../variable";
import { RequestRulePair, ResponseRulePair, RuleType } from "../../types";
import rulesStorageService from "../../rulesStorageService";

const CLIENT_SCRIPT_ID = "client-script";
const excludeMatchesPatterns = [WEB_URL, ...OTHER_WEB_URLS].map(generateUrlPattern).filter((pattern) => !!pattern);

declare const window: {
  responseRules: Record<string, unknown>[];
  requestRules: Record<string, unknown>[];
  [key: string]: any;
};

/** Loading AJAX Interceptor ASAP */
const registerClientScript = async () => {
  console.log("[registerClientScript]");
  chrome.scripting
    .registerContentScripts([
      {
        id: CLIENT_SCRIPT_ID,
        js: ["client.js"],
        world: "MAIN",
        allFrames: true,
        persistAcrossSessions: false,
        matches: ["http://*/*", "https://*/*"],
        runAt: "document_start",
        excludeMatches: excludeMatchesPatterns,
      },
    ])
    .then(() => {
      console.log("[registerClientScript]");
      chrome.scripting
        .getRegisteredContentScripts()
        .then((scripts) => console.log("[registerClientScript]", "registered content scripts", scripts));
    })
    .catch((err) => console.warn("[unregisterClientScript]", "unexpected error", err));
};

const unregisterClientScript = async () => {
  console.log("[unregisterClientScript]");
  return chrome.scripting
    .unregisterContentScripts({ ids: [CLIENT_SCRIPT_ID] })
    .then(() => {
      console.log("[unregisterClientScript]", "unregisterClientScript complete");
      chrome.scripting
        .getRegisteredContentScripts()
        .then((scripts) => console.log("[unregisterClientScript]", "registered content scripts", scripts));
    })
    .catch((err) => console.warn("[unregisterClientScript]", "unexpected error", err));
};

const setupClientScript = async (isExtensionStatusEnabled: boolean) => {
  console.log("[initClientHandler.setupClientScript]", { isExtensionEnabled });
  if (isExtensionStatusEnabled) {
    registerClientScript();
  } else {
    unregisterClientScript();
  }
};

export const initClientHandler = async () => {
  console.log("[initClientHandler]");
  const isExtensionStatusEnabled = await isExtensionEnabled();
  setupClientScript(isExtensionStatusEnabled);

  onVariableChange<boolean>(Variable.IS_EXTENSION_ENABLED, (extensionStatus) => {
    console.log("[initClientHandler]", "onVariableChange", { extensionStatus });
    setupClientScript(extensionStatus);
  });
};

/** Caching Rules for AjaxInterceptor */

const updateCache = (obj: Record<string, any>) => {
  // Cannot use outside variable in this function as this is executed in the context of the page
  // Reference: https://developer.chrome.com/docs/extensions/reference/api/scripting#:~:text=A%20JavaScript%20function%20to%20inject.,or%20func%20must%20be%20specified.

  // console.log("[updateCache]", { obj });
  const PUBLIC_NAMESPACE = "__REQUESTLY__";
  window[PUBLIC_NAMESPACE] = window[PUBLIC_NAMESPACE] || {};
  Object.keys(obj).map((key) => {
    window[PUBLIC_NAMESPACE][key] = obj[key];
  });
};

const updateTabCache = async (tabId: number, obj: Record<string, any>, frameId?: number) => {
  const target: chrome.scripting.InjectionTarget = {
    tabId: tabId,
  };

  if (frameId !== undefined) {
    target["frameIds"] = [frameId];
  } else {
    target["allFrames"] = true;
  }

  chrome.scripting.executeScript(
    {
      target,
      func: updateCache,
      args: [obj],
      injectImmediately: true,
      world: "MAIN",
    },
    () => {
      // NOOP
    }
  );
};

const updateTabRuleCache = async (tabId: number, frameId?: number) => {
  const requestRules = await rulesStorageService.getEnabledRules(RuleType.REQUEST);
  const responseRules = await rulesStorageService.getEnabledRules(RuleType.RESPONSE);
  const delayRules = await rulesStorageService.getEnabledRules(RuleType.DELAY);

  const clientRequestRules = requestRules.map((rule) => {
    const responseRulePair = rule.pairs[0] as RequestRulePair;
    return {
      id: rule.id,
      source: responseRulePair.source,
      request: responseRulePair.request,
    };
  });

  const clientResponseRules = responseRules.map((rule) => {
    const responseRulePair = rule.pairs[0] as ResponseRulePair;
    return {
      id: rule.id,
      source: responseRulePair.source,
      response: responseRulePair.response,
    };
  });

  const clientDelayRules = delayRules.map((rule) => {
    return {
      id: rule.id,
      pairs: rule.pairs,
    };
  });

  updateTabCache(
    tabId,
    {
      responseRules: clientResponseRules,
      requestRules: clientRequestRules,
      delayRules: clientDelayRules,
    },
    frameId
  );
};

export const initClientRuleCaching = async () => {
  // TODO: Do not inject in Requestly Pages. No harm in injecting though
  let isExtensionStatusEnabled = await isExtensionEnabled();
  onVariableChange<boolean>(Variable.IS_EXTENSION_ENABLED, (extensionStatus) => {
    isExtensionStatusEnabled = extensionStatus;
  });

  chrome.webNavigation.onCommitted.addListener(async (navigatedTabData) => {
    if (isExtensionStatusEnabled) {
      updateTabRuleCache(navigatedTabData.tabId, navigatedTabData.frameId);
    }
  });

  rulesStorageService.onRuleOrGroupChange(async () => {
    if (isExtensionStatusEnabled) {
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          updateTabRuleCache(tab.id, undefined);
        });
      });
    }
  });
};