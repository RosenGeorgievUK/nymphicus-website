import Link from "next/link";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { IntegrationGrid } from "@/components/IntegrationGrid";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ProductPreviewContent } from "@/components/ProductPreviewContent";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

export function IntegrationsView() {
  const dict = getDictionary();
  const page = dict.pages.integrations;

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

      <PageSection size="compact" className="!pt-0">
        <ScrollReveal>
          <ProductInteractivePreview screenshot="mcpRegistry" alt={page.screenshotAlt!} glow>
            <ProductPreviewContent screenshot="mcpRegistry" alt={page.screenshotAlt!} />
          </ProductInteractivePreview>
        </ScrollReveal>
        <p className="mt-8 text-center">
          <GradientButton href={platformUrls.register} size="lg">
            {dict.cta.getStarted}
          </GradientButton>
        </p>
      </PageSection>

      <CapabilityMarquee
        capabilities={dict.common.capabilities}
        ariaLabel={dict.common.capabilityMarqueeAria}
      />

      <IntegrationGrid
        title={dict.data.integrationsHeading}
        footer={
          <>
            {dict.data.integrationsCustom}{" "}
            <Link href="/contact" className="font-medium text-nym-primary hover:underline">
              {dict.data.integrationsCustomLink}
            </Link>
          </>
        }
      />

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
