import Link from "next/link";
import type { CaseStudyCopy } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";

type CaseStudyCardProps = {
  study: CaseStudyCopy;
  locale: Locale;
  readLabel: string;
  featured?: boolean;
};

export function CaseStudyCard({ study, locale, readLabel, featured = false }: CaseStudyCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-nym-lg border bg-marketing-surface transition-all hover:-translate-y-0.5 hover:border-nym-primary/35 hover:shadow-xl hover:shadow-nym-primary/10 ${
        featured ? "border-nym-primary/30 p-8 md:p-10" : "border-marketing-border p-6 md:p-8"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-nym-primary">
        {study.industry}
      </p>
      <h2 className={`mt-2 font-semibold text-marketing-text ${featured ? "text-2xl" : "text-xl"}`}>
        {study.title}
      </h2>
      <p className="mt-1 text-sm text-marketing-text-muted">{study.company}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-marketing-text-muted">
        {study.challenge.slice(0, 140)}…
      </p>

      <div className="mt-5 flex flex-wrap gap-4">
        {study.results.slice(0, 2).map((result) => (
          <div key={result.label}>
            <p className="text-lg font-semibold text-gradient">{result.value}</p>
            <p className="text-xs text-marketing-text-muted">{result.label}</p>
          </div>
        ))}
      </div>

      <Link
        href={localizePath(locale, `/customers/${study.slug}`)}
        className="nym-focus mt-6 inline-flex text-sm font-medium text-nym-primary hover:underline"
      >
        {readLabel}
      </Link>
    </article>
  );
}
