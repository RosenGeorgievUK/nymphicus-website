export const locales = ["en", "bg"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  bg: "БГ",
};

export const localeOgLocales: Record<Locale, string> = {
  en: "en_US",
  bg: "bg_BG",
};
