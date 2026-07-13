import { TemplatesView } from "@/views/templates";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary();

export const metadata = createPageMetadata({
  title: dict.pages.templates.title,
  description: dict.pages.templates.description,
  path: "/templates",
});

export default function Page() {
  return <TemplatesView />;
}
