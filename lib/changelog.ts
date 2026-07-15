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
    title: "App directory & template library",
    changes: [
      { type: "feature", text: "App directory — browse and connect tools from the builder" },
      { type: "feature", text: "Support Triage, CRM Copilot, and Knowledge Base templates" },
      { type: "improvement", text: "Activity logs now show every app action in detail" },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-05-28",
    title: "Security & approval steps",
    changes: [
      { type: "feature", text: "Human approval before sensitive actions" },
      { type: "feature", text: "Team permissions across assistants, documents, and workflows" },
      { type: "feature", text: "Exportable activity log for compliance reviews" },
      { type: "improvement", text: "Dashboard metrics for active runs and success rate" },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-05-05",
    title: "Visual builder launch",
    changes: [
      { type: "feature", text: "Drag-and-drop canvas with 15 node types" },
      { type: "feature", text: "Searchable knowledge bases built into workflows" },
      { type: "feature", text: "Connect your own AI account — no credit markup" },
      { type: "fix", text: "Canvas performance improvements for large workflows" },
    ],
  },
];
