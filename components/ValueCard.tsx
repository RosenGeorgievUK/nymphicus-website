type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <article className="rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 transition-colors hover:border-nym-primary/30 md:p-8">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-nym bg-nym-primary-100 text-nym-primary"
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-marketing-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-marketing-text-muted md:text-base">
        {description}
      </p>
    </article>
  );
}
