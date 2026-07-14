"use client";

type PricingSeatStepperProps = {
  seats: number;
  min: number;
  max: number;
  included: number;
  onChange: (seats: number) => void;
};

export function PricingSeatStepper({ seats, min, max, included, onChange }: PricingSeatStepperProps) {
  return (
    <div className="mt-4 rounded-lg border border-marketing-border/80 bg-marketing-bg/40 px-3 py-2.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-marketing-text">Seats</p>
          <p className="text-[10px] text-marketing-text-muted">{included} included</p>
        </div>
        <div className="flex items-center gap-2" role="group" aria-label="Adjust seat count">
          <button
            type="button"
            className="nym-focus flex h-8 w-8 items-center justify-center rounded-md border border-marketing-border bg-marketing-surface text-lg leading-none text-marketing-text disabled:opacity-40"
            aria-label="Remove seat"
            disabled={seats <= min}
            onClick={() => onChange(Math.max(min, seats - 1))}
          >
            −
          </button>
          <span className="min-w-[2ch] text-center text-sm font-semibold tabular-nums text-marketing-text">
            {seats}
          </span>
          <button
            type="button"
            className="nym-focus flex h-8 w-8 items-center justify-center rounded-md border border-marketing-border bg-marketing-surface text-lg leading-none text-marketing-text disabled:opacity-40"
            aria-label="Add seat"
            disabled={seats >= max}
            onClick={() => onChange(Math.min(max, seats + 1))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
