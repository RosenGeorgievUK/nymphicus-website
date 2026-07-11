import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { PricingValueSignals } from "@/components/PricingValueSignals";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { platformUrls } from "@/lib/site";

type PricingViewProps = {
  locale: Locale;
};

function tierHref(tierId: string): string {
  if (tierId === "free") return platformUrls.register;
  return platformUrls.bookDemo;
}

function tierVariant(tierId: string): "gradient" | "ghost" {
  return tierId === "enterprise" ? "ghost" : "gradient";
}

export function PricingView({ locale }: PricingViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.pricing;

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

      <PricingValueSignals signals={dict.data.pricingValueSignals} />

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {dict.data.pricingTiers.map((tier) => (
              <ScrollReveal key={tier.id}>
                <PricingCard
                  name={tier.name}
                  price={tier.price}
                  priceNote={tier.priceNote}
                  description={tier.description}
                  features={tier.features}
                  ctaHref={tierHref(tier.id)}
                  ctaLabel={tier.ctaLabel}
                  highlighted={tier.highlighted}
                  variant={tierVariant(tier.id)}
                />
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-marketing-text-muted">
            {dict.common.llmCostsNote}
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="pb-12 md:pb-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="faq-heading"
              className="mb-8 text-center text-2xl font-semibold text-marketing-text"
            >
              {dict.common.faqTitle}
            </h2>
          </ScrollReveal>
          <FAQAccordion items={dict.data.pricingFaq} className="mx-auto max-w-2xl" />
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
