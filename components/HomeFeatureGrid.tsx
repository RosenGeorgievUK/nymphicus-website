"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ProductPreviewContent } from "@/components/ProductPreviewContent";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ScreenshotKey } from "@/lib/screenshots";
import { bentoScreenshotForItem } from "@/lib/view-helpers";

type FeatureGridItem = {
  title: string;
  description: string;
  href: string;
};

type HomeFeatureGridProps = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  items: FeatureGridItem[];
  links: { templates: string; features: string; useCases: string; hrefs: { templates: string; features: string; useCases: string } };
};

const FEATURE_META = [
  { category: "Workflow template", stat: "Ship in hours" },
  { category: "Workflow template", stat: "MCP-native" },
  { category: "Workflow template", stat: "Cited answers" },
  { category: "Integration", stat: "No glue code" },
] as const;

const AUTO_ROTATE_MS = 7000;

function FeatureIcon({ index }: { index: number }) {
  const className = "h-5 w-5 text-nym-primary";

  switch (index) {
    case 0:
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M4 6h4v4H4V6zm8 0h4v4h-4V6zM4 14h4v4H4v-4zm8 0h4v4h-4v-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M8 8h4M10 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 1:
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
          <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 9h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 2:
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M10 3l7 4v6l-7 4-7-4V7l7-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M10 10v7M10 10L3 7M10 10l7-3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function HomeFeatureGrid({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  items,
  links,
}: HomeFeatureGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex] ?? items[0];
  const activeScreenshot: ScreenshotKey = bentoScreenshotForItem(activeItem.href, activeIndex);
  const activeMeta = FEATURE_META[activeIndex] ?? FEATURE_META[0];

  const focusTab = useCallback((index: number) => {
    setActiveIndex(index);
    const tab = document.getElementById(`feature-tab-${index}`);
    tab?.focus();
  }, []);

  useEffect(() => {
    if (paused || items.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % items.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + items.length) % items.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(items.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section
      className="relative overflow-hidden border-t border-marketing-border py-16 md:py-24"
      aria-labelledby="feature-grid-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="product-showcase-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nym-primary/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="feature-grid-heading"
            eyebrow={eyebrow}
            title={
              titleHighlight ? (
                <>
                  {title}{" "}
                  <span className="text-gradient">{titleHighlight}</span>
                </>
              ) : (
                title
              )
            }
            subtitle={subtitle}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,24rem)_1fr]">
          <div
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Product workflows"
          >
            {items.map((item, index) => {
              const selected = activeIndex === index;
              const meta = FEATURE_META[index] ?? FEATURE_META[0];

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  id={`feature-tab-${index}`}
                  tabIndex={selected ? 0 : -1}
                  aria-selected={selected}
                  aria-controls="feature-grid-panel"
                  className={`feature-tab nym-focus group min-w-[17rem] shrink-0 text-left lg:min-w-0 ${
                    selected ? "feature-tab-active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  <div className="flex items-start gap-3">
                    <span className="feature-tab-icon mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-marketing-border/70 bg-marketing-surface/80">
                      <FeatureIcon index={index} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-nym-primary/80">
                          {meta.category}
                        </span>
                        <span className="hidden text-[10px] text-marketing-text-muted sm:inline">·</span>
                        <span className="hidden text-[10px] font-medium text-marketing-text-muted sm:inline">
                          {meta.stat}
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-base font-semibold text-marketing-text transition-colors group-hover:text-nym-primary md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-marketing-text-muted line-clamp-2 lg:line-clamp-none">
                        {item.description}
                      </p>
                    </div>
                    <svg
                      className={`mt-1 h-4 w-4 shrink-0 transition-all ${
                        selected
                          ? "translate-x-0 text-nym-primary opacity-100"
                          : "-translate-x-1 text-marketing-text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            ref={panelRef}
            role="tabpanel"
            id="feature-grid-panel"
            aria-labelledby={`feature-tab-${activeIndex}`}
            className="feature-preview-panel relative"
          >
            <div className="feature-preview-chrome mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nym-primary/40 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-nym-primary" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-marketing-text-muted">
                  Live canvas preview
                </span>
              </div>
              <Link
                href={activeItem.href}
                className="nym-focus text-sm font-medium text-nym-primary hover:underline"
              >
                Open {activeItem.title.toLowerCase()} →
              </Link>
            </div>

            <ProductInteractivePreview
              screenshot={activeScreenshot}
              alt={activeItem.title}
              glow
              autoPlay={!paused}
              resetKey={`${activeIndex}-${activeScreenshot}`}
            >
              <ProductPreviewContent screenshot={activeScreenshot} alt={activeItem.title} />
            </ProductInteractivePreview>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Canvas builder", "Human approval", "Execution logs"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-marketing-border/70 bg-marketing-surface/60 px-3 py-1 text-xs text-marketing-text-muted backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full border border-nym-primary/25 bg-nym-primary/10 px-3 py-1 text-xs font-medium text-nym-primary">
                {activeMeta.stat}
              </span>
            </div>
          </div>
        </div>

        <ScrollReveal delay={120}>
          <nav
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-marketing-border/80 pt-8"
            aria-label="Explore product"
          >
            {[
              { label: links.templates, href: links.hrefs.templates },
              { label: links.features, href: links.hrefs.features },
              { label: links.useCases, href: links.hrefs.useCases },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nym-focus group inline-flex items-center gap-1.5 text-sm font-medium text-marketing-text-muted transition-colors hover:text-nym-primary"
              >
                {link.label}
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>
        </ScrollReveal>
      </div>
    </section>
  );
}
