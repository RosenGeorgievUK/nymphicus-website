type ValuePillarProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
};

export function ValuePillar({ icon, title, description, highlight }: ValuePillarProps) {
  return (
    <article className="group relative overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface p-8 transition-all duration-300 hover:border-nym-primary/40 hover:shadow-lg hover:shadow-nym-primary/10">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-nym-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
        aria-hidden
      />
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-nym-lg bg-gradient-nym text-on-gradient shadow-nym-primary"
        aria-hidden
      >
        {icon}
      </div>
      {highlight && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-nym-primary">
          {highlight}
        </p>
      )}
      <h3 className="text-xl font-semibold text-marketing-text">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-marketing-text-muted md:text-base">
        {description}
      </p>
    </article>
  );
}
