"use client";

import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLocale } from "@/components/SiteShell";

export function LatestBlogPosts() {
  const { dict, path } = useLocale();
  const posts = dict.data.blogPosts.slice(0, 3);

  return (
    <section className="section-y border-t border-marketing-border" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="blog-heading"
            eyebrow={dict.pages.blog.eyebrow!}
            title={dict.pages.blog.heroTitle!}
            subtitle={dict.pages.blog.heroSubtitle}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <ScrollReveal key={post.slug}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href={path("/blog")}
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {dict.common.readMore} →
          </Link>
          {" · "}
          <Link
            href={path("/changelog")}
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {dict.pages.changelog.title} →
          </Link>
        </p>
      </div>
    </section>
  );
}
