import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { NodeTypesGrid } from "@/components/NodeTypesGrid";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ProductScreenshotImage } from "@/components/ProductScreenshotImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { slugify } from "@/lib/slugify";
import { platformUrls } from "@/lib/site";
import { FEATURE_REVERSE, FEATURE_SCREENSHOTS } from "@/lib/view-helpers";

export function FeaturesView() {
  const dict = getDictionary();
  const page = dict.pages.features;

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

      {dict.data.featureSections.map((section, index) => {
        const sectionId = `feature-${slugify(section.eyebrow)}`;
        const reverse = FEATURE_REVERSE[index] ?? false;
        const screenshot = FEATURE_SCREENSHOTS[index] ?? "dashboard";

        return (
          <PageSection key={section.eyebrow} ariaLabelledBy={sectionId}>
            <ScrollReveal>
              <article className="spotlight-card surface-card p-6 md:p-8 lg:p-10">
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <ProductInteractivePreview
                    screenshot={screenshot}
                    alt={`${section.eyebrow} — Nymphi`}
                  >
                    <ProductScreenshotImage screenshot={screenshot} alt={`${section.eyebrow} — Nymphi`} />
                  </ProductInteractivePreview>
                  <div>
                    <SectionHeading
                      as="h2"
                      id={sectionId}
                      eyebrow={section.eyebrow}
                      title={
                        section.titleHighlight ? (
                          <>
                            {section.title}{" "}
                            <span className="text-gradient">{section.titleHighlight}</span>
                          </>
                        ) : (
                          section.title
                        )
                      }
                      subtitle={section.subtitle}
                      align="left"
                    />
                    <p className="mt-8">
                      <Link
                        href={platformUrls.register}
                        className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
                      >
                        {page.getStartedLink} →
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </PageSection>
        );
      })}

      <NodeTypesGrid
        eyebrow={dict.data.nodeTypesEyebrow}
        title={(() => {
          const dotIndex = dict.data.nodeTypesTitle.indexOf(". ");
          if (dotIndex === -1) return dict.data.nodeTypesTitle;
          return (
            <>
              {dict.data.nodeTypesTitle.slice(0, dotIndex + 1)}{" "}
              <span className="text-gradient">
                {dict.data.nodeTypesTitle.slice(dotIndex + 2)}
              </span>
            </>
          );
        })()}
        subtitle={dict.data.nodeTypesSubtitle}
      />

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
