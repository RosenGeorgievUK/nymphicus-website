import type { ReactNode } from "react";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import type { PricingTier } from "@/lib/pricing-page";

type PricingPlanCardProps = {
  tier: PricingTier;
  price: string;
  priceNote?: string;
  billingNote?: string;
  features: string[];
  children?: ReactNode;
};

export function PricingPlanCard({
  tier,
  price,
  priceNote,
  billingNote,
  features,
  children,
}: PricingPlanCardProps) {
  const Cta = tier.variant === "gradient" ? GradientButton : GhostButton;

  return (
    <article
      className={`relative flex h-full flex-col rounded-nym-lg border p-6 md:p-7 ${
        tier.highlighted
          ? "border-nym-primary/50 bg-marketing-surface shadow-lg shadow-nym-primary/10"
          : "border-marketing-border bg-marketing-surface"
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-nym px-3 py-1 text-xs font-semibold text-on-gradient shadow-nym-primary">
          {tier.badge}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-marketing-text">{tier.name}</h3>
        <p className="mt-2 min-h-[2.75rem] text-sm leading-snug text-marketing-text-muted">{tier.tagline}</p>

        <p
          className="mt-5 text-[2rem] font-semibold leading-none tabular-nums text-marketing-text"
          key={price}
        >
          {price}
        </p>
        {priceNote && <p className="mt-1.5 text-xs text-marketing-text-muted">{priceNote}</p>}
        {billingNote && <p className="mt-0.5 text-[11px] text-marketing-text-muted/80">{billingNote}</p>}

        <div className="mt-5">
          <Cta href={tier.ctaHref} className="w-full justify-center">
            {tier.ctaLabel}
          </Cta>
        </div>
        <p className="mt-2 text-center text-[10px] text-marketing-text-muted">
          {tier.id === "free" ? "No credit card required" : "No credit card required"}
        </p>

        {tier.hostedLabel && (
          <p className="mt-4 text-center text-[11px] font-medium text-nym-primary">{tier.hostedLabel}</p>
        )}
        {tier.id === "enterprise" && (
          <p className="mt-4 text-center text-[11px] font-medium text-marketing-text-muted">Self-hosted</p>
        )}

        {children}

        <div className="mt-5 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-marketing-text-muted">
            {tier.includesTitle}
          </p>
          <ul className="mt-3 space-y-2.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-marketing-text">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-nym-primary"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
