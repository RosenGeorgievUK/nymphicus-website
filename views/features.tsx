import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { NodeTypesGrid } from "@/components/NodeTypesGrid";
import { PageHero } from "@/components/PageHero";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { slugify } from "@/lib/slugify";
import { platformUrls } from "@/lib/site";
import { FEATURE_REVERSE, FEATURE_SCREENSHOTS } from "@/lib/view-helpers";

type FeaturesViewProps = {
  locale: Locale;
};

export function FeaturesView({ locale }: FeaturesViewProps) {
  const dict = getDictionary(locale);
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

      <SectionDivider />

      {dict.data.featureSections.map((section, index) => {
        const sectionId = `feature-${slugify(section.eyebrow)}`;
        const reverse = FEATURE_REVERSE[index] ?? false;
        const screenshot = FEATURE_SCREENSHOTS[index] ?? "dashboard";

        return (
          <div key={section.eyebrow}>
            <section className="section-y" aria-labelledby={sectionId}>
              <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <ProductScreenshot
                      screenshot={screenshot}
                      alt={`${section.eyebrow} — Nymphicus`}
                    />
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
                          {page.getStartedLink}
                        </Link>
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
            {index < dict.data.featureSections.length - 1 && <SectionDivider />}
          </div>
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
