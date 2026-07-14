"use client";

import { DemoCursor } from "@/components/workflow-demo/DemoCursor";
import { useScriptedDemo } from "@/components/hooks/use-scripted-demo";
import { useInView } from "@/components/hooks/use-in-view";
import { EXECUTION_LOG_ROWS, PLATFORM_BODY_BG, SIDEBAR_NAV_COMPACT } from "@/lib/platform-ui";

const DEMO_FRAME = "demo-walkthrough w-full !aspect-auto !min-h-0 h-[400px] sm:h-[440px] md:h-[460px]";

const GOVERN_SEQUENCE = [
  "Open execution logs",
  "Filter by agent",
  "Select running trace",
  "Expand node timeline",
  "Review MCP tool calls",
  "Pending approval flagged",
  "Open approval drawer",
  "Approve action",
  "Run completes",
] as const;

const TRACE_STEPS = [
  { node: "Start", status: "ok" },
  { node: "Classify", status: "ok" },
  { node: "File Search", status: "ok" },
  { node: "User Approval", status: "wait" },
  { node: "End", status: "skip" },
] as const;

type GovernState = {
  label: string;
  stepIndex: number;
  sidebarActive: number;
  filter: string;
  activeRow: number;
  showTrace: boolean;
  traceProgress: number;
  showApproval: boolean;
  approved: boolean;
  cursor: { x: number; y: number; clicking: boolean };
};

function governStateForStep(step: number): GovernState {
  const s = Math.min(step, GOVERN_SEQUENCE.length - 1);
  const base: GovernState = {
    label: GOVERN_SEQUENCE[s],
    stepIndex: s,
    sidebarActive: 4,
    filter: "",
    activeRow: -1,
    showTrace: false,
    traceProgress: 0,
    showApproval: false,
    approved: false,
    cursor: { x: 14, y: 32, clicking: false },
  };

  if (s >= 1) {
    base.filter = "Support Triage";
    base.cursor = { x: 35, y: 12, clicking: s === 1 };
  }
  if (s >= 2) {
    base.activeRow = 0;
    base.cursor = { x: 50, y: 38, clicking: s === 2 };
  }
  if (s >= 3) {
    base.showTrace = true;
    base.traceProgress = s >= 4 ? 4 : 2;
    base.cursor = { x: 72, y: 55, clicking: false };
  }
  if (s >= 5) {
    base.activeRow = 2;
    base.showApproval = true;
    base.cursor = { x: 55, y: 72, clicking: s === 5 };
  }
  if (s === 6) {
    base.cursor = { x: 78, y: 78, clicking: true };
  }
  if (s === 7) {
    base.approved = true;
    base.cursor = { x: 82, y: 82, clicking: true };
  }
  if (s >= 8) {
    base.approved = true;
    base.showApproval = false;
    base.activeRow = 0;
    base.cursor = { x: 50, y: 38, clicking: false };
  }

  return base;
}

export function GovernSequenceDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const step = useScriptedDemo(GOVERN_SEQUENCE.length, 780, 2800, inView, "govern");
  const state = governStateForStep(step);

  const rows = EXECUTION_LOG_ROWS.map((row, i) =>
    i === 0 && state.approved && state.stepIndex >= 8
      ? { ...row, status: "Completed" as const }
      : row,
  );

  return (
    <div ref={ref} className={`${DEMO_FRAME} relative flex flex-col overflow-hidden`} style={{ backgroundColor: PLATFORM_BODY_BG }}>
      <header className="relative z-10 flex h-9 shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-nym" />
          <span className="text-[11px] font-semibold text-slate-800">Nymphi · Execution Logs</span>
        </div>
        <span className="text-[10px] text-slate-500">Immutable audit trail</span>
      </header>

      <div className="relative flex min-h-0 flex-1">
        <aside className="flex w-[min(28%,8rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-2 sm:w-32">
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

        <div className="relative flex min-w-0 flex-1 gap-2 p-3 sm:gap-3 sm:p-4">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="mb-2 flex gap-2">
              <div className="flex-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[10px] text-slate-600">
                {state.filter || "All agents"}
              </div>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-500">
                Last 24h
              </span>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="grid grid-cols-[1.2fr_1fr_0.5fr] gap-1 border-b border-slate-100 bg-slate-50 px-2 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                <span>Agent</span>
                <span>Status</span>
                <span>Tokens</span>
              </div>
              {rows.map((row, index) => (
                <div
                  key={`${row.agent}-${row.status}`}
                  className={`grid grid-cols-[1.2fr_1fr_0.5fr] gap-1 border-b border-slate-50 px-2 py-1.5 text-[10px] last:border-0 ${
                    index === state.activeRow ? "bg-violet-50" : ""
                  }`}
                >
                  <span className="truncate font-medium text-slate-800">{row.agent}</span>
                  <span
                    className={`font-semibold ${
                      row.status === "Completed"
                        ? "text-emerald-700"
                        : row.status === "Failed"
                          ? "text-red-600"
                          : row.status === "Pending Approval"
                            ? "text-amber-700"
                            : "text-blue-600"
                    }`}
                  >
                    {row.status}
                  </span>
                  <span className="text-slate-600">{row.tokens}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 shrink-0 text-[9px] text-slate-500 sm:text-[10px]">
              <span className="font-medium text-violet-700">{state.label}</span>
              <span className="mx-1.5 text-slate-300">·</span>
              {state.stepIndex + 1}/{GOVERN_SEQUENCE.length}
            </div>
          </div>

          {state.showTrace && (
            <aside className="demo-panel-in hidden w-40 shrink-0 flex-col rounded-lg border border-slate-200 bg-white p-2 sm:flex lg:w-44">
              <p className="text-[10px] font-semibold text-slate-900">Node trace</p>
              <p className="text-[9px] text-slate-500">Run #8f2a…</p>
              <ol className="mt-2 space-y-1">
                {TRACE_STEPS.slice(0, state.traceProgress).map((item) => (
                  <li key={item.node} className="flex items-center gap-1.5 text-[9px]">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.status === "ok"
                          ? "bg-emerald-500"
                          : item.status === "wait"
                            ? "bg-amber-500"
                            : "bg-slate-300"
                      }`}
                    />
                    <span className="text-slate-700">{item.node}</span>
                  </li>
                ))}
              </ol>
              {state.traceProgress >= 3 && (
                <p className="mt-2 rounded border border-slate-100 bg-slate-50 px-1.5 py-1 text-[8px] text-slate-600">
                  MCP: HubSpot · Intercom · File Search
                </p>
              )}
            </aside>
          )}

          {state.showApproval && !state.approved && (
            <div className="demo-panel-in absolute bottom-16 left-1/2 z-20 w-[min(90%,280px)] -translate-x-1/2 rounded-xl border border-amber-200 bg-amber-50 p-3 shadow-lg sm:left-auto sm:right-4 sm:translate-x-0">
              <p className="text-[11px] font-semibold text-amber-900">Approval required</p>
              <p className="mt-1 text-[10px] text-amber-800">
                Send refund reply to customer — gate: Refund & billing
              </p>
              <div className="mt-3 flex justify-end gap-2">
                <span className="rounded-md border border-amber-300 px-2.5 py-1 text-[10px] text-amber-900">Reject</span>
                <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                  Approve
                </span>
              </div>
            </div>
          )}

          <DemoCursor x={state.cursor.x} y={state.cursor.y} clicking={state.cursor.clicking} />
        </div>
      </div>
    </div>
  );
}
