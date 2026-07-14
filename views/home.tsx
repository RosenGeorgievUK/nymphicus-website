import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { HeroBackground } from "@/components/HeroBackground";
import { HomeFeatureGrid } from "@/components/HomeFeatureGrid";
import { HomeFeatureSpotlight } from "@/components/HomeFeatureSpotlight";
import { IntegrationMarquee } from "@/components/IntegrationMarquee";
import { PageSection } from "@/components/PageSection";
import { ProductPreviewFrame } from "@/components/ProductPreviewFrame";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";
import { SPOTLIGHT_SCREENSHOTS } from "@/lib/view-helpers";

export function HomeView() {
  const dict = getDictionary();
  const p = (href: string) => href;

  return (
    <>
      <section className="relative isolate overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="motion-safe:animate-slide-up mb-6 [animation-delay:0ms]">
              <span className="inline-flex items-center rounded-full border border-nym-primary/25 bg-nym-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-nym-primary">
                {dict.site.heroBadge}
              </span>
            </p>
            <h1 className="motion-safe:animate-slide-up text-hero font-semibold text-marketing-text [animation-delay:80ms]">
              {dict.site.heroTitlePrefix}{" "}
              <span className="text-gradient">{dict.site.heroGradientPhrase}</span>
              <br />
              {dict.site.heroTitleSuffix}
            </h1>
            <p className="motion-safe:animate-slide-up mx-auto mt-6 max-w-2xl text-hero-sub text-marketing-text-muted [animation-delay:160ms]">
              {dict.site.heroSubhead}
            </p>

            <div className="motion-safe:animate-slide-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 [animation-delay:240ms]">
              <GradientButton href={platformUrls.register} size="lg" glow>
                {dict.site.getStartedFree}
              </GradientButton>
              <GhostButton href={platformUrls.bookDemo} size="lg">
                {dict.cta.bookDemo}
              </GhostButton>
            </div>

            <p className="motion-safe:animate-slide-up mt-5 text-sm text-marketing-text-muted [animation-delay:320ms]">
              {dict.site.heroFootnote}
            </p>
          </div>

          <ScrollReveal className="mx-auto mt-14 max-w-5xl md:mt-20" delay={400}>
            <ProductPreviewFrame
              screenshot="dashboard"
              alt={dict.site.heroScreenshotAlt}
              glow
            />
          </ScrollReveal>
        </div>
      </section>

      <HomeFeatureGrid
        eyebrow={dict.home.bentoEyebrow}
        title={dict.home.bentoTitle}
        titleHighlight={dict.home.bentoTitleHighlight}
        subtitle={dict.home.bentoSubtitle}
        items={dict.home.bentoItems.map((item) => ({ ...item, href: p(item.href) }))}
        links={{
          ...dict.home.bentoLinks,
          hrefs: {
            templates: p("/templates"),
            features: p("/features"),
            useCases: p("/use-cases"),
          },
        }}
      />

      <HomeFeatureSpotlight
        items={dict.home.spotlights}
        screenshots={SPOTLIGHT_SCREENSHOTS}
        localizeHref={p}
      />

      <IntegrationMarquee
        title={dict.home.integrationsSection.title}
        subtitle={dict.home.integrationsSection.subtitle}
        ctaLabel={dict.home.integrationsSection.cta}
        ctaHref={p("/integrations")}
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
        <FAQAccordion items={dict.data.homepageFaq.slice(0, 3)} className="mx-auto mt-10 max-w-2xl" />
        <p className="mt-8 text-center text-sm text-marketing-text-muted">
          <Link href={p("/pricing")} className="font-medium text-nym-primary hover:underline">
            {dict.common.pricingFaqLink}
          </Link>
        </p>
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
