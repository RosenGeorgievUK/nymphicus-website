import type { ScreenshotKey } from "@/lib/screenshots";

const BENTO_SCREENSHOTS: ScreenshotKey[] = [
  "supportWorkflow",
  "crmWorkflow",
  "knowledgeWorkflow",
  "mcpRegistry",
];

export function bentoScreenshotForItem(href: string, index: number): ScreenshotKey {
  if (href.includes("/integrations")) return "mcpRegistry";
  return BENTO_SCREENSHOTS[index] ?? "supportWorkflow";
}

export const SPOTLIGHT_SCREENSHOTS: ScreenshotKey[] = [
  "supportWorkflow",
  "mcpRegistry",
  "executionLogs",
];

export const FEATURE_SCREENSHOTS: ScreenshotKey[] = [
  "dashboard",
  "supportWorkflow",
  "agentsList",
  "executionLogs",
];

export const FEATURE_REVERSE = [false, true, false, true] as const;

export const TEMPLATE_SCREENSHOTS: ScreenshotKey[][] = [
  ["supportWorkflow", "supportChat"],
  ["crmWorkflow"],
  ["knowledgeWorkflow"],
];

export const USE_CASE_INTEGRATIONS = [
  ["HubSpot", "Salesforce", "Slack"],
  ["Notion", "Google Drive", "Mailchimp"],
  ["Intercom", "Zendesk", "File Search"],
  ["Shopify", "Stripe", "Gorgias"],
  ["Stripe", "QuickBooks", "Excel"],
  ["Google Drive", "Notion", "DocuSign"],
  ["Notion", "Slack", "Greenhouse"],
  ["Linear", "Notion", "Jira"],
  ["GitHub", "PagerDuty", "Confluence"],
  ["Notion", "Google Drive", "HubSpot"],
] as const;

export const CASE_STUDY_ASSETS: Record<
  string,
  { integrations: string[]; screenshots: ScreenshotKey[] }
> = {
  "support-triage": {
    integrations: ["Intercom", "File Search", "User Approval"],
    screenshots: ["supportWorkflow", "supportChat"],
  },
  "crm-copilot": {
    integrations: ["HubSpot", "AI assistant"],
    screenshots: ["crmWorkflow", "mcpRegistry"],
  },
  "governed-agents": {
    integrations: ["File Search", "App connections", "User Approval", "Self-hosted"],
    screenshots: ["dashboard", "executionLogs", "agentsList"],
  },
};

export const CONTACT_OPTION_HREFS = [
  "register",
  "bookDemo",
  "enterpriseContact",
] as const;

export const CONTACT_OPTION_VARIANTS = ["gradient", "ghost", "ghost"] as const;
