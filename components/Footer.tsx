"use client";

import { LogoLink } from "@/components/LogoLink";
import { useLocale } from "@/components/SiteShell";
import Link from "next/link";
import { platformUrls } from "@/lib/site";

export function Footer() {
  const { dict, path } = useLocale();
  const year = new Date().getFullYear();
  const columns = [dict.footer.product, dict.footer.resources, dict.footer.company];

  return (
    <footer className="border-t border-marketing-border bg-marketing-surface">
      <div className="mx-auto max-w-nym px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoLink size="sm" />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-marketing-text-muted">
              {dict.site.tagline}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-marketing-text-muted">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nym-focus rounded-nym text-sm text-marketing-text-muted transition-colors hover:text-marketing-text"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={path(link.href)}
                        className="nym-focus rounded-nym text-sm text-marketing-text-muted transition-colors hover:text-marketing-text"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-marketing-border pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xs text-marketing-text-muted">
            <span>© Nymphi {year}</span>
            <span className="mx-2 text-marketing-border" aria-hidden>
              ·
            </span>
            <Link href={path("/privacy")} className="hover:text-marketing-text">
              {dict.footer.privacy}
            </Link>
            <span className="mx-2 text-marketing-border" aria-hidden>
              ·
            </span>
            <Link href={path("/terms")} className="hover:text-marketing-text">
              {dict.footer.terms}
            </Link>
            <span className="mx-2 text-marketing-border" aria-hidden>
              ·
            </span>
            <Link href={path("/security")} className="hover:text-marketing-text">
              Security
            </Link>
            <span className="mx-2 text-marketing-border" aria-hidden>
              ·
            </span>
            <a href={platformUrls.login} className="hover:text-marketing-text">
              {dict.cta.login}
            </a>
          </p>

          <p className="text-[11px] text-marketing-text-muted/80 sm:text-right">
            {dict.common.trustBadges.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
