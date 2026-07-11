import { PrivacyView } from "@/views/privacy";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.privacy.title,
  description: dict.pages.privacy.description,
  path: "/privacy",
});

export default function Page() {
  return <PrivacyView locale="en" />;
}
