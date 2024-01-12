import RULE_EDITOR_CONFIG from "./rule-editor";
import { CONSTANTS as GLOBAL_CONSTANTS } from "@requestly/requestly-core";

const joinPaths = (path1, path2) => {
  return path1.concat(path2?.[0] !== "/" ? "/" + path2 : path2).replace(/\/\//g, "/");
};

/**
 * @description Paths consist of INDEX, RELATIVE and ABSOLUTE paths.
 *
 * - INDEX: Indicates the top-level path eg: `/rules` or `/editor`.
 * - RELATIVE: Its a combination of INDEX + sub-path eg: `/rules/editor`, are used for routing purpose.
 * - ABSOLUTE: Used for in app navigation and handling redirects.
 */
const PATHS = {};
PATHS.ABSOLUTE = {};

PATHS.ROOT = "/";
PATHS.INDEX_HTML = "/index.html";
PATHS.ANY = "*";

/******************** LAYOUTS **************************/

// Dashboard
PATHS.DASHBOARD = PATHS.ROOT;

// Landing
PATHS.LANDING = "/en-us";

/******************** VIEWS **************************/

// Overview
PATHS.OVERVIEW = {};
PATHS.OVERVIEW.RELATIVE = "/overview";
PATHS.OVERVIEW.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.OVERVIEW.RELATIVE);

// Getting started
PATHS.GETTING_STARTED = "/getting-started";

// Onboarding
PATHS.ONBOARDING = {};
PATHS.ONBOARDING.RELATIVE = "/onboarding";
PATHS.ONBOARDING.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.ONBOARDING.RELATIVE);

//Home
PATHS.HOME = {};
PATHS.HOME.RELATIVE = "/home";
PATHS.HOME.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.HOME.RELATIVE);

//Appsumo
PATHS.APPSUMO = {};
PATHS.APPSUMO.RELATIVE = "/appsumo";
PATHS.APPSUMO.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.APPSUMO.RELATIVE);

//Updates
PATHS.UPDATES = {};
PATHS.UPDATES.RELATIVE = "/updates";
PATHS.UPDATES.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.UPDATES.RELATIVE);

/**
 * Rules - Base
 *
 * Top level route "/rules"
 */
PATHS.RULES = {};
PATHS.RULES.INDEX = "/rules";
PATHS.RULES.RELATIVE = PATHS.RULES.INDEX;
PATHS.RULES.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.RULES.RELATIVE);
PATHS.RULES.CREATE = "/rules/create";

// Rules - My Rules
PATHS.RULES.MY_RULES = {};
PATHS.RULES.MY_RULES.RELATIVE = "my-rules";
PATHS.RULES.MY_RULES.ABSOLUTE = joinPaths(PATHS.RULES.ABSOLUTE, PATHS.RULES.MY_RULES.RELATIVE);

// Shared Lists - Base
PATHS.SHARED_LISTS = {};
PATHS.SHARED_LISTS.RELATIVE = "shared-lists";
PATHS.SHARED_LISTS.ABSOLUTE = joinPaths(PATHS.RULES.RELATIVE, PATHS.SHARED_LISTS.RELATIVE);

/**
 * @deprecated
 *
 * Shared Lists - My Lists
 */
PATHS.SHARED_LISTS.MY_LISTS = {};
PATHS.SHARED_LISTS.MY_LISTS.INDEX = "my-lists";
PATHS.SHARED_LISTS.MY_LISTS.RELATIVE = PATHS.SHARED_LISTS.RELATIVE + PATHS.SHARED_LISTS.MY_LISTS.INDEX;
PATHS.SHARED_LISTS.MY_LISTS.ABSOLUTE = PATHS.SHARED_LISTS.ABSOLUTE + PATHS.SHARED_LISTS.MY_LISTS.INDEX;

// Shared Lists - Import List (for desktop app)
PATHS.SHARED_LISTS.IMPORT_LIST = {};
PATHS.SHARED_LISTS.IMPORT_LIST.INDEX = "import-shared-list";
PATHS.SHARED_LISTS.IMPORT_LIST.RELATIVE = joinPaths(PATHS.SHARED_LISTS.RELATIVE, PATHS.SHARED_LISTS.IMPORT_LIST.INDEX);
PATHS.SHARED_LISTS.IMPORT_LIST.ABSOLUTE = joinPaths(PATHS.SHARED_LISTS.ABSOLUTE, PATHS.SHARED_LISTS.IMPORT_LIST.INDEX);

// Shared Lists - Viewer
PATHS.SHARED_LISTS.VIEWER = {};
PATHS.SHARED_LISTS.VIEWER.INDEX = "viewer";
PATHS.SHARED_LISTS.VIEWER.RELATIVE = joinPaths(PATHS.SHARED_LISTS.RELATIVE, PATHS.SHARED_LISTS.VIEWER.INDEX);
PATHS.SHARED_LISTS.VIEWER.ABSOLUTE = joinPaths(PATHS.SHARED_LISTS.ABSOLUTE, PATHS.SHARED_LISTS.VIEWER.INDEX);

// Rules - Templates
PATHS.RULES.TEMPLATES = {};
PATHS.RULES.TEMPLATES.RELATIVE = "templates";
PATHS.RULES.TEMPLATES.ABSOLUTE = joinPaths(PATHS.RULES.ABSOLUTE, PATHS.RULES.TEMPLATES.RELATIVE);

// Rules - Trash
PATHS.RULES.TRASH = {};
PATHS.RULES.TRASH.RELATIVE = "trash";
PATHS.RULES.TRASH.ABSOLUTE = joinPaths(PATHS.RULES.ABSOLUTE, PATHS.RULES.TRASH.RELATIVE);

// Rules - Rules Editor - Base
PATHS.RULE_EDITOR = {};
PATHS.RULE_EDITOR.INDEX = "editor";
PATHS.RULE_EDITOR.RELATIVE = joinPaths(PATHS.RULES.RELATIVE, PATHS.RULE_EDITOR.INDEX);
PATHS.RULE_EDITOR.ABSOLUTE = joinPaths(PATHS.RULES.ABSOLUTE, PATHS.RULE_EDITOR.INDEX);

// Rules - Rules Editor - Create
PATHS.RULE_EDITOR.CREATE_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE = joinPaths(PATHS.RULE_EDITOR.RELATIVE, RULE_EDITOR_CONFIG.MODES.CREATE);
PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE = joinPaths(PATHS.RULE_EDITOR.ABSOLUTE, RULE_EDITOR_CONFIG.MODES.CREATE);

// Rules - Rules Editor - Create - Redirect Rule
PATHS.RULE_EDITOR.CREATE_RULE.REDIRECT_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.REDIRECT_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REDIRECT;
PATHS.RULE_EDITOR.CREATE_RULE.REDIRECT_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REDIRECT;

// Rules - Rules Editor - Create - Cancel Rule
PATHS.RULE_EDITOR.CREATE_RULE.CANCEL_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.CANCEL_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.CANCEL;
PATHS.RULE_EDITOR.CREATE_RULE.CANCEL_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.CANCEL;

// Rules - Rules Editor - Create - Replace Host Rule
PATHS.RULE_EDITOR.CREATE_RULE.REPLACE_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.REPLACE_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REPLACE;
PATHS.RULE_EDITOR.CREATE_RULE.REPLACE_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REPLACE;

// Rules - Rules Editor - Create - Modify Headers Rule
PATHS.RULE_EDITOR.CREATE_RULE.HEADERS_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.HEADERS_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.HEADERS;
PATHS.RULE_EDITOR.CREATE_RULE.HEADERS_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.HEADERS;

// Rules - Rules Editor - Create - Modify Query Params Rule
PATHS.RULE_EDITOR.CREATE_RULE.QUERY_PARAMS_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.QUERY_PARAMS_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.QUERYPARAM;
PATHS.RULE_EDITOR.CREATE_RULE.QUERY_PARAMS_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.QUERYPARAM;

// Rules - Rules Editor - Create - Inject Script Rule
PATHS.RULE_EDITOR.CREATE_RULE.SCRIPT_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.SCRIPT_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.SCRIPT;
PATHS.RULE_EDITOR.CREATE_RULE.SCRIPT_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.SCRIPT;

// Rules - Rules Editor - Create - Modify Response Rule
PATHS.RULE_EDITOR.CREATE_RULE.RESPONSE_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.RESPONSE_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.RESPONSE;
PATHS.RULE_EDITOR.CREATE_RULE.RESPONSE_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.RESPONSE;

// Rules - Rules Editor - Create - Modify Request Rule
PATHS.RULE_EDITOR.CREATE_RULE.REQUEST_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.REQUEST_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REQUEST;
PATHS.RULE_EDITOR.CREATE_RULE.REQUEST_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.REQUEST;

// Rules - Rules Editor - Create - User Agent Rule
PATHS.RULE_EDITOR.CREATE_RULE.USER_AGENT_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.USER_AGENT_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.USERAGENT;
PATHS.RULE_EDITOR.CREATE_RULE.USER_AGENT_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.USERAGENT;

// Rules - Rules Editor - Create - Delay Request Rule
PATHS.RULE_EDITOR.CREATE_RULE.DELAY_RULE = {};
PATHS.RULE_EDITOR.CREATE_RULE.DELAY_RULE.RELATIVE =
  PATHS.RULE_EDITOR.CREATE_RULE.RELATIVE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.DELAY;
PATHS.RULE_EDITOR.CREATE_RULE.DELAY_RULE.ABSOLUTE =
  PATHS.RULE_EDITOR.CREATE_RULE.ABSOLUTE + "/" + GLOBAL_CONSTANTS.RULE_TYPES.DELAY;

// Rules - Rules Editor - Edit
PATHS.RULE_EDITOR.EDIT_RULE = {};
PATHS.RULE_EDITOR.EDIT_RULE.RELATIVE = PATHS.RULE_EDITOR.RELATIVE + "/" + RULE_EDITOR_CONFIG.MODES.EDIT;
PATHS.RULE_EDITOR.EDIT_RULE.ABSOLUTE = PATHS.RULE_EDITOR.ABSOLUTE + "/" + RULE_EDITOR_CONFIG.MODES.EDIT;

// Mock Server
PATHS.MOCK_SERVER = {};
PATHS.MOCK_SERVER.INDEX = "/mock-server";
PATHS.MOCK_SERVER.RELATIVE = PATHS.MOCK_SERVER.INDEX;
PATHS.MOCK_SERVER.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.MOCK_SERVER.RELATIVE);

/**
 * @deprecated
 *
 * Mock Server - My Mocks
 */
PATHS.MOCK_SERVER.MY_MOCKS = {};
PATHS.MOCK_SERVER.MY_MOCKS.INDEX = "apis";
PATHS.MOCK_SERVER.MY_MOCKS.RELATIVE = joinPaths(PATHS.MOCK_SERVER.RELATIVE, PATHS.MOCK_SERVER.MY_MOCKS.INDEX);
PATHS.MOCK_SERVER.MY_MOCKS.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER.ABSOLUTE, PATHS.MOCK_SERVER.MY_MOCKS.INDEX);

// Mock Server  - Viewer
PATHS.MOCK_SERVER.VIEWER = {};
PATHS.MOCK_SERVER.VIEWER.INDEX = "viewer";
PATHS.MOCK_SERVER.VIEWER.RELATIVE = joinPaths(PATHS.MOCK_SERVER.MY_MOCKS.RELATIVE, PATHS.MOCK_SERVER.VIEWER.INDEX);
PATHS.MOCK_SERVER.VIEWER.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER.MY_MOCKS.ABSOLUTE, PATHS.MOCK_SERVER.VIEWER.INDEX);

/**
 * @deprecated
 *
 * Mock Server - Viewer - Create
 */
PATHS.MOCK_SERVER.VIEWER.CREATE = {};
PATHS.MOCK_SERVER.VIEWER.CREATE.INDEX = "create";
PATHS.MOCK_SERVER.VIEWER.CREATE.RELATIVE = joinPaths(
  PATHS.MOCK_SERVER.VIEWER.RELATIVE,
  PATHS.MOCK_SERVER.VIEWER.CREATE.INDEX
);
PATHS.MOCK_SERVER.VIEWER.CREATE.ABSOLUTE = joinPaths(
  PATHS.MOCK_SERVER.VIEWER.ABSOLUTE,
  PATHS.MOCK_SERVER.VIEWER.CREATE.INDEX
);

/**
 * @deprecated
 */
PATHS.MOCK_SERVER.VIEWER.CREATE_TYPE_API = joinPaths(PATHS.MOCK_SERVER.VIEWER.CREATE.ABSOLUTE, `API`);
PATHS.MOCK_SERVER.VIEWER.CREATE_TYPE_JS = joinPaths(PATHS.MOCK_SERVER.VIEWER.CREATE.ABSOLUTE, `JS`);
PATHS.MOCK_SERVER.VIEWER.CREATE_TYPE_CSS = joinPaths(PATHS.MOCK_SERVER.VIEWER.CREATE.ABSOLUTE, `CSS`);
PATHS.MOCK_SERVER.VIEWER.CREATE_TYPE_HTML = joinPaths(PATHS.MOCK_SERVER.VIEWER.CREATE.ABSOLUTE, `HTML`);

/**
 * @deprecated
 *
 * Files - List
 */
PATHS.FILES = {};
PATHS.FILES.INDEX = "files-legacy";
PATHS.FILES.RELATIVE = joinPaths(PATHS.MOCK_SERVER.RELATIVE, PATHS.FILES.INDEX);
PATHS.FILES.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER.ABSOLUTE, PATHS.FILES.INDEX);

/**
 * @deprecated
 *
 * Files - List
 */
PATHS.FILES.MY_FILES = {};
PATHS.FILES.MY_FILES.INDEX = "my-files";
PATHS.FILES.MY_FILES.RELATIVE = joinPaths(PATHS.FILES.RELATIVE, PATHS.FILES.MY_FILES.INDEX);
PATHS.FILES.MY_FILES.ABSOLUTE = joinPaths(PATHS.FILES.ABSOLUTE, PATHS.FILES.MY_FILES.INDEX);

// Files - Viewer
PATHS.FILES.VIEWER = {};
PATHS.FILES.VIEWER.INDEX = "viewer";
PATHS.FILES.VIEWER.RELATIVE = joinPaths(PATHS.FILES.RELATIVE, PATHS.FILES.VIEWER.INDEX);
PATHS.FILES.VIEWER.ABSOLUTE = joinPaths(PATHS.FILES.ABSOLUTE, PATHS.FILES.VIEWER.INDEX);

/**
 * @deprecated
 *
 * Files - Viewer - Create
 */
PATHS.FILES.VIEWER.CREATE = {};
PATHS.FILES.VIEWER.CREATE.INDEX = "create";
PATHS.FILES.VIEWER.CREATE.RELATIVE = PATHS.FILES.VIEWER.RELATIVE + PATHS.FILES.VIEWER.CREATE.INDEX;
PATHS.FILES.VIEWER.CREATE.ABSOLUTE = PATHS.FILES.VIEWER.ABSOLUTE + PATHS.FILES.VIEWER.CREATE.INDEX;

// MarketPlace
PATHS.MARKETPLACE = {};
PATHS.MARKETPLACE.RELATIVE = "/marketplace";
PATHS.MARKETPLACE.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.MARKETPLACE.RELATIVE);

// Trash
PATHS.TRASH = {};
PATHS.TRASH.RELATIVE = "/rules/trash";
PATHS.TRASH.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.TRASH.RELATIVE);

// Pricing
PATHS.PRICING = {};
PATHS.PRICING.RELATIVE = "/pricing";
PATHS.PRICING.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.PRICING.RELATIVE);

// Settings
PATHS.SETTINGS = {};
PATHS.SETTINGS.RELATIVE = "/settings";
PATHS.SETTINGS.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.SETTINGS.RELATIVE);

// Settings - Storage Settings
PATHS.SETTINGS.STORAGE_SETTINGS = {};
PATHS.SETTINGS.STORAGE_SETTINGS.INDEX = "/storage-settings";
PATHS.SETTINGS.STORAGE_SETTINGS.RELATIVE = PATHS.SETTINGS.RELATIVE + PATHS.SETTINGS.STORAGE_SETTINGS.INDEX;
PATHS.SETTINGS.STORAGE_SETTINGS.ABSOLUTE = PATHS.SETTINGS.ABSOLUTE + PATHS.SETTINGS.STORAGE_SETTINGS.INDEX;

// Settings - Storage Settings
PATHS.SETTINGS.DESKTOP_PREFERENCES = {};
PATHS.SETTINGS.DESKTOP_PREFERENCES.INDEX = "/desktop-preference";
PATHS.SETTINGS.DESKTOP_PREFERENCES.RELATIVE = PATHS.SETTINGS.RELATIVE + PATHS.SETTINGS.DESKTOP_PREFERENCES.INDEX;
PATHS.SETTINGS.DESKTOP_PREFERENCES.ABSOLUTE = PATHS.SETTINGS.ABSOLUTE + PATHS.SETTINGS.DESKTOP_PREFERENCES.INDEX;

// Teams - Accept Team Invite
PATHS.ACCEPT_TEAM_INVITE = {};
PATHS.ACCEPT_TEAM_INVITE.RELATIVE = "/accept-team-invite";
PATHS.ACCEPT_TEAM_INVITE.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.ACCEPT_TEAM_INVITE.RELATIVE);

// Account
PATHS.ACCOUNT = {};
PATHS.ACCOUNT.RELATIVE = "/account";
PATHS.ACCOUNT.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.ACCOUNT.RELATIVE);

// Account - My Account
PATHS.ACCOUNT.MY_ACCOUNT = {};
PATHS.ACCOUNT.MY_ACCOUNT.INDEX = "/my-account";
PATHS.ACCOUNT.MY_ACCOUNT.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.MY_ACCOUNT.INDEX;
PATHS.ACCOUNT.MY_ACCOUNT.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.MY_ACCOUNT.INDEX;

// Account - My Organization
PATHS.ACCOUNT.MY_ORGANIZATION = {};
PATHS.ACCOUNT.MY_ORGANIZATION.INDEX = "/my-organization";
PATHS.ACCOUNT.MY_ORGANIZATION.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.MY_ORGANIZATION.INDEX;
PATHS.ACCOUNT.MY_ORGANIZATION.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.MY_ORGANIZATION.INDEX;

// Account - Create Organization
PATHS.ACCOUNT.CREATE_ORGANIZATION = {};
PATHS.ACCOUNT.CREATE_ORGANIZATION.INDEX = "/create-organization";
PATHS.ACCOUNT.CREATE_ORGANIZATION.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.CREATE_ORGANIZATION.INDEX;
PATHS.ACCOUNT.CREATE_ORGANIZATION.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.CREATE_ORGANIZATION.INDEX;

// Account - My Backups
PATHS.ACCOUNT.MY_BACKUPS = {};
PATHS.ACCOUNT.MY_BACKUPS.INDEX = "/my-backups";
PATHS.ACCOUNT.MY_BACKUPS.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.MY_BACKUPS.INDEX;
PATHS.ACCOUNT.MY_BACKUPS.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.MY_BACKUPS.INDEX;

// Account - Referrals
PATHS.ACCOUNT.MY_REFERRALS = {};
PATHS.ACCOUNT.MY_REFERRALS.INDEX = "/my-referrals";
PATHS.ACCOUNT.MY_REFERRALS.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.MY_REFERRALS.INDEX;
PATHS.ACCOUNT.MY_REFERRALS.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.MY_REFERRALS.INDEX;

// Account - Single Team View
PATHS.ACCOUNT.TEAMS = {};
PATHS.ACCOUNT.TEAMS.INDEX = "/teams";
PATHS.ACCOUNT.TEAMS.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.TEAMS.INDEX;
PATHS.ACCOUNT.TEAMS.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.TEAMS.INDEX;

// Account - View My Teams
PATHS.ACCOUNT.MY_TEAMS = {};
PATHS.ACCOUNT.MY_TEAMS.INDEX = "/my-teams";
PATHS.ACCOUNT.MY_TEAMS.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.MY_TEAMS.INDEX;
PATHS.ACCOUNT.MY_TEAMS.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.MY_TEAMS.INDEX;

// Account - Create New Team Workspace
PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE = {};
PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE.INDEX = "/create-new-team-workspace";
PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE.RELATIVE =
  PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE.INDEX;
PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE.ABSOLUTE =
  PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.CREATE_NEW_TEAM_WORKSPACE.INDEX;

// Account - Personal Subscription
PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION = {};
PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION.INDEX = "/personal-subscription";
PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION.INDEX;
PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.PERSONAL_SUBSCRIPTION.INDEX;

// Update Subscription
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION = {};
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION.INDEX = "/update-subscription";
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.UPDATE_SUBSCRIPTION.INDEX;
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.UPDATE_SUBSCRIPTION.INDEX;

// Update Subscription - Contact Us
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US = {};
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.INDEX = "/update-my-subscription";
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.RELATIVE =
  PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.INDEX;
PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.ABSOLUTE =
  PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.UPDATE_SUBSCRIPTION_CONTACT_US.INDEX;

// Update Payment Method
PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD = {};
PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD.INDEX = "/update-payment-method";
PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD.INDEX;
PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.UPDATE_PAYMENT_METHOD.INDEX;

// Refresh Subscription
PATHS.ACCOUNT.REFRESH_SUBSCRIPTION = {};
PATHS.ACCOUNT.REFRESH_SUBSCRIPTION.INDEX = "/refresh-subscription";
PATHS.ACCOUNT.REFRESH_SUBSCRIPTION.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.REFRESH_SUBSCRIPTION.INDEX;
PATHS.ACCOUNT.REFRESH_SUBSCRIPTION.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.REFRESH_SUBSCRIPTION.INDEX;

// Checkout
PATHS.ACCOUNT.CHECKOUT = {};
PATHS.ACCOUNT.CHECKOUT.INDEX = "/checkout";
PATHS.ACCOUNT.CHECKOUT.RELATIVE = PATHS.ACCOUNT.RELATIVE + PATHS.ACCOUNT.CHECKOUT.INDEX;
PATHS.ACCOUNT.CHECKOUT.ABSOLUTE = PATHS.ACCOUNT.ABSOLUTE + PATHS.ACCOUNT.CHECKOUT.INDEX;

// Goodbye
PATHS.GOODBYE = {};
PATHS.GOODBYE.RELATIVE = "/goodbye";
PATHS.GOODBYE.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.GOODBYE.RELATIVE);

// Feedback
PATHS.FEEDBACK = {};
PATHS.FEEDBACK.RELATIVE = "/feedback";
PATHS.FEEDBACK.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.FEEDBACK.RELATIVE);

// Support
PATHS.ACCOUNT.SUPPORT = {};
PATHS.ACCOUNT.SUPPORT.RELATIVE = "/support";
PATHS.ACCOUNT.SUPPORT.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.ACCOUNT.SUPPORT.RELATIVE);

// Sessions
PATHS.SESSIONS = {};
PATHS.SESSIONS.INDEX = "/sessions";
PATHS.SESSIONS.RELATIVE = PATHS.SESSIONS.INDEX;
PATHS.SESSIONS.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.SESSIONS.RELATIVE);

PATHS.SESSIONS.DRAFT = {};
PATHS.SESSIONS.DRAFT.INDEX = "draft";
PATHS.SESSIONS.DRAFT.RELATIVE = joinPaths(PATHS.SESSIONS.RELATIVE, PATHS.SESSIONS.DRAFT.INDEX);
PATHS.SESSIONS.DRAFT.ABSOLUTE = joinPaths(PATHS.SESSIONS.ABSOLUTE, PATHS.SESSIONS.DRAFT.INDEX);

PATHS.SESSIONS.SETTINGS = {};
PATHS.SESSIONS.SETTINGS.INDEX = "settings";
PATHS.SESSIONS.SETTINGS.RELATIVE = joinPaths(PATHS.SESSIONS.RELATIVE, PATHS.SESSIONS.SETTINGS.INDEX);
PATHS.SESSIONS.SETTINGS.ABSOLUTE = joinPaths(PATHS.SESSIONS.ABSOLUTE, PATHS.SESSIONS.SETTINGS.INDEX);

PATHS.SESSIONS.SAVED = {};
PATHS.SESSIONS.SAVED.INDEX = "saved";
PATHS.SESSIONS.SAVED.RELATIVE = joinPaths(PATHS.SESSIONS.RELATIVE, PATHS.SESSIONS.SAVED.INDEX);
PATHS.SESSIONS.SAVED.ABSOLUTE = joinPaths(PATHS.SESSIONS.ABSOLUTE, PATHS.SESSIONS.SAVED.INDEX);

PATHS.SESSIONS.NETWORK = {};
PATHS.SESSIONS.NETWORK.INDEX = "network";
PATHS.SESSIONS.NETWORK.RELATIVE = joinPaths(PATHS.SESSIONS.RELATIVE, PATHS.SESSIONS.NETWORK.INDEX);
PATHS.SESSIONS.NETWORK.ABSOLUTE = joinPaths(PATHS.SESSIONS.ABSOLUTE, PATHS.SESSIONS.NETWORK.INDEX);

/******************* AUTH *************************/

PATHS.AUTH = {};

// Sign in
PATHS.AUTH.SIGN_IN = {};
PATHS.AUTH.SIGN_IN.RELATIVE = "/signin";
PATHS.AUTH.SIGN_IN.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.SIGN_IN.RELATIVE);

// Sign in - Desktop App
PATHS.AUTH.DEKSTOP_SIGN_IN = {};
PATHS.AUTH.DEKSTOP_SIGN_IN.RELATIVE = "/desktop-sign-in";
PATHS.AUTH.DEKSTOP_SIGN_IN.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.DEKSTOP_SIGN_IN.RELATIVE);

// Sign up
PATHS.AUTH.SIGN_UP = {};
PATHS.AUTH.SIGN_UP.RELATIVE = "/signup";
PATHS.AUTH.SIGN_UP.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.SIGN_UP.RELATIVE);

// Forgot password
PATHS.AUTH.FORGOT_PASSWORD = {};
PATHS.AUTH.FORGOT_PASSWORD.RELATIVE = "/forgot";
PATHS.AUTH.FORGOT_PASSWORD.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.FORGOT_PASSWORD.RELATIVE);

PATHS.AUTH.EMAIL_ACTION = {};
PATHS.AUTH.EMAIL_ACTION.RELATIVE = "/emailAction";
PATHS.AUTH.EMAIL_ACTION.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.EMAIL_ACTION.RELATIVE);

PATHS.AUTH.RESET_PASSWORD = {};
PATHS.AUTH.RESET_PASSWORD.RELATIVE = "/resetPassword";
PATHS.AUTH.RESET_PASSWORD.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.RESET_PASSWORD.RELATIVE);

PATHS.AUTH.VERIFY_EMAIL = {};
PATHS.AUTH.VERIFY_EMAIL.RELATIVE = "/verifyEmail";
PATHS.AUTH.VERIFY_EMAIL.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.VERIFY_EMAIL.RELATIVE);

PATHS.AUTH.EMAIL_LINK_SIGNIN = {};
PATHS.AUTH.EMAIL_LINK_SIGNIN.RELATIVE = "/emailLinkSignIn";
PATHS.AUTH.EMAIL_LINK_SIGNIN.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.AUTH.EMAIL_LINK_SIGNIN.RELATIVE);

/******************* LEGACY *************************/
PATHS.LEGACY = {};
PATHS.HASH = {};

// Routes on root
PATHS.HASH.SHARED_LISTS = "#sharedList";
PATHS.HASH.RULE_EDITOR = "#edit";

// Files Library
PATHS.LEGACY.FILES_LIBRARY = {};
PATHS.LEGACY.FILES_LIBRARY.ABSOLUTE = "/library";

// Pricing
PATHS.LEGACY.PRICING = {};
PATHS.LEGACY.PRICING.ABSOLUTE = "/pricing";

// Settings
PATHS.LEGACY.SETTINGS = {};
PATHS.LEGACY.SETTINGS.ABSOLUTE = "/settings";

// Mobile Interceptor
PATHS.MOBILE_DEBUGGER = {};
PATHS.MOBILE_DEBUGGER.INDEX = "/mobile-debugger";
PATHS.MOBILE_DEBUGGER.RELATIVE = PATHS.MOBILE_DEBUGGER.INDEX;
PATHS.MOBILE_DEBUGGER.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.MOBILE_DEBUGGER.RELATIVE);

PATHS.MOBILE_DEBUGGER.NEW = {};
PATHS.MOBILE_DEBUGGER.NEW.RELATIVE = PATHS.MOBILE_DEBUGGER.RELATIVE + "/new";
PATHS.MOBILE_DEBUGGER.NEW.ABSOLUTE = PATHS.MOBILE_DEBUGGER.ABSOLUTE + "/new";

PATHS.MOBILE_DEBUGGER.HOME = {};
PATHS.MOBILE_DEBUGGER.HOME.RELATIVE = PATHS.MOBILE_DEBUGGER.RELATIVE + "/:appId";
PATHS.MOBILE_DEBUGGER.HOME.ABSOLUTE = PATHS.MOBILE_DEBUGGER.ABSOLUTE + "/:appId";

PATHS.MOBILE_DEBUGGER.INTERCEPTOR = {};
PATHS.MOBILE_DEBUGGER.INTERCEPTOR.RELATIVE = PATHS.MOBILE_DEBUGGER.HOME.RELATIVE + "/interceptor";
PATHS.MOBILE_DEBUGGER.INTERCEPTOR.ABSOLUTE = PATHS.MOBILE_DEBUGGER.HOME.ABSOLUTE + "/interceptor";

PATHS.MOBILE_DEBUGGER.UNAUTHORIZED = {};
PATHS.MOBILE_DEBUGGER.UNAUTHORIZED.RELATIVE = PATHS.MOBILE_DEBUGGER.HOME.RELATIVE + "/unauthorized";
PATHS.MOBILE_DEBUGGER.UNAUTHORIZED.ABSOLUTE = PATHS.MOBILE_DEBUGGER.HOME.ABSOLUTE + "/unauthorized";

// Goodbye
PATHS.LEGACY.GOODBYE = {};
PATHS.LEGACY.GOODBYE.ABSOLUTE = "/goodbye";

/******************** PAYMENTS **************************/

// Payment Success
PATHS.PAYMENT_SUCCESS = {};
PATHS.PAYMENT_SUCCESS.RELATIVE = "/paymentSuccess";
PATHS.PAYMENT_SUCCESS.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.PAYMENT_SUCCESS.RELATIVE);

// Payment Fail
PATHS.PAYMENT_FAIL = {};
PATHS.PAYMENT_FAIL.RELATIVE = "/paymentFail";
PATHS.PAYMENT_FAIL.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.PAYMENT_FAIL.RELATIVE);

/******************** App Mode Selector **************************/
PATHS.APP_MODE = {};
PATHS.APP_MODE.RELATIVE = "/app-mode";
PATHS.APP_MODE.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.APP_MODE.RELATIVE);

/******************** App Mode - Desktop - Desktop App Homepage **************************/
PATHS.DESKTOP = {};
PATHS.DESKTOP.RELATIVE = "/desktop";
PATHS.DESKTOP.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.DESKTOP.RELATIVE);

/******************** App Mode - Desktop - Manual Proxy Setup **************************/
PATHS.DESKTOP.MANUAL_SETUP = {};
PATHS.DESKTOP.MANUAL_SETUP.INDEX = "/manual-setup";
PATHS.DESKTOP.MANUAL_SETUP.RELATIVE = PATHS.DESKTOP.RELATIVE + PATHS.DESKTOP.MANUAL_SETUP.INDEX;
PATHS.DESKTOP.MANUAL_SETUP.ABSOLUTE = joinPaths(PATHS.DESKTOP.ABSOLUTE, PATHS.DESKTOP.MANUAL_SETUP.INDEX);

PATHS.DESKTOP.MY_APPS = {};
PATHS.DESKTOP.MY_APPS.INDEX = "/my-apps";
PATHS.DESKTOP.MY_APPS.RELATIVE = PATHS.DESKTOP.RELATIVE + PATHS.DESKTOP.MY_APPS.INDEX;
PATHS.DESKTOP.MY_APPS.ABSOLUTE = joinPaths(PATHS.DESKTOP.ABSOLUTE, PATHS.DESKTOP.MY_APPS.INDEX);

PATHS.DESKTOP.INTERCEPT_TRAFFIC = {};
PATHS.DESKTOP.INTERCEPT_TRAFFIC.INDEX = "/intercept-traffic";
PATHS.DESKTOP.INTERCEPT_TRAFFIC.RELATIVE = PATHS.DESKTOP.RELATIVE + PATHS.DESKTOP.INTERCEPT_TRAFFIC.INDEX;
PATHS.DESKTOP.INTERCEPT_TRAFFIC.ABSOLUTE = joinPaths(PATHS.DESKTOP.ABSOLUTE, PATHS.DESKTOP.INTERCEPT_TRAFFIC.INDEX);

/******************** MISC **************************/

// PAYMENT CHECKOUT
PATHS.CHECKOUT = {};
PATHS.CHECKOUT.RELATIVE = "/checkout";
PATHS.CHECKOUT.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.CHECKOUT.RELATIVE);

// 404 Page
PATHS.PAGE404 = {};
PATHS.PAGE404.RELATIVE = "/404";
PATHS.PAGE404.ABSOLUTE = PATHS.PAGE404.RELATIVE;

// 403 Page
PATHS.PAGE403 = {};
PATHS.PAGE403.RELATIVE = "/403";
PATHS.PAGE403.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.PAGE403.RELATIVE);

// EXTENSION INSTALLED URL FROM OUR EXTENSION WHICH IS TO BE REDIRECTED IN APP

PATHS.INSTALL_EXTENSION = {};
PATHS.INSTALL_EXTENSION.RELATIVE = "/install-extension";
PATHS.INSTALL_EXTENSION.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.PAGE403.RELATIVE);

PATHS.EXTENSION_INSTALLED = {};
PATHS.EXTENSION_INSTALLED.RELATIVE = "/extension-installed";
PATHS.EXTENSION_INSTALLED.ABSOLUTE = joinPaths(PATHS.LANDING, PATHS.EXTENSION_INSTALLED.RELATIVE);

// Mock Server V2
PATHS.MOCK_SERVER_V2 = {};
PATHS.MOCK_SERVER_V2.INDEX = "apis";
PATHS.MOCK_SERVER_V2.RELATIVE = joinPaths(PATHS.MOCK_SERVER.RELATIVE, PATHS.MOCK_SERVER_V2.INDEX);
PATHS.MOCK_SERVER_V2.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER.ABSOLUTE, PATHS.MOCK_SERVER_V2.INDEX);

// Mock Server V2 - Create
PATHS.MOCK_SERVER_V2.CREATE = {};
PATHS.MOCK_SERVER_V2.CREATE.INDEX = "editor/create";
PATHS.MOCK_SERVER_V2.CREATE.RELATIVE = joinPaths(PATHS.MOCK_SERVER_V2.RELATIVE, PATHS.MOCK_SERVER_V2.CREATE.INDEX);
PATHS.MOCK_SERVER_V2.CREATE.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER_V2.ABSOLUTE, PATHS.MOCK_SERVER_V2.CREATE.INDEX);

// Mock Server V2 - Edit
PATHS.MOCK_SERVER_V2.EDIT = {};
PATHS.MOCK_SERVER_V2.EDIT.INDEX = "editor/edit/:mockId";
PATHS.MOCK_SERVER_V2.EDIT.RELATIVE = joinPaths(PATHS.MOCK_SERVER_V2.RELATIVE, PATHS.MOCK_SERVER_V2.EDIT.INDEX);
PATHS.MOCK_SERVER_V2.EDIT.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER_V2.ABSOLUTE, PATHS.MOCK_SERVER_V2.EDIT.INDEX);

// API Client
PATHS.API_CLIENT = {};
PATHS.API_CLIENT.INDEX = "/api-client";
PATHS.API_CLIENT.RELATIVE = PATHS.API_CLIENT.INDEX;
PATHS.API_CLIENT.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.API_CLIENT.RELATIVE);

// File Server V2
PATHS.FILE_SERVER_V2 = {};
PATHS.FILE_SERVER_V2.INDEX = "files";
PATHS.FILE_SERVER_V2.RELATIVE = joinPaths(PATHS.MOCK_SERVER.RELATIVE, PATHS.FILE_SERVER_V2.INDEX);
PATHS.FILE_SERVER_V2.ABSOLUTE = joinPaths(PATHS.MOCK_SERVER.ABSOLUTE, PATHS.FILE_SERVER_V2.INDEX);

// Mock Server V2 - Create
PATHS.FILE_SERVER_V2.CREATE = {};
PATHS.FILE_SERVER_V2.CREATE.INDEX = "editor/create";
PATHS.FILE_SERVER_V2.CREATE.RELATIVE = joinPaths(PATHS.FILE_SERVER_V2.RELATIVE, PATHS.FILE_SERVER_V2.CREATE.INDEX);
PATHS.FILE_SERVER_V2.CREATE.ABSOLUTE = joinPaths(PATHS.FILE_SERVER_V2.ABSOLUTE, PATHS.FILE_SERVER_V2.CREATE.INDEX);

// Mock Server V2 - Edit
PATHS.FILE_SERVER_V2.EDIT = {};
PATHS.FILE_SERVER_V2.EDIT.INDEX = "editor/edit/:mockId";
PATHS.FILE_SERVER_V2.EDIT.RELATIVE = joinPaths(PATHS.FILE_SERVER_V2.RELATIVE, PATHS.FILE_SERVER_V2.EDIT.INDEX);
PATHS.FILE_SERVER_V2.EDIT.ABSOLUTE = joinPaths(PATHS.FILE_SERVER_V2.ABSOLUTE, PATHS.FILE_SERVER_V2.EDIT.INDEX);

// Invites
PATHS.INVITE = {};
PATHS.INVITE.INDEX = "/invite/:inviteId";
PATHS.INVITE.RELATIVE = PATHS.INVITE.INDEX;
PATHS.INVITE.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.INVITE.RELATIVE);

// Import settings from charles
PATHS.IMPORT_FROM_CHARLES = {};
PATHS.IMPORT_FROM_CHARLES.INDEX = "/import-settings-from-charles";
PATHS.IMPORT_FROM_CHARLES.RELATIVE = PATHS.IMPORT_FROM_CHARLES.INDEX;
PATHS.IMPORT_FROM_CHARLES.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.IMPORT_FROM_CHARLES.RELATIVE);

PATHS.LIVE_LOCAL = {};
PATHS.LIVE_LOCAL.INDEX = "/live-local";
PATHS.LIVE_LOCAL.RELATIVE = PATHS.LIVE_LOCAL.INDEX;
PATHS.LIVE_LOCAL.ABSOLUTE = joinPaths(PATHS.DASHBOARD, PATHS.LIVE_LOCAL.RELATIVE);

export default PATHS;
