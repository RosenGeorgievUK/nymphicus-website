import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

type ComparisonColumn = {
  heading: string;
  points: string[];
  positive?: boolean;
};

type PricingByoComparisonProps = {
  title: string;
  typical: ComparisonColumn;
  nymphi: ComparisonColumn;
};

function CrossIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-nym-danger" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-nym-primary" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingByoComparison({ title, typical, nymphi }: PricingByoComparisonProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="byo-comparison-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading id="byo-comparison-heading" title={title} align="center" />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <ScrollReveal>
            <article className="surface-card h-full p-6 md:p-8">
              <h3 className="text-lg font-semibold text-marketing-text">{typical.heading}</h3>
              <p className="mt-2 text-sm text-marketing-text-muted">
                Subscription + marked-up AI credits + per-message fees
              </p>
              <ul className="mt-6 space-y-3">
                {typical.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-marketing-text-muted">
                    <CrossIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-nym-danger">= unpredictable bill</p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <article className="spotlight-card surface-card h-full border-nym-primary/30 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-marketing-text">{nymphi.heading}</h3>
              <p className="mt-2 text-sm text-marketing-text-muted">
                Flat subscription + your own API key at provider cost
              </p>
              <ul className="mt-6 space-y-3">
                {nymphi.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-marketing-text">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-nym-primary">= predictable bill</p>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
