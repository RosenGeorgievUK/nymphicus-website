import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroBeam } from "@/components/HeroBeam";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { platformUrls } from "@/lib/site";

type HomeViewProps = {
  locale: Locale;
};

export function HomeView({ locale }: HomeViewProps) {
  const dict = getDictionary(locale);
  const p = (href: string) => localizePath(locale, href);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
        <HeroBackground className="opacity-80" />
        <HeroBeam />

        <div className="relative mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="motion-safe:animate-slide-up mb-5 text-sm font-medium uppercase tracking-wider text-nym-primary [animation-delay:0ms]">
              {dict.site.heroBadge}
            </p>
            <h1 className="motion-safe:animate-slide-up text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-marketing-text [animation-delay:80ms]">
              {dict.site.heroTitlePrefix}{" "}
              <span className="text-gradient">{dict.site.heroGradientPhrase}</span>
              <br />
              {dict.site.heroTitleSuffix}
            </h1>
            <p className="motion-safe:animate-slide-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-marketing-text-muted md:text-xl [animation-delay:160ms]">
              {dict.site.heroSubhead}
            </p>

            <div className="motion-safe:animate-slide-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 [animation-delay:240ms]">
              <GradientButton href={platformUrls.register} size="lg" glow>
                {dict.site.getStartedFree}
              </GradientButton>
              <GhostButton href={platformUrls.bookDemo} size="lg">
                {dict.cta.bookDemo}
              </GhostButton>
            </div>

            <p className="motion-safe:animate-slide-up mt-5 text-sm text-marketing-text-muted [animation-delay:320ms]">{dict.site.heroFootnote}</p>
          </div>

          <ScrollReveal className="mx-auto mt-14 max-w-4xl md:mt-16" delay={400}>
            <ProductScreenshot
              screenshot="dashboard"
              alt={dict.site.heroScreenshotAlt}
              priority
              glow
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-marketing-border py-14 md:py-20" aria-labelledby="pillars-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              id="pillars-heading"
              eyebrow={dict.home.pillarsEyebrow}
              title={
                <>
                  {dict.home.pillarsTitle}{" "}
                  <span className="text-gradient">{dict.home.pillarsTitleHighlight}</span>
                </>
              }
              subtitle={dict.home.pillarsSubtitle}
              align="center"
            />
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {dict.home.pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <article className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-nym-primary">
                    {pillar.highlight}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-marketing-text">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-marketing-text-muted">
                    {pillar.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-marketing-text-muted">
            <Link href={p("/features")} className="font-medium text-nym-primary hover:underline">
              {dict.home.bentoLinks.features}
            </Link>
            {" · "}
            <Link href={p("/templates")} className="font-medium text-nym-primary hover:underline">
              {dict.home.bentoLinks.templates}
            </Link>
            {" · "}
            <Link href={p("/compare")} className="font-medium text-nym-primary hover:underline">
              {dict.pages.compare.title}
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-marketing-border py-14 md:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              id="faq-heading"
              eyebrow={dict.home.faqEyebrow}
              title={dict.home.faqTitle}
              align="center"
            />
          </ScrollReveal>
          <FAQAccordion items={dict.data.homepageFaq.slice(0, 3)} className="mx-auto mt-8 max-w-2xl" />
          <p className="mt-6 text-center text-sm text-marketing-text-muted">
            <Link href={p("/pricing")} className="font-medium text-nym-primary hover:underline">
              {dict.common.pricingFaqLink}
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
