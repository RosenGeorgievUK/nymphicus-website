import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";

type CustomersViewProps = {
  locale: Locale;
};

export function CustomersView({ locale }: CustomersViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.customers;

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
          <div className="grid gap-6 md:grid-cols-3">
            {dict.data.caseStudies.map((study) => (
              <ScrollReveal key={study.slug}>
                <CaseStudyCard
                  study={study}
                  locale={locale}
                  readLabel={dict.common.readWorkflow}
                />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-marketing-text-muted">
            {page.shareStory}{" "}
            <Link href={localizePath(locale, "/contact")} className="font-medium text-nym-primary hover:underline">
              {page.shareStoryLink}
            </Link>
          </p>
        </div>
      </section>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
