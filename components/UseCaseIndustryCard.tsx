import Link from "next/link";

type UseCaseIndustryCardProps = {
  title: string;
  outcome: string;
  integrations: string[];
  href?: string;
};

export function UseCaseIndustryCard({
  title,
  outcome,
  integrations,
  href = "/templates",
}: UseCaseIndustryCardProps) {
  return (
    <Link
      href={href}
      className="nym-focus group relative flex h-full flex-col overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-nym-primary/35 hover:shadow-xl hover:shadow-nym-primary/10 md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-nym opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <h2 className="text-lg font-semibold text-marketing-text transition-colors group-hover:text-nym-primary">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-marketing-text-muted">{outcome}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {integrations.map((integration) => (
          <span
            key={integration}
            className="rounded-full border border-marketing-border bg-marketing-surface-elevated px-2.5 py-0.5 text-xs text-marketing-text-muted transition-colors group-hover:border-nym-primary/20"
          >
            {integration}
          </span>
        ))}
      </div>
      <span className="mt-5 text-xs font-medium text-nym-primary opacity-0 transition-opacity group-hover:opacity-100">
        View templates →
      </span>
    </Link>
  );
}
