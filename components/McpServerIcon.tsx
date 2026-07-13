"use client";

import { useState } from "react";

type McpServerIconProps = {
  src: string;
  alt: string;
  slug?: string;
  className?: string;
};

function faviconFallback(slug?: string) {
  if (!slug) return undefined;
  const domain = slug === "google-drive" ? "drive.google.com" : `${slug}.com`;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export function McpServerIcon({ src, alt, slug, className = "" }: McpServerIconProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const fallback = faviconFallback(slug);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={`object-contain ${className}`}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (fallback && currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}

type McpServerCardIconProps = {
  src: string;
  alt: string;
  slug?: string;
  highlighted?: boolean;
};

export function McpServerCardIcon({ src, alt, slug, highlighted = false }: McpServerCardIconProps) {
  return (
    <div
      className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg sm:mb-2.5 sm:h-10 sm:w-10 ${
        highlighted ? "bg-violet-100" : "bg-slate-50"
      }`}
    >
      <McpServerIcon src={src} alt={alt} slug={slug} className="h-6 w-6 sm:h-8 sm:w-8" />
    </div>
  );
}
