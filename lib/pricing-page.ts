import { platformUrls } from "@/lib/site";

export type PricingTierId = "free" | "pro" | "team" | "enterprise";

export type PricingTier = {
  id: PricingTierId;
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  pricePrefix?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  variant: "gradient" | "ghost";
  highlighted?: boolean;
  badge?: string;
};

export const pricingHero = {
  eyebrow: "Pricing",
  title: "Pricing that doesn't meter your AI.",
  subtitle:
    "Bring your own API keys. Pay us for the platform, pay your model provider at cost. No credits, no markups, no surprise AI bills.",
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1 seat",
      "2 agents",
      "1 knowledge base (50MB)",
      "2 MCP integrations",
      "BYO keys",
      "Community support",
    ],
    ctaLabel: "Start free",
    ctaHref: platformUrls.register,
    variant: "ghost",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 39,
    annualPrice: 390,
    features: [
      "3 seats included, £12/mo per extra seat",
      "10 agents",
      "10 knowledge bases (2GB total)",
      "Unlimited MCP integrations",
      "BYO keys",
      "Basic roles",
      "30-day audit trail",
      "Email support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: platformUrls.register,
    variant: "gradient",
  },
  {
    id: "team",
    name: "Team",
    monthlyPrice: 149,
    annualPrice: 1490,
    features: [
      "10 seats included, £10/mo per extra seat",
      "Unlimited agents",
      "Unlimited knowledge bases (20GB total)",
      "Unlimited MCP integrations",
      "BYO keys",
      "Full RBAC",
      "1-year audit trail",
      "Priority support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: platformUrls.register,
    variant: "gradient",
    highlighted: true,
    badge: "Most popular",
  },
  {
    id: "enterprise",
    name: "Self-Hosted / Enterprise",
    monthlyPrice: 499,
    annualPrice: null,
    pricePrefix: "from",
    features: [
      "Deploy on your own infrastructure (on-prem or VPC)",
      "Unlimited seats and agents",
      "Full RBAC + SSO/SAML",
      "Unlimited audit retention",
      "Your storage, your limits",
      "SLA + onboarding",
      "Annual licence option available",
    ],
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
    variant: "ghost",
  },
];

export const pricingByoComparison = {
  title: "The BYO-keys difference",
  typical: {
    heading: "Typical agent platform",
    points: [
      "Subscription fee",
      "Marked-up AI credits",
      "Per-message fees",
      "Unpredictable monthly bill",
    ],
  },
  nymphi: {
    heading: "Nymphi",
    points: [
      "Flat platform subscription",
      "Your own API keys",
      "Provider billed at cost",
      "Predictable monthly bill",
    ],
  },
};

export const pricingFaq = [
  {
    question: "What does BYO keys mean?",
    answer:
      "You connect your own OpenAI, Anthropic, or other provider API keys. Model usage is billed by the provider directly at their standard rates. We never mark up or meter your AI usage.",
  },
  {
    question: "Is there really no usage-based billing?",
    answer:
      "Correct. No per-message, per-execution, or credit-based charges. You pay a flat platform fee.",
  },
  {
    question: "What's included in self-hosted?",
    answer:
      "The full platform deployed on your infrastructure: visual agent builder, knowledge bases with RAG, MCP integrations, RBAC, SSO/SAML, and full audit trail. Includes updates and support while your licence is active.",
  },
  {
    question: "Can I switch plans?",
    answer: "Yes, upgrade or downgrade anytime; changes are prorated.",
  },
  {
    question: "Do you offer a perpetual licence?",
    answer: "For self-hosted enterprise deployments, yes — contact us.",
  },
  {
    question: "What happens if I exceed my knowledge base storage?",
    answer:
      "We'll prompt you to upgrade; we never silently bill overages.",
  },
];

export const pricingCta = {
  title: "Your agents. Your keys. Your infrastructure.",
  subtitle: "",
  primaryLabel: "Start free",
  bookDemoLabel: "Talk to sales",
};

export function formatGbp(amount: number, options?: { prefix?: string; period?: "mo" | "yr" }) {
  const formatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  const prefix = options?.prefix ? `${options.prefix} ` : "";
  const period = options?.period ? `/${options.period}` : "";
  return `${prefix}${formatted}${period}`;
}

export type PricingTeaserTier = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  variant: "gradient" | "ghost";
};

/** Homepage pricing strip — Free, Team (anchor), Enterprise */
export const pricingTeaserTiers: PricingTeaserTier[] = [
  {
    id: "free",
    name: "Free",
    price: formatGbp(0),
    priceNote: "forever",
    description: "Start building — bring your own keys",
    ctaHref: platformUrls.register,
    ctaLabel: "Start free",
    variant: "gradient",
  },
  {
    id: "team",
    name: "Team",
    price: formatGbp(149, { period: "mo" }),
    priceNote: "10 seats included",
    description: "Unlimited agents, full RBAC, and priority support for growing teams",
    ctaHref: platformUrls.register,
    ctaLabel: "Start free trial",
    variant: "gradient",
  },
  {
    id: "enterprise",
    name: "Self-Hosted / Enterprise",
    price: formatGbp(499, { prefix: "from", period: "mo" }),
    priceNote: "self-host · SSO · SLA",
    description: "For regulated teams with infrastructure requirements",
    ctaHref: "/contact",
    ctaLabel: "Talk to us",
    variant: "ghost",
  },
];

export function priceForTier(tier: PricingTier, annual: boolean): { price: string; note?: string } {
  if (tier.id === "free") {
    return { price: formatGbp(0), note: "forever" };
  }

  if (tier.id === "enterprise") {
    if (annual) {
      return { price: formatGbp(tier.monthlyPrice!, { prefix: "from" }), note: "annual licence · contact us" };
    }
    return { price: formatGbp(tier.monthlyPrice!, { prefix: "from", period: "mo" }) };
  }

  const amount = annual ? tier.annualPrice! : tier.monthlyPrice!;
  return {
    price: formatGbp(amount, { period: annual ? "yr" : "mo" }),
    note: annual ? "billed annually" : "billed monthly",
  };
}
