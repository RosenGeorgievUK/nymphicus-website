type AnalyticsProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: AnalyticsProps }) => void;
  }
}

export function trackEvent(name: string, props?: AnalyticsProps) {
  if (typeof window === "undefined" || !window.plausible) return;
  window.plausible(name, props ? { props } : undefined);
}

export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";
