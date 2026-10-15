"use client";

import { useEffect, useState } from "react";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroDashboardPreview } from "@/components/HeroDashboardPreview";
import { platformUrls } from "@/lib/site";

type HeroUseCase = { role: string; action: string };
type HomeHeroProps = {
  headline: string;
  headlineAccent: string;
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
    <p className="mt-4 max-w-xl text-sm leading-relaxed text-marketing-text-muted">
      {intro}{" "}
      <span key={current.action} className="motion-safe:animate-fade-in text-marketing-text">
        {current.role} can {current.action}.
      </span>
    </p>
  );
}

export function HomeHero({
  headline,
  headlineAccent,
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
            <p className="mb-4 inline-flex items-center rounded-full border border-marketing-border bg-marketing-surface px-3 py-1 text-xs font-normal text-marketing-text-muted shadow-nym">
              {socialProof}
            </p>

            <h1 className="max-w-xl text-hero font-bold text-marketing-text">
              {headline} <span className="text-gradient">{headlineAccent}</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-marketing-text-muted">{subhead}</p>

            <HeroUseCaseRotator intro={intro} useCases={useCases} />

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GradientButton href={platformUrls.register} size="lg">
                {primaryCta}
              </GradientButton>
              <GhostButton href="#product-demo" size="lg">
                {secondaryCta}
              </GhostButton>
            </div>

            <p className="mt-4 text-sm text-marketing-text-muted">{footnote}</p>
          </div>

          <div>
            <HeroDashboardPreview alt={screenshotAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
