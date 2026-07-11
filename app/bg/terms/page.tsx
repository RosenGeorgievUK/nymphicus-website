import { TermsView } from "@/views/terms";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.terms.title,
  description: dict.pages.terms.description,
  path: "/terms",
  locale: "bg",
});

export default function Page() {
  return <TermsView locale="bg" />;
}
