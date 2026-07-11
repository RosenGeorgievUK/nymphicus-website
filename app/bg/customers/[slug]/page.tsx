import { CustomersSlugView } from "@/views/customers-slug";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import { getAllCaseStudySlugs } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getDictionary("bg").data.caseStudies.find((item) => item.slug === slug);
  if (!study) return {};

  return createPageMetadata({
    title: study.title,
    description: `${study.company} — ${study.challenge.slice(0, 120)}…`,
    path: `/customers/${slug}`,
    locale: "bg",
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <CustomersSlugView locale="bg" slug={slug} />;
}
