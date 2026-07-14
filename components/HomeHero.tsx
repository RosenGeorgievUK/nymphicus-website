"use client";

import { useEffect, useState } from "react";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroDashboardPreview } from "@/components/HeroDashboardPreview";
import { platformUrls } from "@/lib/site";

type HeroUseCase = { role: string; action: string };
type HomeHeroProps = {
  intro: string;
  useCases: HeroUseCase[];
  subhead: string;
  footnote: string;
  screenshotAlt: string;
  socialProof: string;
  primaryCta: string;
  secondaryCta: string;
};

function HeroUseCaseRotator({ intro, useCases }: { intro: string; useCases: HeroUseCase[] }) {
  const [index, setIndex] = useState(0);
  const current = useCases[index] ?? useCases[0];

  useEffect(() => {
    if (useCases.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % useCases.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [useCases.length]);

  if (!current) return null;

  return (
    <div className="mb-6 md:mb-8">
      <p className="max-w-xl text-sm leading-relaxed text-marketing-text-muted md:text-base">
        {intro}
      </p>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-marketing-text">
        <span className="text-marketing-text-muted">{current.role}</span>{" "}
        <span className="text-marketing-text">can</span>
        <br />
        <span
          key={current.action}
          className="text-gradient motion-safe:animate-fade-in"
        >
          {current.action}
        </span>
      </h1>
    </div>
  );
}

export function HomeHero({
  intro,
  useCases,
  subhead,
  footnote,
  screenshotAlt,
  socialProof,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-14">
          <div className="max-w-xl text-left lg:max-w-none">
            <p className="mb-4 inline-flex items-center rounded-full border border-marketing-border bg-marketing-surface/60 px-3 py-1 text-xs font-medium text-marketing-text-muted">
              {socialProof}
            </p>

            <HeroUseCaseRotator intro={intro} useCases={useCases} />

            <p className="max-w-lg text-base leading-relaxed text-marketing-text-muted md:text-lg">
              {subhead}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GradientButton href={platformUrls.register} size="lg" glow>
                {primaryCta}
              </GradientButton>
              <GhostButton href="#product-demo" size="lg">
                {secondaryCta}
              </GhostButton>
            </div>

            <p className="mt-4 text-sm text-marketing-text-muted">{footnote}</p>
          </div>

          <div className="lg:-mr-4 xl:-mr-8">
            <HeroDashboardPreview alt={screenshotAlt} className="hero-product-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
