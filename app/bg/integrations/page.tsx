import { IntegrationsView } from "@/views/integrations";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.integrations.title,
  description: dict.pages.integrations.description,
  path: "/integrations",
  locale: "bg",
});

export default function Page() {
  return <IntegrationsView locale="bg" />;
}
