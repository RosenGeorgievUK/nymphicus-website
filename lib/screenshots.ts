/** Display dimensions of optimized JPEG product screenshots. */
export const screenshotDimensions = {
  width: 2560,
  height: 1249,
} as const;

export const screenshots = {
  dashboard: "demo-01-dashboard.jpeg",
  supportWorkflow: "demo-02-support-triage-workflow.jpeg",
  supportChat: "demo-03-support-chat.jpeg",
  executionLogs: "demo-04-execution-logs.jpeg",
  agentsList: "demo-05-agents-list.jpeg",
  crmWorkflow: "demo-06-crm-copilot-workflow.jpeg",
  conversations: "demo-07-conversations.jpeg",
  mcpRegistry: "demo-08-mcp-registry.jpeg",
  knowledgeWorkflow: "demo-09-knowledge-base-workflow.jpeg",
} as const;

export type ScreenshotKey = keyof typeof screenshots;

export function screenshotPath(key: ScreenshotKey) {
  return `/branding/screenshots/${screenshots[key]}`;
}
