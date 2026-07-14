import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TrendingTemplateCard } from "@/components/TrendingTemplateCard";

type FeatureGridItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  cta: string;
  apps?: string[];
  iconSlugs?: string[];
};

type HomeFeatureGridProps = {
  title: ReactNode;
  items: FeatureGridItem[];
  browseAllHref: string;
  browseAllLabel: string;
  localizeHref: (href: string) => string;
};

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeFeatureGrid({
  title,
  items,
  browseAllHref,
  browseAllLabel,
  localizeHref,
}: HomeFeatureGridProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="feature-grid-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <ScrollReveal>
            <h2
              id="feature-grid-heading"
              className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-marketing-text"
            >
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80} className="shrink-0">
            <Link
              href={localizeHref(browseAllHref)}
              className="nym-focus inline-flex items-center gap-2 text-sm font-semibold text-nym-primary hover:underline"
            >
              {browseAllLabel}
              <ArrowIcon />
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 70}>
              <TrendingTemplateCard
                title={item.title}
                text={item.description}
                href={localizeHref(item.href)}
                apps={item.apps}
                iconSlugs={item.iconSlugs}
                category={item.category}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
