import { platformUrls } from "@/lib/site";

export type PricingTierId = "free" | "starter" | "cloud" | "enterprise";

/** @deprecated Pro and Team merged into cloud */
export type LegacyPricingTierId = "pro" | "team";

/** Annual billing discount (Stripe COGS model — one txn/yr improves margin). */
export const ANNUAL_BILLING_DISCOUNT = 0.2;

export type PricingTier = {
  id: PricingTierId;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  pricePrefix?: string;
  hostedLabel?: string;
  includesTitle: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  variant: "gradient" | "ghost";
  highlighted?: boolean;
  badge?: string;
  seatAdjustable?: boolean;
};

export const CLOUD_PLAN = {
  minSeats: 1,
  maxSeats: 50,
  defaultSeats: 3,
  /** Aligns with former Pro ($49/3 seats) and Team ($149/10 seats). */
  includedAtBase: 3,
  baseMonthly: 49,
  teamThreshold: 10,
  teamBaseMonthly: 149,
  midExtraSeatRate: 14,
  volumeExtraSeatRate: 10,
} as const;

export function computeCloudMonthly(seats: number): {
  monthly: number;
  effectivePerSeat: number;
  volumeActive: boolean;
} {
  const s = Math.max(CLOUD_PLAN.minSeats, Math.min(CLOUD_PLAN.maxSeats, seats));

  let monthly: number;
  if (s <= CLOUD_PLAN.includedAtBase) {
    monthly = CLOUD_PLAN.baseMonthly;
  } else if (s < CLOUD_PLAN.teamThreshold) {
    monthly = CLOUD_PLAN.baseMonthly + (s - CLOUD_PLAN.includedAtBase) * CLOUD_PLAN.midExtraSeatRate;
  } else {
    monthly =
      CLOUD_PLAN.teamBaseMonthly + (s - CLOUD_PLAN.teamThreshold) * CLOUD_PLAN.volumeExtraSeatRate;
  }

  return {
    monthly,
    effectivePerSeat: Math.round((monthly / s) * 100) / 100,
    volumeActive: s >= CLOUD_PLAN.teamThreshold,
  };
}

export function cloudFeaturesForSeats(seats: number): string[] {
  const volume = seats >= CLOUD_PLAN.teamThreshold;
  return [
    `${seats} seat${seats === 1 ? "" : "s"} on your workspace`,
    volume ? "Unlimited agents" : "10 agents",
    volume ? "Unlimited knowledge bases (20GB)" : "10 knowledge bases (2GB)",
    "Unlimited MCP integrations",
    volume ? "Full RBAC" : "Basic roles",
    volume ? "1-year audit trail" : "30-day audit trail",
    volume ? "Priority support" : "Email support",
    "BYO keys — no AI markup",
  ];
}

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
    tagline: "Great for exploring the builder and shipping your first agent.",
    monthlyPrice: 0,
    includesTitle: "This plan includes:",
    features: [
      "1 seat",
      "2 agents",
      "1 knowledge base (50MB)",
      "2 MCP integrations",
      "Visual agent builder",
      "BYO API keys",
      "7-day audit trail",
      "Community support",
    ],
    ctaLabel: "Start free",
    ctaHref: platformUrls.register,
    variant: "ghost",
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "For solo builders running agents in production.",
    monthlyPrice: 19,
    hostedLabel: "Hosted by Nymphi",
    includesTitle: "Everything in Free, plus:",
    features: [
      "1 seat (add up to 5)",
      "3 agents",
      "1 knowledge base (250MB)",
      "3 MCP integrations",
      "14-day audit trail",
      "Email support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: platformUrls.register,
    variant: "gradient",
    seatAdjustable: true,
  },
  {
    id: "cloud",
    name: "Pro",
    tagline: "For teams that scale — price drops as you add seats.",
    monthlyPrice: null,
    hostedLabel: "Hosted by Nymphi",
    includesTitle: "Everything in Starter, plus:",
    features: [],
    ctaLabel: "Start free trial",
    ctaHref: platformUrls.register,
    variant: "gradient",
    highlighted: true,
    badge: "Most popular",
    seatAdjustable: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For organisations with compliance, SSO, and self-hosting needs.",
    monthlyPrice: 499,
    pricePrefix: "from",
    includesTitle: "Everything in Pro, plus:",
    features: [
      "Self-hosted or VPC deployment",
      "Unlimited seats and agents",
      "SSO / SAML",
      "Unlimited audit retention",
      "Your storage, your limits",
      "SLA + dedicated onboarding",
      "Invoice billing",
    ],
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
    variant: "ghost",
  },
];

export const STARTER_PLAN = {
  monthly: 19,
  includedSeats: 1,
  minSeats: 1,
  maxSeats: 5,
  extraSeatMonthly: 8,
  defaultSeats: 1,
} as const;

export function computeStarterMonthly(seats: number): number {
  const s = Math.max(STARTER_PLAN.minSeats, Math.min(STARTER_PLAN.maxSeats, seats));
  return STARTER_PLAN.monthly + Math.max(0, s - STARTER_PLAN.includedSeats) * STARTER_PLAN.extraSeatMonthly;
}

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
    question: "How does Pro seat pricing work?",
    answer:
      "One Pro plan for all team sizes. $49/mo covers up to 3 seats. Add seats 4–9 at $14/seat. At 10+ seats you get Team-level features and volume pricing at $10/seat above the $149 base.",
  },
  {
    question: "How does annual billing work?",
    answer:
      "Pay yearly and save 20% versus monthly. Stripe processes one payment per year on paid tiers.",
  },
  {
    question: "What's included in self-hosted Enterprise?",
    answer:
      "The full platform on your infrastructure: visual agent builder, knowledge bases with RAG, MCP integrations, RBAC, SSO/SAML, and full audit trail.",
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

export type PriceResult = {
  price: string;
  note?: string;
  monthlyEquivalent?: number;
  volumeActive?: boolean;
};

export function priceForTier(
  tier: PricingTier,
  annual: boolean,
  seats?: number,
): PriceResult {
  if (tier.id === "free") {
    return { price: formatUsd(0), note: "forever" };
  }

  if (tier.id === "cloud") {
    const s = seats ?? CLOUD_PLAN.defaultSeats;
    const { monthly, effectivePerSeat, volumeActive } = computeCloudMonthly(s);
    if (annual) {
      const yearly = Math.round(monthly * 12 * (1 - ANNUAL_BILLING_DISCOUNT));
      const perMonth = Math.round((yearly / 12) * 100) / 100;
      return {
        price: formatUsd(perMonth, { period: "mo" }),
        note: `billed annually · ${formatUsd(yearly, { period: "yr" })} · ${s} seats`,
        monthlyEquivalent: perMonth,
        volumeActive,
      };
    }
    return {
      price: formatUsd(monthly, { period: "mo" }),
      note: volumeActive
        ? `${s} seats · $${CLOUD_PLAN.volumeExtraSeatRate}/seat volume rate`
        : `${s} seats · ${formatUsd(effectivePerSeat, { period: "mo" })} effective per seat`,
      monthlyEquivalent: monthly,
      volumeActive,
    };
  }

  if (tier.id === "starter") {
    const s = seats ?? STARTER_PLAN.defaultSeats;
    const monthly = computeStarterMonthly(s);
    if (annual) {
      const yearly = Math.round(monthly * 12 * (1 - ANNUAL_BILLING_DISCOUNT));
      const perMonth = Math.round((yearly / 12) * 100) / 100;
      return {
        price: formatUsd(perMonth, { period: "mo" }),
        note: `billed annually · ${s} seat${s === 1 ? "" : "s"}`,
        monthlyEquivalent: perMonth,
      };
    }
    return {
      price: formatUsd(monthly, { period: "mo" }),
      note: `${s} seat${s === 1 ? "" : "s"}`,
      monthlyEquivalent: monthly,
    };
  }

  if (tier.id === "enterprise") {
    const base = tier.monthlyPrice!;
    if (annual) {
      const yearly = Math.round(base * 12 * (1 - ANNUAL_BILLING_DISCOUNT));
      const perMonth = Math.round((yearly / 12) * 100) / 100;
      return {
        price: formatUsd(perMonth, { period: "mo" }),
        note: `billed annually · self-hosted`,
        monthlyEquivalent: perMonth,
      };
    }
    return { price: formatUsd(base, { prefix: "from", period: "mo" }), note: "self-hosted · SSO · SLA" };
  }

  return { price: "—" };
}

export function featuresForTier(tier: PricingTier, seats?: number): string[] {
  if (tier.id === "cloud") {
    return cloudFeaturesForSeats(seats ?? CLOUD_PLAN.defaultSeats);
  }
  return tier.features;
}
