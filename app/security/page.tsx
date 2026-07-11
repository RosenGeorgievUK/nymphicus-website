import { SecurityView } from "@/views/security";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.security.title,
  description: dict.pages.security.description,
  path: "/security",
});

export default function Page() {
  return <SecurityView locale="en" />;
}
