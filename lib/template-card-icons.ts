import { mcpRegistryServers } from "@/lib/mcp-icons";

export type TemplateCardIcon = {
  slug: string;
  name: string;
  iconUrl: string;
};

const serversBySlug = Object.fromEntries(
  mcpRegistryServers.map((server) => [server.slug, server]),
);

const serversByName = Object.fromEntries(
  mcpRegistryServers.map((server) => [server.name.toLowerCase(), server]),
);

/** Resolve MCP slugs or display names to icon metadata for template cards. */
export function iconsForTemplateApps(apps: string[] = [], slugs: string[] = []): TemplateCardIcon[] {
  const resolved: TemplateCardIcon[] = [];
  const seen = new Set<string>();

  for (const slug of slugs) {
    const server = serversBySlug[slug];
    if (!server || seen.has(server.slug)) continue;
    seen.add(server.slug);
    resolved.push({ slug: server.slug, name: server.name, iconUrl: server.iconUrl });
  }

  for (const app of apps) {
    const server = serversByName[app.toLowerCase()];
    if (!server || seen.has(server.slug)) continue;
    seen.add(server.slug);
    resolved.push({ slug: server.slug, name: server.name, iconUrl: server.iconUrl });
  }

  return resolved.slice(0, 4);
}

export function extraTemplateAppCount(apps: string[] = [], iconCount: number): number {
  return Math.max(0, apps.length - iconCount);
}
