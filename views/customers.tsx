import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function CustomersView() {
  const dict = getDictionary();
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

      <PageSection>
        <p className="mb-8 rounded-nym border border-nym-primary/20 bg-nym-primary-50 px-4 py-3 text-center text-sm text-marketing-text-muted">
          {dict.common.illustrativeDisclaimer}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.data.caseStudies.map((study) => (
            <ScrollReveal key={study.slug}>
              <CaseStudyCard study={study} readLabel={dict.common.readWorkflow} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-marketing-text-muted">
          {page.shareStory}{" "}
          <Link href="/contact" className="font-medium text-nym-primary hover:underline">
            {page.shareStoryLink}
          </Link>
        </p>
      </PageSection>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        secondaryLabel={dict.cta.talkToSales}
      />
    </>
  );
}
