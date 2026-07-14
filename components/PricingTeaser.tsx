"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { PricingBillingToggle } from "@/components/PricingBillingToggle";
import { PricingSeatStepper } from "@/components/PricingSeatStepper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  defaultSeatsForTier,
  formatUsd,
  priceForTier,
  pricingTeaserTierIds,
  pricingTeaserDescriptions,
  pricingTiers,
  type PricingTierId,
} from "@/lib/pricing-page";

export function PricingTeaser() {
  const [annual, setAnnual] = useState(false);
  const [seats, setSeats] = useState<Record<PricingTierId, number>>(() => ({
    free: 1,
    starter: defaultSeatsForTier("starter"),
    pro: defaultSeatsForTier("pro"),
    team: defaultSeatsForTier("team"),
    enterprise: 1,
  }));

  const teaserTiers = useMemo(
    () => pricingTeaserTierIds.map((id) => pricingTiers.find((t) => t.id === id)!),
    [],
  );

  const enterpriseTier = pricingTiers.find((t) => t.id === "enterprise")!;

  return (
    <section
      className="section-y border-t border-marketing-border bg-marketing-surface/40"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Pricing</p>
            <h2 id="pricing-teaser-heading" className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-marketing-text">
              Start free. <span className="text-gradient">Scale on your terms.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-marketing-text-muted">
              No credit card. No per-task markup. Starter $19/mo, Pro $49/mo, Team $149/mo — adjust seats and see your
              price update.
            </p>
            <div className="mt-6 flex justify-center">
              <PricingBillingToggle annual={annual} onChange={setAnnual} />
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teaserTiers.map((tier) => {
            const tierSeats = seats[tier.id];
            const { price, note } = priceForTier(tier, annual, tierSeats);
            const highlighted = tier.id === "team";

            return (
              <ScrollReveal key={tier.id}>
                <article
                  className={`flex h-full flex-col rounded-nym-lg border p-6 md:p-7 ${
                    highlighted
                      ? "border-nym-primary/50 bg-marketing-surface shadow-lg shadow-nym-primary/10"
                      : tier.id === "free"
                        ? "border-marketing-border bg-marketing-surface"
                        : "border-marketing-border bg-marketing-surface"
                  }`}
                >
                  {tier.badge && (
                    <span className="mb-2 w-fit rounded-full bg-gradient-nym px-2.5 py-0.5 text-[10px] font-semibold text-on-gradient">
                      {tier.badge}
                    </span>
                  )}
                  <p className="text-sm font-medium text-nym-primary">{tier.name}</p>
                  <p
                    className="mt-2 text-3xl font-semibold tabular-nums text-marketing-text transition-opacity duration-300"
                    key={`${tier.id}-${annual}-${tierSeats}`}
                  >
                    {price}
                  </p>
                  {note && <p className="mt-1 text-xs text-marketing-text-muted">{note}</p>}

                  {tier.seatAdjustable && (
                    <PricingSeatStepper
                      seats={tierSeats}
                      min={tier.minSeats}
                      max={tier.maxSeats}
                      included={tier.includedSeats}
                      onChange={(next) => setSeats((prev) => ({ ...prev, [tier.id]: next }))}
                    />
                  )}

                  <p className="mt-3 flex-1 text-sm text-marketing-text-muted">
                    {pricingTeaserDescriptions[tier.id as keyof typeof pricingTeaserDescriptions]}
                  </p>
                  <div className="mt-6">
                    {tier.variant === "gradient" ? (
                      <GradientButton href={tier.ctaHref} className="w-full justify-center">
                        {tier.ctaLabel}
                      </GradientButton>
                    ) : (
                      <GhostButton href={tier.ctaHref} className="w-full justify-center">
                        {tier.ctaLabel}
                      </GhostButton>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <article className="mx-auto mt-4 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-nym-lg border border-marketing-border bg-marketing-surface/80 px-6 py-5 sm:flex-row">
            <div>
              <p className="text-sm font-medium text-nym-primary">{enterpriseTier.name}</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-marketing-text">
                {priceForTier(enterpriseTier, annual).price}
              </p>
              <p className="mt-1 text-xs text-marketing-text-muted">self-host · SSO · SLA · unlimited seats</p>
            </div>
            <GhostButton href={enterpriseTier.ctaHref} className="shrink-0 justify-center">
              {enterpriseTier.ctaLabel}
            </GhostButton>
          </article>
        </ScrollReveal>

        <p className="mt-8 text-center text-sm text-marketing-text-muted">
          <Link href="/pricing" className="font-medium text-nym-primary hover:underline">
            Compare all plans, add-ons, and FAQ →
          </Link>
        </p>
      </div>
    </section>
  );
}
