"use client";

import { memo } from "react";
import { McpServerIcon } from "@/components/McpServerIcon";
import { MockShell, MockSidebar } from "@/components/product-mock-shared";
import { useDemoPhase, useInView } from "@/components/hooks/use-in-view";
import {
  EXECUTION_LOG_ROWS,
  MCP_REGISTRY,
  NODE_PALETTE,
  nodeIconColor,
} from "@/lib/platform-ui";

export type WalkthroughStepId = "template" | "connect" | "govern";

const TEMPLATE_NODES = ["Start", "Classify", "File Search", "User Approval", "End"] as const;
const PALETTE_PICK = ["Start", "Classify", "File Search", "User Approval", "End"] as const;

const STEP_FRAMES: Record<WalkthroughStepId, { count: number; ms: number }> = {
  template: { count: 8, ms: 850 },
  connect: { count: 7, ms: 700 },
  govern: { count: 6, ms: 850 },
};

const DEMO_SHELL =
  "demo-walkthrough relative flex min-h-[280px] aspect-[16/10] max-h-[400px] overflow-hidden sm:min-h-[300px]";

const DemoNodeChip = memo(function DemoNodeChip({
  label,
  picking = false,
}: {
  label: string;
  picking?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-[10px] font-semibold sm:text-[11px] ${
        picking
          ? "border-violet-500 bg-violet-50 text-violet-900 ring-1 ring-violet-200"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <span
        className="h-3 w-3 shrink-0 rounded"
        style={{ backgroundColor: nodeIconColor(label) }}
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
});

const DemoNode = memo(function DemoNode({
  label,
  active = false,
  fresh = false,
}: {
  label: string;
  active?: boolean;
  fresh?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-lg border bg-white px-2.5 py-2 shadow-sm sm:px-3 sm:py-2.5 ${
        active ? "border-violet-500 ring-2 ring-violet-200" : "border-slate-200"
      } ${fresh ? "demo-enter" : ""}`}
    >
      <span
        className="h-4 w-4 shrink-0 rounded-md sm:h-5 sm:w-5"
        style={{ backgroundColor: nodeIconColor(label) }}
        aria-hidden
      />
      <span className="text-[10px] font-semibold text-slate-800 sm:text-xs">{label}</span>
    </div>
  );
});

function DemoArrow() {
  return (
    <svg className="h-4 w-4 shrink-0 text-violet-400" viewBox="0 0 20 20" fill="none" aria-hidden>
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

function TemplateDemo({ phase }: { phase: number }) {
  const nodeCount = Math.max(0, Math.min(phase, TEMPLATE_NODES.length));
  const visibleNodes = TEMPLATE_NODES.slice(0, nodeCount);
  const picking = phase > 0 && phase <= TEMPLATE_NODES.length ? PALETTE_PICK[phase - 1] : null;
  const activeNode = phase >= 4 ? "User Approval" : visibleNodes[visibleNodes.length - 1];
  const showSettings = phase >= 6;
  const published = phase >= 7;
  const freshIndex = nodeCount > 0 ? nodeCount - 1 : -1;

  return (
    <div className={DEMO_SHELL} style={{ backgroundColor: "#F8F9FD" }}>
      <div className="relative flex min-h-0 w-full">
        <aside className="hidden w-28 shrink-0 flex-col border-r border-slate-200 bg-white p-3 sm:flex">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Nodes</p>
          <div className="space-y-1.5">
            {NODE_PALETTE.flatMap((group) => group.nodes)
              .slice(0, 7)
              .map((node) => (
                <DemoNodeChip key={node} label={node} picking={picking === node} />
              ))}
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
            <p className="text-xs font-semibold text-slate-900">Support Triage</p>
            <span
              className={`rounded-md px-2.5 py-0.5 text-[10px] font-semibold ${
                published
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-500"
              }`}
            >
              {published ? "Published" : "Draft"}
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center overflow-x-auto p-4 sm:p-6">
            {nodeCount === 0 ? (
              <p className="text-xs text-slate-400">Drop nodes from the palette to build your flow</p>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2">
                {visibleNodes.map((label, index) => (
                  <div key={label} className="flex items-center gap-1.5 sm:gap-2">
                    {index > 0 && <DemoArrow />}
                    <DemoNode
                      label={label}
                      active={label === activeNode}
                      fresh={index === freshIndex}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside
          className={`hidden w-36 shrink-0 flex-col border-l border-slate-200 bg-white transition-[opacity,transform] duration-300 lg:flex xl:w-40 ${
            showSettings ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          }`}
          aria-hidden={!showSettings}
        >
          <div className="border-b border-slate-100 px-3 py-2.5">
            <p className="text-xs font-semibold text-slate-900">Node settings</p>
            <p className="text-[10px] text-violet-600">User Approval</p>
          </div>
          <div className="space-y-2.5 p-3">
            <div>
              <p className="text-[10px] font-medium text-slate-500">Gate name</p>
              <p className="mt-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-800">
                Refund & billing
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium text-slate-500">Approver</p>
              <p className="mt-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-800">
                Support lead
              </p>
            </div>
            <div className="flex items-center justify-between rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1.5">
              <span className="text-[10px] font-medium text-emerald-800">Enabled</span>
              <span className="h-4 w-7 rounded-full bg-emerald-500" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ConnectDemo({ phase }: { phase: number }) {
  const servers = MCP_REGISTRY.servers.slice(0, 6);
  const connectedCount = Math.min(phase, servers.length);
  const showToast = phase >= servers.length;

  return (
    <MockShell className="demo-walkthrough !min-h-[280px] !max-h-[400px]">
      <MockSidebar active={3} />
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-slate-900">{MCP_REGISTRY.title}</p>
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-semibold text-violet-700">
            {connectedCount} connected
          </span>
        </div>

        <div className="mt-4 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
          {servers.map((server, index) => {
            const connected = index < connectedCount;
            const connecting = index === connectedCount - 1 && phase > 0;

            return (
              <div
                key={server.slug}
                className={`rounded-lg border px-2.5 py-2.5 text-center sm:py-3 ${
                  connected
                    ? "border-violet-300 bg-violet-50"
                    : "border-slate-200 bg-white opacity-80"
                } ${connecting ? "demo-enter" : ""}`}
              >
                <div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center">
                  <McpServerIcon
                    src={server.iconUrl}
                    alt={server.name}
                    slug={server.slug}
                    className="h-6 w-6"
                  />
                </div>
                <p className="text-[11px] font-semibold text-slate-800">{server.name}</p>
                {connected ? (
                  <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-800">
                    Connected
                  </span>
                ) : index === connectedCount ? (
                  <span className="mt-1 inline-flex rounded-full border border-violet-300 px-1.5 py-0.5 text-[9px] font-semibold text-violet-700">
                    Connect
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>

        {showToast && (
          <p className="demo-panel-in mt-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-900">
            Stack wired — ready on the canvas.
          </p>
        )}
      </div>
    </MockShell>
  );
}

function GovernDemo({ phase }: { phase: number }) {
  const activeRow = phase > 0 ? Math.min(phase - 1, EXECUTION_LOG_ROWS.length - 1) : -1;
  const showApproval = phase >= EXECUTION_LOG_ROWS.length;

  return (
    <MockShell className="demo-walkthrough !min-h-[280px] !max-h-[400px]">
      <MockSidebar active={4} />
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">Execution Logs</p>

        <div className="mt-3 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_0.6fr] gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Agent</span>
            <span>Status</span>
            <span>Tokens</span>
          </div>
          {EXECUTION_LOG_ROWS.map((row, index) => {
            const isApproval = row.status === "Pending Approval";
            const active = index === activeRow;

            return (
              <div
                key={`${row.agent}-${row.status}`}
                className={`grid grid-cols-[1.4fr_1fr_0.6fr] gap-2 border-b border-slate-50 px-3 py-2 text-[11px] last:border-0 ${
                  active ? "bg-violet-50" : ""
                } ${showApproval && isApproval ? "bg-amber-50" : ""}`}
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
                <span className="text-slate-600">{row.tokens}</span>
              </div>
            );
          })}
        </div>

        {showApproval && (
          <div className="demo-panel-in mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
            <p className="text-[11px] font-semibold text-amber-900">Human approval required</p>
            <p className="text-[10px] text-amber-800">Refund paused — waiting for Support lead.</p>
          </div>
        )}
      </div>
    </MockShell>
  );
}

type WalkthroughDemoCanvasProps = {
  stepId: WalkthroughStepId;
};

export function WalkthroughDemoCanvas({ stepId }: WalkthroughDemoCanvasProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { count, ms } = STEP_FRAMES[stepId];
  const phase = useDemoPhase(count, ms, inView, stepId);

  return (
    <div ref={ref}>
      {stepId === "template" && <TemplateDemo phase={phase} />}
      {stepId === "connect" && <ConnectDemo phase={phase} />}
      {stepId === "govern" && <GovernDemo phase={phase} />}
    </div>
  );
}
