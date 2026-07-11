import { HomeView } from "@/views/home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("en");

export const metadata = createPageMetadata({
  title: dict.meta.siteTitle,
  description: dict.meta.siteDescription,
  path: "/",
});

export default function Page() {
  return <HomeView locale="en" />;
}
