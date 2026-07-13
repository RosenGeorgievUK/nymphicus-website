import type { ScreenshotKey } from "@/lib/screenshots";
import { MCP_REGISTRY_META, mcpRegistryServers } from "@/lib/mcp-icons";

/** Platform product shell — matches Vyzor / Agent Builder light theme */
export const PLATFORM_BODY_BG = "#F8F9FD";

export const SIDEBAR_NAV = [
  "Dashboard",
  "Agents",
  "Conversations",
  "Vector DBs",
  "MCP Servers",
  "Execution Logs",
] as const;

/** Shorter nav for readable mock sidebars */
export const SIDEBAR_NAV_COMPACT = [
  "Dashboard",
  "Agents",
  "Conversations",
  "MCP Servers",
  "Execution Logs",
] as const;

export const NODE_ICON_COLORS: Record<string, string> = {
  Start: "#fef3c7",
  Agent: "#d1fae5",
  Classify: "#fce7f3",
  "File Search": "#dbeafe",
  MCP: "#e0e7ff",
  "API Call": "#e0f2fe",
  "If/Else": "#fef3c7",
  While: "#dbeafe",
  "User Approval": "#ede9fe",
  Transform: "#e0e7ff",
  "Set State": "#fef3c7",
  End: "#fef2f2",
  Speech: "#d1fae5",
  Image: "#fce7f3",
  Video: "#ede9fe",
};

export const NODE_PALETTE = [
  {
    category: "Core",
    nodes: ["Start", "Agent", "Classify", "End"],
  },
  {
    category: "Tools",
    nodes: ["File Search", "MCP", "API Call"],
  },
  {
    category: "Logic",
    nodes: ["If/Else", "While", "User Approval"],
  },
  {
    category: "Data",
    nodes: ["Transform", "Set State"],
  },
  {
    category: "Media",
    nodes: ["Speech", "Image", "Video"],
  },
] as const;

export const DEMO_AGENTS = [
  {
    name: "Support Triage Agent",
    status: "Published" as const,
    conversations: 2,
    executions: 3,
  },
  {
    name: "CRM Copilot",
    status: "Published" as const,
    conversations: 1,
    executions: 1,
  },
  {
    name: "Knowledge Base Chatbot",
    status: "Published" as const,
    conversations: 0,
    executions: 1,
  },
] as const;

export const DEMO_DASHBOARD_KPIS = [
  { label: "Total Agents", value: "3" },
  { label: "Published", value: "3" },
  { label: "Conversations", value: "3" },
  { label: "Executions (7d)", value: "5" },
  { label: "Tokens (7d)", value: "5,401" },
  { label: "Vector Storage", value: "12 MB" },
] as const;

export const TEMPLATE_WORKFLOWS: Record<
  "supportWorkflow" | "crmWorkflow" | "knowledgeWorkflow",
  { nodes: string[]; classifyOutputs?: string[] }
> = {
  supportWorkflow: {
    nodes: [
      "Start",
      "Classify Ticket",
      "Search Knowledge Base",
      "Draft Reply",
      "Update Intercom",
      "Human Review",
      "End",
    ],
    classifyOutputs: ["BILLING", "TECHNICAL", "ACCOUNT", "FALLBACK"],
  },
  crmWorkflow: {
    nodes: ["Start", "CRM Assistant", "HubSpot Actions", "End"],
  },
  knowledgeWorkflow: {
    nodes: ["Start", "Company Docs", "Answer with Citations", "End"],
  },
};

export const WORKFLOW_VARIANTS: Partial<Record<ScreenshotKey, string[]>> = {
  supportWorkflow: TEMPLATE_WORKFLOWS.supportWorkflow.nodes,
  crmWorkflow: TEMPLATE_WORKFLOWS.crmWorkflow.nodes,
  knowledgeWorkflow: TEMPLATE_WORKFLOWS.knowledgeWorkflow.nodes,
};

export const SUPPORT_TRIAGE_HERO_NODES = TEMPLATE_WORKFLOWS.supportWorkflow.nodes;

export const SUPPORT_CHAT = {
  agentName: "Support Triage Agent",
  mode: "Chat Mode",
  messages: [
    {
      role: "user" as const,
      text: "I was charged twice this month. Can you help?",
    },
    {
      role: "assistant" as const,
      text: "Classified as Billing. I can verify both charges and start a refund — proceed?",
    },
    {
      role: "user" as const,
      text: "Yes, go ahead with the refund.",
    },
    {
      role: "assistant" as const,
      text: "✓ Approved — refund request queued. Email confirmation shortly.",
    },
  ],
};

export const EXECUTION_LOG_ROWS = [
  {
    agent: "Support Triage Agent",
    status: "Completed",
    steps: 7,
    tokens: "1,842",
  },
  {
    agent: "CRM Copilot",
    status: "Completed",
    steps: 4,
    tokens: "620",
  },
  {
    agent: "Support Triage Agent",
    status: "Pending Approval",
    steps: 5,
    tokens: "980",
  },
  {
    agent: "Knowledge Base Chatbot",
    status: "Failed",
    steps: 3,
    tokens: "412",
  },
] as const;

export { MCP_REGISTRY_META, mcpRegistryServers };

export const MCP_REGISTRY = {
  title: MCP_REGISTRY_META.title,
  subtitle: MCP_REGISTRY_META.subtitle,
  servers: mcpRegistryServers,
};

export function nodeIconColor(label: string): string {
  const base = label.split(" ")[0];
  const map: Record<string, string> = {
    Start: NODE_ICON_COLORS.Start,
    Classify: NODE_ICON_COLORS.Classify,
    Search: NODE_ICON_COLORS["File Search"],
    Company: NODE_ICON_COLORS["File Search"],
    Draft: NODE_ICON_COLORS.Agent,
    CRM: NODE_ICON_COLORS.Agent,
    Answer: NODE_ICON_COLORS.Agent,
    Update: NODE_ICON_COLORS.MCP,
    HubSpot: NODE_ICON_COLORS.MCP,
    Human: NODE_ICON_COLORS["User Approval"],
    End: NODE_ICON_COLORS.End,
  };
  for (const [key, color] of Object.entries(map)) {
    if (label.startsWith(key)) return color;
  }
  return NODE_ICON_COLORS.Agent;
}
