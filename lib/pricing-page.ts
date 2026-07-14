import { platformUrls } from "@/lib/site";

export type PricingTierId = "free" | "starter" | "pro" | "team" | "enterprise";

/** Annual billing discount (Stripe COGS model — one txn/yr improves margin). */
export const ANNUAL_BILLING_DISCOUNT = 0.2;

export type PricingTier = {
  id: PricingTierId;
  name: string;
  monthlyPrice: number | null;
  includedSeats: number;
  minSeats: number;
  maxSeats: number;
  extraSeatMonthly: number | null;
  seatAdjustable: boolean;
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
    "Bring your own API keys. Pay us for the platform — Stripe is our only real COGS. No credits, no markups, no surprise AI bills.",
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    includedSeats: 1,
    minSeats: 1,
    maxSeats: 1,
    extraSeatMonthly: null,
    seatAdjustable: false,
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
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    includedSeats: 1,
    minSeats: 1,
    maxSeats: 5,
    extraSeatMonthly: 8,
    seatAdjustable: true,
    features: [
      "1 seat included, $8/mo per extra seat",
      "3 agents",
      "1 knowledge base (250MB)",
      "3 MCP integrations",
      "BYO keys",
      "14-day audit trail",
      "Email support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: platformUrls.register,
    variant: "gradient",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 49,
    includedSeats: 3,
    minSeats: 1,
    maxSeats: 25,
    extraSeatMonthly: 15,
    seatAdjustable: true,
    features: [
      "3 seats included, $15/mo per extra seat",
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
    includedSeats: 10,
    minSeats: 1,
    maxSeats: 50,
    extraSeatMonthly: 12,
    seatAdjustable: true,
    features: [
      "10 seats included, $12/mo per extra seat",
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
    includedSeats: 999,
    minSeats: 1,
    maxSeats: 999,
    extraSeatMonthly: null,
    seatAdjustable: false,
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
      "~96–98% margin room — we don't meter your AI",
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
      "Correct. No per-message, per-execution, or credit-based charges. You pay a flat platform fee plus optional extra seats.",
  },
  {
    question: "How does annual billing work?",
    answer:
      "Pay yearly and save 20% versus monthly. Stripe processes one payment per year on paid tiers — same features, lower platform fee.",
  },
  {
    question: "Can I add or remove seats?",
    answer:
      "Yes on Starter, Pro, and Team. Adjust seats on the pricing page — your total updates instantly. Extra seats bill at the per-seat rate for that tier.",
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
];

export const pricingCta = {
  title: "Your agents. Your keys. Your infrastructure.",
  subtitle: "",
  primaryLabel: "Start free",
  bookDemoLabel: "Talk to sales",
};

export function formatUsd(amount: number, options?: { prefix?: string; period?: "mo" | "yr" }) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);

  const prefix = options?.prefix ? `${options.prefix} ` : "";
  const period = options?.period ? `/${options.period}` : "";
  return `${prefix}${formatted}${period}`;
}

/** @deprecated Use formatUsd */
export const formatGbp = formatUsd;

export function monthlySubtotal(tier: PricingTier, seats: number): number {
  if (tier.monthlyPrice === null) return 0;
  if (tier.id === "free") return 0;

  const billableSeats = Math.max(tier.minSeats, Math.min(tier.maxSeats, seats));
  const extraSeats = tier.extraSeatMonthly
    ? Math.max(0, billableSeats - tier.includedSeats)
    : 0;

  return tier.monthlyPrice + extraSeats * (tier.extraSeatMonthly ?? 0);
}

export function priceForTier(
  tier: PricingTier,
  annual: boolean,
  seats = tier.includedSeats,
): { price: string; note?: string; monthlyEquivalent?: number } {
  if (tier.id === "free") {
    return { price: formatUsd(0), note: "forever" };
  }

  if (tier.id === "enterprise") {
    const base = tier.monthlyPrice!;
    if (annual) {
      const yearly = Math.round(base * 12 * (1 - ANNUAL_BILLING_DISCOUNT));
      return {
        price: formatUsd(yearly, { prefix: "from", period: "yr" }),
        note: "Save 20% · annual licence · contact us",
        monthlyEquivalent: Math.round((yearly / 12) * 100) / 100,
      };
    }
    return { price: formatUsd(base, { prefix: "from", period: "mo" }) };
  }

  const monthly = monthlySubtotal(tier, seats);

  if (annual) {
    const yearly = Math.round(monthly * 12 * (1 - ANNUAL_BILLING_DISCOUNT));
    const perMonth = Math.round((yearly / 12) * 100) / 100;
    return {
      price: formatUsd(yearly, { period: "yr" }),
      note: `Save 20% · ${formatUsd(perMonth, { period: "mo" })} equivalent`,
      monthlyEquivalent: perMonth,
    };
  }

  const seatNote =
    seats > tier.includedSeats
      ? `${seats} seats (${seats - tier.includedSeats} extra)`
      : seats < tier.includedSeats
        ? `${seats} seat${seats === 1 ? "" : "s"}`
        : `${tier.includedSeats} seats included`;

  return {
    price: formatUsd(monthly, { period: "mo" }),
    note: seatNote,
    monthlyEquivalent: monthly,
  };
}

export function defaultSeatsForTier(tierId: PricingTierId): number {
  const tier = pricingTiers.find((t) => t.id === tierId);
  return tier?.includedSeats ?? 1;
}

export type PricingTeaserTierId = "free" | "starter" | "pro" | "team";

/** Homepage pricing strip — paid tiers with seat adjustment on page */
export const pricingTeaserTierIds: PricingTeaserTierId[] = ["free", "starter", "pro", "team"];

export const pricingTeaserDescriptions: Record<PricingTeaserTierId, string> = {
  free: "Start building — bring your own keys",
  starter: "Ship your first agents — perfect for solo builders",
  pro: "Growing teams that need more agents and seats",
  team: "Unlimited agents, full RBAC, and priority support",
};
