"use client";

import type { ReactNode } from "react";
import {
  DEMO_AGENTS,
  DEMO_DASHBOARD_KPIS,
  EXECUTION_LOG_ROWS,
  MCP_REGISTRY,
  PLATFORM_BODY_BG,
  SIDEBAR_NAV_COMPACT,
  SUPPORT_CHAT,
  WORKFLOW_VARIANTS,
  nodeIconColor,
} from "@/lib/platform-ui";
import { McpServerCardIcon } from "@/components/McpServerIcon";
import type { ScreenshotKey } from "@/lib/screenshots";

/** Readable minimum height for product previews in marketing cards */
const MOCK_SHELL_CLASS =
  "relative flex min-h-[300px] aspect-[16/10] overflow-hidden sm:min-h-[340px] lg:min-h-[380px]";

export function MockShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${MOCK_SHELL_CLASS} ${className}`} style={{ backgroundColor: PLATFORM_BODY_BG }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative flex min-h-0 w-full flex-1">{children}</div>
    </div>
  );
}

export function MockSidebar({ active = 0 }: { active?: number }) {
  return (
    <aside className="flex w-[min(28%,7.5rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-3 sm:p-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-6 w-6 shrink-0 rounded bg-gradient-nym" />
        <span className="text-[11px] font-semibold leading-tight text-slate-800 sm:text-xs">
          Agent Builder
        </span>
      </div>
      <nav className="space-y-1">
        {SIDEBAR_NAV_COMPACT.map((item, i) => (
          <div
            key={item}
            className={`rounded-md px-2 py-1.5 text-[11px] font-medium leading-snug sm:text-xs sm:py-2 ${
              i === active ? "bg-violet-100 text-violet-800" : "text-slate-600"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function WorkflowNodeCard({
  label,
  active = false,
  size = "default",
}: {
  label: string;
  active?: boolean;
  size?: "default" | "sm";
}) {
  const color = nodeIconColor(label);
  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-lg border bg-white shadow-sm ${
        active ? "border-violet-500 ring-2 ring-violet-200" : "border-slate-200"
      } ${size === "sm" ? "px-2 py-1.5" : "px-3 py-2 sm:px-3.5 sm:py-2.5"}`}
    >
      <span
        className={`shrink-0 rounded-md ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4 sm:h-5 sm:w-5"}`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`max-w-[7.5rem] font-semibold leading-tight text-slate-800 sm:max-w-[9rem] ${
          size === "sm" ? "text-[10px]" : "text-[11px] sm:text-xs"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function WorkflowArrow() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-violet-400 sm:h-5 sm:w-5"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10h10M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WorkflowCanvas({
  nodes,
  classifyOutputs,
  activeIndex,
}: {
  nodes: string[];
  classifyOutputs?: readonly string[];
  activeIndex?: number;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center bg-white/90 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 sm:gap-x-2">
        {nodes.map((label, i) => (
          <div key={label} className="flex items-center gap-1.5 sm:gap-2">
            {i > 0 && <WorkflowArrow />}
            <WorkflowNodeCard label={label} active={activeIndex === i} />
          </div>
        ))}
      </div>
      {classifyOutputs && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {classifyOutputs.map((out) => (
            <span
              key={out}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-600 sm:text-xs"
            >
              {out}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function DashboardMock() {
  const kpis = DEMO_DASHBOARD_KPIS.slice(0, 4);
  return (
    <MockShell>
      <MockSidebar active={0} />
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold text-slate-900">Agent Builder Dashboard</p>
          <span className="rounded-lg bg-violet-600 px-3 py-1 text-[11px] font-semibold text-white sm:text-xs">
            Create New Agent
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">{kpi.label}</p>
              <p className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="min-h-0 flex-1 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="text-xs font-semibold text-slate-700">Agents</p>
          <div className="mt-2 space-y-2">
            {DEMO_AGENTS.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between gap-2 border-b border-slate-100 py-2 text-xs last:border-0 sm:text-sm"
              >
                <span className="min-w-0 truncate font-medium text-slate-800">{agent.name}</span>
                <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                  {agent.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function ChatMock() {
  const [first, second, third, fourth] = SUPPORT_CHAT.messages;
  const bubble = "rounded-xl px-3 py-2.5 text-[11px] leading-relaxed sm:px-4 sm:py-3 sm:text-xs";

  return (
    <MockShell>
      <MockSidebar active={2} />
      <div className="flex min-w-0 flex-1 flex-col bg-white">
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{SUPPORT_CHAT.agentName}</p>
            <p className="text-xs text-slate-500">{SUPPORT_CHAT.mode}</p>
          </div>
          <span className="text-xs font-semibold text-violet-600">+ New Chat</span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3 overflow-hidden p-4 sm:gap-4 sm:p-5">
          <div className={`max-w-[92%] border border-slate-200 bg-slate-50 text-slate-800 ${bubble}`}>
            {first.text}
          </div>
          <div
            className={`ml-auto max-w-[92%] border border-violet-200 bg-violet-50 text-slate-800 ${bubble}`}
          >
            {second.text}
          </div>
          <div className={`max-w-[75%] border border-slate-200 bg-slate-50 text-slate-800 ${bubble}`}>
            {third.text}
          </div>
          <div
            className={`ml-auto max-w-[92%] border border-emerald-200 bg-emerald-50 font-medium text-slate-800 ${bubble}`}
          >
            {fourth.text}
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function LogsMock() {
  return (
    <MockShell>
      <MockSidebar active={4} />
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">Execution Logs</p>
        <p className="mt-0.5 text-xs text-slate-500">Track and debug every workflow run</p>
        <div className="mt-3 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1.4fr_1fr_0.5fr_0.6fr] gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs">
            <span>Agent</span>
            <span>Status</span>
            <span>Steps</span>
            <span>Tokens</span>
          </div>
          {EXECUTION_LOG_ROWS.map((row) => (
            <div
              key={`${row.agent}-${row.status}`}
              className="grid grid-cols-[1.4fr_1fr_0.5fr_0.6fr] gap-2 border-b border-slate-50 px-3 py-2.5 text-[11px] last:border-0 sm:text-xs"
            >
              <span className="truncate font-medium text-slate-800">{row.agent}</span>
              <span
                className={`font-semibold ${
                  row.status === "Completed"
                    ? "text-emerald-700"
                    : row.status === "Failed"
                      ? "text-red-600"
                      : "text-amber-700"
                }`}
              >
                {row.status}
              </span>
              <span className="text-slate-600">{row.steps}</span>
              <span className="text-slate-600">{row.tokens}</span>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

export function AgentsListMock() {
  return (
    <MockShell>
      <MockSidebar active={1} />
      <div className="min-w-0 flex-1 p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">Agents</p>
        <div className="mt-3 rounded-lg border border-slate-200 bg-white shadow-sm">
          {DEMO_AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="flex items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 text-xs last:border-0 sm:text-sm"
            >
              <span className="min-w-0 truncate font-medium text-slate-800">{agent.name}</span>
              <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                {agent.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

export function McpMock() {
  return (
    <MockShell>
      <MockSidebar active={3} />
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">{MCP_REGISTRY.title}</p>
        <p className="mt-1 text-xs leading-snug text-slate-600">{MCP_REGISTRY.subtitle}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {MCP_REGISTRY.servers.slice(0, 6).map((server) => (
            <div
              key={server.slug}
              className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center shadow-sm sm:py-4"
            >
              <McpServerCardIcon src={server.iconUrl} alt={server.name} slug={server.slug} />
              <p className="text-xs font-semibold text-slate-800">{server.name}</p>
              <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-xs">{server.auth}</p>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

export function WorkflowMock({ variant }: { variant: ScreenshotKey }) {
  const nodes = WORKFLOW_VARIANTS[variant] ?? ["Start", "Agent", "End"];
  const classifyOutputs =
    variant === "supportWorkflow"
      ? (["BILLING", "TECHNICAL", "ACCOUNT", "FALLBACK"] as const)
      : undefined;

  return (
    <MockShell>
      <WorkflowCanvas nodes={nodes} classifyOutputs={classifyOutputs} />
    </MockShell>
  );
}
