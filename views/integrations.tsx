import Link from "next/link";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { integrationLogos } from "@/lib/use-cases-data";
import { platformUrls } from "@/lib/site";

type IntegrationsViewProps = {
  locale: Locale;
};

export function IntegrationsView({ locale }: IntegrationsViewProps) {
  const dict = getDictionary(locale);
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
      >
        <ScrollReveal>
          <ProductScreenshot
            screenshot="mcpRegistry"
            alt={page.screenshotAlt!}
            priority
          />
        </ScrollReveal>
        <p className="mt-8 text-center">
          <GradientButton href={platformUrls.register}>{dict.cta.getStarted}</GradientButton>
        </p>
      </PageHero>

      <CapabilityMarquee
        capabilities={dict.common.capabilities}
        ariaLabel={dict.common.capabilityMarqueeAria}
      />

      <section className="section-y border-t border-marketing-border bg-marketing-surface/40" aria-labelledby="integrations-grid-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              id="integrations-grid-heading"
              className="mb-10 text-center text-2xl font-semibold text-marketing-text"
            >
              {dict.data.integrationsHeading}
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {integrationLogos.map((name) => (
              <span
                key={name}
                className="rounded-nym-lg border border-marketing-border bg-marketing-surface px-5 py-3 text-sm font-medium text-marketing-text transition-all hover:-translate-y-0.5 hover:border-nym-primary/30 hover:shadow-lg hover:shadow-nym-primary/10"
              >
                {name}
              </span>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-marketing-text-muted">
            {dict.data.integrationsCustom}{" "}
            <Link href={localizePath(locale, "/contact")} className="font-medium text-nym-primary hover:underline">
              {dict.data.integrationsCustomLink}
            </Link>
          </p>
        </div>
      </section>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
