import type { Metadata } from "next";
import { PricingView } from "@/views/pricing";
import { createPageMetadata } from "@/lib/metadata";

const pageMeta = createPageMetadata({
  title: "Pricing",
  description:
    "Flat, predictable pricing for the Nymphicus AI agent builder. Bring your own API keys — no AI usage markups, no credits. Free tier, Pro from £39/mo, self-hosted available.",
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
