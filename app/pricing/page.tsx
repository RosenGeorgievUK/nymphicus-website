import { PricingView } from "@/views/pricing";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.pricing.title,
  description: dict.pages.pricing.description,
  path: "/pricing",
});

export default function Page() {
  return <PricingView locale="en" />;
}
