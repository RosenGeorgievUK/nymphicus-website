import { ContactView } from "@/views/contact";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary();

export const metadata = createPageMetadata({
  title: dict.pages.contact.title,
  description: dict.pages.contact.description,
  path: "/contact",
});

export default function Page() {
  return <ContactView />;
}
