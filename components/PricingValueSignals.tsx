type PricingValueSignal = {
  value: string;
  label: string;
  detail: string;
};

type PricingValueSignalsProps = {
  signals: PricingValueSignal[];
  ariaLabel?: string;
};

export function PricingValueSignals({
  signals,
  ariaLabel = "Pricing value signals",
}: PricingValueSignalsProps) {
  return (
    <section className="border-y border-marketing-border bg-marketing-surface/50 py-10 md:py-12" aria-label={ariaLabel}>
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {signals.map((signal) => (
            <div key={signal.label} className="text-center">
              <p className="text-2xl font-semibold text-gradient md:text-3xl">{signal.value}</p>
              <p className="mt-1 text-sm font-medium text-marketing-text">{signal.label}</p>
              <p className="mt-0.5 text-xs text-marketing-text-muted">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
