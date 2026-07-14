"use client";

type PricingBillingToggleProps = {
  annual: boolean;
  onChange: (annual: boolean) => void;
};

export function PricingBillingToggle({ annual, onChange }: PricingBillingToggleProps) {
  return (
    <div
      className="inline-flex items-center gap-3 rounded-full border border-marketing-border bg-marketing-surface/50 p-1"
      role="group"
      aria-label="Billing period"
    >
      <button
        type="button"
        className={`nym-focus rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !annual ? "bg-gradient-nym text-on-gradient shadow-nym-primary" : "text-marketing-text-muted hover:text-marketing-text"
        }`}
        aria-pressed={!annual}
        onClick={() => onChange(false)}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`nym-focus flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          annual ? "bg-gradient-nym text-on-gradient shadow-nym-primary" : "text-marketing-text-muted hover:text-marketing-text"
        }`}
        aria-pressed={annual}
        onClick={() => onChange(true)}
      >
        Annual
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
            annual ? "bg-marketing-bg/25 text-on-gradient" : "bg-nym-primary/15 text-nym-primary"
          }`}
        >
          Save 20%
        </span>
      </button>
    </div>
  );
}
