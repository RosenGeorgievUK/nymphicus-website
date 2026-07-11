import { CTABand } from "@/components/CTABand";
import { ComparisonTable } from "@/components/ComparisonTable";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { platformUrls } from "@/lib/site";

type CompareViewProps = {
  locale: Locale;
};

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CompareView({ locale }: CompareViewProps) {
  const dict = getDictionary(locale);
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

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-nym-lg border border-marketing-border bg-marketing-surface p-4 md:p-8">
              <ComparisonTable />
            </div>
          </ScrollReveal>
          <p className="mt-10 text-center">
            <GradientButton href={platformUrls.register}>{page.startBuilding}</GradientButton>
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
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
