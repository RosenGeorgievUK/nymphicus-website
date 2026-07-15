import platformLinks from "@/branding/platform-links.json";

type PlatformEnvironment = keyof typeof platformLinks.environments;

function resolvePlatformEnvironment(): PlatformEnvironment {
  const explicit = process.env.NEXT_PUBLIC_APP_ENV as PlatformEnvironment | undefined;
  if (explicit && explicit in platformLinks.environments) {
    return explicit;
  }

  if (process.env.NEXT_PUBLIC_PLATFORM_FALLBACK === "true") {
    return "fallback";
  }

  if (process.env.NODE_ENV === "development") {
    return "local";
  }

  return "production";
}

export const platformEnvironment = resolvePlatformEnvironment();

const links = platformLinks.environments[platformEnvironment];
const labels = platformLinks.ctaLabels;
const marketing = platformLinks.marketing;

export const platformUrls = {
  login: links.login,
  register: links.registerIndividual,
  registerOrganization: links.registerOrganization,
  dashboard: links.dashboard,
  baseUrl: links.baseUrl,
  bookDemo: marketing.bookDemo,
  contactEmail: marketing.contactEmail,
  enterpriseContact: marketing.enterpriseContact,
  docs: marketing.docs,
  changelog: marketing.changelog,
  mcpGuide: marketing.mcpGuide,
};

export const ctaLabels = {
  login: labels.login,
  signIn: labels.signIn,
  getStarted: labels.getStarted,
  startFree: labels.startFree,
  register: labels.register,
  bookDemo: labels.bookDemo,
  seeInAction: labels.seeInAction,
  contactUs: labels.contactUs,
  startFromTemplate: labels.startFromTemplate,
  useTemplate: labels.useTemplate,
};

export const siteConfig = {
  name: "Nymphi",
  tagline: "Build AI agents your team can trust.",
  heroTitle: "Build AI agents your team can trust",
  heroGradientPhrase: "AI agents",
  heroSubhead:
    "Build AI workflows visually, connect the apps you already use, and stay in control of your data and costs.",
  description:
    "Build AI workflows visually, connect the apps you already use, and stay in control of your data and costs.",
  url: marketing.recommendedDomain,
  ogImage: "/og-image.svg",
  demoVideo: marketing.demoVideo ?? "",
};
