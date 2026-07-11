export type FaqItem = {
  question: string;
  answer: string;
};

export const pricingFaq: FaqItem[] = [
  {
    question: "How do bring-your-own API keys work?",
    answer:
      "You connect your own provider accounts (OpenAI, Anthropic, etc.) directly. Nymphicus orchestrates calls through your keys — no per-task credit markup from us. You pay providers at their standard rates.",
  },
  {
    question: "Can I self-host Nymphicus?",
    answer:
      "Yes. Enterprise includes a self-hosted deployment option so you can run agents on your own infrastructure with full data residency control. Contact us for deployment details.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Cloud deployments use encrypted storage in your chosen region. Self-hosted deployments keep all data on your infrastructure. Knowledge-base permissions and RBAC apply in both modes.",
  },
  {
    question: "Does Nymphicus support MCP integrations?",
    answer:
      "Yes. MCP is a first-class integration path — connect any MCP-compatible tool to your agent workflows without custom glue code.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Free tier has no commitment. Paid plans can be cancelled at the end of your billing period — no long-term lock-in required.",
  },
  {
    question: "What does Pro cost?",
    answer:
      "Pro starts at $49 per seat per month for growing teams that need collaboration, advanced RBAC, and priority support. Contact us for volume pricing or annual billing.",
  },
];

export const homepageFaq: FaqItem[] = [
  {
    question: "How is Nymphicus different from Zapier or n8n?",
    answer:
      "Zapier and n8n excel at deterministic automation. Nymphicus is built for AI agents — LLM nodes, RAG, human approval gates, and MCP-native tool calls — with governance (RBAC, audit trail) designed for production agent workloads.",
  },
  {
    question: "Do I need to be a developer?",
    answer:
      "No. The visual canvas lets ops and support teams build workflows with drag-and-drop. Developers can still extend via MCP servers, custom HTTP nodes, and self-hosted deployments when needed.",
  },
  {
    question: "What happens to my API keys?",
    answer:
      "You bring your own keys. Nymphicus orchestrates calls through your provider accounts — we don't resell tokens or add a per-task credit markup. Enterprise and self-hosted options keep keys entirely on your infrastructure.",
  },
  {
    question: "Can my security team review every agent action?",
    answer:
      "Yes. Every run produces an immutable execution log with full node trace. RBAC controls who can build, deploy, and approve. Human-in-the-loop gates stop sensitive actions before they execute.",
  },
  {
    question: "How fast can we ship our first agent?",
    answer:
      "Most teams deploy their first agent from a template in under an hour. Support Triage, CRM Copilot, and Knowledge Base templates include pre-wired flows you customize on the canvas.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes — the Free tier includes the visual builder, 15 node types, knowledge bases, MCP integrations, and community support. No credit card required.",
  },
];
