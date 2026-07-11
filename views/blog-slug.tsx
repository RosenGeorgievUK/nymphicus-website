import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/BlogContent";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { platformUrls } from "@/lib/site";

type BlogSlugViewProps = {
  locale: Locale;
  slug: string;
};

export function BlogSlugView({ locale, slug }: BlogSlugViewProps) {
  const dict = getDictionary(locale);
  const post = dict.data.blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const otherPosts = dict.data.blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="section-y-lg">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight text-marketing-text">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-marketing-text-muted">
              {post.date} · {post.readTime}
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <BlogContent sections={post.sections} />
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <GradientButton href={platformUrls.register}>{dict.cta.getStartedFree}</GradientButton>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="border-t border-marketing-border py-16 md:py-20">
          <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-marketing-text">{dict.common.moreStories}</h2>
            <ul className="mt-6 space-y-3">
              {otherPosts.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={localizePath(locale, `/blog/${other.slug}`)}
                    className="nym-focus text-sm font-medium text-nym-primary hover:underline"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                href={localizePath(locale, "/blog")}
                className="nym-focus text-sm text-marketing-text-muted hover:text-marketing-text"
              >
                ← {dict.common.backToBlog}
              </Link>
            </p>
          </div>
        </section>
      )}

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
