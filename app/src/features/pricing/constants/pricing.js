import countryCodes from "config/constants/sub/static/countryCodes";
import APP_CONSTANTS from "config/constants";

export const PRICING = {};

PRICING.CHECKOUT = {};

PRICING.CHECKOUT.MODES = {};

PRICING.CHECKOUT.MODES.INDIVIDUAL = "individual";
PRICING.CHECKOUT.MODES.TEAM = "team";
PRICING.CHECKOUT.MODES.TRIAL = "trial";

PRICING.PRODUCTS = {};

PRICING.PRODUCTS.SESSION_REPLAY = "session_replay";
PRICING.PRODUCTS.HTTP_RULES = "http_rules";

PRICING.PLAN_NAMES = {};

PRICING.PLAN_NAMES.BRONZE = "bronze";
PRICING.PLAN_NAMES.SILVER = "silver";
PRICING.PLAN_NAMES.GOLD = "gold";
PRICING.PLAN_NAMES.LITE = "lite";
PRICING.PLAN_NAMES.BASIC = "basic";
PRICING.PLAN_NAMES.BASIC_V2 = "basic-v2";
PRICING.PLAN_NAMES.PROFESSIONAL = "professional";
PRICING.PLAN_NAMES.ENTERPRISE = "enterprise";
PRICING.PLAN_NAMES.BASIC_ENTERPRISE = "basic_enterprise";
PRICING.PLAN_NAMES.PROFESSIONAL_ENTERPRISE = "professional_enterprise";
PRICING.PLAN_NAMES.TRIAL_EXPIRED = "trial_expired";
PRICING.PLAN_NAMES.FREE = "free";
PRICING.PLAN_NAMES.INDIVIDUAL = "individual";

PRICING.COUNTRY_CODES = countryCodes;

PRICING.PREMIUM_PLANS = [
  PRICING.PLAN_NAMES.SILVER,
  PRICING.PLAN_NAMES.GOLD,
  PRICING.PLAN_NAMES.LITE,
  PRICING.PLAN_NAMES.BASIC,
  PRICING.PLAN_NAMES.BASIC_V2,
  PRICING.PLAN_NAMES.PROFESSIONAL,
  PRICING.PLAN_NAMES.ENTERPRISE,
  PRICING.PLAN_NAMES.BASIC_ENTERPRISE,
  PRICING.PLAN_NAMES.PROFESSIONAL_ENTERPRISE,
];

PRICING.DURATION = {
  MONTHLY: "monthly",
  ANNUALLY: "annually",
};

PRICING.WORKSPACES = {};
PRICING.WORKSPACES.PRIVATE_WORKSPACE = {
  name: APP_CONSTANTS.TEAM_WORKSPACES.NAMES.PRIVATE_WORKSPACE,
  id: "private_workspace",
  accessCount: 1,
  color: "#1E69FF",
};
