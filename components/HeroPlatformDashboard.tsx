"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  DEMO_DASHBOARD_CHARTS,
  PLATFORM_BODY_BG,
  PLATFORM_DASHBOARD_KPIS,
  PLATFORM_SIDEBAR_ITEMS,
} from "@/lib/platform-ui";
import { useInView } from "@/components/hooks/use-in-view";

const DESIGN_WIDTH = 1180;
const CHART_H = 168;

function KpiIcon({ type, color }: { type: string; color: string }) {
  const common = { stroke: color, fill: "none", strokeWidth: 1.75, strokeLinecap: "round" as const };
  switch (type) {
    case "robot":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <rect x="5" y="8" width="14" height="11" rx="2" {...common} />
          <circle cx="9" cy="13" r="1" fill={color} stroke="none" />
          <circle cx="15" cy="13" r="1" fill={color} stroke="none" />
          <path d="M12 8V5M8 5h8" {...common} />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <circle cx="12" cy="12" r="9" {...common} />
          <path d="M8 12l2.5 2.5L16 9" {...common} />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <path d="M5 6h14a2 2 0 012 2v7a2 2 0 01-2 2H10l-4 3v-3H5a2 2 0 01-2-2V8a2 2 0 012-2z" {...common} />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <circle cx="12" cy="12" r="9" {...common} />
          <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill={color} stroke="none" />
        </svg>
      );
    case "flash":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <ellipse cx="12" cy="6" rx="7" ry="3" {...common} />
          <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...common} />
          <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" {...common} />
        </svg>
      );
  }
}

function PlatformHeader() {
  return (
    <header className="flex h-11 items-center justify-between border-b border-[#e2e8ee] bg-white/90 px-4">
      <button type="button" className="text-[#6c7e96]" tabIndex={-1} aria-hidden>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>
      <div className="flex items-center gap-3 text-[#6c7e96]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M12 3a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M8 4H6a2 2 0 00-2 2v2M16 4h2a2 2 0 012 2v2M8 20H6a2 2 0 01-2-2v-2M16 20h2a2 2 0 002-2v-2" strokeLinecap="round" />
        </svg>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#985FFD]/15 text-[11px] font-semibold text-[#985FFD]">
          R
        </span>
      </div>
    </header>
  );
}

function PlatformSidebar() {
  return (
    <div className="flex shrink-0">
      <div className="flex w-14 flex-col items-center justify-between border-r border-[#e2e8ee] bg-[#f3f0ff] py-4">
        <Image src="/branding/assets/logo-icon.svg" alt="" width={24} height={24} aria-hidden />
        <div className="flex flex-col items-center gap-3 text-[#6c7e96]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <path d="M12 3a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#985FFD] text-[11px] font-bold text-white">
            R
          </span>
        </div>
      </div>

      <aside className="flex w-48 flex-col border-r border-[#e2e8ee] bg-white px-3 py-4 font-['Space_Grotesk',sans-serif]">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#302d36]/45">
          Agent Builder
        </p>
        <p className="mb-2 flex items-center gap-1 text-xs font-semibold text-[#302d36]">
          Agent Builder
          <svg viewBox="0 0 24 24" className="ml-auto h-3.5 w-3.5 text-[#6c7e96]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>
        <nav className="space-y-0.5">
          {PLATFORM_SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                item.active ? "bg-[#985FFD] text-white" : "text-[#302d36]/85"
              }`}
            >
              <span>{item.label}</span>
              {item.submenu && (
                <svg viewBox="0 0 24 24" className="h-3 w-3 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto rounded-lg bg-gradient-to-br from-[#985FFD] to-[#00C9FF] p-3 text-white">
          <p className="text-[11px] font-semibold leading-snug">Dashboard AI Helper</p>
          <p className="mt-1 text-[10px] leading-snug text-white/85">Get help building agents faster.</p>
          <span className="mt-2 inline-block rounded bg-white/20 px-2 py-0.5 text-[10px] font-semibold">
            Try Now
          </span>
        </div>
      </aside>
    </div>
  );
}

function ChartGridLines({ w, h }: { w: number; h: number }) {
  return (
    <>
      {[0.25, 0.5, 0.75].map((pct) => (
        <line
          key={pct}
          x1={28}
          y1={16 + (h - 36) * pct}
          x2={w - 12}
          y2={16 + (h - 36) * pct}
          stroke="#eef2f6"
          strokeWidth="1"
        />
      ))}
    </>
  );
}

function ExecutionsChart({ progress }: { progress: number }) {
  const points = DEMO_DASHBOARD_CHARTS.executions;
  const w = 360;
  const h = CHART_H;
  const max = 6;
  const coords = points.map((v, i) => {
    const x = 28 + (i / (points.length - 1)) * (w - 52);
    const y = h - 24 - (v / max) * (h - 48);
    return [x, y] as const;
  });
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const last = coords[coords.length - 1];
  const area = last
    ? `${coords[0]![0]},${h - 20} ${line} ${last[0]},${h - 20}`
    : "";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" aria-hidden>
      <ChartGridLines w={w} h={h} />
      <text x={w / 2} y={h - 6} textAnchor="middle" className="fill-[#5d6576] text-[9px]">
        11 Jul
      </text>
      {area && (
        <polygon points={area} fill="rgba(152, 95, 253, 0.12)" style={{ opacity: progress }} />
      )}
      <polyline
        points={line}
        fill="none"
        stroke="#985FFD"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: progress }}
      />
      {last && progress > 0.8 && (
        <circle cx={last[0]} cy={last[1]} r="3.5" fill="#985FFD" />
      )}
    </svg>
  );
}

function TokenBarsChart({ progress }: { progress: number }) {
  const value = DEMO_DASHBOARD_CHARTS.tokens.at(-1) ?? 0;
  const w = 360;
  const h = CHART_H;
  const max = 6000;
  const barH = (value / max) * (h - 48) * progress;
  const x = w / 2 - 36;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" aria-hidden>
      <ChartGridLines w={w} h={h} />
      {[0, 2000, 4000, 6000].map((tick, i) => (
        <text key={tick} x={8} y={h - 24 - ((tick / max) * (h - 48))} className="fill-[#94a3b8] text-[8px]">
          {tick === 0 ? "0" : tick}
        </text>
      ))}
      <text x={w / 2} y={h - 6} textAnchor="middle" className="fill-[#5d6576] text-[9px]">
        11 Jul
      </text>
      <rect x={x} y={h - 24 - barH} width={72} height={barH} rx="4" fill="#00C9FF" />
    </svg>
  );
}

function StatusDonut({ progress }: { progress: number }) {
  const segments = DEMO_DASHBOARD_CHARTS.statusBreakdown;
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  let offset = 0;
  const r = 46;
  const c = 2 * Math.PI * r;

  return (
    <div className="flex h-full items-center justify-center">
      <svg viewBox="0 0 180 140" className="h-full w-full max-w-[220px]" aria-hidden>
        <circle cx="90" cy="62" r={r} fill="none" stroke="#f1f5f9" strokeWidth="18" />
        {segments.map((seg) => {
          const len = (seg.value / total) * c * progress;
          const mid = offset + len / 2;
          const angle = (mid / c) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const lx = 90 + Math.cos(rad) * 30;
          const ly = 62 + Math.sin(rad) * 30;
          const el = (
            <g key={seg.label}>
              <circle
                cx="90"
                cy="62"
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth="18"
                strokeDasharray={`${len} ${c}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 90 62)"
              />
              {progress > 0.85 && (
                <text x={lx} y={ly} textAnchor="middle" className="fill-[#011a42] text-[9px] font-semibold">
                  {seg.value.toFixed(1)}%
                </text>
              )}
            </g>
          );
          offset += (seg.value / total) * c;
          return el;
        })}
        <rect x="20" y="118" width="10" height="10" rx="2" fill="#32D484" />
        <text x="34" y="127" className="fill-[#5d6576] text-[9px]">
          Completed
        </text>
        <rect x="90" y="118" width="10" height="10" rx="2" fill="#FF6757" />
        <text x="104" y="127" className="fill-[#5d6576] text-[9px]">
          Failed
        </text>
        <rect x="20" y="132" width="10" height="10" rx="2" fill="#FDAF22" />
        <text x="34" y="141" className="fill-[#5d6576] text-[9px]">
          Pending Approval
        </text>
      </svg>
    </div>
  );
}

function AgentActivityChart({ progress }: { progress: number }) {
  const rows = DEMO_DASHBOARD_CHARTS.agentActivity;
  const max = Math.max(...rows.map((r) => r.value), 1);

  return (
    <div className="flex h-full flex-col justify-center gap-3 px-3 py-2">
      {rows.map((row) => (
        <div key={row.name} className="grid grid-cols-[1fr_auto] items-center gap-2">
          <div className="h-5 overflow-hidden rounded-sm bg-[#f1f5f9]">
            <div
              className="h-full rounded-sm bg-[#32D484]/75"
              style={{ width: `${(row.value / max) * 100 * progress}%` }}
            />
          </div>
          <span className="max-w-[8.5rem] truncate text-[9px] text-[#5d6576]">{row.name}</span>
        </div>
      ))}
    </div>
  );
}

function useHeroDashboardMotion(active: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 0.006;
      const next = Math.min(1, frame);
      setProgress(next);
      if (next < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return progress;
}

export function HeroPlatformDashboard() {
  const { ref: containerRef, inView } = useInView<HTMLDivElement>();
  const [scale, setScale] = useState(1);
  const progress = useHeroDashboardMotion(inView);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="hero-platform-dashboard relative aspect-[16/10] w-full overflow-hidden"
      style={{ backgroundColor: PLATFORM_BODY_BG }}
      role="img"
      aria-label="Nymphi agent builder dashboard"
    >
      <div
        className="absolute left-0 top-0 origin-top-left font-['Space_Grotesk',sans-serif]"
        style={{ width: DESIGN_WIDTH, transform: `scale(${scale})` }}
      >
        <div className="flex min-h-[560px]">
          <PlatformSidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            <PlatformHeader />
            <main className="flex-1 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h1 className="text-[18px] font-semibold text-[#011a42]">Agent Builder Dashboard</h1>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-[0.3rem] bg-[#985FFD] px-3 py-1.5 text-xs font-medium text-white"
                  tabIndex={-1}
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                  Create New Agent
                </button>
              </div>

              <div className="mb-3 grid grid-cols-6 gap-2">
                {PLATFORM_DASHBOARD_KPIS.map((kpi) => (
                  <div key={kpi.label} className="rounded-[0.3rem] border border-[#e2e8ee] bg-white p-2.5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.3rem]"
                        style={{ backgroundColor: kpi.bg, color: kpi.color }}
                      >
                        <KpiIcon type={kpi.icon} color={kpi.color} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-[#5d6576]">{kpi.label}</p>
                        <p className="text-base font-semibold text-[#011a42]">{kpi.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { title: "Executions Over Time (30d)", chart: <ExecutionsChart progress={progress} /> },
                  { title: "Token Usage (30d)", chart: <TokenBarsChart progress={progress} /> },
                  { title: "Execution Status Breakdown", chart: <StatusDonut progress={progress} /> },
                  { title: "Most Active Agents", chart: <AgentActivityChart progress={progress} /> },
                ].map((card) => (
                  <div key={card.title} className="overflow-hidden rounded-[0.3rem] border border-[#e2e8ee] bg-white shadow-sm">
                    <div className="border-b border-[#e2e8ee] px-3 py-2 text-[13px] font-medium text-[#011a42]">
                      {card.title}
                    </div>
                    <div className="px-2 py-1" style={{ height: CHART_H }}>
                      {card.chart}
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
