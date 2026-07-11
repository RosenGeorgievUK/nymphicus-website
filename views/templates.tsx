import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TemplateCard } from "@/components/TemplateCard";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { TEMPLATE_SCREENSHOTS } from "@/lib/view-helpers";

type TemplatesViewProps = {
  locale: Locale;
};

export function TemplatesView({ locale }: TemplatesViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.templates;

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

      <section className="section-y border-t border-marketing-border bg-marketing-surface/40">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {dict.data.templateCards.map((template, index) => (
              <ScrollReveal key={template.title}>
                <TemplateCard
                  title={template.title}
                  category={template.category}
                  description={template.description}
                  flow={template.flow}
                  integrations={template.integrations}
                  screenshots={[...(TEMPLATE_SCREENSHOTS[index] ?? ["supportWorkflow"])]}
                  ctaLabel={dict.cta.startFromTemplate}
                />
              </ScrollReveal>
            ))}
          </div>
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
