import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { TrustBadges } from "@/components/TrustBadges";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

type SecurityViewProps = {
  locale: Locale;
};

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12h2l3 3v2h2v-2l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LogIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16M4 12h10M4 18h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const securityIcons = [ShieldIcon, LogIcon, KeyIcon];

export function SecurityView({ locale }: SecurityViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.security;

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
          <TrustBadges
            badges={dict.common.trustBadges}
            ariaLabel={dict.common.trustBadgesAria}
            className="mb-12 justify-center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {dict.data.securityPillars.map((pillar, index) => {
              const Icon = securityIcons[index] ?? ShieldIcon;
              return (
                <ScrollReveal key={pillar.title}>
                  <ValuePillar
                    icon={<Icon />}
                    highlight={pillar.highlight}
                    title={pillar.title}
                    description={pillar.description}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <ProductScreenshot screenshot="executionLogs" alt={page.screenshotAlt!} />
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-2xl font-semibold text-marketing-text">
                {dict.data.securitySectionTitle}
              </h2>
              <p className="mt-4 text-marketing-text-muted">{dict.data.securitySectionBody}</p>
              <ul className="mt-6 space-y-3 text-sm text-marketing-text">
                {dict.data.securityBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nym-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="pb-12 md:pb-16" aria-labelledby="security-faq-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <h2
            id="security-faq-heading"
            className="mb-8 text-center text-2xl font-semibold text-marketing-text"
          >
            {page.faqTitle}
          </h2>
          <FAQAccordion items={dict.data.securityFaq} className="mx-auto max-w-2xl" />
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
