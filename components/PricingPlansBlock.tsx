"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { PricingBillingToggle } from "@/components/PricingBillingToggle";
import { PricingCard } from "@/components/PricingCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { defaultSeatsForTier, pricingHero, pricingTiers, type PricingTierId } from "@/lib/pricing-page";

export function PricingPlansBlock() {
  const [annual, setAnnual] = useState(false);
  const [seats, setSeats] = useState<Record<PricingTierId, number>>(() => ({
    free: 1,
    starter: defaultSeatsForTier("starter"),
    pro: defaultSeatsForTier("pro"),
    team: defaultSeatsForTier("team"),
    enterprise: 1,
  }));

  return (
    <>
      <PageHero eyebrow={pricingHero.eyebrow} title={pricingHero.title} subtitle={pricingHero.subtitle}>
        <div className="flex justify-center">
          <PricingBillingToggle annual={annual} onChange={setAnnual} />
        </div>
      </PageHero>

      <PageSection size="compact" className="!border-t-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={index * 60}>
              <PricingCard
                tier={tier}
                annual={annual}
                seats={seats[tier.id]}
                onSeatsChange={
                  tier.seatAdjustable
                    ? (next) => setSeats((prev) => ({ ...prev, [tier.id]: next }))
                    : undefined
                }
              />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-marketing-text-muted">
          LLM costs are billed separately by your provider — we do not add a per-task credit markup. Annual billing saves
          20%.
        </p>
      </PageSection>
    </>
  );
}
