"use client";

import { memo } from "react";
import { DemoCursor } from "@/components/workflow-demo/DemoCursor";
import { useScriptedDemo } from "@/components/hooks/use-scripted-demo";
import { useInView } from "@/components/hooks/use-in-view";
import { NODE_PALETTE, PLATFORM_BODY_BG, SIDEBAR_NAV_COMPACT, nodeIconColor } from "@/lib/platform-ui";

const DEMO_FRAME = "demo-walkthrough w-full !aspect-auto !min-h-0 h-[400px] sm:h-[440px] md:h-[460px]";

const NODE_SLOTS = [
  { label: "Start", x: 5, y: 38 },
  { label: "Classify", x: 22, y: 38 },
  { label: "File Search", x: 39, y: 38 },
  { label: "User Approval", x: 56, y: 38 },
  { label: "End", x: 73, y: 38 },
] as const;

const BUILD_SEQUENCE = [
  "Open Agent Builder",
  "New workflow: Support Triage",
  "Select Start from palette",
  "Drop Start on canvas",
  "Select Classify node",
  "Drop Classify on canvas",
  "Select File Search node",
  "Drop File Search on canvas",
  "Select User Approval node",
  "Drop Approval on canvas",
  "Select End node",
  "Drop End on canvas",
  "Auto-wire connections",
  "Open approval inspector",
  "Enter gate name",
  "Set approver role",
  "Enable approval gate",
  "Publish to production",
  "Run test ticket",
] as const;

type BuildState = {
  statusLabel: string;
  placed: number;
  dragging: (typeof NODE_SLOTS)[number] | null;
  connections: number;
  sidebarActive: number;
  inspectorOpen: boolean;
  gateName: string;
  approver: string;
  enabled: boolean;
  published: boolean;
  showRunToast: boolean;
  cursor: { x: number; y: number; clicking: boolean };
  palettePick: string | null;
  activeNode: string | null;
  stepIndex: number;
  showTitle: boolean;
};

function buildStateForStep(step: number): BuildState {
  const s = Math.min(step, BUILD_SEQUENCE.length - 1);
  const base: BuildState = {
    statusLabel: BUILD_SEQUENCE[s],
    placed: 0,
    dragging: null,
    connections: 0,
    sidebarActive: 1,
    inspectorOpen: false,
    gateName: "",
    approver: "",
    enabled: false,
    published: false,
    showRunToast: false,
    cursor: { x: 20, y: 55, clicking: false },
    palettePick: null,
    activeNode: null,
    stepIndex: s,
    showTitle: s >= 1,
  };

  if (s >= 4) base.placed = 1;
  if (s >= 6) base.placed = 2;
  if (s >= 8) base.placed = 3;
  if (s >= 10) base.placed = 4;
  if (s >= 12) base.placed = 5;
  if (s >= 12) base.connections = 4;

  if (s === 0) base.cursor = { x: 8, y: 28, clicking: false };
  if (s === 1) base.cursor = { x: 42, y: 10, clicking: true };

  const pick = (node: string, paletteY: number) => {
    base.palettePick = node;
    base.cursor = { x: 12, y: paletteY, clicking: false };
  };
  const drop = (slotIndex: number) => {
    const slot = NODE_SLOTS[slotIndex];
    base.dragging = slot;
    base.cursor = { x: slot.x + 5, y: slot.y + 8, clicking: true };
    base.palettePick = null;
  };

  if (s === 2) pick("Start", 52);
  if (s === 3) drop(0);
  if (s === 4) pick("Classify", 58);
  if (s === 5) drop(1);
  if (s === 6) pick("File Search", 64);
  if (s === 7) drop(2);
  if (s === 8) pick("User Approval", 70);
  if (s === 9) drop(3);
  if (s === 10) pick("End", 76);
  if (s === 11) drop(4);

  if (s === 12) base.cursor = { x: 50, y: 42, clicking: false };
  if (s === 13) {
    base.inspectorOpen = true;
    base.activeNode = "User Approval";
    base.cursor = { x: NODE_SLOTS[3].x + 6, y: NODE_SLOTS[3].y + 10, clicking: true };
  }
  if (s >= 14) {
    base.inspectorOpen = true;
    base.activeNode = "User Approval";
    base.cursor = { x: 92, y: 42, clicking: false };
  }
  if (s >= 14) base.gateName = "Refund & billing";
  if (s >= 15) base.approver = "Support lead";
  if (s >= 16) base.enabled = true;
  if (s >= 17) {
    base.published = true;
    base.cursor = { x: 92, y: 8, clicking: true };
  }
  if (s >= 18) {
    base.showRunToast = true;
    base.cursor = { x: 72, y: 10, clicking: true };
  }

  return base;
}

const CanvasNode = memo(function CanvasNode({
  label,
  active = false,
  fresh = false,
}: {
  label: string;
  active?: boolean;
  fresh?: boolean;
}) {
  const short = label === "User Approval" ? "Approval" : label;
  return (
    <div
      className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border bg-white px-2 py-1.5 shadow-sm sm:gap-2 sm:px-2.5 sm:py-2 ${
        active ? "border-violet-500 ring-2 ring-violet-200" : "border-slate-200"
      } ${fresh ? "demo-enter" : ""}`}
    >
      <span
        className="h-3.5 w-3.5 shrink-0 rounded sm:h-4 sm:w-4"
        style={{ backgroundColor: nodeIconColor(label) }}
      />
      <span className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">{short}</span>
    </div>
  );
});

function ConnectionLines({ count }: { count: number }) {
  if (count < 1) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <marker id="demo-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa" />
        </marker>
      </defs>
      {NODE_SLOTS.slice(1, count + 1).map((node, i) => {
        const prev = NODE_SLOTS[i];
        return (
          <line
            key={`${prev.label}-${node.label}`}
            x1={prev.x + 9}
            y1={prev.y + 6}
            x2={node.x}
            y2={node.y + 6}
            stroke="#a78bfa"
            strokeWidth="0.55"
            markerEnd="url(#demo-arrow)"
            className="demo-edge-in"
          />
        );
      })}
    </svg>
  );
}

function PalettePanel({ highlight }: { highlight: string | null }) {
  return (
    <aside className="flex w-[min(34%,10rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-2.5 sm:w-44 sm:p-3">
      <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
        Node palette
      </p>
      <div className="space-y-2 overflow-hidden">
        {NODE_PALETTE.map((group) => (
          <div key={group.category}>
            <p className="mb-1 text-[9px] font-medium text-slate-400">{group.category}</p>
            <div className="space-y-1">
              {group.nodes.slice(0, group.category === "Core" ? 4 : 3).map((node) => (
                <div
                  key={node}
                  className={`flex items-center gap-1.5 rounded-md border px-1.5 py-1 text-[9px] font-semibold sm:text-[10px] ${
                    highlight === node
                      ? "border-violet-500 bg-violet-50 text-violet-900 ring-1 ring-violet-200"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded"
                    style={{ backgroundColor: nodeIconColor(node) }}
                  />
                  <span className="truncate">{node}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function InspectorPanel({
  open,
  gateName,
  approver,
  enabled,
}: {
  open: boolean;
  gateName: string;
  approver: string;
  enabled: boolean;
}) {
  if (!open) {
    return (
      <aside className="hidden w-44 shrink-0 flex-col border-l border-slate-200 bg-slate-50/50 md:flex lg:w-52">
        <div className="flex flex-1 items-center justify-center p-4 text-center">
          <p className="text-[10px] leading-relaxed text-slate-400">
            Inspector opens when you select a node
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden w-44 shrink-0 flex-col border-l border-slate-200 bg-white md:flex lg:w-52">
      <div className="border-b border-slate-100 px-3 py-2">
        <p className="text-[11px] font-semibold text-slate-900">Inspector</p>
        <p className="text-[10px] text-violet-600">User Approval</p>
      </div>
      <div className="space-y-2.5 p-3">
        <div>
          <label className="text-[9px] font-medium text-slate-500">Gate name</label>
          <div className="mt-1 min-h-[28px] rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-800">
            {gateName || <span className="text-slate-300">e.g. Refund requests</span>}
          </div>
        </div>
        <div>
          <label className="text-[9px] font-medium text-slate-500">Approver role</label>
          <div className="mt-1 min-h-[28px] rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[10px] text-slate-800">
            {approver || <span className="text-slate-300">Support lead</span>}
          </div>
        </div>
        <div>
          <label className="text-[9px] font-medium text-slate-500">Actions requiring approval</label>
          <div className="mt-1 flex flex-wrap gap-1">
            {["Send reply", "Refund"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-200 bg-violet-50 px-1.5 py-0.5 text-[9px] font-medium text-violet-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1.5">
          <span className="text-[10px] font-medium text-emerald-800">Enabled</span>
          <span
            className={`relative h-4 w-8 rounded-full transition-colors duration-300 ${enabled ? "bg-emerald-500" : "bg-slate-300"}`}
          >
            <span
              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                enabled ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </span>
        </div>
      </div>
    </aside>
  );
}

export function WorkflowBuilderDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const step = useScriptedDemo(BUILD_SEQUENCE.length, 680, 3000, inView, "build");
  const state = buildStateForStep(step);

  return (
    <div ref={ref} className={`${DEMO_FRAME} relative flex flex-col overflow-hidden`} style={{ backgroundColor: PLATFORM_BODY_BG }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <header className="relative z-10 flex h-9 shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-nym" />
          <span className="text-[11px] font-semibold text-slate-800">Nymphi · Agent Builder</span>
        </div>
        <button
          type="button"
          tabIndex={-1}
          className={`rounded-md px-2.5 py-0.5 text-[10px] font-semibold transition-colors ${
            state.published ? "bg-violet-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          {state.published ? "Published" : "Publish"}
        </button>
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

        <PalettePanel highlight={state.palettePick} />

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white/90 px-3 py-2">
            <div>
              {state.showTitle ? (
                <>
                  <p className="text-[11px] font-semibold text-slate-900">Support Triage</p>
                  <p className="text-[9px] text-slate-500">
                    {state.placed > 0 ? `${state.placed} nodes` : "Untitled workflow"}
                  </p>
                </>
              ) : (
                <p className="text-[11px] text-slate-400">Select or create an agent</p>
              )}
            </div>
            <span
              className={`rounded px-2 py-0.5 text-[9px] font-medium ${
                state.showRunToast
                  ? "border border-violet-300 bg-violet-50 text-violet-700"
                  : "border border-slate-200 bg-slate-50 text-slate-500"
              }`}
            >
              {state.showRunToast ? "Running…" : "Test run"}
            </span>
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#F8F9FD]">
            <ConnectionLines count={state.connections} />

            {NODE_SLOTS.slice(0, state.placed).map((slot) => (
              <div key={slot.label} className="absolute" style={{ left: `${slot.x}%`, top: `${slot.y}%` }}>
                <CanvasNode label={slot.label} active={state.activeNode === slot.label} />
              </div>
            ))}

            {state.dragging && (
              <div
                className="absolute z-20 demo-drag-ghost"
                style={{ left: `${state.dragging.x}%`, top: `${state.dragging.y}%` }}
              >
                <CanvasNode label={state.dragging.label} fresh />
              </div>
            )}

            {state.placed === 0 && step < 3 && (
              <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-[11px] text-slate-400">
                Drag nodes from the palette to build your flow
              </p>
            )}

            <DemoCursor x={state.cursor.x} y={state.cursor.y} clicking={state.cursor.clicking} />
          </div>

          <div className="flex shrink-0 items-center justify-between border-t border-slate-200 bg-white px-3 py-1.5">
            <p className="truncate text-[9px] text-slate-500 sm:text-[10px]">
              <span className="font-medium text-violet-700">{state.statusLabel}</span>
              <span className="mx-1.5 text-slate-300">·</span>
              {state.stepIndex + 1}/{BUILD_SEQUENCE.length}
            </p>
            <div className="hidden gap-0.5 sm:flex">
              {BUILD_SEQUENCE.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 w-1 rounded-full transition-colors ${i <= state.stepIndex ? "bg-violet-500" : "bg-slate-200"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <InspectorPanel
          open={state.inspectorOpen}
          gateName={state.gateName}
          approver={state.approver}
          enabled={state.enabled}
        />
      </div>

      {state.showRunToast && (
        <div className="demo-panel-in absolute bottom-12 right-3 z-30 max-w-[240px] rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 shadow-lg sm:bottom-14">
          <p className="text-[10px] font-semibold text-emerald-900">Test run queued</p>
          <p className="mt-0.5 text-[9px] leading-snug text-emerald-800">
            Ticket #4821 classified → KB search → paused at approval gate
          </p>
        </div>
      )}
    </div>
  );
}
