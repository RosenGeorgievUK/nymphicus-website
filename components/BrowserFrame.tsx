"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { ProductPreviewMock } from "@/components/ProductPreviewMock";
import { screenshotPath, type ScreenshotKey } from "@/lib/screenshots";

type BrowserFrameProps = {
  screenshot?: ScreenshotKey;
  alt: string;
  className?: string;
  priority?: boolean;
  glow?: boolean;
  chrome?: boolean;
  children?: ReactNode;
};

function FrameChrome() {
  return (
    <div className="flex items-center gap-2 border-b border-marketing-border bg-marketing-surface-elevated px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-nym-danger/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-nym-warning/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-nym-success/80" />
      <span className="ml-3 flex-1 rounded bg-marketing-bg/60 py-1 text-center text-[10px] text-marketing-text-muted">
        app.nymphicus.ai
      </span>
    </div>
  );
}

function PlaceholderVisual({ variant }: { variant?: ScreenshotKey }) {
  return <ProductPreviewMock variant={variant} />;
}

export function BrowserFrame({
  screenshot,
  alt,
  className = "",
  priority = false,
  glow = true,
  chrome = true,
  children,
}: BrowserFrameProps) {
  const [failed, setFailed] = useState(false);
  const src = screenshot ? screenshotPath(screenshot) : null;

  return (
    <div
      className={`group relative ${glow ? "browser-glow" : ""} ${className}`}
    >
      <div className="relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-2xl transition-transform duration-500 motion-safe:group-hover:scale-[1.01]">
        {chrome && <FrameChrome />}
        {children}
        {!children && src && !failed && (
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={800}
            className="h-auto w-full"
            priority={priority}
            onError={() => setFailed(true)}
          />
        )}
        {!children && (!src || failed) && <PlaceholderVisual variant={screenshot} />}
      </div>
    </div>
  );
}
