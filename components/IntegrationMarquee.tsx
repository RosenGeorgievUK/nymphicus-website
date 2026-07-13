import Link from "next/link";
import { GradientButton } from "@/components/GradientButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { integrationBrands } from "@/lib/integration-brands";

type IntegrationMarqueeProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

function BrandTile({ abbr, color, name }: { abbr: string; color: string; name: string }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-marketing-border/80 bg-marketing-surface/60 shadow-sm backdrop-blur-sm md:h-16 md:w-16"
      title={name}
    >
      <span
        className="text-sm font-bold md:text-base"
        style={{ color }}
        aria-hidden
      >
        {abbr}
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const brands = [...integrationBrands, ...integrationBrands];

  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-4 md:gap-5 ${
          reverse ? "motion-safe:animate-marquee-reverse" : "motion-safe:animate-marquee"
        }`}
      >
        {brands.map((brand, index) => (
          <BrandTile
            key={`${brand.name}-${index}`}
            abbr={brand.abbr}
            color={brand.color}
            name={brand.name}
          />
        ))}
      </div>
    </div>
  );
}

export function IntegrationMarquee({ title, subtitle, ctaLabel, ctaHref }: IntegrationMarqueeProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="integrations-marquee-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="integrations-marquee-heading"
              className="text-section-title font-semibold text-marketing-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-marketing-text-muted md:text-xl">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-marketing-bg to-transparent md:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-marketing-bg to-transparent md:w-28"
            aria-hidden
          />

          <div className="space-y-5">
            <MarqueeRow />
            <MarqueeRow reverse />
          </div>
        </div>

        <div className="mt-10 text-center">
          <GradientButton href={ctaHref}>{ctaLabel}</GradientButton>
        </div>
      </div>
    </section>
  );
}
