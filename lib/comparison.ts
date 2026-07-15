export type ComparisonRow = {
  feature: string;
  nymphi: string;
  n8n: string;
  zapier: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Visual workflow builder",
    nymphi: "Drag-and-drop AI canvas",
    n8n: "Drag-and-drop automation canvas",
    zapier: "Linear zap steps",
  },
  {
    feature: "AI assistants",
    nymphi: "Built for conversational AI",
    n8n: "AI steps available",
    zapier: "Basic AI actions",
  },
  {
    feature: "App integrations",
    nymphi: "Built-in app directory",
    n8n: "500+ app nodes (custom setup)",
    zapier: "7,000+ apps",
  },
  {
    feature: "Human approval",
    nymphi: "Built-in approval step",
    n8n: "Custom workflow logic",
    zapier: "Not native",
  },
  {
    feature: "AI cost model",
    nymphi: "Your own AI account, no markup",
    n8n: "Cloud execution pricing",
    zapier: "Per-task pricing tiers",
  },
  {
    feature: "Team permissions & logs",
    nymphi: "Built in",
    n8n: "Enterprise add-on",
    zapier: "Team plans only",
  },
  {
    feature: "Run on your own servers",
    nymphi: "Enterprise",
    n8n: "Self-host available",
    zapier: "Cloud only",
  },
  {
    feature: "Time to first assistant",
    nymphi: "Templates in <1 hour",
    n8n: "Template library, steeper AI learning curve",
    zapier: "Fast zaps, limited for AI",
  },
];
