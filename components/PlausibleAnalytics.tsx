import Script from "next/script";
import { plausibleDomain } from "@/lib/analytics";

export function PlausibleAnalytics() {
  if (!plausibleDomain) return null;

  return (
    <Script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
