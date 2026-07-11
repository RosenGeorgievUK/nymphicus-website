export const industryUseCases = [
  {
    title: "Sales",
    outcome: "Qualify leads, update CRM, and draft follow-ups from one agent workflow.",
    integrations: ["HubSpot", "Salesforce", "Slack"],
  },
  {
    title: "Marketing",
    outcome: "Generate campaign briefs, repurpose content, and route approvals before publish.",
    integrations: ["Notion", "Google Drive", "Mailchimp"],
  },
  {
    title: "Customer Support",
    outcome: "Triage tickets, search the knowledge base, and draft replies with human approval.",
    integrations: ["Intercom", "Zendesk", "File Search"],
  },
  {
    title: "E-commerce",
    outcome: "Handle order lookups, returns, and inventory questions across storefront tools.",
    integrations: ["Shopify", "Stripe", "Gorgias"],
  },
  {
    title: "Finance",
    outcome: "Reconcile transactions, flag anomalies, and summarize month-end close tasks.",
    integrations: ["Stripe", "QuickBooks", "Excel"],
  },
  {
    title: "Legal / Compliance",
    outcome: "Review contracts against policy, cite sources, and route exceptions for review.",
    integrations: ["Google Drive", "Notion", "DocuSign"],
  },
  {
    title: "HR",
    outcome: "Answer policy questions, route requests, and onboard employees with guided flows.",
    integrations: ["Notion", "Slack", "Greenhouse"],
  },
  {
    title: "Product",
    outcome: "Summarize feedback, draft specs, and sync insights to your roadmap tools.",
    integrations: ["Linear", "Notion", "Jira"],
  },
  {
    title: "Engineering",
    outcome: "Triage incidents, search runbooks, and propose remediation steps with audit trail.",
    integrations: ["GitHub", "PagerDuty", "Confluence"],
  },
  {
    title: "Professional Services",
    outcome: "Prepare client deliverables, pull context from docs, and track billable work.",
    integrations: ["Notion", "Google Drive", "HubSpot"],
  },
] as const;

export const integrationLogos = [
  "HubSpot",
  "Stripe",
  "Notion",
  "Shopify",
  "Intercom",
  "GitHub",
  "Slack",
  "Salesforce",
  "Zendesk",
  "Google Drive",
  "Linear",
  "Jira",
  "QuickBooks",
  "DocuSign",
  "Mailchimp",
  "PagerDuty",
] as const;
