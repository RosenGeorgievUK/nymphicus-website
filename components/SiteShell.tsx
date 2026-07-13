"use client";

import { createContext, useContext, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import type { Dictionary } from "@/lib/dictionaries/types";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type SiteContextValue = {
  dict: Dictionary;
  path: (href: string) => string;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useLocale() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useLocale must be used within SiteShell");
  }
  return context;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const dict = getDictionary();

  const value = useMemo(
    () => ({
      dict,
      path: (href: string) => (href.startsWith("/") ? href : `/${href}`),
    }),
    [dict],
  );

  return (
    <SiteContext.Provider value={value}>
      <JsonLd />
      <a href="#main-content" className="skip-link">
        {dict.common.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </SiteContext.Provider>
  );
}
