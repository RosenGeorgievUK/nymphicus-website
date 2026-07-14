"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { PricingBillingToggle } from "@/components/PricingBillingToggle";
import { PricingPlanCard } from "@/components/PricingPlanCard";
import { PricingSeatStepper } from "@/components/PricingSeatStepper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  CLOUD_PLAN,
  featuresForTier,
  priceForTier,
  pricingHero,
  pricingTiers,
  STARTER_PLAN,
} from "@/lib/pricing-page";

export function PricingPlansBlock() {
  const [annual, setAnnual] = useState(false);
  const [starterSeats, setStarterSeats] = useState<number>(STARTER_PLAN.defaultSeats);
  const [cloudSeats, setCloudSeats] = useState<number>(CLOUD_PLAN.defaultSeats);

  return (
    <>
      <PageHero eyebrow={pricingHero.eyebrow} title={pricingHero.title} subtitle={pricingHero.subtitle}>
        <div className="flex justify-center">
          <PricingBillingToggle annual={annual} onChange={setAnnual} />
        </div>
      </PageHero>

      <PageSection size="compact" className="!border-t-0">
        <div className="grid items-stretch gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => {
            const seats = tier.id === "cloud" ? cloudSeats : tier.id === "starter" ? starterSeats : undefined;
            const { price, note, volumeActive } = priceForTier(tier, annual, seats);
            const features = featuresForTier(tier, seats);
            const billingNote = annual && tier.id !== "free" ? "Save 20% with annual billing" : undefined;

            return (
              <ScrollReveal key={tier.id} delay={index * 60}>
                <div className="h-full">
                  <PricingPlanCard
                    tier={tier}
                    price={price}
                    priceNote={note}
                    billingNote={billingNote}
                    features={features}
                  >
                    {tier.id === "starter" && (
                      <PricingSeatStepper
                        seats={starterSeats}
                        min={STARTER_PLAN.minSeats}
                        max={STARTER_PLAN.maxSeats}
                        included={STARTER_PLAN.includedSeats}
                        onChange={setStarterSeats}
                      />
                    )}
                    {tier.id === "cloud" && (
                      <>
                        <PricingSeatStepper
                          seats={cloudSeats}
                          min={CLOUD_PLAN.minSeats}
                          max={CLOUD_PLAN.maxSeats}
                          included={CLOUD_PLAN.teamThreshold}
                          onChange={setCloudSeats}
                        />
                        {volumeActive && (
                          <p className="mt-2 rounded-md bg-emerald-500/10 px-2 py-1 text-center text-[10px] font-medium text-emerald-400">
                            Volume pricing active — Team features unlocked
                          </p>
                        )}
                      </>
                    )}
                  </PricingPlanCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm text-marketing-text-muted">
          LLM costs are billed separately by your provider. Annual billing saves 20%. Pro pricing scales with seats —
          more seats, lower per-seat cost.
        </p>
      </PageSection>
    </>
  );
}
