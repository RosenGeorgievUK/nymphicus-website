export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaq: FaqItem[] = [
  {
    question: "How is Nymphi different from Zapier or n8n?",
    answer:
      "Zapier and n8n excel at deterministic automation. Nymphi is built for AI agents — LLM nodes, RAG, human approval gates, and MCP-native tool calls — with governance (RBAC, audit trail) designed for production agent workloads.",
  },
  {
    question: "Do I need to be a developer?",
    answer:
      "No. The visual canvas lets ops and support teams build workflows with drag-and-drop. Developers can still extend via MCP servers, custom HTTP nodes, and self-hosted deployments when needed.",
  },
  {
    question: "What happens to my API keys?",
    answer:
      "You bring your own keys. Nymphi orchestrates calls through your provider accounts — we don't resell tokens or add a per-task credit markup. Enterprise and self-hosted options keep keys entirely on your infrastructure.",
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
      "Yes — the Free tier includes the visual builder, 15 node types, 1 knowledge base (50MB), 2 MCP integrations, and community support. No credit card required.",
  },
];
