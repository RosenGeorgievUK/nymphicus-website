import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";

type BlogViewProps = {
  locale: Locale;
};

export function BlogView({ locale }: BlogViewProps) {
  const dict = getDictionary(locale);
  const page = dict.pages.blog;

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

      <section className="section-y">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {dict.data.blogPosts.map((post) => (
              <ScrollReveal key={post.slug}>
                <BlogCard post={post} locale={locale} />
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-marketing-text-muted">
            {dict.data.blogMoreGuides}{" "}
            <Link href={localizePath(locale, "/contact")} className="font-medium text-nym-primary hover:underline">
              {dict.data.blogRequestTopic}
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
