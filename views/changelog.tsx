import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";

type ChangelogViewProps = {
  locale: Locale;
};

const typeStyles = {
  feature: "bg-nym-primary/15 text-nym-primary",
  improvement: "bg-nym-info/15 text-nym-info",
  fix: "bg-nym-warning/15 text-nym-warning",
};

export function ChangelogView({ locale }: ChangelogViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.changelog;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow!}
        title={
          <>
            {page.heroTitle}{" "}
            <span className="text-gradient">{page.heroTitleHighlight}</span>
          </>
        }
        subtitle={page.heroSubtitle}
      />

      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-12">
            {dict.data.changelogEntries.map((entry) => (
              <ScrollReveal key={entry.version}>
                <article className="border-b border-marketing-border pb-12 last:border-0">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="rounded-full border border-nym-primary/30 bg-nym-primary-50 px-3 py-1 text-xs font-semibold text-nym-primary">
                      v{entry.version}
                    </span>
                    <time className="text-sm text-marketing-text-muted">{entry.date}</time>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-marketing-text">{entry.title}</h2>
                  <ul className="mt-6 space-y-3">
                    {entry.changes.map((change) => (
                      <li key={change.text} className="flex items-start gap-3 text-sm text-marketing-text">
                        <span
                          className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase ${typeStyles[change.type]}`}
                        >
                          {change.type}
                        </span>
                        {change.text}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-marketing-text-muted">
            {page.betaPrompt}{" "}
            <Link href={localizePath(locale, "/contact")} className="font-medium text-nym-primary hover:underline">
              {page.betaLink}
            </Link>
          </p>
        </div>
      </section>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
