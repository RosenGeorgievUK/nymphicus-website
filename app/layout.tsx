import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { defaultOgImage } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Visual AI Agent Builder`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/branding/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/branding/assets/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/branding/assets/logo-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Visual AI Agent Builder`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Visual AI Agent Builder`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
