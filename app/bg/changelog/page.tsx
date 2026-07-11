import { ChangelogView } from "@/views/changelog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.changelog.title,
  description: dict.pages.changelog.description,
  path: "/changelog",
  locale: "bg",
});

export default function Page() {
  return <ChangelogView locale="bg" />;
}
