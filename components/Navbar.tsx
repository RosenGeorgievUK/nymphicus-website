"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { GradientButton } from "@/components/GradientButton";
import { GhostButton } from "@/components/GhostButton";
import { LogoLink } from "@/components/LogoLink";
import { useLocale } from "@/components/SiteShell";
import { platformUrls } from "@/lib/site";

const navLinkClass =
  "nym-focus rounded-nym text-sm font-medium text-marketing-text-muted transition-colors hover:text-marketing-text";

export function Navbar() {
  const { dict, path } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
          scrolled && !menuOpen
            ? "navbar-blur border-b border-marketing-border bg-marketing-bg/80"
            : "bg-transparent"
        }`}
      >
        <nav
          className="relative mx-auto flex h-16 max-w-nym items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
          aria-label={dict.nav.ariaMain}
        >
          <LogoLink />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <Link href={path(link.href)} className={navLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <span className="hidden rounded-full border border-marketing-border bg-marketing-surface/60 px-2.5 py-1 text-xs font-medium text-marketing-text-muted lg:inline">
              {dict.site.socialProof}
            </span>
            <GhostButton href={platformUrls.login} size="sm">
              {dict.cta.login}
            </GhostButton>
            <GradientButton href={platformUrls.register} size="sm">
              {dict.cta.getStartedFree}
            </GradientButton>
          </div>

          <button
            type="button"
            className="nym-focus inline-flex items-center justify-center rounded-nym p-2 text-marketing-text md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? dict.nav.closeMenu : dict.nav.menu}</span>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-marketing-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dict.nav.ariaMain}
        >
          <div className="flex h-16 items-center justify-between border-b border-marketing-border px-4">
            <LogoLink onClick={closeMenu} size="sm" />
            <button
              type="button"
              className="nym-focus rounded-nym p-2 text-marketing-text"
              aria-label={dict.nav.closeMenu}
              onClick={closeMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={path(link.href)}
                  className="nym-focus block rounded-nym px-4 py-3 text-lg font-medium text-marketing-text hover:bg-nym-primary-50"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-t border-marketing-border p-4">
            <GhostButton href={platformUrls.login} className="w-full justify-center">
              {dict.cta.login}
            </GhostButton>
            <GradientButton href={platformUrls.register} className="w-full justify-center">
              {dict.cta.getStartedFree}
            </GradientButton>
          </div>
        </div>
      )}
    </>
  );
}
