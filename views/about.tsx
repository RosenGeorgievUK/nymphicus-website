import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

export function AboutView() {
  const dict = getDictionary();
  const page = dict.pages.about;

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
      />

      <PageSection size="compact" className="!border-t-0">
        <div className="prose-nym mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-marketing-text-muted md:text-lg">
          {dict.data.aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <ScrollReveal>
          <div className="surface-card mx-auto max-w-3xl p-8 text-center md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nym-primary">
              {dict.data.aboutMissionLabel}
            </p>
            <h2 className="mt-4 text-section-title font-semibold text-marketing-text">
              {dict.data.aboutMission}
            </h2>
          </div>
        </ScrollReveal>
      </PageSection>

      <PageSection ariaLabelledBy="values-heading">
        <h2 id="values-heading" className="sr-only">
          Team values
        </h2>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {dict.data.aboutValues.map((value) => (
            <ScrollReveal key={value.title}>
              <ValuePillar
                title={value.title}
                description={value.description}
                icon={<span className="text-lg">◆</span>}
              />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-12 text-center">
          <GradientButton href={platformUrls.register}>{page.startBuilding}</GradientButton>
          <Link
            href="/contact"
            className="nym-focus ml-4 rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {dict.cta.contactUs} →
          </Link>
        </p>
      </PageSection>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        secondaryLabel={dict.cta.talkToSales}
      />
    </>
  );
}
