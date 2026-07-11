import { IntegrationsView } from "@/views/integrations";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.pages.integrations.title,
  description: dict.pages.integrations.description,
  path: "/integrations",
});

export default function Page() {
  return <IntegrationsView locale="en" />;
}
