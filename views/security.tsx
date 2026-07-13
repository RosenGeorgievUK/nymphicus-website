import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ProductScreenshotImage } from "@/components/ProductScreenshotImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";

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

export function SecurityView() {
  const dict = getDictionary();
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

      <PageSection size="compact" className="!border-t-0">
        <TrustBadges
          badges={dict.common.trustBadges}
          ariaLabel={dict.common.trustBadgesAria}
          className="mb-12 justify-center"
        />
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
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
      </PageSection>

      <PageSection>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <ProductInteractivePreview screenshot="executionLogs" alt={page.screenshotAlt!} glow>
              <ProductScreenshotImage screenshot="executionLogs" alt={page.screenshotAlt!} />
            </ProductInteractivePreview>
          </ScrollReveal>
          <ScrollReveal>
            <SectionHeading
              as="h2"
              title={dict.data.securitySectionTitle}
              subtitle={dict.data.securitySectionBody}
              align="left"
            />
            <ul className="mt-8 space-y-3 text-base text-marketing-text">
              {dict.data.securityBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-nym-primary to-nym-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </PageSection>

      <PageSection ariaLabelledBy="security-faq-heading">
        <ScrollReveal>
          <SectionHeading id="security-faq-heading" title={page.faqTitle!} align="center" />
        </ScrollReveal>
        <FAQAccordion items={dict.data.securityFaq} className="mx-auto mt-10 max-w-2xl" />
      </PageSection>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
