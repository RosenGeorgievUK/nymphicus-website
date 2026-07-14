import type { Metadata } from "next";
import { PricingView } from "@/views/pricing";
import { createPageMetadata } from "@/lib/metadata";

const pageMeta = createPageMetadata({
  title: "Pricing",
  description:
    "Flat, predictable pricing for the Nymphicus AI agent builder. Bring your own API keys — no AI usage markups. Free tier, Starter $19/mo, Pro scales with seats, Enterprise self-hosted.",
  path: "/pricing",
});

export const metadata: Metadata = {
  ...pageMeta,
  title: {
    absolute: "Pricing — Nymphicus",
  },
};

export default function Page() {
  return <PricingView />;
}
