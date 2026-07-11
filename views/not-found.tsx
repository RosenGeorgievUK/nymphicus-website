import Link from "next/link";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { platformUrls } from "@/lib/site";

type NotFoundViewProps = {
  locale: Locale;
};

export function NotFoundView({ locale }: NotFoundViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.notFound;

  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-nym px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow={page.eyebrow!}
          title={
            <>
              {page.heroTitle}{" "}
              <span className="text-gradient">{page.heroTitleHighlight}</span>{" "}
              {page.heroTitleSuffix}
            </>
          }
          subtitle={page.heroSubtitle}
          align="center"
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GradientButton href={localizePath(locale, "/")} size="lg">
            {page.backToHome}
          </GradientButton>
          <Link
            href={platformUrls.register}
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {page.getStartedLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
