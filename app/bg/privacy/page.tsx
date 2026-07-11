import { PrivacyView } from "@/views/privacy";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.privacy.title,
  description: dict.pages.privacy.description,
  path: "/privacy",
  locale: "bg",
});

export default function Page() {
  return <PrivacyView locale="bg" />;
}
