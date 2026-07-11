import { HomeView } from "@/views/home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.meta.siteTitle,
  description: dict.meta.siteDescription,
  path: "/",
  locale: "bg",
});

export default function Page() {
  return <HomeView locale="bg" />;
}
