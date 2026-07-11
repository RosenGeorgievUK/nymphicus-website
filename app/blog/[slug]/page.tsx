import { BlogSlugView } from "@/views/blog-slug";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import { getAllBlogSlugs } from "@/lib/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getDictionary("en").data.blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <BlogSlugView locale="en" slug={slug} />;
}
