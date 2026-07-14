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
  const domainBySlug: Record<string, string> = {
    "google-drive": "drive.google.com",
    "google-calendar": "calendar.google.com",
    clickup: "clickup.com",
  };
  const domain = domainBySlug[slug] ?? `${slug}.com`;
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

type McpBrandTileProps = {
  src: string;
  alt: string;
  slug: string;
  size?: "sm" | "md";
};

export function McpBrandTile({ src, alt, slug, size = "md" }: McpBrandTileProps) {
  const box =
    size === "sm"
      ? "h-14 w-14 md:h-16 md:w-16"
      : "h-14 min-w-[3.5rem] px-3 md:h-16";
  const icon = size === "sm" ? "h-8 w-8 md:h-9 md:w-9" : "h-8 w-8 md:h-10 md:w-10";

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-marketing-border/80 bg-white/95 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-nym-primary/30 hover:shadow-lg hover:shadow-nym-primary/10 ${box}`}
      title={alt}
    >
      <McpServerIcon src={src} alt={alt} slug={slug} className={icon} />
    </div>
  );
}
