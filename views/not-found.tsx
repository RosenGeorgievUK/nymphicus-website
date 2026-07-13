import Link from "next/link";
import { GradientButton } from "@/components/GradientButton";
import { HeroBackground } from "@/components/HeroBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

export function NotFoundView() {
  const dict = getDictionary();
  const page = dict.pages.notFound;

  return (
    <section className="relative flex min-h-[65vh] items-center overflow-hidden py-20">
      <HeroBackground />
      <div className="relative mx-auto max-w-nym px-4 text-center sm:px-6 lg:px-8">
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
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <GradientButton href="/" size="lg">
            {page.backToHome}
          </GradientButton>
          <Link
            href={platformUrls.register}
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {page.getStartedLink} →
          </Link>
        </div>
      </div>
    </section>
  );
}
