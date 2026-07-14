"use client";

import { McpServerIcon } from "@/components/McpServerIcon";
import { DemoCursor } from "@/components/workflow-demo/DemoCursor";
import { useScriptedDemo } from "@/components/hooks/use-scripted-demo";
import { useInView } from "@/components/hooks/use-in-view";
import { MCP_REGISTRY, PLATFORM_BODY_BG, SIDEBAR_NAV_COMPACT } from "@/lib/platform-ui";

const DEMO_FRAME = "demo-walkthrough w-full !aspect-auto !min-h-0 h-[400px] sm:h-[440px] md:h-[460px]";

const CONNECT_SEQUENCE = [
  "Open MCP registry",
  "Search integrations",
  "Connect HubSpot",
  "Authorize workspace",
  "Connect Intercom",
  "Connect Stripe",
  "Connect Notion",
  "Wire MCP to canvas",
  "Map tool permissions",
  "Ready for production",
] as const;

const SERVERS = MCP_REGISTRY.servers.slice(0, 6);

type ConnectState = {
  label: string;
  stepIndex: number;
  sidebarActive: number;
  search: string;
  connected: number;
  showAuth: boolean;
  authDone: boolean;
  showCanvas: boolean;
  showToast: boolean;
  cursor: { x: number; y: number; clicking: boolean };
};

function connectStateForStep(step: number): ConnectState {
  const s = Math.min(step, CONNECT_SEQUENCE.length - 1);
  const base: ConnectState = {
    label: CONNECT_SEQUENCE[s],
    stepIndex: s,
    sidebarActive: 3,
    search: "",
    connected: 0,
    showAuth: false,
    authDone: false,
    showCanvas: false,
    showToast: false,
    cursor: { x: 12, y: 30, clicking: false },
  };

  if (s >= 1) {
    base.search = s === 1 ? "hub" : "hub";
    base.cursor = { x: 55, y: 14, clicking: s === 1 };
  }
  if (s === 2) {
    base.cursor = { x: 22, y: 42, clicking: true };
  }
  if (s === 3) {
    base.showAuth = true;
    base.connected = 0;
    base.cursor = { x: 50, y: 55, clicking: true };
  }
  if (s >= 4 && s <= 7) {
    base.showAuth = false;
    base.authDone = true;
    base.connected = s - 3;
    const clickX = [42, 62, 82][s - 4] ?? 42;
    base.cursor = { x: clickX, y: 42, clicking: true };
  }
  if (s >= 8) {
    base.showCanvas = true;
    base.connected = 4;
    base.cursor = { x: 48, y: 68, clicking: s === 8 };
  }
  if (s >= 9) {
    base.showToast = true;
    base.connected = 4;
    base.cursor = { x: 88, y: 12, clicking: false };
  }

  return base;
}

export function ConnectSequenceDemo() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const step = useScriptedDemo(CONNECT_SEQUENCE.length, 750, 2800, inView, "connect");
  const state = connectStateForStep(step);

  return (
    <div ref={ref} className={`${DEMO_FRAME} relative flex flex-col overflow-hidden`} style={{ backgroundColor: PLATFORM_BODY_BG }}>
      <header className="relative z-10 flex h-9 shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-nym" />
          <span className="text-[11px] font-semibold text-slate-800">Nymphi · MCP Registry</span>
        </div>
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
          {state.connected} connected
        </span>
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

        <div className="relative flex min-w-0 flex-1 flex-col p-3 sm:p-4">
          {!state.showCanvas ? (
            <>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-700">
                  {state.search ? (
                    <>
                      Search: <span className="font-medium">{state.search}</span>
                      <span className="demo-typing-caret ml-0.5 inline-block h-3 w-px bg-violet-500" />
                    </>
                  ) : (
                    <span className="text-slate-400">Search MCP servers…</span>
                  )}
                </div>
              </div>

              <div className="mt-3 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {SERVERS.map((server, index) => {
                  const connected = index < state.connected;
                  const isNext = index === state.connected && !state.showAuth;

                  return (
                    <div
                      key={server.slug}
                      className={`relative rounded-lg border px-2 py-2.5 text-center transition-colors ${
                        connected
                          ? "border-violet-300 bg-violet-50"
                          : isNext
                            ? "border-violet-400 bg-white ring-1 ring-violet-200"
                            : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center">
                        <McpServerIcon src={server.iconUrl} alt={server.name} slug={server.slug} className="h-6 w-6" />
                      </div>
                      <p className="text-[10px] font-semibold text-slate-800">{server.name}</p>
                      {connected ? (
                        <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-800">
                          Connected
                        </span>
                      ) : (
                        <span className="mt-1 inline-flex rounded-full border border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-500">
                          Connect
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {state.showAuth && (
                <div className="demo-panel-in absolute inset-x-4 top-1/3 z-20 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:inset-x-8">
                  <p className="text-[11px] font-semibold text-slate-900">Connect HubSpot</p>
                  <p className="mt-1 text-[10px] text-slate-500">OAuth — workspace already authorized (skipped)</p>
                  <div className="mt-3 flex justify-end gap-2">
                    <span className="rounded-md border border-slate-200 px-3 py-1 text-[10px] text-slate-600">Cancel</span>
                    <span className="rounded-md bg-violet-600 px-3 py-1 text-[10px] font-semibold text-white">
                      Allow access
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-1 flex-col rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-[11px] font-semibold text-slate-900">Canvas · MCP node</p>
              <p className="mt-1 text-[10px] text-slate-500">Tools available on this workflow</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVERS.slice(0, state.connected).map((server) => (
                  <span
                    key={server.slug}
                    className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-800"
                  >
                    <McpServerIcon src={server.iconUrl} alt="" slug={server.slug} className="h-3.5 w-3.5" />
                    {server.name}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-1.5">
                {["Read deals", "Update contact", "Post reply"].map((perm) => (
                  <div key={perm} className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-2 py-1.5 text-[10px]">
                    <span className="text-slate-700">{perm}</span>
                    <span className="font-medium text-emerald-700">Allowed</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-2 flex shrink-0 items-center justify-between border-t border-slate-200 pt-2">
            <p className="truncate text-[9px] text-slate-500 sm:text-[10px]">
              <span className="font-medium text-violet-700">{state.label}</span>
              <span className="mx-1.5 text-slate-300">·</span>
              {state.stepIndex + 1}/{CONNECT_SEQUENCE.length}
            </p>
          </div>

          <DemoCursor x={state.cursor.x} y={state.cursor.y} clicking={state.cursor.clicking} />
        </div>
      </div>

      {state.showToast && (
        <div className="demo-panel-in absolute bottom-12 right-3 z-30 max-w-[220px] rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 shadow-lg">
          <p className="text-[10px] font-semibold text-emerald-900">Stack wired</p>
          <p className="text-[9px] text-emerald-800">4 MCP tools ready on Support Triage</p>
        </div>
      )}
    </div>
  );
}
