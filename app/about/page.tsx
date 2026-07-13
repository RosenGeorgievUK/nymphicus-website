import { AboutView } from "@/views/about";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary();

export const metadata = createPageMetadata({
  title: dict.pages.about.title,
  description: dict.pages.about.description,
  path: "/about",
});

export default function Page() {
  return <AboutView />;
}
