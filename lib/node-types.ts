/** Node palette — matches Platform/templates/agent_builder/builder.html */
export type NodeType = {
  name: string;
  description: string;
};

export const nodeTypeCategories = [
  {
    category: "Core",
    description: "Start flows, run agents, classify intent, and end runs.",
    nodes: [
      { name: "Start", description: "Entry point for every workflow" },
      { name: "Agent", description: "LLM agent with tools and instructions" },
      { name: "Classify", description: "Route by category or intent" },
      { name: "End", description: "Terminate the workflow run" },
    ],
  },
  {
    category: "Tools",
    description: "Search files, call MCP servers, and hit external APIs.",
    nodes: [
      { name: "File Search", description: "RAG over vector DBs and documents" },
      { name: "MCP", description: "Model Context Protocol integrations" },
      { name: "API Call", description: "HTTP requests to any REST endpoint" },
    ],
  },
  {
    category: "Logic",
    description: "Branch, loop, and pause for human approval.",
    nodes: [
      { name: "If/Else", description: "Conditional branching on rules or state" },
      { name: "While", description: "Repeat until a condition is met" },
      { name: "User Approval", description: "Gate sensitive actions before continuing" },
    ],
  },
  {
    category: "Data",
    description: "Transform payloads and persist workflow state.",
    nodes: [
      { name: "Transform", description: "Map and reshape JSON between nodes" },
      { name: "Set State", description: "Store variables for downstream nodes" },
    ],
  },
  {
    category: "Media",
    description: "Speech, image, and video generation nodes.",
    nodes: [
      { name: "Speech", description: "Text-to-speech and audio output" },
      { name: "Image", description: "Generate or process images" },
      { name: "Video", description: "Generate or process video" },
    ],
  },
] as const;
