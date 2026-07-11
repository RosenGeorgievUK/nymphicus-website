"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n/paths";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  path: (href: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);

  const value = useMemo(
    () => ({
      locale,
      dict,
      path: (href: string) => localizePath(locale, href),
    }),
    [locale, dict],
  );

  return (
    <LocaleContext.Provider value={value}>
      <SetHtmlLang locale={locale} />
      <JsonLd />
      <a href="#main-content" className="skip-link">
        {dict.common.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </LocaleContext.Provider>
  );
}
