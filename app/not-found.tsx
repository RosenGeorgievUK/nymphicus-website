import type { Metadata } from "next";
import { NotFoundView } from "@/views/not-found";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const dict = getDictionary();

export const metadata: Metadata = {
  title: dict.pages.notFound.title,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundView />;
}
