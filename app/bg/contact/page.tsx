import { ContactView } from "@/views/contact";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.contact.title,
  description: dict.pages.contact.description,
  path: "/contact",
  locale: "bg",
});

export default function Page() {
  return <ContactView locale="bg" />;
}
