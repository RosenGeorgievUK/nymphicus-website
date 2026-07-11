import { AboutView } from "@/views/about";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.about.title,
  description: dict.pages.about.description,
  path: "/about",
  locale: "bg",
});

export default function Page() {
  return <AboutView locale="bg" />;
}
