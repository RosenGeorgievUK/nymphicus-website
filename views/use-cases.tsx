import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { UseCaseIndustryCard } from "@/components/UseCaseIndustryCard";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { USE_CASE_INTEGRATIONS } from "@/lib/view-helpers";

type UseCasesViewProps = {
  locale: Locale;
};

export function UseCasesView({ locale }: UseCasesViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.useCases;

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

      <section className="section-y border-t border-marketing-border">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.data.industryUseCases.map((useCase, index) => (
              <ScrollReveal key={useCase.title}>
                <UseCaseIndustryCard
                  title={useCase.title}
                  outcome={useCase.outcome}
                  integrations={[...(USE_CASE_INTEGRATIONS[index] ?? [])]}
                  href={localizePath(locale, "/templates")}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={page.ctaBandSubtitle!}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
