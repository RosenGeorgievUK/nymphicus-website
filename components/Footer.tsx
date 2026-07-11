"use client";

import { LogoLink } from "@/components/LogoLink";
import { TrustBadges } from "@/components/TrustBadges";
import { useLocale } from "@/components/SiteShell";
import Link from "next/link";
import { platformUrls } from "@/lib/site";

export function Footer() {
  const { dict, path } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-marketing-border bg-marketing-surface">
      <div className="mx-auto max-w-nym px-4 py-12 sm:px-6 lg:px-8">
        <TrustBadges
          badges={dict.common.trustBadges}
          ariaLabel={dict.common.trustBadgesAria}
          className="mb-10 justify-center"
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LogoLink />
            <p className="mt-3 max-w-sm text-sm text-marketing-text-muted">{dict.site.tagline}</p>
          </div>

          {[dict.footer.product, dict.footer.resources, dict.footer.company].map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-marketing-text">{column.title}</h2>
              <ul className="mt-4 space-y-2">
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

        <p className="mt-10 text-center text-xs text-marketing-text-muted md:text-left">
          © Nymphicus {year}
          {" · "}
          <Link href={path("/privacy")} className="hover:text-marketing-text">
            {dict.footer.privacy}
          </Link>
          {" · "}
          <Link href={path("/terms")} className="hover:text-marketing-text">
            {dict.footer.terms}
          </Link>
          {" · "}
          <a
            href={platformUrls.login}
            className="hover:text-marketing-text"
          >
            {dict.cta.login}
          </a>
        </p>
      </div>
    </footer>
  );
}
