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
    description: "Classifies tickets, searches the knowledge base, drafts replies",
    status: "Published" as const,
    conversations: 2,
    executions: 3,
    lastActivity: "2 hours ago",
    created: "Jun 12, 2026",
  },
  {
    name: "CRM Copilot",
    description: "HubSpot lookups, deal updates, and CRM workflow actions",
    status: "Published" as const,
    conversations: 1,
    executions: 1,
    lastActivity: "1 day ago",
    created: "Jun 18, 2026",
  },
  {
    name: "Knowledge Base Chatbot",
    description: "Answers from company docs with citations and guardrails",
    status: "Published" as const,
    conversations: 0,
    executions: 1,
    lastActivity: "—",
    created: "Jul 02, 2026",
  },
] as const;

export const DEMO_DASHBOARD_CHARTS = {
  /** Single spike on 11 Jul — matches demo screenshot */
  executions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  tokens: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5401],
  statusBreakdown: [
    { label: "Completed", value: 60, color: "#32D484" },
    { label: "Failed", value: 20, color: "#FF6757" },
    { label: "Pending Approval", value: 20, color: "#FDAF22" },
  ],
  agentActivity: [
    { name: "Support Triage Agent", value: 3 },
    { name: "CRM Copilot", value: 1 },
    { name: "Knowledge Base Chatbot", value: 1 },
  ],
  dayLabels: ["11 Jul"],
} as const;

export const PLATFORM_DASHBOARD_KPIS = [
  {
    label: "Total Agents",
    value: "3",
    icon: "robot",
    tint: "primary",
    color: "#985FFD",
    bg: "rgba(152, 95, 253, 0.1)",
  },
  {
    label: "Published",
    value: "3",
    icon: "check",
    tint: "success",
    color: "#32D484",
    bg: "rgba(50, 212, 132, 0.1)",
  },
  {
    label: "Conversations",
    value: "2",
    icon: "chat",
    tint: "info",
    color: "#00C9FF",
    bg: "rgba(0, 201, 255, 0.1)",
  },
  {
    label: "Executions (7d)",
    value: "5",
    icon: "play",
    tint: "warning",
    color: "#FDAF22",
    bg: "rgba(253, 175, 34, 0.1)",
  },
  {
    label: "Tokens (7d)",
    value: "5401",
    icon: "flash",
    tint: "secondary",
    color: "#FF49CD",
    bg: "rgba(255, 73, 205, 0.1)",
  },
  {
    label: "Vector Storage",
    value: "0 bytes",
    icon: "database",
    tint: "pink",
    color: "#FF69B4",
    bg: "rgba(255, 105, 180, 0.1)",
  },
] as const;

export const PLATFORM_SIDEBAR_ITEMS = [
  { label: "Dashboard", active: true, submenu: false },
  { label: "Agents", active: false, submenu: false },
  { label: "Conversations", active: false, submenu: false },
  { label: "Models", active: false, submenu: true },
  { label: "Vector DBs", active: false, submenu: false },
  { label: "API Keys", active: false, submenu: true },
  { label: "MCP Servers", active: false, submenu: true },
  { label: "Execution Logs", active: false, submenu: false },
  { label: "Documentation", active: false, submenu: true },
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
