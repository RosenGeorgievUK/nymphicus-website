"use client";

import type { ScreenshotKey } from "@/lib/screenshots";

type Spot = { top: string; left: string; size?: string; delay?: string };

const HIGHLIGHTS: Partial<Record<ScreenshotKey, Spot[]>> = {
  supportWorkflow: [
    { top: "40%", left: "40%", delay: "0s" },
    { top: "40%", left: "54%", delay: "0.5s" },
    { top: "40%", left: "68%", delay: "1s" },
    { top: "40%", left: "82%", delay: "1.5s" },
  ],
  crmWorkflow: [
    { top: "42%", left: "48%", delay: "0s" },
    { top: "42%", left: "64%", delay: "0.7s" },
    { top: "42%", left: "78%", delay: "1.4s" },
  ],
  knowledgeWorkflow: [
    { top: "42%", left: "46%", delay: "0s" },
    { top: "42%", left: "62%", delay: "0.7s" },
    { top: "42%", left: "76%", delay: "1.4s" },
  ],
  mcpRegistry: [
    { top: "34%", left: "44%", size: "8%", delay: "0s" },
    { top: "34%", left: "56%", size: "8%", delay: "0.25s" },
    { top: "34%", left: "68%", size: "8%", delay: "0.5s" },
    { top: "48%", left: "44%", size: "8%", delay: "0.75s" },
    { top: "48%", left: "56%", size: "8%", delay: "1s" },
    { top: "48%", left: "68%", size: "8%", delay: "1.25s" },
  ],
  supportChat: [
    { top: "38%", left: "62%", size: "14%", delay: "0s" },
    { top: "52%", left: "58%", size: "14%", delay: "0.8s" },
    { top: "66%", left: "62%", size: "14%", delay: "1.6s" },
  ],
};

function HighlightRing({ spot }: { spot: Spot }) {
  const size = spot.size ?? "10%";

  return (
    <span
      className="demo-spot-ring absolute rounded-full border-2 border-violet-400/80 bg-violet-400/10 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
      style={{
        top: spot.top,
        left: spot.left,
        width: size,
        height: size,
        animationDelay: spot.delay,
      }}
      aria-hidden
    />
  );
}

/** Animated callouts layered on real product screenshots during playback. */
export function ScreenshotPlaybackOverlay({ variant }: { variant: ScreenshotKey }) {
  if (variant === "executionLogs") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="demo-log-sweep absolute left-[26%] right-[3%] h-[9%] rounded-md border-2 border-violet-400/70 bg-violet-400/10 shadow-[0_0_24px_rgba(139,92,246,0.25)]" />
      </div>
    );
  }

  const spots = HIGHLIGHTS[variant] ?? [{ top: "45%", left: "55%", delay: "0s" }];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {spots.map((spot, index) => (
        <HighlightRing key={`${spot.top}-${spot.left}-${index}`} spot={spot} />
      ))}
    </div>
  );
}
