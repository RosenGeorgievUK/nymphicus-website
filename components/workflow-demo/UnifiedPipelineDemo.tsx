"use client";

import { memo } from "react";
import { McpServerIcon } from "@/components/McpServerIcon";
import { DemoCursor } from "@/components/workflow-demo/DemoCursor";
import { useScriptedDemo } from "@/components/hooks/use-scripted-demo";
import { useInView } from "@/components/hooks/use-in-view";
import { MCP_REGISTRY, PLATFORM_BODY_BG, SIDEBAR_NAV_COMPACT, nodeIconColor } from "@/lib/platform-ui";

const DEMO_FRAME = "demo-walkthrough w-full !aspect-auto !min-h-0 h-[420px] sm:h-[460px] md:h-[480px]";

const NODES = [
  { id: "start", label: "Start", short: "Start", x: 5, y: 40 },
  { id: "classify", label: "Classify", short: "Classify", x: 23, y: 40 },
  { id: "search", label: "File Search", short: "KB Search", x: 41, y: 40 },
  { id: "approval", label: "User Approval", short: "Approval", x: 59, y: 40 },
  { id: "end", label: "End", short: "End", x: 77, y: 40 },
] as const;

type Phase = "build" | "connect" | "run";

type NodeStatus = "hidden" | "placed" | "running" | "done" | "waiting";

const PIPELINE_STEPS: { phase: Phase; label: string }[] = [
  { phase: "build", label: "New workflow: Support Triage" },
  { phase: "build", label: "Place Start trigger" },
  { phase: "build", label: "Add Classify node" },
  { phase: "build", label: "Add File Search node" },
  { phase: "build", label: "Add User Approval gate" },
  { phase: "build", label: "Add End node" },
  { phase: "build", label: "Wire node connections" },
  { phase: "connect", label: "Open MCP registry" },
  { phase: "connect", label: "Connect HubSpot CRM" },
  { phase: "connect", label: "Connect Intercom inbox" },
  { phase: "connect", label: "Connect knowledge base" },
  { phase: "connect", label: "Map tools to workflow nodes" },
  { phase: "build", label: "Publish to production" },
  { phase: "run", label: "Ticket #4821 arrives" },
  { phase: "run", label: "Start: webhook trigger" },
  { phase: "run", label: "Classify: billing dispute" },
  { phase: "run", label: "File Search: refund policy hit" },
  { phase: "run", label: "Approval gate triggered" },
  { phase: "run", label: "Paused — awaiting Support lead" },
  { phase: "run", label: "Approver confirms reply" },
  { phase: "run", label: "End: ticket resolved" },
  { phase: "run", label: "Run logged to audit trail" },
];

const MCP_ATTACHMENTS = [
  { nodeId: "classify", server: "hubspot", label: "HubSpot" },
  { nodeId: "classify", server: "intercom", label: "Intercom" },
  { nodeId: "search", server: "notion", label: "Notion KB" },
] as const;

const RUN_OUTPUTS: Record<string, string> = {
  start: "Webhook · intercom.ticket.created",
  classify: "Intent: billing dispute · 94% conf",
  search: "Hit: Refund policy §4.2 (Notion)",
  approval: "Gate: Refund & billing · Support lead",
  end: "Reply sent · ticket #4821 closed",
};

const RUN_LOG: { step: number; line: string }[] = [
  { step: 14, line: "▶ Run started · ticket #4821" },
  { step: 15, line: "✓ Start · trigger received" },
  { step: 16, line: "✓ Classify · billing dispute" },
  { step: 17, line: "✓ File Search · policy §4.2" },
  { step: 18, line: "⏸ User Approval · gate open" },
  { step: 20, line: "✓ Approved · refund reply queued" },
  { step: 21, line: "✓ End · run completed" },
  { step: 22, line: "📝 Audit log · 1,842 tokens" },
];

type PipelineState = {
  stepIndex: number;
  phase: Phase;
  label: string;
  placedCount: number;
  connections: number;
  published: boolean;
  mcpVisible: number;
  nodeStatuses: NodeStatus[];
  activeNodeIndex: number;
  travelerAt: number;
  showTraveler: boolean;
  showApproval: boolean;
  approved: boolean;
  logLines: string[];
  cursor: { x: number; y: number; clicking: boolean; visible: boolean };
  sidebarActive: number;
};

function pipelineStateForStep(step: number): PipelineState {
  const s = Math.min(step, PIPELINE_STEPS.length - 1);
  const { phase, label } = PIPELINE_STEPS[s];

  const base: PipelineState = {
    stepIndex: s,
    phase,
    label,
    placedCount: 0,
    connections: 0,
    published: false,
    mcpVisible: 0,
    nodeStatuses: NODES.map(() => "hidden"),
    activeNodeIndex: -1,
    travelerAt: -1,
    showTraveler: false,
    showApproval: false,
    approved: false,
    logLines: [],
    cursor: { x: 14, y: 50, clicking: false, visible: phase === "build" || phase === "connect" },
    sidebarActive: phase === "connect" ? 3 : phase === "run" ? 4 : 1,
  };

  if (s >= 1) base.placedCount = 1;
  if (s >= 2) base.placedCount = 2;
  if (s >= 3) base.placedCount = 3;
  if (s >= 4) base.placedCount = 4;
  if (s >= 5) base.placedCount = 5;
  if (s >= 6) base.connections = 4;

  for (let i = 0; i < base.placedCount; i++) {
    base.nodeStatuses[i] = "placed";
  }

  if (s >= 8) base.mcpVisible = 1;
  if (s >= 9) base.mcpVisible = 2;
  if (s >= 10) base.mcpVisible = 3;
  if (s >= 11) base.mcpVisible = 3;

  if (s >= 12) base.published = true;

  if (s >= 14) {
    base.cursor.visible = false;
    base.showTraveler = true;
  }

  if (s === 14) {
    base.activeNodeIndex = 0;
    base.nodeStatuses[0] = "running";
    base.travelerAt = 0;
  }
  if (s === 15) {
    base.nodeStatuses[0] = "done";
    base.activeNodeIndex = 1;
    base.nodeStatuses[1] = "running";
    base.travelerAt = 1;
  }
  if (s === 16) {
    base.nodeStatuses[0] = "done";
    base.nodeStatuses[1] = "done";
    base.activeNodeIndex = 2;
    base.nodeStatuses[2] = "running";
    base.travelerAt = 2;
  }
  if (s === 17) {
    base.nodeStatuses[0] = "done";
    base.nodeStatuses[1] = "done";
    base.nodeStatuses[2] = "done";
    base.activeNodeIndex = 3;
    base.nodeStatuses[3] = "running";
    base.travelerAt = 3;
  }
  if (s === 18) {
    base.nodeStatuses[0] = "done";
    base.nodeStatuses[1] = "done";
    base.nodeStatuses[2] = "done";
    base.activeNodeIndex = 3;
    base.nodeStatuses[3] = "waiting";
    base.travelerAt = 3;
    base.showApproval = true;
  }
  if (s === 19) {
    base.nodeStatuses[3] = "waiting";
    base.showApproval = true;
    base.travelerAt = 3;
    base.cursor = { x: 82, y: 78, clicking: true, visible: true };
  }
  if (s === 20) {
    base.approved = true;
    base.showApproval = false;
    base.nodeStatuses[3] = "done";
    base.activeNodeIndex = 4;
    base.nodeStatuses[4] = "running";
    base.travelerAt = 4;
    base.cursor.visible = false;
  }
  if (s >= 21) {
    base.approved = true;
    base.nodeStatuses = NODES.map(() => "done");
    base.activeNodeIndex = 4;
    base.travelerAt = 4;
    base.showTraveler = false;
  }

  base.logLines = RUN_LOG.filter((entry) => entry.step <= s).map((entry) => entry.line);

  if (s >= 1 && s <= 5) {
    const node = NODES[base.placedCount - 1];
    base.cursor = { x: node.x + 4, y: node.y + 8, clicking: true, visible: true };
  }
  if (s === 6) base.cursor = { x: 48, y: 42, clicking: false, visible: true };
  if (s === 7) base.cursor = { x: 10, y: 55, clicking: true, visible: true };
  if (s >= 8 && s <= 10) {
    const clickY = [38, 48, 58][s - 8] ?? 38;
    base.cursor = { x: 28, y: clickY, clicking: true, visible: true };
  }
  if (s === 11) base.cursor = { x: 50, y: 42, clicking: false, visible: true };
  if (s === 12) base.cursor = { x: 92, y: 8, clicking: true, visible: true };

  return base;
}

const PipelineNode = memo(function PipelineNode({
  nodeId,
  label,
  short,
  status,
  mcpLabels = [],
}: {
  nodeId: string;
  label: string;
  short: string;
  status: NodeStatus;
  mcpLabels?: string[];
}) {
  if (status === "hidden") return null;

  const statusRing =
    status === "running"
      ? "demo-node-running border-blue-400 ring-2 ring-blue-200"
      : status === "done"
        ? "border-emerald-400 ring-2 ring-emerald-100"
        : status === "waiting"
          ? "demo-node-waiting border-amber-400 ring-2 ring-amber-200"
          : "border-slate-200";

  return (
    <div className={`relative flex flex-col items-center ${status !== "placed" ? "demo-enter" : ""}`}>
      <div
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border bg-white px-2 py-1.5 shadow-sm sm:gap-2 sm:px-2.5 sm:py-2 ${statusRing}`}
      >
        <span
          className="h-3.5 w-3.5 shrink-0 rounded sm:h-4 sm:w-4"
          style={{ backgroundColor: nodeIconColor(label) }}
        />
        <span className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">{short}</span>
        {status === "done" && (
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white">
            ✓
          </span>
        )}
        {status === "waiting" && (
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-500 text-[8px] text-white">
            ⏸
          </span>
        )}
        {status === "running" && <span className="demo-node-pulse h-2 w-2 rounded-full bg-blue-500" />}
      </div>
      {mcpLabels.length > 0 && (
        <div className="mt-1 flex flex-wrap justify-center gap-0.5">
          {mcpLabels.map((mcp) => (
            <span
              key={mcp}
              className="rounded-full border border-violet-200 bg-violet-50 px-1 py-px text-[8px] font-medium text-violet-700"
            >
              {mcp}
            </span>
          ))}
        </div>
      )}
      {status === "running" || status === "done" || status === "waiting" ? (
        <p className="mt-1 max-w-[5.5rem] text-center text-[8px] leading-tight text-slate-500 sm:max-w-[6.5rem] sm:text-[9px]">
          {RUN_OUTPUTS[nodeId] ?? ""}
        </p>
      ) : null}
    </div>
  );
});

function ConnectionLines({ count, activeEdge }: { count: number; activeEdge: number }) {
  if (count < 1) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <marker id="pipe-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa" />
        </marker>
      </defs>
      {NODES.slice(1, count + 1).map((node, i) => {
        const prev = NODES[i];
        const isActive = activeEdge === i + 1;
        return (
          <line
            key={`${prev.id}-${node.id}`}
            x1={prev.x + 9}
            y1={prev.y + 6}
            x2={node.x}
            y2={node.y + 6}
            stroke={isActive ? "#3b82f6" : "#a78bfa"}
            strokeWidth={isActive ? "0.7" : "0.55"}
            markerEnd="url(#pipe-arrow)"
            className={i < count - 1 || count === 4 ? "demo-edge-in" : "demo-edge-in"}
          />
        );
      })}
    </svg>
  );
}

function PhaseStrip({ phase }: { phase: Phase }) {
  const phases: { id: Phase; label: string }[] = [
    { id: "build", label: "Build" },
    { id: "connect", label: "Connect" },
    { id: "run", label: "Run" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-0.5">
      {phases.map((p, i) => {
        const active = p.id === phase;
        const done =
          (phase === "connect" && p.id === "build") ||
          (phase === "run" && (p.id === "build" || p.id === "connect"));
        return (
          <span key={p.id} className="flex items-center gap-1">
            {i > 0 && <span className="text-[9px] text-slate-300">→</span>}
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-semibold transition-colors sm:text-[10px] ${
                active
                  ? "bg-violet-600 text-white"
                  : done
                    ? "bg-emerald-100 text-emerald-800"
                    : "text-slate-500"
              }`}
            >
              {done && !active ? "✓ " : ""}
              {p.label}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function SidePanel({ state }: { state: PipelineState }) {
  if (state.phase === "connect" || (state.stepIndex >= 7 && state.stepIndex <= 11)) {
    const servers = MCP_REGISTRY.servers.slice(0, 4);
    return (
      <aside className="flex w-[min(34%,10rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-2.5 sm:w-44 sm:p-3">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
          MCP registry
        </p>
        <div className="space-y-1.5">
          {servers.map((server, i) => {
            const connected = i < state.mcpVisible;
            return (
              <div
                key={server.slug}
                className={`flex items-center gap-2 rounded-md border px-2 py-1.5 ${
                  connected ? "border-violet-300 bg-violet-50" : "border-slate-200 bg-white"
                }`}
              >
                <McpServerIcon src={server.iconUrl} alt={server.name} slug={server.slug} className="h-4 w-4" />
                <span className="flex-1 truncate text-[9px] font-semibold text-slate-700 sm:text-[10px]">
                  {server.name}
                </span>
                {connected && (
                  <span className="text-[8px] font-semibold text-emerald-700">✓</span>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    );
  }

  if (state.phase === "run" && state.logLines.length > 0) {
    return (
      <aside className="flex w-[min(34%,10rem)] shrink-0 flex-col border-r border-slate-200 bg-slate-900 p-2.5 sm:w-44 sm:p-3">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400 sm:text-[10px]">
          Execution log
        </p>
        <div className="flex-1 space-y-1 overflow-hidden font-mono text-[8px] leading-relaxed text-emerald-400 sm:text-[9px]">
          {state.logLines.map((line) => (
            <p key={line} className="demo-enter">
              {line}
            </p>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex w-[min(34%,10rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-2.5 sm:w-44 sm:p-3">
      <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
        Node palette
      </p>
      <div className="space-y-1">
        {NODES.map((node) => (
          <div
            key={node.id}
            className={`flex items-center gap-1.5 rounded-md border px-1.5 py-1 text-[9px] font-semibold sm:text-[10px] ${
              state.placedCount > 0 && NODES[state.placedCount - 1]?.id === node.id
                ? "border-violet-500 bg-violet-50 text-violet-900"
                : "border-slate-200 text-slate-600"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded" style={{ backgroundColor: nodeIconColor(node.label) }} />
            {node.label}
          </div>
        ))}
      </div>
    </aside>
  );
}

function mcpLabelsForNode(nodeId: string, mcpVisible: number): string[] {
  return MCP_ATTACHMENTS.filter((_, i) => i < mcpVisible)
    .filter((a) => a.nodeId === nodeId)
    .map((a) => a.label);
}

export function UnifiedPipelineDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const step = useScriptedDemo(PIPELINE_STEPS.length, 720, 3200, inView, "unified-pipeline");
  const state = pipelineStateForStep(step);

  const travelerNode = state.showTraveler && state.travelerAt >= 0 ? NODES[state.travelerAt] : null;

  return (
    <div
      ref={ref}
      className={`${DEMO_FRAME} relative flex flex-col overflow-hidden`}
      style={{ backgroundColor: PLATFORM_BODY_BG }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <header className="relative z-10 flex h-9 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white/95 px-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="h-5 w-5 shrink-0 rounded bg-gradient-nym" />
          <span className="truncate text-[11px] font-semibold text-slate-800">Nymphi · Support Triage</span>
        </div>
        <PhaseStrip phase={state.phase} />
        <span
          className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
            state.published ? "bg-violet-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          {state.published ? "Live" : "Draft"}
        </span>
      </header>

      <div className="relative flex min-h-0 flex-1">
        <aside className="hidden w-28 shrink-0 flex-col border-r border-slate-200 bg-white p-2 sm:flex sm:w-32">
          <nav className="space-y-0.5">
            {SIDEBAR_NAV_COMPACT.map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-2 py-1 text-[10px] font-medium sm:text-[11px] ${
                  i === state.sidebarActive ? "bg-violet-100 text-violet-800" : "text-slate-500"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <SidePanel state={state} />

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white/90 px-3 py-2">
            <div>
              <p className="text-[11px] font-semibold text-slate-900">Support Triage</p>
              <p className="text-[9px] text-slate-500">
                {state.placedCount > 0 ? `${state.placedCount} nodes · ${state.connections} edges` : "Building workflow…"}
              </p>
            </div>
            {state.phase === "run" && (
              <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-[9px] font-medium text-blue-700">
                Executing
              </span>
            )}
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#F8F9FD]">
            <ConnectionLines count={state.connections} activeEdge={state.travelerAt} />

            {NODES.map((node, i) => (
              <div key={node.id} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                <PipelineNode
                  nodeId={node.id}
                  label={node.label}
                  short={node.short}
                  status={state.nodeStatuses[i]}
                  mcpLabels={state.mcpVisible > 0 ? mcpLabelsForNode(node.id, state.mcpVisible) : []}
                />
              </div>
            ))}

            {travelerNode && (
              <div
                className="demo-traveler absolute z-20 h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
                style={{ left: `${travelerNode.x + 4}%`, top: `${travelerNode.y + 5}%` }}
                aria-hidden
              />
            )}

            {state.placedCount === 0 && (
              <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-[11px] text-slate-400">
                Building workflow from scratch…
              </p>
            )}

            <DemoCursor
              x={state.cursor.x}
              y={state.cursor.y}
              clicking={state.cursor.clicking}
              visible={state.cursor.visible}
            />
          </div>

          <div className="flex shrink-0 items-center justify-between border-t border-slate-200 bg-white px-3 py-1.5">
            <p className="truncate text-[9px] text-slate-500 sm:text-[10px]">
              <span className="font-medium text-violet-700">{state.label}</span>
              <span className="mx-1.5 text-slate-300">·</span>
              {state.stepIndex + 1}/{PIPELINE_STEPS.length}
            </p>
            <div className="hidden gap-0.5 sm:flex">
              {(["build", "connect", "run"] as Phase[]).map((p) => (
                <span
                  key={p}
                  className={`h-1.5 w-4 rounded-full transition-colors ${
                    state.phase === p ? "bg-violet-500" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {state.showApproval && !state.approved && (
        <div className="demo-panel-in absolute bottom-14 left-1/2 z-30 w-[min(92%,300px)] -translate-x-1/2 rounded-xl border border-amber-200 bg-amber-50 p-3 shadow-lg sm:bottom-16 sm:left-auto sm:right-4 sm:translate-x-0">
          <p className="text-[11px] font-semibold text-amber-900">Human approval required</p>
          <p className="mt-1 text-[10px] text-amber-800">
            Send refund reply to customer — gate: Refund & billing
          </p>
          <div className="mt-3 flex justify-end gap-2">
            <span className="rounded-md border border-amber-300 px-2.5 py-1 text-[10px] text-amber-900">Reject</span>
            <span
              className={`rounded-md px-2.5 py-1 text-[10px] font-semibold text-white ${
                state.stepIndex >= 19 ? "bg-emerald-600 ring-2 ring-emerald-300" : "bg-emerald-600"
              }`}
            >
              Approve
            </span>
          </div>
        </div>
      )}

      {state.stepIndex === 13 && (
        <div className="demo-panel-in absolute right-3 top-12 z-30 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 shadow-md">
          <p className="text-[10px] font-semibold text-violet-900">New ticket</p>
          <p className="text-[9px] text-violet-800">#4821 · &quot;Charged twice for subscription&quot;</p>
        </div>
      )}

      {state.stepIndex >= 21 && (
        <div className="demo-panel-in absolute bottom-14 right-3 z-30 max-w-[220px] rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 shadow-lg">
          <p className="text-[10px] font-semibold text-emerald-900">Run completed</p>
          <p className="mt-0.5 text-[9px] text-emerald-800">Ticket #4821 resolved · logged to audit trail</p>
        </div>
      )}
    </div>
  );
}
