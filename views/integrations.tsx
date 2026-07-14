import { CTABand } from "@/components/CTABand";
import { IntegrationDirectory } from "@/components/IntegrationDirectory";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ProductPreviewContent } from "@/components/ProductPreviewContent";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GradientButton } from "@/components/GradientButton";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";
import Link from "next/link";

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
          <ProductInteractivePreview alt={page.screenshotAlt!} glow>
            <ProductPreviewContent screenshot="mcpRegistry" alt={page.screenshotAlt!} />
          </ProductInteractivePreview>
        </ScrollReveal>
        <p className="mt-8 text-center">
          <GradientButton
            href={platformUrls.register}
            size="lg"
            eventName="cta_click"
            eventProps={{ label: "get_started_free", location: "integrations_hero" }}
          >
            {dict.cta.getStartedFree}
          </GradientButton>
        </p>
      </PageSection>

      <PageSection className="bg-marketing-surface/30">
        <IntegrationDirectory
          title={dict.data.integrationsHeading}
          subtitle={dict.data.integrationsSubheading}
          searchPlaceholder={dict.pages.integrations.searchPlaceholder!}
          allLabel={dict.pages.integrations.resultsLabel!}
          docsLabel={dict.pages.integrations.docsLabel!}
          footer={
            <>
              {dict.data.integrationsCustom}{" "}
              <Link href="/contact" className="font-medium text-nym-primary hover:underline">
                {dict.data.integrationsCustomLink}
              </Link>
            </>
          }
        />
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
