import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

export function TermsView() {
  const dict = getDictionary();
  const page = dict.pages.terms;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow!}
        title={page.heroTitle!}
        subtitle={page.heroSubtitle}
      />

      <PageSection size="lg">
        <div className="prose-nym mx-auto max-w-2xl text-base leading-relaxed text-marketing-text-muted md:text-lg">
          {dict.data.termsSections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  {paragraph.includes("app.nymphi.ai") ? (
                    <>
                      {paragraph.split("app.nymphi.ai")[0]}
                      <a href={platformUrls.baseUrl} className="text-nym-primary hover:underline">
                        app.nymphi.ai
                      </a>
                      {paragraph.split("app.nymphi.ai")[1]}
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

          <p className="mt-8 text-sm">
            {page.seeAlsoPrivacy?.split("Privacy Policy")[0]}
            <Link href="/privacy" className="text-nym-primary hover:underline">
              Privacy Policy
            </Link>
            {page.seeAlsoPrivacy?.includes(".") ? "." : ""}
          </p>
        </div>
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
