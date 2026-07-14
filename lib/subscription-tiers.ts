import type { PricingTierId } from "@/lib/pricing-page";

/** Billable / limitable platform surfaces mapped from product + marketing. */
export type NymphiService =
  | "visual_agent_builder"
  | "node_types"
  | "agents"
  | "knowledge_bases"
  | "mcp_integrations"
  | "byo_api_keys"
  | "workflow_execution"
  | "human_approval"
  | "rbac"
  | "audit_trail"
  | "org_seats"
  | "support"
  | "deployment"
  | "sso_saml";

export type EntitlementLimit =
  | { kind: "unlimited" }
  | { kind: "count"; value: number }
  | { kind: "storage_mb"; value: number }
  | { kind: "storage_gb"; value: number }
  | { kind: "retention_days"; value: number }
  | { kind: "boolean"; value: boolean }
  | { kind: "text"; value: string };

export type TierEntitlements = {
  id: PricingTierId;
  /** Monthly platform fee in USD (null = sales-led / custom). */
  monthlyPriceGbp: number | null;
  annualPriceGbp: number | null;
  includedSeats: number | "unlimited";
  extraSeatPriceGbp: number | null;
  agents: EntitlementLimit;
  knowledgeBases: EntitlementLimit;
  knowledgeStorage: EntitlementLimit;
  mcpConnections: EntitlementLimit;
  rbac: EntitlementLimit;
  auditRetention: EntitlementLimit;
  ssoSaml: EntitlementLimit;
  deployment: EntitlementLimit;
  support: EntitlementLimit;
};

/** Canonical entitlement matrix — source of truth for marketing + future platform enforcement. */
export const subscriptionTierEntitlements: TierEntitlements[] = [
  {
    id: "free",
    monthlyPriceGbp: 0,
    annualPriceGbp: 0,
    includedSeats: 1,
    extraSeatPriceGbp: null,
    agents: { kind: "count", value: 2 },
    knowledgeBases: { kind: "count", value: 1 },
    knowledgeStorage: { kind: "storage_mb", value: 50 },
    mcpConnections: { kind: "count", value: 2 },
    rbac: { kind: "text", value: "workspace owner only" },
    auditRetention: { kind: "retention_days", value: 7 },
    ssoSaml: { kind: "boolean", value: false },
    deployment: { kind: "text", value: "cloud" },
    support: { kind: "text", value: "community" },
  },
  {
    id: "starter",
    monthlyPriceGbp: 19,
    annualPriceGbp: 182,
    includedSeats: 1,
    extraSeatPriceGbp: 8,
    agents: { kind: "count", value: 3 },
    knowledgeBases: { kind: "count", value: 1 },
    knowledgeStorage: { kind: "storage_mb", value: 250 },
    mcpConnections: { kind: "count", value: 3 },
    rbac: { kind: "text", value: "workspace owner only" },
    auditRetention: { kind: "retention_days", value: 14 },
    ssoSaml: { kind: "boolean", value: false },
    deployment: { kind: "text", value: "cloud" },
    support: { kind: "text", value: "email" },
  },
  {
    id: "cloud",
    monthlyPriceGbp: 49,
    annualPriceGbp: 470,
    includedSeats: 3,
    extraSeatPriceGbp: 14,
    agents: { kind: "count", value: 10 },
    knowledgeBases: { kind: "count", value: 10 },
    knowledgeStorage: { kind: "storage_gb", value: 2 },
    mcpConnections: { kind: "unlimited" },
    rbac: { kind: "text", value: "basic roles; full RBAC at 10+ seats" },
    auditRetention: { kind: "retention_days", value: 30 },
    ssoSaml: { kind: "boolean", value: false },
    deployment: { kind: "text", value: "cloud" },
    support: { kind: "text", value: "email; priority at 10+ seats" },
  },
  {
    id: "enterprise",
    monthlyPriceGbp: 499,
    annualPriceGbp: null,
    includedSeats: "unlimited",
    extraSeatPriceGbp: null,
    agents: { kind: "unlimited" },
    knowledgeBases: { kind: "unlimited" },
    knowledgeStorage: { kind: "text", value: "customer infrastructure" },
    mcpConnections: { kind: "unlimited" },
    rbac: { kind: "text", value: "full RBAC + SSO/SAML" },
    auditRetention: { kind: "text", value: "unlimited / customer policy" },
    ssoSaml: { kind: "boolean", value: true },
    deployment: { kind: "text", value: "self-hosted (on-prem or VPC)" },
    support: { kind: "text", value: "SLA + onboarding" },
  },
];

export type PlatformEnforcementStatus = "implemented" | "partial" | "missing" | "copy_only";

export type PlatformGap = {
  service: NymphiService;
  marketed: string;
  platformToday: string;
  status: PlatformEnforcementStatus;
  priority: "P0" | "P1" | "P2";
  notes?: string;
};

/** Marketing ↔ platform gap register (The_Platform-main, Jul 2026). */
export const platformGapRegister: PlatformGap[] = [
  {
    service: "org_seats",
    marketed: "1 / 1–5 / 1–50 / unlimited seats by tier",
    platformToday: "Organization.max_users enforced on invite (default 5)",
    status: "partial",
    priority: "P0",
    notes: "Seat cap exists but is not tied to subscription plan.",
  },
  {
    service: "agents",
    marketed: "2 / 3 / 10 / unlimited / unlimited agents",
    platformToday: "No agent count limit on create",
    status: "missing",
    priority: "P0",
  },
  {
    service: "knowledge_bases",
    marketed: "1×50MB / 10×2GB / unlimited×20GB / custom",
    platformToday: "VectorStore CRUD with no plan-scoped quotas",
    status: "missing",
    priority: "P0",
  },
  {
    service: "mcp_integrations",
    marketed: "2 / unlimited / unlimited / unlimited MCP connections",
    platformToday: "McpServerConnection with no plan limit",
    status: "missing",
    priority: "P0",
  },
  {
    service: "audit_trail",
    marketed: "7d / 30d / 1yr / unlimited retention + export",
    platformToday: "WorkflowExecution logs exist; no retention tiers or compliance export API",
    status: "partial",
    priority: "P1",
  },
  {
    service: "rbac",
    marketed: "Basic roles on Pro; full RBAC at 10+ seats",
    platformToday: "Role catalog implemented; not differentiated by plan",
    status: "partial",
    priority: "P1",
  },
  {
    service: "sso_saml",
    marketed: "Enterprise SSO/SAML",
    platformToday: "Not implemented",
    status: "copy_only",
    priority: "P2",
  },
  {
    service: "deployment",
    marketed: "Self-hosted / VPC enterprise",
    platformToday: "Cloud SaaS only in repo; self-host is sales process",
    status: "copy_only",
    priority: "P2",
  },
  {
    service: "support",
    marketed: "Community / email / priority / SLA",
    platformToday: "No in-app tier routing to support channels",
    status: "copy_only",
    priority: "P2",
  },
];

export type ImplementationEpic = {
  id: string;
  title: string;
  scope: string;
  size: "S" | "M" | "L" | "XL";
};

/** Suggested platform backlog to make tiers enforceable + billable. */
export const implementationBacklog: ImplementationEpic[] = [
  {
    id: "E1",
    title: "Plan & subscription model",
    scope: "Plan, Subscription, Entitlement models; Stripe (or PSP) + webhooks; assign plan to org",
    size: "XL",
  },
  {
    id: "E2",
    title: "Quota enforcement",
    scope: "Enforce agents, KB count/storage, MCP connections, seats on create/invite/ingest",
    size: "L",
  },
  {
    id: "E3",
    title: "Governance tiers",
    scope: "Role templates per plan; audit retention job; execution log export API",
    size: "L",
  },
  {
    id: "E4",
    title: "Enterprise packaging",
    scope: "SSO/SAML spike; self-host licensing + deployment runbook",
    size: "XL",
  },
  {
    id: "E5",
    title: "Growth mechanics",
    scope: "Free trial window, upgrade prompts, storage-overage UX (per pricing FAQ)",
    size: "M",
  },
];

export const productDecisions = [
  "Free tier: 1-seat individual workspace (org created on upgrade to Starter/Pro).",
  "Starter $19/mo — solo builders; +$8/mo per extra seat (up to 5).",
  "Pro is one cloud plan — $49/mo up to 3 seats, volume discount from 10 seats ($149 base + $10/seat).",
  "Annual billing: 20% discount (one Stripe txn/yr improves margin vs monthly).",
  "Currency: USD canonical on site; COGS ≈ Stripe 2.9% + $0.30/txn (~96–98% margin on paid tiers).",
  "BYO keys: no per-task markup on any tier — platform fee only.",
] as const;

export function getTierEntitlements(tierId: PricingTierId): TierEntitlements | undefined {
  return subscriptionTierEntitlements.find((tier) => tier.id === tierId);
}
