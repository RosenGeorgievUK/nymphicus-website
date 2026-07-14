import { pricingTiers, formatGbp } from "@/lib/pricing-page";
import { siteConfig } from "@/lib/site";

export function PricingJsonLd() {
  const offers = pricingTiers.map((tier) => {
    const price =
      tier.monthlyPrice === 0
        ? "0"
        : tier.monthlyPrice?.toString() ?? undefined;

    return {
      "@type": "Offer",
      name: tier.name,
      price,
      priceCurrency: "GBP",
      description: tier.features.join("; "),
      url: `${siteConfig.url}/pricing`,
      availability: "https://schema.org/InStock",
      ...(tier.id === "enterprise" && {
        priceSpecification: {
          "@type": "PriceSpecification",
          price: formatGbp(tier.monthlyPrice!, { prefix: "from", period: "mo" }),
          priceCurrency: "GBP",
        },
      }),
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nymphi AI Agent Platform",
    description:
      "Visual AI agent builder with MCP integrations, knowledge bases, and governance. Flat platform pricing with bring-your-own API keys.",
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
