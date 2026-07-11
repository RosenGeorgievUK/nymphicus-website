import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";

type PricingCardProps = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  highlighted?: boolean;
  variant?: "gradient" | "ghost";
};

export function PricingCard({
  name,
  price,
  priceNote,
  description,
  features,
  ctaHref,
  ctaLabel,
  highlighted = false,
  variant = "gradient",
}: PricingCardProps) {
  const Cta = variant === "gradient" ? GradientButton : GhostButton;

  const card = (
    <article
      className={`flex h-full flex-col rounded-nym-lg p-6 md:p-8 ${
        highlighted
          ? "border-gradient relative"
          : "border border-marketing-border bg-marketing-surface"
      }`}
    >
      <div className={highlighted ? "relative" : ""}>
        <h3 className="text-lg font-semibold text-marketing-text">{name}</h3>
        <p className="mt-2 text-3xl font-semibold text-marketing-text">{price}</p>
        {priceNote && (
          <p className="mt-1 text-xs text-marketing-text-muted">{priceNote}</p>
        )}
        <p className="mt-2 text-sm text-marketing-text-muted">{description}</p>

        <ul className="mt-6 flex-1 space-y-3">
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
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Cta href={ctaHref} className="w-full justify-center">
            {ctaLabel}
          </Cta>
        </div>
      </div>
    </article>
  );

  return card;
}
