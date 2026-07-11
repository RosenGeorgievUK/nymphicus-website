import { UseCasesView } from "@/views/use-cases";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.useCases.title,
  description: dict.pages.useCases.description,
  path: "/use-cases",
});

export default function Page() {
  return <UseCasesView locale="en" />;
}
