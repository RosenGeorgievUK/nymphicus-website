export type ComparisonRow = {
  feature: string;
  nymphi: string;
  n8n: string;
  zapier: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Visual workflow builder",
    nymphi: "Drag-and-drop agent canvas",
    n8n: "Drag-and-drop automation canvas",
    zapier: "Linear zap steps",
  },
  {
    feature: "AI / LLM agents",
    nymphi: "Native agent + RAG nodes",
    n8n: "AI nodes + LangChain options",
    zapier: "AI actions (limited)",
  },
  {
    feature: "MCP integrations",
    nymphi: "Native MCP registry",
    n8n: "500+ app nodes (custom)",
    zapier: "7,000+ apps (no MCP)",
  },
  {
    feature: "Human-in-the-loop",
    nymphi: "Built-in approval node",
    n8n: "Custom workflow logic",
    zapier: "Not native",
  },
  {
    feature: "API cost model",
    nymphi: "BYO keys, no markup",
    n8n: "Cloud execution pricing",
    zapier: "Per-task pricing tiers",
  },
  {
    feature: "RBAC & audit trail",
    nymphi: "Built in",
    n8n: "Enterprise add-on",
    zapier: "Team plans only",
  },
  {
    feature: "Self-hosted option",
    nymphi: "Enterprise",
    n8n: "Self-host available",
    zapier: "Cloud only",
  },
  {
    feature: "Time to first agent",
    nymphi: "Templates in <1 hour",
    n8n: "Template library, steeper AI curve",
    zapier: "Fast zaps, weak on agents",
  },
];
