import type { Locale } from "@/lib/i18n/config";
import { defaultLocale } from "@/lib/i18n/config";

const BG_PREFIX = "/bg";

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized === "/" ? "/" : normalized;
  if (normalized === "/") return BG_PREFIX;
  return `${BG_PREFIX}${normalized}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === BG_PREFIX || pathname.startsWith(`${BG_PREFIX}/`) ? "bg" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === BG_PREFIX) return "/";
  if (pathname.startsWith(`${BG_PREFIX}/`)) return pathname.slice(BG_PREFIX.length) || "/";
  return pathname;
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const basePath = stripLocalePrefix(pathname);
  return localizePath(targetLocale, basePath);
}
