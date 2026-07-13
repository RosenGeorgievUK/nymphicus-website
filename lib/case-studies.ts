import type { ScreenshotKey } from "@/lib/screenshots";

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  industry: string;
  template: string;
  integrations: string[];
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  quote: {
    text: string;
    name: string;
    role: string;
  };
  screenshots: ScreenshotKey[];
  highlights: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "support-triage",
    title: "Support triage in an afternoon",
    company: "B2B software company",
    industry: "Customer Support",
    template: "Support Triage Agent",
    integrations: ["Intercom", "File Search", "User Approval"],
    challenge:
      "Support volume was climbing but every AI pilot got blocked — black-box copilots with credit meters didn't pass security review, and a custom LangChain build was quoted at two engineering weeks.",
    solution:
      "The CS team cloned the Support Triage template, connected Intercom via MCP, and attached their existing knowledge base. Human approval gates were added before any customer-facing reply went out.",
    results: [
      { value: "~4 hrs", label: "Typical build time" },
      { value: "High", label: "Draft acceptance (varies)" },
      { value: "0%", label: "Platform credit markup" },
    ],
    quote: {
      text: "Support triage went from a two-day engineering project to an afternoon on the canvas. Human approval before every send gave our team confidence to actually turn it on.",
      name: "Jordan K.",
      role: "Director of Customer Success",
    },
    screenshots: ["supportWorkflow", "supportChat"],
    highlights: [
      "Ticket classification and KB search automated",
      "Every draft requires human sign-off before send",
      "Full execution trace for compliance reviews",
    ],
  },
  {
    slug: "crm-copilot",
    title: "RevOps copilot without glue code",
    company: "Growth-stage startup",
    industry: "Sales & RevOps",
    template: "CRM Copilot",
    integrations: ["HubSpot MCP", "Agent"],
    challenge:
      "RevOps needed CRM Q&A and deal updates in Slack, but internal tools wanted a maintained Python service. Previous copilot trials added unpredictable per-seat AI credits on top of HubSpot.",
    solution:
      "They deployed the CRM Copilot template with HubSpot wired through the MCP registry. The team customized deal-update logic on the canvas and connected their own Anthropic keys.",
    results: [
      { value: "~1 day", label: "Typical time to production" },
      { value: "3+", label: "MCP tools connectable" },
      { value: "Direct", label: "Provider billing (BYO keys)" },
    ],
    quote: {
      text: "MCP changed how we integrate. HubSpot and Intercom wired in without custom glue code, and the execution logs made our compliance review straightforward.",
      name: "Sam R.",
      role: "RevOps Lead",
    },
    screenshots: ["crmWorkflow", "mcpRegistry"],
    highlights: [
      "HubSpot queries and updates via MCP — no custom API layer",
      "Outreach drafts scoped to rev ops, not a generic copilot",
      "Immutable logs for every CRM write action",
    ],
  },
  {
    slug: "governed-agents",
    title: "Agents security would actually approve",
    company: "Series B SaaS",
    industry: "Platform Engineering",
    template: "Custom multi-agent workflows",
    integrations: ["File Search", "MCP", "User Approval", "Self-hosted"],
    challenge:
      "Platform engineering needed internal agents for onboarding and policy Q&A, but security rejected every SaaS copilot — opaque data handling, no audit trail, and keys held by the vendor.",
    solution:
      "The team self-hosted Nymphi on their infrastructure, connected BYO API keys, and enforced RBAC so only approved builders could publish agents. Execution logs became the default incident review surface.",
    results: [
      { value: "Full", label: "Run audit trace" },
      { value: "SSO", label: "Enterprise option" },
      { value: "Self-host", label: "Deployment option" },
    ],
    quote: {
      text: "We needed agents our security team would sign off on — not another black-box copilot with a credit meter. Nymphi was the first platform that let us keep our keys and still move fast.",
      name: "Alex M.",
      role: "Head of Platform Engineering",
    },
    screenshots: ["dashboard", "executionLogs", "agentsList"],
    highlights: [
      "Self-hosted deployment with full data residency",
      "RBAC across agents, knowledge bases, and tools",
      "Export-ready audit trail for security reviews",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
