"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { McpBrandTile } from "@/components/McpServerIcon";
import { mcpRegistryServers } from "@/lib/mcp-icons";
import { platformUrls } from "@/lib/site";

type IntegrationDirectoryProps = {
  title: string;
  subtitle?: string;
  searchPlaceholder: string;
  allLabel: string;
  docsLabel: string;
  footer?: React.ReactNode;
};

export function IntegrationDirectory({
  title,
  subtitle,
  searchPlaceholder,
  allLabel,
  docsLabel,
  footer,
}: IntegrationDirectoryProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mcpRegistryServers;
    return mcpRegistryServers.filter(
      (server) =>
        server.name.toLowerCase().includes(q) ||
        server.slug.toLowerCase().includes(q) ||
        server.auth.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section aria-labelledby="integrations-directory-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="integrations-directory-heading"
            className="text-section-title font-semibold text-marketing-text"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-marketing-text-muted">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <label htmlFor="integration-search" className="sr-only">
            {searchPlaceholder}
          </label>
          <input
            id="integration-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="nym-focus w-full rounded-nym border border-marketing-border bg-marketing-surface px-4 py-2.5 text-sm text-marketing-text placeholder:text-marketing-text-muted"
          />
        </div>

        <p className="mt-4 text-center text-sm text-marketing-text-muted">
          {filtered.length} {allLabel}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((server) => (
            <Link
              key={server.slug}
              href={platformUrls.mcpGuide}
              className="nym-focus group flex flex-col items-center gap-2 rounded-nym-lg border border-marketing-border bg-marketing-surface p-4 transition-colors hover:border-nym-primary/30 hover:bg-marketing-surface-elevated"
            >
              <McpBrandTile src={server.iconUrl} alt={server.name} slug={server.slug} size="md" />
              <span className="text-center text-sm font-medium text-marketing-text group-hover:text-nym-primary">
                {server.name}
              </span>
              {server.auth && (
                <span className="text-xs text-marketing-text-muted">{server.auth}</span>
              )}
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-marketing-text-muted">
            No integrations match your search.
          </p>
        )}

        <p className="mt-8 text-center text-sm">
          <Link href={platformUrls.mcpGuide} className="font-medium text-nym-primary hover:underline">
            {docsLabel} →
          </Link>
        </p>

        {footer && <div className="mt-8 text-center text-sm text-marketing-text-muted">{footer}</div>}
      </div>
    </section>
  );
}
