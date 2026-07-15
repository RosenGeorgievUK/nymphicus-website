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
      "Support volume was climbing but every AI pilot got blocked — chatbots with hidden costs didn't pass security review, and building something custom was quoted at two engineering weeks.",
    solution:
      "The support team cloned the Support Triage template, connected Intercom, and attached their existing help docs. Human approval was added before any customer-facing reply went out.",
    results: [
      { value: "~4 hrs", label: "Typical build time" },
      { value: "High", label: "Draft acceptance (varies)" },
      { value: "0%", label: "Platform AI markup" },
    ],
    quote: {
      text: "Support triage went from a two-day engineering project to an afternoon on the builder. Human approval before every send gave our team confidence to actually turn it on.",
      name: "Jordan K.",
      role: "Director of Customer Success",
    },
    screenshots: ["supportWorkflow", "supportChat"],
    highlights: [
      "Ticket classification and help doc search automated",
      "Every draft requires human sign-off before send",
      "Full activity log for compliance reviews",
    ],
  },
  {
    slug: "crm-copilot",
    title: "CRM assistant without custom code",
    company: "Growth-stage startup",
    industry: "Sales",
    template: "CRM Copilot",
    integrations: ["HubSpot", "AI assistant"],
    challenge:
      "The sales team needed CRM answers and deal updates in Slack, but internal tools wanted a maintained custom service. Previous AI trials added unpredictable per-seat costs on top of HubSpot.",
    solution:
      "They deployed the CRM Copilot template with HubSpot connected from the app directory. The team customized deal-update logic visually and connected their own Anthropic account.",
    results: [
      { value: "~1 day", label: "Typical time to launch" },
      { value: "3+", label: "Apps connectable" },
      { value: "Direct", label: "AI billed by provider" },
    ],
    quote: {
      text: "HubSpot and Intercom connected without custom code, and the activity logs made our compliance review straightforward.",
      name: "Sam R.",
      role: "Sales Operations Lead",
    },
    screenshots: ["crmWorkflow", "mcpRegistry"],
    highlights: [
      "HubSpot queries and updates — no custom API layer",
      "Outreach drafts scoped to sales, not a generic chatbot",
      "Complete log of every CRM update",
    ],
  },
  {
    slug: "governed-agents",
    title: "AI assistants security would actually approve",
    company: "Series B SaaS",
    industry: "IT",
    template: "Custom multi-step workflows",
    integrations: ["File Search", "App connections", "User Approval", "Self-hosted"],
    challenge:
      "IT needed internal assistants for onboarding and policy questions, but security rejected every SaaS chatbot — unclear data handling, no activity logs, and AI keys held by the vendor.",
    solution:
      "The team ran Nymphi on their own servers, connected their AI account directly, and set team permissions so only approved people could publish assistants. Activity logs became the default review tool.",
    results: [
      { value: "Full", label: "Run activity log" },
      { value: "SSO", label: "Enterprise option" },
      { value: "Self-host", label: "Deployment option" },
    ],
    quote: {
      text: "We needed AI our security team would sign off on — not another black-box chatbot with a credit meter. Nymphi was the first platform that let us keep our keys and still move fast.",
      name: "Alex M.",
      role: "Head of IT",
    },
    screenshots: ["dashboard", "executionLogs", "agentsList"],
    highlights: [
      "Self-hosted on company servers with full data control",
      "Team permissions across assistants, docs, and tools",
      "Exportable activity log for security reviews",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
