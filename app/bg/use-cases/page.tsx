import { UseCasesView } from "@/views/use-cases";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.useCases.title,
  description: dict.pages.useCases.description,
  path: "/use-cases",
  locale: "bg",
});

export default function Page() {
  return <UseCasesView locale="bg" />;
}
