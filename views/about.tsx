import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ValuePillar } from "@/components/ValuePillar";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { platformUrls } from "@/lib/site";

type AboutViewProps = {
  locale: Locale;
};

export function AboutView({ locale }: AboutViewProps) {
  const dict = getDictionary(locale);
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

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="prose-nym mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-marketing-text-muted md:text-lg">
            {dict.data.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 md:py-16" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-nym-lg border border-marketing-border bg-marketing-surface p-8 text-center md:p-12">
              <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">
                {dict.data.aboutMissionLabel}
              </p>
              <h2
                id="mission-heading"
                className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-snug text-marketing-text"
              >
                {dict.data.aboutMission}
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="section-y" aria-labelledby="values-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="sr-only">
            Team values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
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

          <p className="mt-10 text-center">
            <GradientButton href={platformUrls.register}>{page.startBuilding}</GradientButton>
            {" "}
            <Link
              href={localizePath(locale, "/contact")}
              className="nym-focus ml-4 rounded-nym text-sm font-medium text-nym-primary hover:underline"
            >
              {dict.cta.contactUs} →
            </Link>
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
