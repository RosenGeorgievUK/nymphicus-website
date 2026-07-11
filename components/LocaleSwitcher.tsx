"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/SiteShell";
import { switchLocalePath } from "@/lib/i18n/paths";
import { localeLabels, type Locale } from "@/lib/i18n/config";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const { locale } = useLocale();

  const locales: Locale[] = ["en", "bg"];

  return (
    <div
      className="flex items-center gap-1 rounded-nym border border-marketing-border bg-marketing-surface p-0.5"
      role="group"
      aria-label="Language"
    >
      {locales.map((target) => {
        const isActive = locale === target;
        return (
          <Link
            key={target}
            href={switchLocalePath(pathname, target)}
            className={`nym-focus rounded-nym px-2 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-nym-primary-50 text-nym-primary"
                : "text-marketing-text-muted hover:text-marketing-text"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {localeLabels[target]}
          </Link>
        );
      })}
    </div>
  );
}
