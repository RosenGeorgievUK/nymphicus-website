import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { platformUrls } from "@/lib/site";

type CTABandProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  bookDemoLabel: string;
  className?: string;
};

export function CTABand({
  title,
  subtitle,
  primaryLabel,
  bookDemoLabel,
  className = "",
}: CTABandProps) {
  return (
    <section
      className={`relative overflow-hidden py-14 md:py-20 ${className}`}
      aria-labelledby="cta-band-heading"
    >
      <div className="absolute inset-0 bg-gradient-nym" aria-hidden />
      <div className="absolute inset-0 cta-grid opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-marketing-bg/30" aria-hidden />

      <div className="relative mx-auto max-w-nym px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-band-heading"
          className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight text-on-gradient"
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-on-gradient opacity-90">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GradientButton
            href={platformUrls.register}
            size="lg"
            className="min-w-[220px] shadow-xl"
          >
            {primaryLabel}
          </GradientButton>
          <GhostButton
            href={platformUrls.bookDemo}
            size="lg"
            className="min-w-[220px] border-on-gradient/30 bg-marketing-bg/20 text-on-gradient hover:bg-marketing-bg/30 hover:text-on-gradient"
          >
            {bookDemoLabel}
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
