import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { platformUrls } from "@/lib/site";
import { CONTACT_OPTION_HREFS, CONTACT_OPTION_VARIANTS } from "@/lib/view-helpers";

type ContactViewProps = {
  locale: Locale;
};

const contactHrefs = {
  register: platformUrls.register,
  bookDemo: platformUrls.bookDemo,
  enterpriseContact: platformUrls.enterpriseContact,
} as const;

export function ContactView({ locale }: ContactViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.contact;

  return (
    <>
      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              as="h1"
              eyebrow={page.eyebrow!}
              title={page.heroTitle!}
              subtitle={page.heroSubtitle}
              align="center"
            />
          </ScrollReveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {dict.data.contactOptions.map((option, index) => {
              const hrefKey = CONTACT_OPTION_HREFS[index] ?? "register";
              const variant = CONTACT_OPTION_VARIANTS[index] ?? "ghost";
              const href = contactHrefs[hrefKey];

              return (
                <ScrollReveal key={option.title}>
                  <article className="flex h-full flex-col rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 md:p-8">
                    <h2 className="text-lg font-semibold text-marketing-text">{option.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-marketing-text-muted">
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

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-marketing-text-muted">
            {page.emailPrefix}{" "}
            <a
              href={`mailto:${platformUrls.contactEmail}`}
              className="nym-focus rounded-nym font-medium text-nym-primary hover:underline"
            >
              {platformUrls.contactEmail}
            </a>
          </p>
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
