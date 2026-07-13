import { CompareView } from "@/views/compare";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary();

export const metadata = createPageMetadata({
  title: dict.pages.compare.title,
  description: dict.pages.compare.description,
  path: "/compare",
});

export default function Page() {
  return <CompareView />;
}
