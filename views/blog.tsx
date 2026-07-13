import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CTABand } from "@/components/CTABand";
import { PageHero } from "@/components/PageHero";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function BlogView() {
  const dict = getDictionary();
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

      <PageSection>
        <div className="grid gap-6 md:grid-cols-3">
          {dict.data.blogPosts.map((post) => (
            <ScrollReveal key={post.slug}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-marketing-text-muted">
          {dict.data.blogMoreGuides}{" "}
          <Link href="/contact" className="font-medium text-nym-primary hover:underline">
            {dict.data.blogRequestTopic}
          </Link>
        </p>
      </PageSection>

      <CTABand
        title={dict.common.ctaBand.title}
        subtitle={dict.common.ctaBand.subtitle}
        primaryLabel={dict.common.ctaBand.primaryLabel}
        bookDemoLabel={dict.cta.bookDemo}
      />
    </>
  );
}
