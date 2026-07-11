import Link from "next/link";
import type { BlogPostCopy } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";

type BlogCardProps = {
  post: BlogPostCopy;
  locale: Locale;
};

export function BlogCard({ post, locale }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 transition-all hover:-translate-y-0.5 hover:border-nym-primary/30 hover:shadow-lg hover:shadow-nym-primary/10 md:p-8">
      <p className="text-xs font-medium uppercase tracking-wider text-nym-primary">{post.category}</p>
      <h2 className="mt-2 text-xl font-semibold text-marketing-text">
        <Link
          href={localizePath(locale, `/blog/${post.slug}`)}
          className="nym-focus rounded-nym hover:text-nym-primary"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-marketing-text-muted">{post.excerpt}</p>
      <p className="mt-5 text-xs text-marketing-text-muted">
        {post.date} · {post.readTime}
      </p>
    </article>
  );
}
