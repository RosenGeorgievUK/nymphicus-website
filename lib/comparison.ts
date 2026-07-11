export type ComparisonRow = {
  feature: string;
  nymphicus: string;
  creditCopilots: string;
  diyFrameworks: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Visual workflow builder",
    nymphicus: "Drag-and-drop canvas",
    creditCopilots: "Limited or prompt-only",
    diyFrameworks: "Code-first",
  },
  {
    feature: "API cost model",
    nymphicus: "Pay providers directly",
    creditCopilots: "Per-task credit markup",
    diyFrameworks: "Build billing yourself",
  },
  {
    feature: "MCP integrations",
    nymphicus: "Native registry",
    creditCopilots: "Varies / closed",
    diyFrameworks: "Custom adapters",
  },
  {
    feature: "RBAC & audit trail",
    nymphicus: "Built in",
    creditCopilots: "Add-on or none",
    diyFrameworks: "Build from scratch",
  },
  {
    feature: "Human-in-the-loop",
    nymphicus: "Approval node",
    creditCopilots: "Rare",
    diyFrameworks: "Custom implementation",
  },
  {
    feature: "Self-hosted option",
    nymphicus: "Enterprise",
    creditCopilots: "Cloud only",
    diyFrameworks: "Your responsibility",
  },
  {
    feature: "Time to first agent",
    nymphicus: "Templates in <1 hour",
    creditCopilots: "Fast but opaque",
    diyFrameworks: "Weeks to months",
  },
];
