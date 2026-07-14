import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { PricingSeatStepper } from "@/components/PricingSeatStepper";
import { priceForTier, type PricingTier } from "@/lib/pricing-page";

type PricingCardProps = {
  tier: PricingTier;
  annual: boolean;
  seats: number;
  onSeatsChange?: (seats: number) => void;
};

export function PricingCard({ tier, annual, seats, onSeatsChange }: PricingCardProps) {
  const { price, note } = priceForTier(tier, annual, seats);
  const Cta = tier.variant === "gradient" ? GradientButton : GhostButton;

  return (
    <article
      className={`relative flex h-full flex-col rounded-nym-lg p-6 md:p-8 ${
        tier.highlighted
          ? "border-gradient z-[1] scale-[1.02] shadow-xl shadow-nym-primary/15"
          : "surface-card"
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-nym px-3 py-1 text-xs font-semibold text-on-gradient shadow-nym-primary">
          {tier.badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-marketing-text">{tier.name}</h3>

      <p
        className="mt-3 text-3xl font-semibold tabular-nums text-marketing-text transition-opacity duration-300 motion-safe:animate-fade-in"
        key={`${tier.id}-${annual}-${seats}`}
      >
        {price}
      </p>
      {note && <p className="mt-1 text-xs text-marketing-text-muted">{note}</p>}

      {tier.seatAdjustable && onSeatsChange && (
        <PricingSeatStepper
          seats={seats}
          min={tier.minSeats}
          max={tier.maxSeats}
          included={tier.includedSeats}
          onChange={onSeatsChange}
        />
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
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
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Cta href={tier.ctaHref} className="w-full justify-center">
          {tier.ctaLabel}
        </Cta>
      </div>
    </article>
  );
}
