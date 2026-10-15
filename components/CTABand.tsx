import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { platformUrls } from "@/lib/site";

type CTABandProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  className?: string;
};

export function CTABand({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  className = "",
}: CTABandProps) {
  return (
    <section
      className={`border-t border-marketing-border bg-marketing-surface py-14 md:py-16 ${className}`}
      aria-labelledby="cta-band-heading"
    >
      <div className="mx-auto max-w-nym px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-band-heading" className="text-section-title font-semibold text-marketing-text">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-marketing-text-muted">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton href={platformUrls.register} size="lg">
            {primaryLabel}
          </GradientButton>
          <GhostButton href={platformUrls.bookDemo} size="lg">
            {secondaryLabel}
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
