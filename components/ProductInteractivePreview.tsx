"use client";

import type { ReactNode } from "react";

type ProductInteractivePreviewProps = {
  children: ReactNode;
  alt: string;
  className?: string;
};

/** Static product screenshot frame — no fake play overlay. */
export function ProductInteractivePreview({
  children,
  alt,
  className = "",
}: ProductInteractivePreviewProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="group relative" role="img" aria-label={alt}>
        <div className="relative overflow-hidden rounded-nym border border-marketing-border bg-marketing-surface shadow-nym [&_img]:block">
          {children}
        </div>
      </div>
    </div>
  );
}
