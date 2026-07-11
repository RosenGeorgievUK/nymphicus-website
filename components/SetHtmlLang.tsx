"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "bg" ? "bg" : "en";
    document.documentElement.classList.toggle("locale-bg", locale === "bg");
  }, [locale]);

  return null;
}
