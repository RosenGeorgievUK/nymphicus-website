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
    heroIntro: string;
    heroUseCases: { role: string; action: string }[];
    heroSubhead: string;
    heroFootnote: string;
    heroScreenshotAlt: string;
    socialProof: string;
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
    seeInAction: string;
    talkToSales: string;
    useTemplate: string;
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
    ctaBand: {
      title: string;
      subtitle: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  home: {
    bentoTitle: string;
    bentoTitleHighlight?: string;
    bentoTitleSuffix?: string;
    bentoItems: {
      title: string;
      description: string;
      href: string;
      category: string;
      cta: string;
      apps?: string[];
      iconSlugs?: string[];
    }[];
    bentoLinks: { templates: string };
    caseStudyEyebrow: string;
    caseStudyTitle: string;
    caseStudyTitleHighlight: string;
    caseStudySubtitle: string;
    faqEyebrow: string;
    faqTitle: string;
    changelogStripTitle: string;
    changelogStripViewAll: string;
    integrationsSection: {
      title: string;
      subtitle: string;
      cta: string;
    };
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
    securityFaq: FaqItem[];
    caseStudies: CaseStudyCopy[];
    blogPosts: BlogPostCopy[];
    changelogEntries: ChangelogEntryCopy[];
    industryUseCases: UseCaseCopy[];
    templateGalleryCategories: string[];
    templateGalleryAllLabel: string;
    templateGallerySearchPlaceholder: string;
    integrationsHeading: string;
    integrationsSubheading: string;
    integrationsCustom: string;
    integrationsCustomLink: string;
    featureSections: {
      eyebrow: string;
      title: string;
      titleHighlight?: string;
      subtitle: string;
    }[];
    templateCards: {
      slug: string;
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
