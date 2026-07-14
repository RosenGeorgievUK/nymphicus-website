import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { changelogEntries } from "@/lib/changelog";

type ChangelogStripProps = {
  title: string;
  viewAllLabel: string;
  changelogHref: string;
};

export function ChangelogStrip({ title, viewAllLabel, changelogHref }: ChangelogStripProps) {
  const recent = changelogEntries.slice(0, 3);

  return (
    <section className="border-t border-marketing-border py-12 md:py-14" aria-labelledby="changelog-strip-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="changelog-strip-heading" className="text-lg font-semibold text-marketing-text">
              {title}
            </h2>
            <Link href={changelogHref} className="text-sm font-medium text-nym-primary hover:underline">
              {viewAllLabel} →
            </Link>
          </div>
        </ScrollReveal>

        <ul className="mt-6 divide-y divide-marketing-border/60">
          {recent.map((entry) => (
            <li key={entry.version} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-marketing-text">
                  <span className="text-nym-primary">v{entry.version}</span> — {entry.title}
                </p>
                <p className="mt-1 text-sm text-marketing-text-muted">{entry.changes[0]?.text}</p>
              </div>
              <time className="shrink-0 text-xs text-marketing-text-muted">{entry.date}</time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
