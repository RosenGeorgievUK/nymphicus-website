import { CustomersView } from "@/views/customers";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dict = getDictionary("bg");

export const metadata = createPageMetadata({
  title: dict.pages.customers.title,
  description: dict.pages.customers.description,
  path: "/customers",
  locale: "bg",
});

export default function Page() {
  return <CustomersView locale="bg" />;
}
