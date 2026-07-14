"use client";

import Link from "next/link";
import { useState } from "react";
import { PricingBillingToggle } from "@/components/PricingBillingToggle";
import { PricingPlanCard } from "@/components/PricingPlanCard";
import { PricingSeatStepper } from "@/components/PricingSeatStepper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  CLOUD_PLAN,
  featuresForTier,
  priceForTier,
  pricingTiers,
  STARTER_PLAN,
} from "@/lib/pricing-page";

export function PricingTeaser() {
  const [annual, setAnnual] = useState(false);
  const [starterSeats, setStarterSeats] = useState<number>(STARTER_PLAN.defaultSeats);
  const [cloudSeats, setCloudSeats] = useState<number>(CLOUD_PLAN.defaultSeats);

  return (
    <section
      className="section-y border-t border-marketing-border bg-marketing-surface/40"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Pricing</p>
            <h2
              id="pricing-teaser-heading"
              className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-marketing-text"
            >
              Start free. <span className="text-gradient">Scale on your terms.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-marketing-text-muted">
              No credit card. No per-task markup. One Pro plan — add seats and your per-seat price drops automatically.
            </p>
            <div className="mt-6 flex justify-center">
              <PricingBillingToggle annual={annual} onChange={setAnnual} />
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier) => {
            const seats = tier.id === "cloud" ? cloudSeats : tier.id === "starter" ? starterSeats : undefined;
            const { price, note, volumeActive } = priceForTier(tier, annual, seats);
            const features = featuresForTier(tier, seats);
            const billingNote = annual && tier.id !== "free" ? "Save 20% with annual billing" : undefined;

            return (
              <ScrollReveal key={tier.id} className="h-full">
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
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-marketing-text-muted">
          <Link href="/pricing" className="font-medium text-nym-primary hover:underline">
            Compare all plans, add-ons, and FAQ →
          </Link>
        </p>
      </div>
    </section>
  );
}
