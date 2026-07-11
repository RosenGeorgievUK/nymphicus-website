import type { ReactNode } from "react";
import type { ScreenshotKey } from "@/lib/screenshots";

type ProductPreviewMockProps = {
  variant?: ScreenshotKey;
  className?: string;
};

function MockShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative flex aspect-[16/10] overflow-hidden bg-[#0d0f18] ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(var(--nym-primary-rgb),0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:18px_18px]" />
      {children}
    </div>
  );
}

function Sidebar({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <aside className="flex w-[22%] shrink-0 flex-col border-r border-white/10 bg-black/20 p-3">
      <div className="mb-4 flex items-center gap-2 px-1">
        <div className="h-5 w-5 rounded bg-gradient-nym" />
        <div className="h-2 w-16 rounded bg-white/20" />
      </div>
      <nav className="space-y-1">
        {items.map((item, i) => (
          <div
            key={item}
            className={`rounded px-2 py-1.5 text-[9px] font-medium ${
              i === active ? "bg-nym-primary/25 text-nym-primary" : "text-white/45"
            }`}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function DashboardMock() {
  return (
    <MockShell>
      <Sidebar items={["Dashboard", "Agents", "Workflows", "Knowledge", "Integrations"]} />
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-white/90">Agent overview</p>
            <p className="text-[8px] text-white/40">Last 24 hours</p>
          </div>
          <div className="rounded-full bg-gradient-nym px-3 py-1 text-[8px] font-medium text-on-gradient">
            + New agent
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active runs", value: "128" },
            { label: "Success rate", value: "97.4%" },
            { label: "Avg latency", value: "1.2s" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[7px] text-white/40">{stat.label}</p>
              <p className="text-sm font-semibold text-gradient">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-1 gap-2">
          <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[8px] text-white/50">Run volume</p>
            <div className="mt-auto flex h-16 items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-nym-primary/30 to-nym-secondary/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="w-[38%] space-y-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[8px] text-white/50">Recent agents</p>
            {["Support Triage", "CRM Copilot", "KB Assistant"].map((name) => (
              <div key={name} className="flex items-center gap-2 rounded border border-white/5 bg-black/20 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-nym-success" />
                <span className="text-[8px] text-white/70">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockShell>
  );
}

function WorkflowMock({ nodes }: { nodes: string[] }) {
  return (
    <MockShell className="items-center justify-center p-6">
      <svg viewBox="0 0 720 200" className="relative h-full w-full max-h-full">
        <defs>
          <linearGradient id="mock-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--nym-primary)" />
            <stop offset="100%" stopColor="var(--nym-secondary)" />
          </linearGradient>
        </defs>
        {nodes.map((label, i) => {
          const x = 20 + i * 115;
          const y = i % 2 === 0 ? 70 : 110;
          return (
            <g key={label}>
              {i > 0 && (
                <path
                  d={`M ${20 + (i - 1) * 115 + 95} ${(i - 1) % 2 === 0 ? 90 : 130} C ${x - 20} 100, ${x - 20} 100, ${x} ${y + 20}`}
                  fill="none"
                  stroke="url(#mock-edge)"
                  strokeWidth="2"
                  opacity="0.7"
                />
              )}
              <rect
                x={x}
                y={y}
                width="95"
                height="36"
                rx="8"
                fill="rgba(255,255,255,0.06)"
                stroke="url(#mock-edge)"
                strokeWidth="1.5"
              />
              <text
                x={x + 47}
                y={y + 22}
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="10"
                fontFamily="Space Grotesk, sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </MockShell>
  );
}

function ChatMock() {
  return (
    <MockShell>
      <Sidebar items={["Inbox", "Triage", "Resolved"]} active={1} />
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[9px] font-medium text-white/80">Ticket #4821 — Billing question</p>
          <p className="text-[8px] text-white/40">Classified · High confidence</p>
        </div>
        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="max-w-[75%] rounded-lg rounded-tl-sm border border-white/10 bg-white/10 px-3 py-2 text-[8px] text-white/70">
            Customer asked about prorated refunds on annual plans.
          </div>
          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm border border-nym-primary/30 bg-nym-primary/15 px-3 py-2 text-[8px] text-white/85">
            Draft reply ready — cites Billing Policy §4.2 and refund FAQ.
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-nym-warning/30 bg-nym-warning/10 px-3 py-2">
            <span className="text-[8px] text-nym-warning">Awaiting human approval</span>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

function LogsMock() {
  const rows = [
    { time: "14:02:11", node: "Knowledge Base", status: "ok" },
    { time: "14:02:12", node: "LLM", status: "ok" },
    { time: "14:02:13", node: "MCP · HubSpot", status: "ok" },
    { time: "14:02:14", node: "Human Approval", status: "wait" },
  ];
  return (
    <MockShell className="p-4">
      <div className="w-full rounded-lg border border-white/10 bg-black/30">
        <div className="border-b border-white/10 px-3 py-2 text-[9px] font-medium text-white/70">
          Execution trace · run_8f3a2c
        </div>
        {rows.map((row) => (
          <div
            key={row.time}
            className="flex items-center gap-3 border-b border-white/5 px-3 py-2 font-mono text-[8px]"
          >
            <span className="text-white/35">{row.time}</span>
            <span className="flex-1 text-white/75">{row.node}</span>
            <span
              className={
                row.status === "ok"
                  ? "rounded bg-nym-success/20 px-1.5 py-0.5 text-nym-success"
                  : "rounded bg-nym-warning/20 px-1.5 py-0.5 text-nym-warning"
              }
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

function AgentsListMock() {
  return (
    <MockShell>
      <Sidebar items={["Dashboard", "Agents", "Workflows"]} active={1} />
      <div className="flex-1 p-4">
        <div className="rounded-lg border border-white/10 bg-black/20">
          {["Support Triage", "CRM Copilot", "Policy Q&A", "Onboarding Bot"].map((name, i) => (
            <div
              key={name}
              className="flex items-center justify-between border-b border-white/5 px-3 py-2 last:border-0"
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${i === 3 ? "bg-white/20" : "bg-nym-success"}`} />
                <span className="text-[9px] text-white/80">{name}</span>
              </div>
              <span className="text-[8px] text-white/35">{i === 3 ? "Draft" : "Live"}</span>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

function McpMock() {
  const tools = ["HubSpot", "Intercom", "Stripe", "Notion", "GitHub", "Slack"];
  return (
    <MockShell className="p-5">
      <p className="mb-3 text-[10px] font-semibold text-white/80">MCP registry</p>
      <div className="grid grid-cols-3 gap-2">
        {tools.map((tool) => (
          <div
            key={tool}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-center transition-colors hover:border-nym-primary/40"
          >
            <div className="mx-auto mb-1.5 h-6 w-6 rounded bg-gradient-nym opacity-80" />
            <p className="text-[8px] font-medium text-white/70">{tool}</p>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

const workflowVariants: Partial<Record<ScreenshotKey, string[]>> = {
  supportWorkflow: ["Trigger", "Classify", "RAG", "Draft", "Approve", "Send"],
  crmWorkflow: ["Query", "HubSpot", "LLM", "Draft", "Update"],
  knowledgeWorkflow: ["Input", "Retrieve", "Cite", "Respond"],
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
      content = <WorkflowMock nodes={workflowVariants[variant] ?? ["Start", "Process", "Output"]} />;
      break;
    default:
      content = <DashboardMock />;
  }

  return <div className={className}>{content}</div>;
}
