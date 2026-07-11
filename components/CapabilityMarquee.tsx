type CapabilityMarqueeProps = {
  capabilities: string[];
  ariaLabel: string;
};

export function CapabilityMarquee({ capabilities, ariaLabel }: CapabilityMarqueeProps) {
  const items = [...capabilities, ...capabilities];

  return (
    <section className="border-y border-marketing-border bg-marketing-surface/50 py-6" aria-label={ariaLabel}>
      <div className="mx-auto max-w-nym overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="marquee-track flex w-max gap-3 motion-safe:animate-marquee">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="shrink-0 rounded-full border border-nym-primary/20 bg-marketing-bg px-4 py-1.5 text-sm text-marketing-text-muted transition-colors hover:border-nym-primary/40 hover:text-marketing-text"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
