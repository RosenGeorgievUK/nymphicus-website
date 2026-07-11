import platformLinks from "@/branding/platform-links.json";

const links = platformLinks.environments.production;
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
  contactUs: labels.contactUs,
  startFromTemplate: labels.startFromTemplate,
};

export const siteConfig = {
  name: "Nymphicus",
  tagline: "Build AI agents your team can trust.",
  heroTitle: "Build AI agents your team can trust",
  heroGradientPhrase: "AI agents",
  heroSubhead:
    "Design workflows, connect tools via MCP, and run agents at scale — on infrastructure you control.",
  description:
    "Design workflows, connect tools via MCP, and run agents at scale — on infrastructure you control.",
  url: marketing.recommendedDomain,
  ogImage: "/og-image.svg",
  demoVideo: marketing.demoVideo ?? "",
};
