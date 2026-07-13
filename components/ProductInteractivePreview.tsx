"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ScreenshotPlaybackOverlay } from "@/components/ScreenshotPlaybackOverlay";
import type { ScreenshotKey } from "@/lib/screenshots";

type ProductInteractivePreviewProps = {
  children: ReactNode;
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
  glow?: boolean;
  autoPlay?: boolean;
  resetKey?: string;
};

function PlayOverlay({ label, onPlay }: { label: string; onPlay: () => void }) {
  const actionLabel = `See it in action: ${label}`;

  return (
    <button
      type="button"
      className="nym-focus absolute inset-0 z-10 flex items-center justify-center bg-marketing-bg/0 transition-colors hover:bg-marketing-bg/25 focus-visible:bg-marketing-bg/25"
      onClick={onPlay}
      aria-label={actionLabel}
    >
      <span className="flex items-center gap-2 rounded-full border border-marketing-border/80 bg-marketing-surface/95 px-4 py-2 text-sm font-medium text-marketing-text shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.02]">
        <svg className="h-4 w-4 text-nym-primary" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M4 2.5v11l9-5.5-9-5.5z" />
        </svg>
        See it in action
      </span>
    </button>
  );
}

/** Client wrapper — keeps the real screenshot visible; playback adds a subtle overlay animation. */
export function ProductInteractivePreview({
  children,
  screenshot,
  alt,
  className = "",
  glow = true,
  autoPlay = false,
  resetKey,
}: ProductInteractivePreviewProps) {
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    setPlaying(autoPlay);
  }, [autoPlay]);

  useEffect(() => {
    if (resetKey) setPlaying(autoPlay);
  }, [resetKey, autoPlay]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`group relative ${glow ? "browser-glow" : ""}`}
        role="img"
        aria-label={alt}
      >
        <div className="relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-2xl transition-transform duration-500 motion-safe:group-hover:scale-[1.01] [&_img]:block">
          <div className={playing ? "demo-pan-active" : ""}>{children}</div>
          {playing && <ScreenshotPlaybackOverlay variant={screenshot} />}
        </div>
      </div>

      {!autoPlay && !playing && <PlayOverlay label={alt} onPlay={() => setPlaying(true)} />}

      {!autoPlay && playing && (
        <button
          type="button"
          className="nym-focus absolute right-3 top-3 z-10 rounded-full border border-marketing-border/80 bg-marketing-surface/90 px-2.5 py-1 text-[10px] font-medium text-marketing-text-muted backdrop-blur-sm hover:text-marketing-text"
          onClick={() => setPlaying(false)}
          aria-label="Stop demo"
        >
          Stop
        </button>
      )}
    </div>
  );
}
