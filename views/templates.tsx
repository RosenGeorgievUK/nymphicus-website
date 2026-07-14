import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TemplateCard } from "@/components/TemplateCard";
import { TemplateFilterBar } from "@/components/TemplateFilterBar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { TEMPLATE_SCREENSHOTS } from "@/lib/view-helpers";

export function TemplatesView() {
  const dict = getDictionary();
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

      <PageSection className="bg-marketing-surface/30">
        <TemplateFilterBar
          categories={dict.data.templateGalleryCategories}
          allCategoryLabel={dict.data.templateGalleryAllLabel}
          searchPlaceholder={dict.data.templateGallerySearchPlaceholder}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {dict.data.templateCards.map((template, index) => (
            <ScrollReveal key={template.slug}>
              <div
                data-template-card
                data-title={template.title}
                data-description={template.description}
                data-category={template.category}
                data-integrations={template.integrations.join(" ")}
              >
                <TemplateCard
                  slug={template.slug}
                  title={template.title}
                  category={template.category}
                  description={template.description}
                  flow={template.flow}
                  integrations={template.integrations}
                  screenshots={[...(TEMPLATE_SCREENSHOTS[index] ?? ["supportWorkflow"])]}
                  ctaLabel={dict.cta.useTemplate}
                  detailHref={`/customers/${template.slug}`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
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
