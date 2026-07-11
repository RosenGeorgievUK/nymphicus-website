import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { localeOgLocales } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
};

const ogImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Visual AI Agent Builder`,
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en",
}: PageMetadataOptions): Metadata {
  const localizedPath = localizePath(locale, path);
  const url = `${siteConfig.url}${localizedPath}`;
  const alternateEn = `${siteConfig.url}${localizePath("en", path)}`;
  const alternateBg = `${siteConfig.url}${localizePath("bg", path)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: alternateEn,
        bg: alternateBg,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      locale: localeOgLocales[locale],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const defaultOgImage = ogImage;
