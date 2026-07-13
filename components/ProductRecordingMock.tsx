"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  AgentsListMock,
  ChatMock,
  DashboardMock,
  LogsMock,
  McpMock,
  MockShell,
  MockSidebar,
  WorkflowCanvas,
} from "@/components/product-mock-shared";
import { MCP_REGISTRY, SUPPORT_CHAT, TEMPLATE_WORKFLOWS, WORKFLOW_VARIANTS } from "@/lib/platform-ui";
import { McpServerCardIcon } from "@/components/McpServerIcon";
import type { ScreenshotKey } from "@/lib/screenshots";

function useRecordingStep(count: number, intervalMs: number) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % count), intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs]);
  return step;
}

function AnimatedWorkflow({ variant }: { variant: ScreenshotKey }) {
  const nodes = WORKFLOW_VARIANTS[variant] ?? ["Start", "Agent", "End"];
  const step = useRecordingStep(nodes.length + 1, 1400);
  const activeIndex = Math.min(step, nodes.length - 1);
  const classifyOutputs =
    variant === "supportWorkflow" ? TEMPLATE_WORKFLOWS.supportWorkflow.classifyOutputs : undefined;

  return (
    <MockShell>
      <WorkflowCanvas nodes={nodes} classifyOutputs={classifyOutputs} activeIndex={activeIndex} />
    </MockShell>
  );
}

function AnimatedChat() {
  const step = useRecordingStep(5, 2000);
  const [first, second, third, fourth] = SUPPORT_CHAT.messages;
  const bubble =
    "rounded-xl px-3 py-2.5 text-[11px] leading-relaxed transition-all duration-500 sm:px-4 sm:py-3 sm:text-xs";

  return (
    <MockShell>
      <MockSidebar active={2} />
      <div className="flex min-w-0 flex-1 flex-col bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <p className="text-sm font-semibold text-slate-900">{SUPPORT_CHAT.agentName}</p>
          <span className="text-xs font-semibold text-violet-600">+ New Chat</span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 p-4 sm:gap-4 sm:p-5">
          <div
            className={`max-w-[92%] border border-slate-200 bg-slate-50 text-slate-800 ${bubble} ${
              step >= 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {first.text}
          </div>
          <div
            className={`ml-auto max-w-[92%] border border-violet-200 bg-violet-50 text-slate-800 ${bubble} ${
              step >= 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {second.text}
          </div>
          <div
            className={`max-w-[75%] border border-slate-200 bg-slate-50 text-slate-800 ${bubble} ${
              step >= 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            {third.text}
          </div>
          <div
            className={`ml-auto max-w-[92%] border border-emerald-200 bg-emerald-50 font-medium text-slate-800 ${bubble} ${
              step >= 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            {fourth.text}
          </div>
        </div>
      </div>
    </MockShell>
  );
}

function AnimatedMcp() {
  const step = useRecordingStep(MCP_REGISTRY.servers.length + 1, 1000);
  return (
    <MockShell>
      <MockSidebar active={3} />
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">{MCP_REGISTRY.title}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {MCP_REGISTRY.servers.slice(0, 6).map((server, i) => (
            <div
              key={server.slug}
              className={`rounded-lg border bg-white px-3 py-3 text-center shadow-sm transition-all duration-500 sm:py-4 ${
                step > i ? "border-violet-400 bg-violet-50" : "border-slate-200 opacity-70"
              }`}
            >
              <McpServerCardIcon
                src={server.iconUrl}
                alt={server.name}
                slug={server.slug}
                highlighted={step > i}
              />
              <p className="text-xs font-semibold text-slate-800">{server.name}</p>
              <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">{server.auth}</p>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

type ProductRecordingMockProps = {
  variant?: ScreenshotKey;
  className?: string;
  subtle?: boolean;
};

export function ProductRecordingMock({
  variant = "dashboard",
  className = "",
}: ProductRecordingMockProps) {
  let content: ReactNode;

  switch (variant) {
    case "supportChat":
      content = <AnimatedChat />;
      break;
    case "executionLogs":
      content = <LogsMock />;
      break;
    case "agentsList":
      content = <AgentsListMock />;
      break;
    case "mcpRegistry":
      content = <AnimatedMcp />;
      break;
    case "supportWorkflow":
    case "crmWorkflow":
    case "knowledgeWorkflow":
      content = <AnimatedWorkflow variant={variant} />;
      break;
    default:
      content = <DashboardMock />;
  }

  return <div className={className}>{content}</div>;
}
