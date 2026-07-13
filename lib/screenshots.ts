/** Physical pixel dimensions of captured product screenshots (1920×1080 @ 2× DPR). */
export const screenshotDimensions = {
  width: 3840,
  height: 2160,
} as const;

export const screenshots = {
  dashboard: "demo-01-dashboard.png",
  supportWorkflow: "demo-02-support-triage-workflow.png",
  supportChat: "demo-03-support-chat.png",
  executionLogs: "demo-04-execution-logs.png",
  agentsList: "demo-05-agents-list.png",
  crmWorkflow: "demo-06-crm-copilot-workflow.png",
  conversations: "demo-07-conversations.png",
  mcpRegistry: "demo-08-mcp-registry.png",
  knowledgeWorkflow: "demo-09-knowledge-base-workflow.png",
} as const;

export type ScreenshotKey = keyof typeof screenshots;

export function screenshotPath(key: ScreenshotKey) {
  return `/branding/screenshots/${screenshots[key]}`;
}
