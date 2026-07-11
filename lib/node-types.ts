export type NodeType = {
  name: string;
  category: string;
  description: string;
};

export const nodeTypeCategories = [
  {
    category: "Triggers",
    description: "Start workflows from events, schedules, or manual runs.",
    nodes: [
      { name: "Webhook", description: "HTTP trigger from external systems" },
      { name: "Schedule", description: "Cron-based recurring runs" },
      { name: "Manual", description: "On-demand execution from dashboard" },
    ],
  },
  {
    category: "AI & knowledge",
    description: "LLM calls, retrieval, and grounded answers.",
    nodes: [
      { name: "LLM", description: "Call OpenAI, Anthropic, or your provider" },
      { name: "RAG Query", description: "Retrieve and cite knowledge chunks" },
      { name: "Knowledge Base", description: "Attach company docs to workflows" },
    ],
  },
  {
    category: "Logic & control",
    description: "Branch, loop, and gate sensitive actions.",
    nodes: [
      { name: "Condition", description: "Branch on rules or LLM output" },
      { name: "Loop", description: "Iterate over lists and collections" },
      { name: "Human Approval", description: "Pause for review before continuing" },
    ],
  },
  {
    category: "Integrations",
    description: "Connect tools without writing glue code.",
    nodes: [
      { name: "MCP Tool", description: "Call any MCP-compatible integration" },
      { name: "HTTP Request", description: "REST APIs and webhooks" },
      { name: "Output", description: "Return structured results" },
    ],
  },
  {
    category: "Data",
    description: "Transform and pass state between nodes.",
    nodes: [
      { name: "Transform", description: "Map and reshape JSON payloads" },
      { name: "Variable", description: "Store and reference workflow state" },
      { name: "Classifier", description: "Route by intent or category" },
    ],
  },
] as const;
