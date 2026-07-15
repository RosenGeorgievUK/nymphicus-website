import type { Dictionary } from "./types";
import { blogPosts } from "@/lib/blog-posts";
import { caseStudies } from "@/lib/case-studies";
import { changelogEntries } from "@/lib/changelog";
import { homepageFaq } from "@/lib/faq";

const en: Dictionary = {
  locale: "en",
  meta: {
    siteTitle: "Visual AI Agent Builder",
    siteDescription:
      "Build AI assistants visually, connect the apps you already use, and stay in control of your data and costs.",
    ogAlt: "Nymphi — Visual AI Agent Builder",
  },
  site: {
    name: "Nymphi",
    tagline: "Build AI agents your team can trust.",
    heroIntro: "AI assistants for every team — including",
    heroUseCases: [
      { role: "Support teams", action: "draft replies with a human checking before send" },
      { role: "Sales teams", action: "update HubSpot without leaving the builder" },
      { role: "IT teams", action: "run AI on your own servers with full oversight" },
      { role: "You", action: "start from a template in under an hour" },
    ],
    heroSubhead:
      "Design AI workflows on a visual canvas, connect your existing tools, and keep humans in the loop — without stitching together multiple products.",
    heroFootnote: "Free to start · No credit card · Use your own AI account · Cloud or your own servers",
    heroScreenshotAlt: "Nymphi agent builder dashboard",
    socialProof: "12+ app connectors",
  },
  cta: {
    login: "Log in",
    signIn: "Sign in",
    getStarted: "Get started free",
    startFree: "Get started free",
    register: "Get started free",
    bookDemo: "Talk to sales",
    contactUs: "Contact us",
    startFromTemplate: "Use this template",
    getStartedFree: "Get started free",
    seeInAction: "See it in action",
    talkToSales: "Talk to sales",
    useTemplate: "Use this template",
  },
  nav: {
    ariaMain: "Main navigation",
    ariaHome: "Nymphi home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    links: [
      { href: "/use-cases", label: "Use Cases" },
      { href: "/templates", label: "Templates" },
      { href: "/integrations", label: "Integrations" },
      { href: "/features", label: "Features" },
      { href: "/compare", label: "Compare" },
      { href: "/security", label: "Security" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
    ],
  },
  footer: {
    product: {
      title: "Product",
      links: [
        { href: "/features", label: "Features" },
        { href: "/use-cases", label: "Use Cases" },
        { href: "/templates", label: "Templates" },
        { href: "/integrations", label: "Integrations" },
        { href: "/pricing", label: "Pricing" },
        { href: "/customers", label: "Customers" },
        { href: "/compare", label: "Compare" },
        { href: "/security", label: "Security" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { href: "https://docs.nymphi.ai", label: "Documentation", external: true },
        { href: "/blog", label: "Blog" },
        { href: "/changelog", label: "Changelog" },
        { href: "https://docs.nymphi.ai/integrations/mcp", label: "Integration guide", external: true },
      ],
    },
    company: {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
    },
    privacy: "Privacy",
    terms: "Terms",
    copyright: "© Nymphi",
  },
  common: {
    skipToContent: "Skip to content",
    readMore: "Read more",
    backToBlog: "Back to blog",
    illustrativeDisclaimer:
      "Illustrative examples from support, sales, and IT teams — built from templates with built-in controls. Not verified customer claims.",
    startedFromTemplate: "Started from template",
    seeAllWorkflows: "All example workflows →",
    readWorkflow: "Read workflow →",
    challenge: "Challenge",
    solution: "Solution",
    whatTheyShipped: "What they shipped",
    moreStories: "More stories",
    getStartedArrow: "Get started free →",
    llmCostsNote:
      "LLM costs are billed separately by your provider — Nymphi does not add a per-task credit markup.",
    faqTitle: "Frequently asked questions",
    pricingFaqLink: "Pricing FAQ →",
    trustBadgesAria: "Trust and compliance badges",
    trustBadges: ["SOC 2 (in progress)", "GDPR-ready", "Self-hosted option"],
    ctaBand: {
      title: "Start building your first agent today",
      subtitle: "Free to start. No credit card. Connect your own OpenAI or Anthropic account.",
      primaryLabel: "Get started free",
      secondaryLabel: "Talk to sales",
    },
  },
  home: {
    bentoTitle: "Popular",
    bentoTitleHighlight: "agent",
    bentoTitleSuffix: "templates",
    bentoItems: [
      {
        title: "Support triage",
        description:
          "Classify support tickets, search the knowledge base, and draft replies with human approval.",
        href: "/customers/support-triage",
        category: "Customer Support",
        cta: "Use this template",
        apps: ["Intercom", "File Search", "User Approval"],
        iconSlugs: ["intercom"],
      },
      {
        title: "CRM copilot",
        description: "Look up HubSpot records, update deals, and take CRM actions — right from the builder.",
        href: "/customers/crm-copilot",
        category: "Sales",
        cta: "Use this template",
        apps: ["HubSpot", "CRM actions", "AI assistant"],
        iconSlugs: ["hubspot"],
      },
      {
        title: "Knowledge search",
        description: "Answer questions from your company docs with sources cited on every response.",
        href: "/templates",
        category: "Knowledge",
        cta: "View workflow",
        apps: ["File Search", "LLM", "Citations"],
        iconSlugs: ["notion"],
      },
    ],
    bentoLinks: {
      templates: "All templates",
    },
    caseStudyEyebrow: "Example workflow",
    caseStudyTitle: "From blocked pilot to",
    caseStudyTitleHighlight: "production in one afternoon",
    caseStudySubtitle:
      "An illustrative support workflow — go from idea to a working assistant in an afternoon, not a multi-week project.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions",
    changelogStripTitle: "What's new",
    changelogStripViewAll: "Full changelog",
    integrationsSection: {
      title: "Connect the apps your team already uses",
      subtitle:
        "Pre-built connectors for common tools. Custom connections for everything else.",
      cta: "Browse all integrations",
    },
  },
    pages: {
    pricing: {
      title: "Pricing",
      description:
        "Transparent pricing for Nymphi — Free, Starter $19/mo, Pro scales with seats, Enterprise self-hosted.",
      eyebrow: "Pricing",
      heroTitle: "Transparent pricing,",
      heroTitleHighlight: "no credit anxiety",
      heroSubtitle:
        "Start free. Starter $19/mo. Pro scales with your team — volume discounts from 10 seats. Enterprise for self-hosting and SSO.",
    },
    features: {
      title: "Features",
      description:
        "Nymphi features: visual AI builder, app integrations, searchable knowledge bases, and built-in security controls.",
      eyebrow: "Features",
      heroTitle: "Build, connect, and control —",
      heroTitleHighlight: "without trade-offs",
      heroSubtitle: "From the visual builder to app connections and activity logs.",
      getStartedLink: "Get started free →",
    },
    templates: {
      title: "Templates",
      description:
        "Start from Nymphi agent templates: Support Triage, CRM Copilot, and Knowledge Base Chatbot.",
      eyebrow: "Templates",
      heroTitle: "Start from a workflow that",
      heroTitleHighlight: "already works",
      heroSubtitle: "Three production-ready templates. Customize on the canvas, deploy with your keys.",
      ctaBandTitle: "Clone a template. Launch your first assistant today.",
      searchPlaceholder: "Search templates…",
    },
    integrations: {
      title: "Integrations",
      description:
        "Connect Nymphi assistants to your tools via integrations, APIs, webhooks, and knowledge bases.",
      eyebrow: "Integrations",
      heroTitle: "Connect any tool",
      heroTitleHighlight: "your team uses",
      heroSubtitle:
        "Browse the app directory, attach tools to your workflow, and extend without writing custom glue code.",
      screenshotAlt: "App integrations directory in Nymphi",
      ctaBandTitle: "Your stack. Connected in minutes.",
      searchPlaceholder: "Search integrations…",
      resultsLabel: "connectors",
      docsLabel: "Integration guide",
    },
    useCases: {
      title: "Use Cases",
      description:
        "AI agent use cases for sales, marketing, support, e-commerce, finance, legal, HR, product, engineering, and professional services.",
      eyebrow: "Use cases",
      heroTitle: "Agents for every team in",
      heroTitleHighlight: "your company",
      heroSubtitle:
        "Pick your industry, connect your tools, and start from a template — or build custom workflows on the canvas.",
      ctaBandTitle: "One platform. Every team.",
      ctaBandSubtitle: "Start from a template or build your own workflow on the canvas.",
    },
    compare: {
      title: "Nymphi vs n8n & Zapier",
      description:
        "Compare Nymphi to n8n and Zapier — visual AI builder, native integrations, your own AI account, and built-in approvals.",
      eyebrow: "Compare",
      heroTitle: "Nymphi vs n8n",
      heroTitleHighlight: "and Zapier",
      heroSubtitle:
        "See how an AI-first builder compares to workflow automation tools — on intelligence, connections, human approvals, and pricing.",
      startBuilding: "Get started free",
      migrationTemplateLink: "Start from the Support Triage template →",
    },
    security: {
      title: "Security",
      description:
        "Nymphi security: team permissions, activity logs, your own AI keys, self-hosted option, and compliance-ready controls.",
      eyebrow: "Security",
      heroTitle: "AI assistants need",
      heroTitleHighlight: "real security",
      heroSubtitle:
        "Team permissions, full activity logs, your own AI account, and self-hosting — built in, not bolted on.",
      faqTitle: "Security FAQ",
      ctaBandTitle: "Secure assistants. Without the enterprise price tag.",
      screenshotAlt: "Execution logs and audit trail",
    },
    about: {
      title: "About",
      description:
        "Nymphi is building the visual AI platform for teams who need speed, control, and peace of mind.",
      eyebrow: "About",
      heroTitle: "Building the future of",
      heroTitleHighlight: "trustworthy AI assistants",
      startBuilding: "Start building free",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with Nymphi — book a demo, ask about Enterprise self-hosting, or start building for free.",
      eyebrow: "Contact",
      heroTitle: "Let's talk about your agents",
      heroSubtitle:
        "Whether you're exploring, ready to build, or need Enterprise deployment — we're here.",
      emailPrefix: "Email us directly at",
    },
    customers: {
      title: "Example Workflows",
      description:
        "Illustrative Nymphi workflows — support triage, CRM assistants, and secure self-hosted setups.",
      eyebrow: "Example workflows",
      heroTitle: "How teams launch assistants",
      heroTitleHighlight: "without the trade-offs",
      heroSubtitle:
        "Illustrative examples from support, sales, and IT teams — built from templates with built-in controls. Not verified customer claims.",
      shareStory: "Want to share your story?",
      shareStoryLink: "Get in touch",
      ctaBandTitle: "Your team could be next.",
    },
    blog: {
      title: "Blog",
      description:
        "Guides on connecting your tools, building support assistants, and rolling out AI with proper controls.",
      eyebrow: "Blog",
      heroTitle: "Practical guides for",
      heroTitleHighlight: "real-world AI",
      heroSubtitle:
        "Integrations, templates, and security — written for teams putting AI to work, not just experimenting.",
    },
    changelog: {
      title: "Changelog",
      description: "Product updates for Nymphi — new features, improvements, and fixes.",
      eyebrow: "Changelog",
      heroTitle: "Moving fast,",
      heroTitleHighlight: "with security built in",
      heroSubtitle:
        "New features, improvements, and fixes — the platform evolves with the teams building on it.",
      betaPrompt: "Want early access to what's next?",
      betaLink: "Join the beta list",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How Nymphi handles data on the marketing website and links to the application at app.nymphi.ai.",
      eyebrow: "Legal",
      heroTitle: "Privacy Policy",
      heroSubtitle: "Last updated: July 2026",
      ctaBandTitle: "Ready to build?",
      ctaPrimaryLabel: "Get started free",
      seeAlsoTerms: "See also our Terms of Service.",
    },
    terms: {
      title: "Terms of Service",
      description: "Terms governing use of the Nymphi marketing website at www.nymphi.ai.",
      eyebrow: "Legal",
      heroTitle: "Terms of Service",
      heroSubtitle: "Last updated: July 2026",
      seeAlsoPrivacy: "See also our Privacy Policy.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
      eyebrow: "404",
      heroTitle: "This page doesn't exist — but your",
      heroTitleHighlight: "first agent",
      heroTitleSuffix: "can",
      heroSubtitle: "The link may be broken or the page may have moved. Head back home or start building.",
      backToHome: "Back to home",
      getStartedLink: "Get started free →",
    },
  },
  data: {
    homepageFaq,
    securityFaq: [
      {
        question: "Where are API keys stored?",
        answer:
          "You connect your OpenAI, Anthropic, or other provider keys to your workspace. Cloud accounts encrypt credentials at rest. Self-hosted setups keep keys entirely on your own servers.",
      },
      {
        question: "Can we export audit logs?",
        answer:
          "Yes. Execution logs include full node traces and can be exported for compliance reviews and incident response.",
      },
      {
        question: "What compliance certifications are you pursuing?",
        answer:
          "SOC 2 Type II is in progress. GDPR-ready data handling is supported today, with region selection on cloud deployments.",
      },
      {
        question: "How do team permissions work?",
        answer:
          "You decide who can build assistants, edit knowledge bases, connect apps, and approve sensitive steps before they run.",
      },
    ],
    caseStudies,
    blogPosts,
    changelogEntries,
    industryUseCases: [
      {
        title: "Sales",
        outcome: "Qualify leads, update CRM, and draft follow-ups from one agent workflow.",
      },
      {
        title: "Marketing",
        outcome: "Generate campaign briefs, repurpose content, and route approvals before publish.",
      },
      {
        title: "Customer Support",
        outcome: "Triage tickets, search the knowledge base, and draft replies with human approval.",
      },
      {
        title: "E-commerce",
        outcome: "Handle order lookups, returns, and inventory questions across storefront tools.",
      },
      {
        title: "Finance",
        outcome: "Reconcile transactions, flag anomalies, and summarize month-end close tasks.",
      },
      {
        title: "Legal / Compliance",
        outcome: "Review contracts against policy, cite sources, and route exceptions for review.",
      },
      {
        title: "HR",
        outcome: "Answer policy questions, route requests, and onboard employees with guided flows.",
      },
      {
        title: "Product",
        outcome: "Summarize feedback, draft specs, and sync insights to your roadmap tools.",
      },
      {
        title: "Engineering",
        outcome: "Triage incidents, search runbooks, and suggest fixes with a full record of what happened.",
      },
      {
        title: "Professional Services",
        outcome: "Prepare client deliverables, pull context from docs, and track billable work.",
      },
    ],
    templateGalleryCategories: ["Customer Support", "Sales", "Any team"],
    templateGalleryAllLabel: "All",
    templateGallerySearchPlaceholder: "Search templates…",
    integrationsHeading: "Works with the tools your team already uses",
    integrationsSubheading: "Search the app directory — sign in with OAuth or connect with an API key.",
    integrationsCustom: "Need a custom connector?",
    integrationsCustomLink: "Talk to us about custom integrations",
    featureSections: [
      {
        eyebrow: "Dashboard",
        title: "One place to",
        titleHighlight: "run every agent",
        subtitle:
          "Monitor workflows, track activity, and jump into the builder — one place to see everything running.",
      },
      {
        eyebrow: "Agent Builder",
        title: "Design workflows on a visual canvas",
        subtitle:
          "Drag-and-drop steps, test as you build, and version your work — no coding required to get started.",
      },
      {
        eyebrow: "Agents",
        title: "Deploy and govern at scale",
        subtitle:
          "Organize agents by team and environment — with permissions that match how your company actually works.",
      },
      {
        eyebrow: "Security",
        title: "Audit every run",
        subtitle:
          "Full activity logs, human approvals, and team permissions — confidence you can show your security team.",
      },
    ],
    templateCards: [
      {
        slug: "support-triage",
        title: "Support Triage Agent",
        category: "Customer Support",
        description:
          "Classify incoming tickets, search your knowledge base, draft a reply, update Intercom, and route for human approval before sending.",
        flow: [
          "Start → Classify Ticket",
          "File Search (Technical branch)",
          "Draft Reply (Agent)",
          "Update Intercom",
          "Human Review (User Approval)",
          "End",
        ],
        integrations: ["Intercom", "File Search", "User Approval"],
      },
      {
        slug: "crm-copilot",
        title: "CRM Copilot",
        category: "Sales",
        description:
          "Answer CRM questions, draft outreach emails, and update deal records in HubSpot — built for sales teams.",
        flow: [
          "Start",
          "CRM Assistant",
          "HubSpot actions",
          "End",
        ],
        integrations: ["HubSpot", "AI assistant"],
      },
      {
        slug: "governed-agents",
        title: "Knowledge Base Chatbot",
        category: "Any team",
        description:
          "Search your company docs and answer with cited sources — for internal help desks, policy Q&A, and onboarding.",
        flow: [
          "Start",
          "Company Docs (File Search)",
          "Answer with Citations (Agent)",
          "End",
        ],
        integrations: ["File Search", "Agent"],
      },
    ],
    contactOptions: [
      {
        title: "Start building",
        description:
          "Create a free account and connect your own API keys. No credit card required.",
        cta: "Get started",
      },
      {
        title: "Book a demo",
        description:
          "See the visual builder, app integrations, and security controls in a live walkthrough.",
        cta: "Book a demo",
      },
      {
        title: "Enterprise & self-hosting",
        description:
          "Discuss single sign-on, activity log export, SLAs, and running on your own servers with our team.",
        cta: "Contact us",
      },
    ],
    aboutValues: [
      {
        title: "Built for everyone",
        description:
          "The best platform is one your whole team actually uses. We start with a visual builder anyone can learn.",
      },
      {
        title: "Your data stays yours",
        description:
          "Your AI keys, your documents, your servers. We don't mark up AI usage or lock you into our cloud.",
      },
      {
        title: "Security from day one",
        description:
          "Team permissions, activity logs, and approvals aren't paid add-ons — they're included from the start.",
      },
    ],
    aboutMissionLabel: "Our mission",
    aboutMission:
      "Give every team the power to build AI assistants that actually work — without giving up control of their data, costs, or security.",
    aboutParagraphs: [
      "Nymphi is a visual AI builder for teams who need to move fast without losing control. We believe the next wave of AI won't come from black-box chatbots — it'll come from assistants your team designs, tests, and approves on their own terms.",
      "Our platform combines a drag-and-drop builder with searchable knowledge bases, app integrations, team permissions, and activity logs. Whether you use our cloud or run on your own servers, you connect your own AI account and pay providers directly — no hidden AI markup.",
      "We're an early-stage team focused on giving business teams and IT a shared place to launch AI that does real work.",
    ],
    comparePillars: [
      {
        highlight: "vs. Copilots",
        title: "No credit anxiety",
        description:
          "Pay OpenAI and Anthropic directly. No per-task markup that punishes you for scaling.",
      },
      {
        highlight: "vs. DIY",
        title: "Launch in hours",
        description: "Templates, visual builder, and an app directory replace weeks of custom development.",
      },
      {
        highlight: "vs. Both",
        title: "Security built in",
        description: "Team permissions, activity logs, and human approval — not a later project.",
      },
    ],
    securityPillars: [
      {
        highlight: "Access",
        title: "Role-based control",
        description:
          "Set who can build assistants, edit documents, connect apps, and approve actions — so the right people stay in control.",
      },
      {
        highlight: "Audit",
        title: "Every run logged",
        description:
          "Immutable execution logs with full node trace. Export-ready for compliance reviews and security investigations.",
      },
      {
        highlight: "Data",
        title: "Your keys, your servers",
        description:
          "Connect your own AI account with no markup. Enterprise self-hosting keeps data and credentials on your systems.",
      },
    ],
    securityBullets: [
      "Approval gates before external actions",
      "Full node-level execution trace",
      "Scoped access per team and role",
      "Cloud or self-hosted data residency",
    ],
    securitySectionTitle: "Human-in-the-loop by design",
    securitySectionBody:
      "Sensitive actions pause until a human approves them. Security teams get the logs they need. Business teams keep moving without workarounds.",
    nodeTypesEyebrow: "Canvas",
    nodeTypesTitle: "15 node types. Zero black boxes.",
    nodeTypesSubtitle:
      "Every step in your agent workflow is visible, testable, and auditable — from trigger to output.",
    comparisonColumns: {
      feature: "Capability",
      nymphi: "Nymphi",
      copilots: "Credit copilots",
      diy: "DIY frameworks",
    },
    comparisonLink: "See full comparison →",
    customersShareStory: "Want to share your story?",
    customersShareStoryLink: "Get in touch",
    blogMoreGuides: "More guides coming soon.",
    blogRequestTopic: "Request a topic",
    privacySections: [
      {
        heading: "Introduction",
        paragraphs: [
          'This Privacy Policy describes how Nymphi ("we", "us") collects and uses information when you visit www.nymphi.ai (the "Marketing Site") or contact us.',
        ],
      },
      {
        heading: "What this policy covers",
        paragraphs: [
          "This policy applies to the marketing website only. When you create an account or use the Nymphi application at app.nymphi.ai, your use is governed by the application terms and privacy practices described at signup and in your workspace settings.",
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: [
          "On the Marketing Site, we may collect contact information — if you email us or request a demo (e.g. name, email, company); usage data — pages visited, referrer, browser type, and approximate location via analytics (if enabled); and technical data — IP address and cookies required for site operation and security.",
          "We do not collect payment information on the Marketing Site. Registration and billing occur on the application subdomain.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use collected information to respond to inquiries and demo requests, improve the Marketing Site and measure conversion, send product updates you have opted into, and comply with legal obligations.",
        ],
      },
      {
        heading: "Legal basis (GDPR)",
        paragraphs: [
          "Where GDPR applies, we process data based on legitimate interests (site operation and improvement), consent (marketing communications), and contractual necessity (responding to your requests).",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "Contact inquiries are retained as long as needed to respond and maintain business records, typically up to 24 months unless a longer period is required by law.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at hello@nymphi.ai to exercise these rights.",
        ],
      },
      {
        heading: "Third parties",
        paragraphs: [
          "We may use hosting, analytics, and email providers to operate the Marketing Site. These providers process data on our behalf under appropriate agreements. We do not sell your personal information.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions about this policy: hello@nymphi.ai"],
      },
    ],
    termsSections: [
      {
        heading: "Introduction",
        paragraphs: [
          'These Terms of Service ("Terms") govern your access to and use of the Nymphi marketing website at www.nymphi.ai (the "Site"). By using the Site, you agree to these Terms.',
        ],
      },
      {
        heading: "The Site vs. the application",
        paragraphs: [
          "The Site provides information about Nymphi products and services. Use of the Nymphi application at app.nymphi.ai is subject to separate application terms presented at registration. If there is a conflict between these Terms and application terms, the application terms govern your use of the app.",
        ],
      },
      {
        heading: "Permitted use",
        paragraphs: [
          "You may use the Site for lawful purposes to learn about Nymphi and contact us. You may not attempt to gain unauthorized access to our systems, scrape or automate access in a way that burdens our infrastructure, misrepresent your affiliation with Nymphi, or use the Site in violation of applicable law.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The Site, including text, graphics, logos, and design, is owned by Nymphi or its licensors and protected by intellectual property laws. You may not copy, modify, or distribute Site content without our written permission, except for personal, non-commercial reference.",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          'The Site and its content are provided "as is" for informational purposes. Product descriptions, example workflows, pricing, and roadmap items may change. We do not warrant that the Site will be uninterrupted or error-free.',
          "Example outcomes and illustrative workflows on the Site are not guarantees of results for your organization.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, Nymphi shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the Site.",
        ],
      },
      {
        heading: "Links to third parties",
        paragraphs: [
          "The Site may link to third-party services (documentation, integration providers, etc.). We are not responsible for third-party content or practices.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance of the updated Terms.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions about these Terms: hello@nymphi.ai"],
      },
    ],
  },
};

export default en;
