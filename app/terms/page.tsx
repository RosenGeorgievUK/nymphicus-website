import { TermsView } from "@/views/terms";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.terms.title,
  description: dict.pages.terms.description,
  path: "/terms",
});

export default function Page() {
  return <TermsView locale="en" />;
}
