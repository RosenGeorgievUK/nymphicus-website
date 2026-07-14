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
const CAPABILITY_TAGS = ["Canvas builder", "Human approval", "Execution logs"] as const;

function FeatureIcon({ index, compact = false }: { index: number; compact?: boolean }) {
  const className = compact ? "h-4 w-4 text-nym-primary" : "h-5 w-5 text-nym-primary";

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
  const [isDesktop, setIsDesktop] = useState(false);
  const tabScrollerRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex] ?? items[0];
  const activeScreenshot: ScreenshotKey = bentoScreenshotForItem(activeItem.href, activeIndex);
  const activeMeta = FEATURE_META[activeIndex] ?? FEATURE_META[0];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const focusTab = useCallback((index: number) => {
    setActiveIndex(index);
    document.getElementById(`feature-tab-${index}`)?.focus();
  }, []);

  useEffect(() => {
    if (paused || items.length <= 1 || !isDesktop) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, items.length, isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    const scroller = tabScrollerRef.current;
    const tab = document.getElementById(`feature-tab-${activeIndex}`);
    if (!scroller || !tab) return;

    const targetScroll =
      tab.offsetLeft - scroller.clientWidth / 2 + tab.offsetWidth / 2;
    scroller.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIndex, isDesktop]);

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
      className="relative overflow-hidden border-t border-marketing-border py-12 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="feature-grid-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onTouchStart={() => setPaused(true)}
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
            className="[&_p:last-child]:mt-4 [&_p:last-child]:text-base [&_p:last-child]:md:mt-5 [&_p:last-child]:md:text-lg [&_p:last-child]:lg:text-xl"
          />
        </ScrollReveal>

        <div className="mt-8 md:mt-10 lg:mt-14">
          <div className="relative lg:grid lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,24rem)_1fr]">
            <div className="relative mb-6 lg:mb-0">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-marketing-bg to-transparent md:hidden"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-marketing-bg to-transparent md:hidden"
                aria-hidden
              />

              <div
                ref={tabScrollerRef}
                className="feature-tab-scroller -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-3 md:overflow-visible md:px-0 md:pb-0 lg:flex lg:flex-col lg:gap-3"
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
                      className={`feature-tab nym-focus group shrink-0 snap-center text-left md:shrink lg:shrink-0 ${
                        selected ? "feature-tab-active" : ""
                      } feature-tab-responsive`}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                    >
                      <div className="flex items-center gap-2 md:items-start md:gap-2.5 lg:gap-3">
                        <span className="feature-tab-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-marketing-border/70 bg-marketing-surface/80 md:h-8 md:w-8 lg:mt-0.5 lg:h-9 lg:w-9">
                          <FeatureIcon index={index} compact />
                        </span>

                        <div className="min-w-0 flex-1">
                          <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-nym-primary/80 md:block lg:text-[10px]">
                            {meta.category}
                            <span className="hidden lg:inline">
                              {" · "}
                              {meta.stat}
                            </span>
                          </span>
                          <h3 className="text-sm font-semibold text-marketing-text transition-colors group-hover:text-nym-primary md:mt-1 lg:mt-1.5 lg:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-1 hidden text-xs leading-relaxed text-marketing-text-muted line-clamp-2 md:block lg:line-clamp-none lg:text-sm">
                            {item.description}
                          </p>
                        </div>

                        <svg
                          className={`hidden h-4 w-4 shrink-0 transition-all lg:mt-1 lg:block ${
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
            </div>

            <div className="lg:contents">
              <div className="mb-4 lg:hidden" aria-live="polite">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-nym-primary/80">
                  {activeMeta.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-marketing-text sm:text-xl">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marketing-text-muted sm:text-base">
                  {activeItem.description}
                </p>
              </div>

              <div
                role="tabpanel"
                id="feature-grid-panel"
                aria-labelledby={`feature-tab-${activeIndex}`}
                className="feature-preview-panel relative min-w-0"
              >
                <div className="feature-preview-chrome mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nym-primary/40 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-nym-primary" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-marketing-text-muted sm:text-[11px]">
                      Live canvas preview
                    </span>
                  </div>
                  <Link
                    href={activeItem.href}
                    className="nym-focus text-sm font-medium text-nym-primary hover:underline"
                  >
                    <span className="hidden sm:inline">Open {activeItem.title.toLowerCase()} →</span>
                    <span className="sm:hidden">View workflow →</span>
                  </Link>
                </div>

                <ProductInteractivePreview
                  screenshot={activeScreenshot}
                  alt={activeItem.title}
                  glow
                  autoPlay={!paused && isDesktop}
                  resetKey={`${activeIndex}-${activeScreenshot}`}
                >
                  <ProductPreviewContent screenshot={activeScreenshot} alt={activeItem.title} />
                </ProductInteractivePreview>

                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {CAPABILITY_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-marketing-border/70 bg-marketing-surface/60 px-2.5 py-0.5 text-[11px] text-marketing-text-muted backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full border border-nym-primary/25 bg-nym-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-nym-primary sm:px-3 sm:py-1 sm:text-xs">
                    {activeMeta.stat}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollReveal delay={120}>
          <nav
            className="mt-10 flex flex-col items-stretch gap-2 border-t border-marketing-border/80 pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:pt-8 md:mt-14"
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
                className="nym-focus group inline-flex items-center justify-center gap-1.5 rounded-lg border border-marketing-border/60 px-4 py-2.5 text-sm font-medium text-marketing-text-muted transition-colors hover:border-nym-primary/30 hover:text-nym-primary sm:justify-start sm:border-0 sm:p-0"
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
