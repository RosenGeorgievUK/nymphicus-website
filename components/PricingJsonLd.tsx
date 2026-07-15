import { pricingTiers, formatUsd, computeCloudMonthly } from "@/lib/pricing-page";
import { siteConfig } from "@/lib/site";

export function PricingJsonLd() {
  const offers = pricingTiers.map((tier) => {
    const price =
      tier.id === "free"
        ? "0"
        : tier.id === "cloud"
          ? computeCloudMonthly(3).monthly.toString()
          : tier.monthlyPrice?.toString() ?? undefined;

    return {
      "@type": "Offer",
      name: tier.name,
      price,
      priceCurrency: "USD",
      description: tier.features.join("; ") || tier.tagline,
      url: `${siteConfig.url}/pricing`,
      availability: "https://schema.org/InStock",
      ...(tier.id === "enterprise" && {
        priceSpecification: {
          "@type": "PriceSpecification",
          price: formatUsd(tier.monthlyPrice!, { prefix: "from", period: "mo" }),
          priceCurrency: "USD",
        },
      }),
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nymphi AI Agent Platform",
    description:
      "Visual AI builder with app integrations and searchable knowledge bases. Flat platform pricing with your own AI account.",
    brand: { "@type": "Brand", name: siteConfig.name },
    url: `${siteConfig.url}/pricing`,
    offers,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
