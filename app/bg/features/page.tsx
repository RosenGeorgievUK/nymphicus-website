import { FeaturesView } from "@/views/features";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.features.title,
  description: dict.pages.features.description,
  path: "/features",
  locale: "bg",
});

export default function Page() {
  return <FeaturesView locale="bg" />;
}
