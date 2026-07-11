import { CompareView } from "@/views/compare";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.compare.title,
  description: dict.pages.compare.description,
  path: "/compare",
  locale: "bg",
});

export default function Page() {
  return <CompareView locale="bg" />;
}
