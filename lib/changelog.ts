export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  changes: {
    type: "feature" | "improvement" | "fix";
    text: string;
  }[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "0.9.0",
    date: "2026-06-20",
    title: "MCP registry & template library",
    changes: [
      { type: "feature", text: "MCP integrations registry — browse and connect tools from the canvas" },
      { type: "feature", text: "Support Triage, CRM Copilot, and Knowledge Base templates" },
      { type: "improvement", text: "Execution logs now include full MCP tool call trace" },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-05-28",
    title: "Governance & approval gates",
    changes: [
      { type: "feature", text: "Human-in-the-loop approval node" },
      { type: "feature", text: "RBAC across agents, knowledge bases, and workflows" },
      { type: "feature", text: "Export-ready audit trail for compliance reviews" },
      { type: "improvement", text: "Dashboard metrics for active runs and success rate" },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-05-05",
    title: "Visual builder launch",
    changes: [
      { type: "feature", text: "Drag-and-drop canvas with 15 node types" },
      { type: "feature", text: "Knowledge bases with RAG query nodes" },
      { type: "feature", text: "Bring-your-own API keys — no credit markup" },
      { type: "fix", text: "Canvas performance improvements for large workflows" },
    ],
  },
];
