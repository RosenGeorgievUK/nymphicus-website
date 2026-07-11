import { SecurityView } from "@/views/security";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.security.title,
  description: dict.pages.security.description,
  path: "/security",
  locale: "bg",
});

export default function Page() {
  return <SecurityView locale="bg" />;
}
