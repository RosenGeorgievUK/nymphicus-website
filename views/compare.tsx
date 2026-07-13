import { CTABand } from "@/components/CTABand";
import { ComparisonTable } from "@/components/ComparisonTable";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CompareView() {
  const dict = getDictionary();
  const page = dict.pages.compare;

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

      <PageSection size="compact" className="!border-t-0">
        <ScrollReveal>
          <div className="surface-card overflow-hidden p-4 md:p-8">
            <ComparisonTable />
          </div>
        </ScrollReveal>
        <p className="mt-10 text-center">
          <GradientButton href={platformUrls.register} size="lg">
            {page.startBuilding}
          </GradientButton>
        </p>
      </PageSection>

      <PageSection>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {dict.data.comparePillars.map((pillar) => (
            <ScrollReveal key={pillar.title}>
              <ValuePillar
                icon={<CheckIcon />}
                highlight={pillar.highlight}
                title={pillar.title}
                description={pillar.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </PageSection>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
