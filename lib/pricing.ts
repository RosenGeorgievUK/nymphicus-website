import { ctaLabels, platformUrls } from "@/lib/site";

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  highlighted?: boolean;
  variant: "gradient" | "ghost";
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    priceNote: "forever",
    description: "Start building — bring your own keys",
    features: [
      "Visual agent builder",
      "15 node types",
      "Knowledge bases + RAG",
      "MCP integrations",
      "Community support",
    ],
    ctaHref: platformUrls.register,
    ctaLabel: "Get started free",
    variant: "gradient",
  },
  {
    id: "pro",
    name: "Pro",
    price: "From $49",
    priceNote: "per seat / month",
    description: "For growing teams that need collaboration and scale",
    features: [
      "Everything in Free",
      "Team collaboration",
      "Advanced RBAC",
      "Priority support",
      "Usage analytics",
    ],
    ctaHref: platformUrls.bookDemo,
    ctaLabel: ctaLabels.bookDemo,
    highlighted: true,
    variant: "gradient",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceNote: "self-host · SSO · SLA",
    description: "For regulated teams with infrastructure requirements",
    features: [
      "Everything in Pro",
      "Self-hosted deployment",
      "SSO / SAML",
      "Full audit trail export",
      "Dedicated SLA",
    ],
    ctaHref: platformUrls.bookDemo,
    ctaLabel: ctaLabels.contactUs,
    variant: "ghost",
  },
];

export const pricingValueSignals = [
  {
    value: "$0",
    label: "Credit markup",
    detail: "Pay LLM providers directly at their rates",
  },
  {
    value: "BYO",
    label: "API keys",
    detail: "Your OpenAI, Anthropic, or self-hosted models",
  },
  {
    value: "Anytime",
    label: "Cancel",
    detail: "No long-term lock-in on paid plans",
  },
];
