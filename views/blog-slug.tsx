import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/BlogContent";
import { CTABand } from "@/components/CTABand";
import { GradientButton } from "@/components/GradientButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { platformUrls } from "@/lib/site";

type BlogSlugViewProps = { slug: string };

export function BlogSlugView({ slug }: { slug: string }) {
  const dict = getDictionary();
  const post = dict.data.blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const otherPosts = dict.data.blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="section-y-lg border-t border-marketing-border">
        <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-4">
              <span className="inline-flex items-center rounded-full border border-nym-primary/25 bg-nym-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-nym-primary">
                {post.category}
              </span>
            </p>
            <h1 className="max-w-3xl text-section-title font-semibold text-marketing-text">
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
                    href={`/blog/${other.slug}`}
                    className="nym-focus text-sm font-medium text-nym-primary hover:underline"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                href="/blog"
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
        secondaryLabel={dict.cta.talkToSales}
      />
    </>
  );
}
