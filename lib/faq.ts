export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaq: FaqItem[] = [
  {
    question: "How is Nymphi different from Zapier or n8n?",
    answer:
      "Zapier and n8n are great for simple automations. Nymphi is built for AI assistants — it understands context, searches your documents, asks a human before sensitive actions, and connects to your apps. Security controls like team permissions and activity logs are included from the start.",
  },
  {
    question: "Do I need to be a developer?",
    answer:
      "No. The visual builder lets support, sales, and operations teams create workflows by dragging and dropping. Developers can still add custom connections and self-hosted setups when needed.",
  },
  {
    question: "What happens to my API keys?",
    answer:
      "You connect your own OpenAI, Anthropic, or other provider account. Nymphi runs the workflow — we don't resell AI credits or add a per-use markup. Enterprise and self-hosted options keep keys entirely on your servers.",
  },
  {
    question: "Can my security team review every action?",
    answer:
      "Yes. Every run creates a detailed activity log. You control who can build, deploy, and approve. Sensitive steps pause until a human signs off.",
  },
  {
    question: "How fast can we launch our first assistant?",
    answer:
      "Most teams start from a template and have something working in under an hour. Support Triage, CRM Copilot, and Knowledge Base templates come with pre-built flows you can customize.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes — the Free tier includes the visual builder, 2 assistants, 1 knowledge base, 2 app connections, and community support. No credit card required.",
  },
];
