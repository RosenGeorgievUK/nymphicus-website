import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { CASE_STUDY_ASSETS } from "@/lib/view-helpers";

type CustomersSlugViewProps = {
  locale: Locale;
  slug: string;
};

export function CustomersSlugView({ locale, slug }: CustomersSlugViewProps) {
  const dict = getDictionary(locale);
  const study = dict.data.caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  const assets = CASE_STUDY_ASSETS[slug] ?? {
    integrations: [],
    screenshots: ["dashboard" as const],
  };
  const otherStudies = dict.data.caseStudies.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="section-y-lg">
        <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">
              {study.industry} · Case study
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight text-marketing-text">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-marketing-text-muted">{study.company}</p>
            <p className="mt-2 text-sm text-marketing-text-muted">
              {dict.common.illustrativeDisclaimer}
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <div className="flex flex-wrap gap-6 rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 md:p-8">
              {study.results.map((result) => (
                <div key={result.label}>
                  <p className="text-2xl font-semibold text-gradient md:text-3xl">{result.value}</p>
                  <p className="mt-1 text-sm text-marketing-text-muted">{result.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-xl font-semibold text-marketing-text">{dict.common.challenge}</h2>
                <p className="mt-4 leading-relaxed text-marketing-text-muted">{study.challenge}</p>

                <h2 className="mt-10 text-xl font-semibold text-marketing-text">{dict.common.solution}</h2>
                <p className="mt-4 leading-relaxed text-marketing-text-muted">{study.solution}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {assets.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="rounded-full border border-marketing-border px-3 py-1 text-xs text-marketing-text-muted"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <ProductScreenshot
                screenshot={assets.screenshots[0]}
                alt={`${study.title} workflow`}
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-marketing-text">{dict.common.whatTheyShipped}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {study.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-nym-lg border border-marketing-border bg-marketing-surface p-5 text-sm text-marketing-text"
              >
                <span className="mr-2 text-nym-primary">✓</span>
                {highlight}
              </li>
            ))}
          </ul>

          {assets.screenshots.length > 1 && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {assets.screenshots.slice(1).map((shot) => (
                <ScrollReveal key={shot}>
                  <ProductScreenshot screenshot={shot} alt={`${study.title} — ${shot}`} />
                </ScrollReveal>
              ))}
            </div>
          )}

          <p className="mt-8 text-sm text-marketing-text-muted">
            {dict.common.startedFromTemplate}{" "}
            <Link href={localizePath(locale, "/templates")} className="font-medium text-nym-primary hover:underline">
              {study.template}
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-marketing-border bg-marketing-surface/40 py-12 md:py-16">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TestimonialCard
              quote={study.quote.text}
              name={study.quote.name}
              role={study.quote.role}
              company={study.company}
            />
          </ScrollReveal>
        </div>
      </section>

      {otherStudies.length > 0 && (
        <section className="section-y">
          <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-marketing-text">{dict.common.moreStories}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={localizePath(locale, `/customers/${other.slug}`)}
                  className="nym-focus rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 transition-colors hover:border-nym-primary/30"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-nym-primary">
                    {other.industry}
                  </p>
                  <p className="mt-2 font-semibold text-marketing-text">{other.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
