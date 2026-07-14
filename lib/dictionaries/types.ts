import type { Locale } from "@/lib/i18n/config";

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type FooterColumn = {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
};

export type PricingTierCopy = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
};

export type CaseStudyCopy = {
  slug: string;
  title: string;
  company: string;
  industry: string;
  template: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  quote: { text: string; name: string; role: string };
  highlights: string[];
};

export type BlogPostCopy = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: {
    type: "heading" | "paragraph" | "list";
    content: string;
    items?: string[];
  }[];
};

export type ChangelogEntryCopy = {
  version: string;
  date: string;
  title: string;
  changes: { type: "feature" | "improvement" | "fix"; text: string }[];
};

export type UseCaseCopy = {
  title: string;
  outcome: string;
};

export type Dictionary = {
  locale: Locale;
  meta: {
    siteTitle: string;
    siteDescription: string;
    ogAlt: string;
  };
  site: {
    name: string;
    tagline: string;
    heroBadge: string;
    heroTitlePrefix: string;
    heroGradientPhrase: string;
    heroTitleSuffix: string;
    heroSubhead: string;
    heroFootnote: string;
    heroScreenshotAlt: string;
    getStartedFree: string;
  };
  cta: {
    login: string;
    signIn: string;
    getStarted: string;
    startFree: string;
    register: string;
    bookDemo: string;
    contactUs: string;
    startFromTemplate: string;
    getStartedFree: string;
  };
  nav: {
    ariaMain: string;
    ariaHome: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    links: NavLink[];
  };
  footer: {
    product: FooterColumn;
    resources: FooterColumn;
    company: FooterColumn;
    privacy: string;
    terms: string;
    copyright: string;
  };
  common: {
    skipToContent: string;
    readMore: string;
    backToBlog: string;
    illustrativeDisclaimer: string;
    startedFromTemplate: string;
    seeAllWorkflows: string;
    readWorkflow: string;
    challenge: string;
    solution: string;
    whatTheyShipped: string;
    moreStories: string;
    getStartedArrow: string;
    llmCostsNote: string;
    faqTitle: string;
    pricingFaqLink: string;
    trustBadgesAria: string;
    trustBadges: string[];
    capabilityMarqueeAria: string;
    capabilities: string[];
    ctaBand: {
      title: string;
      subtitle: string;
      primaryLabel: string;
    };
  };
  home: {
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsTitleHighlight: string;
    pillarsSubtitle: string;
    pillars: { highlight: string; title: string; description: string }[];
    bentoEyebrow: string;
    bentoTitle: string;
    bentoTitleHighlight: string;
    bentoSubtitle: string;
    bentoItems: { title: string; description: string; href: string }[];
    bentoLinks: { templates: string; features: string; useCases: string };
    diffEyebrow: string;
    diffTitle: string;
    diffPoints: { title: string; body: string; href: string; label: string }[];
    diffCompareLink: string;
    caseStudyEyebrow: string;
    caseStudyTitle: string;
    caseStudyTitleHighlight: string;
    caseStudySubtitle: string;
    faqEyebrow: string;
    faqTitle: string;
    integrationsSection: {
      title: string;
      subtitle: string;
      cta: string;
    };
    spotlights: {
      title: string;
      bullets: string[];
      href: string;
      label: string;
    }[];
  };
  pages: Record<
    | "pricing"
    | "features"
    | "templates"
    | "integrations"
    | "useCases"
    | "compare"
    | "security"
    | "about"
    | "contact"
    | "customers"
    | "blog"
    | "changelog"
    | "privacy"
    | "terms"
    | "notFound",
    {
      title: string;
      description: string;
      eyebrow?: string;
      heroTitle?: string;
      heroTitleHighlight?: string;
      heroSubtitle?: string;
      [key: string]: string | undefined;
    }
  >;
  data: {
    homepageFaq: FaqItem[];
    pricingFaq: FaqItem[];
    securityFaq: FaqItem[];
    pricingTiers: PricingTierCopy[];
    pricingValueSignals: { value: string; label: string; detail: string }[];
    caseStudies: CaseStudyCopy[];
    blogPosts: BlogPostCopy[];
    changelogEntries: ChangelogEntryCopy[];
    industryUseCases: UseCaseCopy[];
    integrationsHeading: string;
    integrationsCustom: string;
    integrationsCustomLink: string;
    featureSections: {
      eyebrow: string;
      title: string;
      titleHighlight?: string;
      subtitle: string;
    }[];
    templateCards: {
      title: string;
      category: string;
      description: string;
      flow: string[];
      integrations: string[];
    }[];
    contactOptions: { title: string; description: string; cta: string }[];
    aboutValues: { title: string; description: string }[];
    aboutMissionLabel: string;
    aboutMission: string;
    aboutParagraphs: string[];
    comparePillars: { highlight: string; title: string; description: string }[];
    securityPillars: { highlight: string; title: string; description: string }[];
    securityBullets: string[];
    securitySectionTitle: string;
    securitySectionBody: string;
    nodeTypesEyebrow: string;
    nodeTypesTitle: string;
    nodeTypesSubtitle: string;
    comparisonColumns: { feature: string; nymphi: string; copilots: string; diy: string };
    comparisonLink: string;
    customersShareStory: string;
    customersShareStoryLink: string;
    blogMoreGuides: string;
    blogRequestTopic: string;
    privacySections: { heading: string; paragraphs: string[] }[];
    termsSections: { heading: string; paragraphs: string[] }[];
  };
};
