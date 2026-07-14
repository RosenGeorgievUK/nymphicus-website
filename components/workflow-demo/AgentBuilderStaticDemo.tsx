import { nodeIconColor } from "@/lib/platform-ui";

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

function Port({ side }: { side: "left" | "right" }) {
  return (
    <span
      className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-[#5b6cff] shadow-sm ${
        side === "left" ? "-left-1.5" : "-right-1.5"
      }`}
      aria-hidden
    />
  );
}

function SimpleNode({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`agent-builder-node absolute ${className}`}>
      <Port side="left" />
      <Port side="right" />
      <div className="flex items-center gap-2 px-3 py-2">
        <ToolIcon color={nodeIconColor(label.split(" ")[0] === "Send" ? "MCP" : label.split(" ")[0])} />
        <span className="whitespace-nowrap text-[11px] font-semibold text-slate-800">{label}</span>
      </div>
    </div>
  );
}

function ClassifyNode() {
  const outputs = ["BILLING", "TECHNICAL", "ACCOUNT", "FALLBACK"] as const;
  return (
    <div className="agent-builder-node agent-builder-node-multi absolute left-[14%] top-[28%] w-[9.5rem] sm:w-[10.5rem]">
      <Port side="left" />
      <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <ToolIcon color={nodeIconColor("Classify")} />
        <span className="text-[11px] font-semibold text-slate-800">Classify Ticket</span>
      </div>
      <ul className="py-1">
        {outputs.map((out) => (
          <li
            key={out}
            className="relative flex items-center justify-between px-3 py-1 text-[9px] font-semibold tracking-wide text-slate-500"
          >
            <span>{out}</span>
            <span className="absolute -right-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#5b6cff] shadow-sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HumanReviewNode() {
  return (
    <div className="agent-builder-node agent-builder-node-multi absolute left-[58%] top-[54%] w-[9rem] sm:w-[10rem]">
      <Port side="left" />
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
            <span className="absolute -right-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#5b6cff] shadow-sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <marker id="flow-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5b6cff" />
        </marker>
      </defs>
      {/* BILLING → Search Knowledge Base */}
      <path
        d="M 248 148 C 310 148, 330 108, 390 108"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* TECHNICAL → Draft Reply */}
      <path
        d="M 248 188 C 310 188, 330 198, 390 198"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* Draft Reply → Send Email via MCP */}
      <path
        d="M 530 198 L 610 198"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* FALLBACK → Update Intercom */}
      <path
        d="M 248 268 C 310 268, 330 288, 390 288"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* Search KB → Human Review */}
      <path
        d="M 530 108 C 580 108, 600 250, 650 290"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* Send Email → Human Review */}
      <path
        d="M 750 198 C 780 198, 790 260, 650 300"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* Update Intercom → End */}
      <path
        d="M 530 288 C 620 288, 700 320, 780 340"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
      {/* Human Review APPROVED → End */}
      <path
        d="M 750 310 L 820 340"
        fill="none"
        stroke="#5b6cff"
        strokeWidth="2.5"
        markerEnd="url(#flow-arrow)"
      />
    </svg>
  );
}

export function AgentBuilderStaticDemo() {
  return (
    <div
      className="agent-builder-mock relative flex h-[420px] w-full flex-col overflow-hidden sm:h-[480px] md:h-[520px]"
      style={{ backgroundColor: "#F8F9FD" }}
      role="img"
      aria-label="Support Triage Agent workflow in the Agent Builder canvas"
    >
      <div className="relative z-10 flex min-h-0 flex-1">
        {/* App sidebar */}
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

        {/* Builder workspace */}
        <div className="relative flex min-w-0 flex-1 flex-col">
          {/* Top toolbar */}
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
            {/* Tool palette */}
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

            {/* Canvas */}
            <div className="agent-builder-canvas relative min-w-0 flex-1 overflow-hidden">
              <FlowLines />

              <ClassifyNode />

              <SimpleNode label="Search Knowledge Base" className="left-[38%] top-[14%]" />
              <SimpleNode label="Draft Reply" className="left-[38%] top-[32%]" />
              <SimpleNode label="Send Email via MCP" className="left-[60%] top-[32%]" />
              <SimpleNode label="Update Intercom" className="left-[38%] top-[50%]" />

              <HumanReviewNode />

              <div className="agent-builder-node absolute left-[80%] top-[58%]">
                <Port side="left" />
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
