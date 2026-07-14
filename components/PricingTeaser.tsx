import Link from "next/link";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pricingTeaserTiers } from "@/lib/pricing-page";

export function PricingTeaser() {
  return (
    <section className="section-y border-t border-marketing-border bg-marketing-surface/40" aria-labelledby="pricing-teaser-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Pricing</p>
            <h2 id="pricing-teaser-heading" className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-marketing-text">
              Start free. <span className="text-gradient">Scale on your terms.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-marketing-text-muted">
              No credit card. No per-task markup. Pro from £39/mo, Team £149/mo when your team is ready.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pricingTeaserTiers.map((tier) => (
            <ScrollReveal key={tier.id}>
              <article
                className={`flex h-full flex-col rounded-nym-lg border p-6 md:p-8 ${
                  tier.id === "free" || tier.id === "team"
                    ? "border-nym-primary/40 bg-marketing-surface shadow-lg shadow-nym-primary/10"
                    : "border-marketing-border bg-marketing-surface"
                }`}
              >
                <p className="text-sm font-medium text-nym-primary">{tier.name}</p>
                <p className="mt-2 text-3xl font-semibold text-marketing-text">{tier.price}</p>
                {tier.priceNote && (
                  <p className="mt-1 text-xs text-marketing-text-muted">{tier.priceNote}</p>
                )}
                <p className="mt-3 flex-1 text-sm text-marketing-text-muted">{tier.description}</p>
                <div className="mt-6">
                  {tier.id === "free" || tier.id === "team" ? (
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
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-marketing-text-muted">
          <Link href="/pricing" className="font-medium text-nym-primary hover:underline">
            Compare all plans and FAQ →
          </Link>
        </p>
      </div>
    </section>
  );
}
