import { BlogView } from "@/views/blog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.blog.title,
  description: dict.pages.blog.description,
  path: "/blog",
});

export default function Page() {
  return <BlogView locale="en" />;
}
