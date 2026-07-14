import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageSection } from "@/components/PageSection";
import { PricingByoComparison } from "@/components/PricingByoComparison";
import { PricingJsonLd } from "@/components/PricingJsonLd";
import { PricingPlansBlock } from "@/components/PricingPlansBlock";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  pricingByoComparison,
  pricingCta,
  pricingFaq,
} from "@/lib/pricing-page";

export function PricingView() {
  return (
    <>
      <PricingJsonLd />
      <PricingPlansBlock />

      <PricingByoComparison
        title={pricingByoComparison.title}
        typical={pricingByoComparison.typical}
        nymphi={pricingByoComparison.nymphi}
      />

      <PageSection ariaLabelledBy="pricing-faq-heading">
        <ScrollReveal>
          <SectionHeading id="pricing-faq-heading" title="Frequently asked questions" align="center" />
        </ScrollReveal>
        <FAQAccordion items={pricingFaq} className="mx-auto mt-10 max-w-2xl" />
      </PageSection>

      <CTABand
        title={pricingCta.title}
        subtitle={pricingCta.subtitle}
        primaryLabel={pricingCta.primaryLabel}
        secondaryLabel={pricingCta.bookDemoLabel}
      />
    </>
  );
}
