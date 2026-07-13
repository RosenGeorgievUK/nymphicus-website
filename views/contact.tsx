import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";
import { CONTACT_OPTION_HREFS, CONTACT_OPTION_VARIANTS } from "@/lib/view-helpers";

const contactHrefs = {
  register: platformUrls.register,
  bookDemo: platformUrls.bookDemo,
  enterpriseContact: platformUrls.enterpriseContact,
} as const;

export function ContactView() {
  const dict = getDictionary();
  const page = dict.pages.contact;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow!}
        title={page.heroTitle!}
        subtitle={page.heroSubtitle}
      />

      <PageSection>
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3 md:gap-6">
          {dict.data.contactOptions.map((option, index) => {
            const hrefKey = CONTACT_OPTION_HREFS[index] ?? "register";
            const variant = CONTACT_OPTION_VARIANTS[index] ?? "ghost";
            const href = contactHrefs[hrefKey];

            return (
              <ScrollReveal key={option.title}>
                <article className="surface-card flex h-full flex-col p-6 md:p-8">
                  <h2 className="text-lg font-semibold text-marketing-text">{option.title}</h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-marketing-text-muted">
                    {option.description}
                  </p>
                  <div className="mt-6">
                    {variant === "gradient" ? (
                      <GradientButton href={href} className="w-full justify-center">
                        {option.cta}
                      </GradientButton>
                    ) : (
                      <GhostButton href={href} className="w-full justify-center">
                        {option.cta}
                      </GhostButton>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-marketing-text-muted">
          {page.emailPrefix}{" "}
          <a
            href={`mailto:${platformUrls.contactEmail}`}
            className="nym-focus rounded-nym font-medium text-nym-primary hover:underline"
          >
            {platformUrls.contactEmail}
          </a>
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
