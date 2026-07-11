import { FeaturesView } from "@/views/features";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.features.title,
  description: dict.pages.features.description,
  path: "/features",
});

export default function Page() {
  return <FeaturesView locale="en" />;
}
