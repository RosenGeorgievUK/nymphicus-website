import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const typeStyles = {
  feature: "bg-nym-primary/15 text-nym-primary",
  improvement: "bg-nym-info/15 text-nym-info",
  fix: "bg-nym-warning/15 text-nym-warning",
};

export function ChangelogView() {
  const dict = getDictionary();
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

      <PageSection>
        <div className="mx-auto max-w-2xl space-y-10">
          {dict.data.changelogEntries.map((entry) => (
            <ScrollReveal key={entry.version}>
              <article className="surface-card border-b-0 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="inline-flex items-center rounded-full border border-nym-primary/25 bg-nym-primary/10 px-3 py-1 text-xs font-semibold text-nym-primary">
                    v{entry.version}
                  </span>
                  <time className="text-sm text-marketing-text-muted">{entry.date}</time>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-marketing-text">{entry.title}</h2>
                <ul className="mt-6 space-y-3">
                  {entry.changes.map((change) => (
                    <li key={change.text} className="flex items-start gap-3 text-base text-marketing-text">
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
          <Link href="/contact" className="font-medium text-nym-primary hover:underline">
            {page.betaLink}
          </Link>
        </p>
      </PageSection>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        secondaryLabel={dict.cta.talkToSales}
      />
    </>
  );
}
