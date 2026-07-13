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
