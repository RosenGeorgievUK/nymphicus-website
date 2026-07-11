import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { platformUrls } from "@/lib/site";

type PrivacyViewProps = {
  locale: Locale;
};

export function PrivacyView({ locale }: PrivacyViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.privacy;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow!}
        title={page.heroTitle!}
        subtitle={page.heroSubtitle}
      />

      <section className="section-y">
        <div className="prose-nym mx-auto max-w-2xl px-4 text-base leading-relaxed text-marketing-text-muted sm:px-6 lg:px-8">
          {dict.data.privacySections.map((section) => (
            <div key={section.heading}>
              <h2 className="mt-10 text-xl font-semibold text-marketing-text">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4">
                  {paragraph.includes("app.nymphicus.ai") ? (
                    <>
                      {paragraph.split("app.nymphicus.ai")[0]}
                      <a href={platformUrls.baseUrl} className="text-nym-primary hover:underline">
                        app.nymphicus.ai
                      </a>
                      {paragraph.split("app.nymphicus.ai")[1]}
                    </>
                  ) : paragraph.includes(platformUrls.contactEmail) ? (
                    <>
                      {paragraph.split(platformUrls.contactEmail)[0]}
                      <a
                        href={`mailto:${platformUrls.contactEmail}`}
                        className="text-nym-primary hover:underline"
                      >
                        {platformUrls.contactEmail}
                      </a>
                      {paragraph.split(platformUrls.contactEmail)[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          ))}

          <p className="mt-6 text-sm">
            {page.seeAlsoTerms?.split("Terms of Service")[0]}
            <Link href={localizePath(locale, "/terms")} className="text-nym-primary hover:underline">
              Terms of Service
            </Link>
            {page.seeAlsoTerms?.includes(".") ? "." : ""}
          </p>
        </div>
      </section>

      <CTABand
        title={page.ctaBandTitle!}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={page.ctaPrimaryLabel!}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
