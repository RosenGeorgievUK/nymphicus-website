import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { UseCaseIndustryCard } from "@/components/UseCaseIndustryCard";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { USE_CASE_INTEGRATIONS } from "@/lib/view-helpers";

export function UseCasesView() {
  const dict = getDictionary();
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

      <PageSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {dict.data.industryUseCases.map((useCase, index) => (
            <ScrollReveal key={useCase.title}>
              <UseCaseIndustryCard
                title={useCase.title}
                outcome={useCase.outcome}
                integrations={[...(USE_CASE_INTEGRATIONS[index] ?? [])]}
                href="/templates"
              />
            </ScrollReveal>
          ))}
        </div>
      </PageSection>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={page.ctaBandSubtitle!}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        secondaryLabel={dict.cta.talkToSales}
      />
    </>
  );
}
