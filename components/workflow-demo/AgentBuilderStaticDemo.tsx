import { nodeIconColor } from "@/lib/platform-ui";

const VB = { w: 1000, h: 520 } as const;

function toPct(x: number, y: number) {
  return { left: `${(x / VB.w) * 100}%`, top: `${(y / VB.h) * 100}%` };
}

/** Canvas coordinates (viewBox 0–1000 × 0–520) */
const LAYOUT = {
  classify: { x: 72, y: 128, w: 172 },
  searchKb: { x: 388, y: 58 },
  draftReply: { x: 388, y: 148 },
  sendEmail: { x: 608, y: 148 },
  updateIntercom: { x: 388, y: 258 },
  humanReview: { x: 568, y: 288, w: 164 },
  end: { x: 808, y: 312 },
  ports: {
    classifyIn: { x: 72, y: 184 },
    classifyOut: {
      billing: { x: 244, y: 172 },
      technical: { x: 244, y: 196 },
      account: { x: 244, y: 220 },
      fallback: { x: 244, y: 244 },
    },
    searchIn: { x: 388, y: 76 },
    searchOut: { x: 538, y: 76 },
    draftIn: { x: 388, y: 166 },
    draftOut: { x: 538, y: 166 },
    sendIn: { x: 608, y: 166 },
    sendOut: { x: 758, y: 166 },
    updateIn: { x: 388, y: 276 },
    updateOut: { x: 538, y: 276 },
    reviewIn: { x: 568, y: 328 },
    reviewOut: {
      approved: { x: 732, y: 322 },
      rejected: { x: 732, y: 346 },
    },
    endIn: { x: 808, y: 328 },
  },
} as const;

const SIDEBAR_ITEMS = [
  "Dashboard",
  "Agents",
  "Conversations",
  "Models",
  "Vector DBs",
  "API Keys",
  "MCP Servers",
  "Execution Logs",
  "Documentation",
] as const;

const TOOL_GROUPS = [
  {
    label: "CORE",
    tools: [
      { name: "Agent", color: "#d1fae5" },
      { name: "Classify", color: "#fce7f3" },
      { name: "End", color: "#fef2f2" },
    ],
  },
  {
    label: "TOOLS",
    tools: [
      { name: "File Search", color: "#dbeafe" },
      { name: "MCP", color: "#e0e7ff" },
      { name: "API", color: "#e0f2fe" },
    ],
  },
  {
    label: "LOGIC",
    tools: [
      { name: "If/Else", color: "#fef3c7" },
      { name: "While", color: "#dbeafe" },
      { name: "User Approval", color: "#ede9fe" },
    ],
  },
] as const;

function ToolIcon({ color }: { color: string }) {
  return <span className="h-4 w-4 shrink-0 rounded" style={{ backgroundColor: color }} aria-hidden />;
}

function PortDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full border-2 border-white bg-[#5b6cff] shadow-sm ${className}`}
      aria-hidden
    />
  );
}

function SimpleNode({
  label,
  x,
  y,
  iconKey,
}: {
  label: string;
  x: number;
  y: number;
  iconKey?: string;
}) {
  const pos = toPct(x, y);
  const key = iconKey ?? label.split(" ")[0];
  return (
    <div className="agent-builder-node absolute z-10" style={pos}>
      <PortDot className="-left-1.5 top-1/2 -translate-y-1/2" />
      <PortDot className="-right-1.5 top-1/2 -translate-y-1/2" />
      <div className="flex items-center gap-2 px-3 py-2">
        <ToolIcon color={nodeIconColor(key === "Send" ? "MCP" : key)} />
        <span className="whitespace-nowrap text-[11px] font-semibold text-slate-800">{label}</span>
      </div>
    </div>
  );
}

function ClassifyNode() {
  const { x, y } = LAYOUT.classify;
  const outputs = [
    { key: "billing", label: "BILLING" },
    { key: "technical", label: "TECHNICAL" },
    { key: "account", label: "ACCOUNT" },
    { key: "fallback", label: "FALLBACK" },
  ] as const;

  return (
    <div className="agent-builder-node agent-builder-node-multi absolute z-10 w-[10.5rem]" style={toPct(x, y)}>
      <PortDot className="-left-1.5 top-[32%] -translate-y-1/2" />
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <ToolIcon color={nodeIconColor("Classify")} />
        <span className="text-[11px] font-semibold text-slate-800">Classify Ticket</span>
      </div>
      <ul className="py-1">
        {outputs.map((out) => (
          <li
            key={out.key}
            className="relative flex items-center justify-between px-3 py-1 text-[9px] font-semibold tracking-wide text-slate-500"
          >
            <span>{out.label}</span>
            <PortDot className="-right-1.5 top-1/2 -translate-y-1/2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HumanReviewNode() {
  const { x, y } = LAYOUT.humanReview;
  return (
    <div className="agent-builder-node agent-builder-node-multi absolute z-10 w-[10rem]" style={toPct(x, y)}>
      <PortDot className="-left-1.5 top-1/2 -translate-y-1/2" />
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <ToolIcon color={nodeIconColor("User Approval")} />
        <span className="text-[11px] font-semibold text-slate-800">Human Review</span>
      </div>
      <ul className="py-1">
        {["APPROVED", "REJECTED"].map((out) => (
          <li
            key={out}
            className="relative flex items-center justify-between px-3 py-1 text-[9px] font-semibold tracking-wide text-slate-500"
          >
            <span>{out}</span>
            <PortDot className="-right-1.5 top-1/2 -translate-y-1/2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowLines() {
  const p = LAYOUT.ports;
  const lineProps = {
    fill: "none",
    stroke: "#5b6cff",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke" as const,
    markerEnd: "url(#flow-arrow)",
  };

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <marker
          id="flow-arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#5b6cff" />
        </marker>
      </defs>

      {/* Inbound trigger → Classify */}
      <path d={`M 20 ${p.classifyIn.y} L ${p.classifyIn.x} ${p.classifyIn.y}`} {...lineProps} />

      {/* BILLING → Search Knowledge Base */}
      <path
        d={`M ${p.classifyOut.billing.x} ${p.classifyOut.billing.y} C 290 ${p.classifyOut.billing.y}, 340 ${p.searchIn.y}, ${p.searchIn.x} ${p.searchIn.y}`}
        {...lineProps}
      />

      {/* TECHNICAL → Draft Reply */}
      <path
        d={`M ${p.classifyOut.technical.x} ${p.classifyOut.technical.y} C 290 ${p.classifyOut.technical.y}, 350 ${p.draftIn.y}, ${p.draftIn.x} ${p.draftIn.y}`}
        {...lineProps}
      />

      {/* FALLBACK → Update Intercom */}
      <path
        d={`M ${p.classifyOut.fallback.x} ${p.classifyOut.fallback.y} C 290 ${p.classifyOut.fallback.y}, 340 ${p.updateIn.y}, ${p.updateIn.x} ${p.updateIn.y}`}
        {...lineProps}
      />

      {/* Draft Reply → Send Email via MCP */}
      <path d={`M ${p.draftOut.x} ${p.draftOut.y} L ${p.sendIn.x} ${p.sendIn.y}`} {...lineProps} />

      {/* Search KB → Human Review (wide arc below) */}
      <path
        d={`M ${p.searchOut.x} ${p.searchOut.y} C 580 ${p.searchOut.y}, 600 240, ${p.reviewIn.x} ${p.reviewIn.y - 20}`}
        {...lineProps}
      />

      {/* Send Email → Human Review */}
      <path
        d={`M ${p.sendOut.x} ${p.sendOut.y} C 800 ${p.sendOut.y}, 740 270, ${p.reviewIn.x} ${p.reviewIn.y - 6}`}
        {...lineProps}
      />

      {/* Update Intercom → Human Review */}
      <path
        d={`M ${p.updateOut.x} ${p.updateOut.y} C 560 ${p.updateOut.y}, 562 310, ${p.reviewIn.x} ${p.reviewIn.y + 10}`}
        {...lineProps}
      />

      {/* Human Review APPROVED → End */}
      <path
        d={`M ${p.reviewOut.approved.x} ${p.reviewOut.approved.y} C 770 ${p.reviewOut.approved.y}, 790 ${p.endIn.y}, ${p.endIn.x} ${p.endIn.y}`}
        {...lineProps}
      />
    </svg>
  );
}

export function AgentBuilderStaticDemo() {
  const { x: endX, y: endY } = LAYOUT.end;

  return (
    <div
      className="agent-builder-mock relative flex h-[420px] w-full flex-col overflow-hidden sm:h-[480px] md:h-[520px]"
      style={{ backgroundColor: "#F8F9FD" }}
      role="img"
      aria-label="Support Triage Agent workflow in the Agent Builder canvas"
    >
      <div className="relative z-10 flex min-h-0 flex-1">
        <aside className="flex w-[min(22%,11rem)] shrink-0 flex-col border-r border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-3">
            <div className="h-6 w-6 shrink-0 rounded bg-gradient-nym" />
            <span className="text-xs font-semibold text-slate-800">Agent Builder</span>
          </div>
          <nav className="flex-1 space-y-0.5 overflow-hidden px-2 py-3">
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item}
                className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                  item === "Agents" ? "bg-violet-100 text-violet-800" : "text-slate-600"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="m-2 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 p-3 text-white">
            <p className="text-[10px] font-semibold leading-snug">Dashboard AI Helper</p>
            <p className="mt-1 text-[9px] leading-snug text-violet-100">
              Get instant help building and debugging your agents.
            </p>
            <span className="mt-2 inline-block rounded-md bg-white/20 px-2 py-1 text-[9px] font-semibold">
              Try Now
            </span>
          </div>
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <header className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4">
            <div className="flex min-w-0 items-center gap-2">
              <span className="text-slate-400" aria-hidden>
                ←
              </span>
              <h3 className="truncate text-sm font-semibold text-slate-900">Support Triage Agent</h3>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <span className="hidden rounded-lg border border-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-600 sm:inline">
                Code
              </span>
              <span className="rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700">
                Preview
              </span>
              <span className="rounded-lg bg-violet-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                Save
              </span>
              <span className="rounded-lg bg-teal-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                Publish
              </span>
            </div>
          </header>

          <div className="relative flex min-h-0 flex-1">
            <aside className="z-10 flex w-[min(30%,9.5rem)] shrink-0 flex-col border-r border-slate-200 bg-white p-2.5 sm:w-40 sm:p-3">
              <p className="mb-2 text-[10px] font-semibold text-slate-800">AI Agent Tools</p>
              <div className="space-y-2.5 overflow-hidden">
                {TOOL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="mb-1 text-[9px] font-semibold tracking-wide text-slate-400">{group.label}</p>
                    <div className="space-y-1">
                      {group.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/80 px-2 py-1"
                        >
                          <ToolIcon color={tool.color} />
                          <span className="truncate text-[10px] font-medium text-slate-700">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="agent-builder-canvas relative min-w-0 flex-1 overflow-hidden">
              <FlowLines />

              <ClassifyNode />
              <SimpleNode label="Search Knowledge Base" x={LAYOUT.searchKb.x} y={LAYOUT.searchKb.y} iconKey="File Search" />
              <SimpleNode label="Draft Reply" x={LAYOUT.draftReply.x} y={LAYOUT.draftReply.y} iconKey="Agent" />
              <SimpleNode label="Send Email via MCP" x={LAYOUT.sendEmail.x} y={LAYOUT.sendEmail.y} iconKey="MCP" />
              <SimpleNode label="Update Intercom" x={LAYOUT.updateIntercom.x} y={LAYOUT.updateIntercom.y} iconKey="MCP" />
              <HumanReviewNode />

              <div className="agent-builder-node absolute z-10" style={toPct(endX, endY)}>
                <PortDot className="-left-1.5 top-1/2 -translate-y-1/2" />
                <div className="flex items-center gap-2 px-3 py-2">
                  <ToolIcon color={nodeIconColor("End")} />
                  <span className="text-[11px] font-semibold text-slate-800">End</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
