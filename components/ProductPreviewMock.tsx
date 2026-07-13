import type { ReactNode } from "react";
import {
  AgentsListMock,
  ChatMock,
  DashboardMock,
  LogsMock,
  McpMock,
  WorkflowMock,
} from "@/components/product-mock-shared";
import type { ScreenshotKey } from "@/lib/screenshots";

type ProductPreviewMockProps = {
  variant?: ScreenshotKey;
  className?: string;
};

export function ProductPreviewMock({ variant = "dashboard", className = "" }: ProductPreviewMockProps) {
  let content: ReactNode;

  switch (variant) {
    case "supportChat":
      content = <ChatMock />;
      break;
    case "executionLogs":
      content = <LogsMock />;
      break;
    case "agentsList":
      content = <AgentsListMock />;
      break;
    case "mcpRegistry":
      content = <McpMock />;
      break;
    case "supportWorkflow":
    case "crmWorkflow":
    case "knowledgeWorkflow":
      content = <WorkflowMock variant={variant} />;
      break;
    default:
      content = <DashboardMock />;
  }

  return <div className={className}>{content}</div>;
}
