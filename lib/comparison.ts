export type ComparisonRow = {
  feature: string;
  nymphi: string;
  creditCopilots: string;
  diyFrameworks: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Visual workflow builder",
    nymphi: "Drag-and-drop canvas",    creditCopilots: "Limited or prompt-only",
    diyFrameworks: "Code-first",
  },
  {
    feature: "API cost model",
    nymphi: "Pay providers directly",
    creditCopilots: "Per-task credit markup",
    diyFrameworks: "Build billing yourself",
  },
  {
    feature: "MCP integrations",
    nymphi: "Native registry",
    creditCopilots: "Varies / closed",
    diyFrameworks: "Custom adapters",
  },
  {
    feature: "RBAC & audit trail",
    nymphi: "Built in",
    creditCopilots: "Add-on or none",
    diyFrameworks: "Build from scratch",
  },
  {
    feature: "Human-in-the-loop",
    nymphi: "Approval node",
    creditCopilots: "Rare",
    diyFrameworks: "Custom implementation",
  },
  {
    feature: "Self-hosted option",
    nymphi: "Enterprise",
    creditCopilots: "Cloud only",
    diyFrameworks: "Your responsibility",
  },
  {
    feature: "Time to first agent",
    nymphi: "Templates in <1 hour",
    creditCopilots: "Fast but opaque",
    diyFrameworks: "Weeks to months",
  },
];
