import { ChangelogView } from "@/views/changelog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary();

export const metadata = createPageMetadata({
  title: dict.pages.changelog.title,
  description: dict.pages.changelog.description,
  path: "/changelog",
});

export default function Page() {
  return <ChangelogView />;
}
