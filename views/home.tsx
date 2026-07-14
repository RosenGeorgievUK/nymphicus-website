import dynamic from "next/dynamic";
import Link from "next/link";
import { ChangelogStrip } from "@/components/ChangelogStrip";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { HomeFeatureGrid } from "@/components/HomeFeatureGrid";
import { HomeHero } from "@/components/HomeHero";
import { IntegrationMarquee } from "@/components/IntegrationMarquee";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const ProductDemoSection = dynamic(
  () => import("@/components/ProductDemoSection").then((mod) => mod.ProductDemoSection),
  { ssr: true },
);

const PricingTeaser = dynamic(
  () => import("@/components/PricingTeaser").then((mod) => mod.PricingTeaser),
  { ssr: true },
);

export function HomeView() {
  const dict = getDictionary();
  const p = (href: string) => href;
  const featuredCaseStudy = dict.data.caseStudies[0];

  return (
    <>
      <HomeHero
        intro={dict.site.heroIntro}
        useCases={dict.site.heroUseCases}
        subhead={dict.site.heroSubhead}
        footnote={dict.site.heroFootnote}
        screenshotAlt={dict.site.heroScreenshotAlt}
        socialProof={dict.site.socialProof}
        primaryCta={dict.cta.getStartedFree}
        secondaryCta={dict.cta.seeInAction}
      />

      <ProductDemoSection />

      <HomeFeatureGrid
        title={
          <>
            {dict.home.bentoTitle}{" "}
            {dict.home.bentoTitleHighlight && (
              <span className="mx-1 inline-flex items-center rounded-lg border border-marketing-border px-2.5 py-0.5 text-[0.92em] font-medium text-marketing-text-muted">
                {dict.home.bentoTitleHighlight}
              </span>
            )}{" "}
            {dict.home.bentoTitleSuffix}
          </>
        }
        items={dict.home.bentoItems}
        browseAllHref="/templates"
        browseAllLabel={dict.home.bentoLinks.templates}
        localizeHref={p}
      />

      <IntegrationMarquee
        title={dict.home.integrationsSection.title}
        subtitle={dict.home.integrationsSection.subtitle}
        ctaLabel={dict.home.integrationsSection.cta}
        ctaHref={p("/integrations")}
      />

      {featuredCaseStudy && (
        <FeaturedCaseStudy
          eyebrow={dict.home.caseStudyEyebrow}
          title={
            <>
              {dict.home.caseStudyTitle}{" "}
              <span className="text-gradient">{dict.home.caseStudyTitleHighlight}</span>
            </>
          }
          subtitle={dict.home.caseStudySubtitle}
          featured={featuredCaseStudy}
          readWorkflowLabel={dict.common.readWorkflow}
          seeAllWorkflowsLabel={dict.common.seeAllWorkflows}
          customersHref={p("/customers")}
          studyHref={p(`/customers/${featuredCaseStudy.slug}`)}
        />
      )}

      <PageSection size="compact" className="!border-t-0 !pt-0">
        <ScrollReveal>
          <TrustBadges
            badges={dict.common.trustBadges}
            ariaLabel={dict.common.trustBadgesAria}
            className="justify-center"
          />
          <p className="mt-4 text-center text-xs text-marketing-text-muted">
            {dict.common.illustrativeDisclaimer}
          </p>
        </ScrollReveal>
      </PageSection>

      <PricingTeaser />

      <ChangelogStrip
        title={dict.home.changelogStripTitle}
        viewAllLabel={dict.home.changelogStripViewAll}
        changelogHref={p("/changelog")}
      />

      <PageSection size="lg" ariaLabelledBy="faq-heading">
        <ScrollReveal>
          <SectionHeading
            id="faq-heading"
            eyebrow={dict.home.faqEyebrow}
            title={dict.home.faqTitle}
            align="center"
          />
        </ScrollReveal>
        <FAQAccordion items={dict.data.homepageFaq} className="mx-auto mt-10 max-w-2xl" />
        <p className="mt-8 text-center text-sm text-marketing-text-muted">
          <Link href={p("/features")} className="font-medium text-nym-primary hover:underline">
            All features
          </Link>
          {" · "}
          <Link href={p("/security")} className="font-medium text-nym-primary hover:underline">
            Security
          </Link>
          {" · "}
          <Link href={p("/compare")} className="font-medium text-nym-primary hover:underline">
            Compare
          </Link>
          {" · "}
          <Link href={p("/pricing")} className="font-medium text-nym-primary hover:underline">
            {dict.common.pricingFaqLink}
          </Link>
        </p>
      </PageSection>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        secondaryLabel={dict.common.ctaBand.secondaryLabel}
      />
    </>
  );
}
