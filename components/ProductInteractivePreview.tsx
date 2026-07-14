"use client";

import type { ReactNode } from "react";

type ProductInteractivePreviewProps = {
  children: ReactNode;
  alt: string;
  className?: string;
  glow?: boolean;
};

/** Static product screenshot frame — no fake play overlay. */
export function ProductInteractivePreview({
  children,
  alt,
  className = "",
  glow = true,
}: ProductInteractivePreviewProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`group relative ${glow ? "browser-glow" : ""}`}
        role="img"
        aria-label={alt}
      >
        <div className="relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-2xl transition-transform duration-500 motion-safe:group-hover:scale-[1.01] [&_img]:block">
          {children}
        </div>
      </div>
    </div>
  );
}
