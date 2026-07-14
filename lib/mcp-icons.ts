/**
 * MCP registry icons — URLs from platform _icons.py CDN fallbacks
 * (The_Platform-main/Platform/apps/agent_builder/mcp_registry/_icons.py)
 */
export type McpRegistryServer = {
  slug: string;
  name: string;
  auth: string;
  platformIconFile: string;
  /** Remote icon URL (same sources as platform static_icon CDN fallbacks) */
  iconUrl: string;
};

export const MCP_REGISTRY_META = {
  title: "MCP Server Registry",
  subtitle: "Remote MCP servers you can connect to — OAuth, Bearer token, or no auth.",
} as const;

/** Platform _CDN_FALLBACKS keyed by static_icon() filename — see _icons.py */
const PLATFORM_ICON_URLS: Record<string, string> = {
  "hub_spot_mcp.jpg":
    "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
  "intercom_mcp.png":
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Intercom_logo.png",
  "stripe_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
  "notion_mcp.png":
    "https://vectorseek.com/wp-content/uploads/2023/01/Notion-Logo-Vector.png",
  "gmail_mcp.png":
    "https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png",
  "google_drive_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51_Im5VNcGahplptFNATUJrq-qU7fIVVLHQ&s",
  "shopify_mcp.png":
    "https://www.pngall.com/wp-content/uploads/13/Shopify-Logo-PNG.png",
  "zapier_mcp.png":
    "https://www.clipartmax.com/png/middle/70-709042_zapier-logo-zapier-logo.png",
  "cloudflare_mcp.png":
    "https://download.logo.wine/logo/Cloudflare/Cloudflare-Logo.wine.png",
  "clerk_mcp.png": "https://clerk.com/v2/downloads/avatar-circle-primary-light.png",
  "dropbox_mcp.png":
    "https://framerusercontent.com/images/qwZHL2pifMnE26IeeNITy8NsozI.png?width=400&height=400",
  "paypal_mcp.png":
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
  "supabase_mcp.png":
    "https://monkedo-static.s3.eu-central-1.amazonaws.com/component-icons/supabase.png",
  "click_up_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlCAeZTtCKu3AgBfAodstpMeroo905pj5og&s",
  "calendly_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktU8TSdEWm9FlT_6o2wXBZJy7SiODCf251Q&s",
  "pipedream_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiv-PYQ3tayBDjFqyBRqtxAL-3lcO0cMs1Q&s",
  "plaid_mcp.png":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv4di43NnuA6378fql-sQ6Cf6dzwOxiyMjg&s",
  "google_calendar.png":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/960px-Google_Calendar_icon_%282020%29.svg.png",
};

function iconUrlFor(filename: string, slug: string): string {
  return (
    PLATFORM_ICON_URLS[filename] ??
    `https://www.google.com/s2/favicons?domain=${slug}.com&sz=128`
  );
}

export const mcpRegistryServers: McpRegistryServer[] = [
  {
    slug: "hubspot",
    name: "HubSpot",
    auth: "OAuth",
    platformIconFile: "hub_spot_mcp.jpg",
    iconUrl: iconUrlFor("hub_spot_mcp.jpg", "hubspot"),
  },
  {
    slug: "intercom",
    name: "Intercom",
    auth: "OAuth",
    platformIconFile: "intercom_mcp.png",
    iconUrl: iconUrlFor("intercom_mcp.png", "intercom"),
  },
  {
    slug: "stripe",
    name: "Stripe",
    auth: "Bearer",
    platformIconFile: "stripe_mcp.png",
    iconUrl: iconUrlFor("stripe_mcp.png", "stripe"),
  },
  {
    slug: "notion",
    name: "Notion",
    auth: "OAuth",
    platformIconFile: "notion_mcp.png",
    iconUrl: iconUrlFor("notion_mcp.png", "notion"),
  },
  {
    slug: "gmail",
    name: "Gmail",
    auth: "OAuth",
    platformIconFile: "gmail_mcp.png",
    iconUrl: iconUrlFor("gmail_mcp.png", "gmail"),
  },
  {
    slug: "google-drive",
    name: "Google Drive",
    auth: "OAuth",
    platformIconFile: "google_drive_mcp.png",
    iconUrl: iconUrlFor("google_drive_mcp.png", "google-drive"),
  },
  {
    slug: "shopify",
    name: "Shopify",
    auth: "OAuth",
    platformIconFile: "shopify_mcp.png",
    iconUrl: iconUrlFor("shopify_mcp.png", "shopify"),
  },
  {
    slug: "zapier",
    name: "Zapier",
    auth: "HTTP",
    platformIconFile: "zapier_mcp.png",
    iconUrl: iconUrlFor("zapier_mcp.png", "zapier"),
  },
  {
    slug: "cloudflare",
    name: "Cloudflare API",
    auth: "Bearer",
    platformIconFile: "cloudflare_mcp.png",
    iconUrl: iconUrlFor("cloudflare_mcp.png", "cloudflare"),
  },
];

function mcpLogo(slug: string, name: string, platformIconFile: string): McpRegistryServer {
  return {
    slug,
    name,
    auth: "",
    platformIconFile,
    iconUrl: iconUrlFor(platformIconFile, slug),
  };
}

/** Broader set for homepage marquee / integrations grid — all platform MCP CDN logos */
export const mcpMarqueeServers: McpRegistryServer[] = [
  ...mcpRegistryServers,
  mcpLogo("clerk", "Clerk", "clerk_mcp.png"),
  mcpLogo("dropbox", "Dropbox", "dropbox_mcp.png"),
  mcpLogo("paypal", "PayPal", "paypal_mcp.png"),
  mcpLogo("supabase", "Supabase", "supabase_mcp.png"),
  mcpLogo("clickup", "ClickUp", "click_up_mcp.png"),
  mcpLogo("calendly", "Calendly", "calendly_mcp.png"),
  mcpLogo("pipedream", "Pipedream", "pipedream_mcp.png"),
  mcpLogo("plaid", "Plaid", "plaid_mcp.png"),
  mcpLogo("google-calendar", "Google Calendar", "google_calendar.png"),
];
