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
      "Design workflows, connect tools via MCP, and run agents at scale — on infrastructure you control.",
    ogAlt: "Nymphi — Visual AI Agent Builder",
  },
  site: {
    name: "Nymphi",
    tagline: "Build AI agents your team can trust.",
    heroIntro: "The visual agent platform for technical teams — including",
    heroUseCases: [
      { role: "Support teams", action: "triage tickets with human approval" },
      { role: "RevOps", action: "update HubSpot from the canvas" },
      { role: "Platform", action: "ship governed agents on your infra" },
      { role: "You", action: "start from a template in under an hour" },
    ],
    heroSubhead:
      "Visual agent builder with MCP — the alternative to wiring n8n + LangChain + custom approval glue.",
    heroFootnote: "Free to start · No credit card · BYO keys · Self-host or cloud",
    heroScreenshotAlt: "Nymphi agent builder dashboard",
    socialProof: "12+ MCP connectors",
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
        { href: "https://docs.nymphi.ai/integrations/mcp", label: "MCP guide", external: true },
      ],
    },
    company: {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
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
      "Illustrative outcomes from support, rev ops, and platform engineering — built on templates, governed by design. Not verified customer claims.",
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
      subtitle: "Free to start. No credit card. Bring your own API keys.",
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
        description: "Look up HubSpot records, update deals, and run CRM actions from the canvas via MCP.",
        href: "/customers/crm-copilot",
        category: "RevOps",
        cta: "Use this template",
        apps: ["HubSpot", "MCP", "Agent"],
        iconSlugs: ["hubspot"],
      },
      {
        title: "Knowledge + RAG",
        description: "Answer from company docs with citations and guardrails on every agent run.",
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
      "An illustrative support triage workflow — ship governed agents without a multi-week sprint.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions",
    changelogStripTitle: "What's new",
    changelogStripViewAll: "Full changelog",
    integrationsSection: {
      title: "Plug agents into your data & MCP integrations",
      subtitle:
        "Pre-built connectors for common apps. Custom API connections for everything else.",
      cta: "Browse all integrations",
    },
  },
    pages: {
    pricing: {
      title: "Pricing",
      description:
        "Transparent pricing for Nymphi — start free with your own API keys. Pro from £39/mo, Team £149/mo, Enterprise self-hosting and SSO.",
      eyebrow: "Pricing",
      heroTitle: "Transparent pricing,",
      heroTitleHighlight: "no credit anxiety",
      heroSubtitle:
        "Start free with your own keys. Pro from £39/mo, Team £149/mo. Enterprise when you need self-hosting, SSO, and SLAs.",
    },
    features: {
      title: "Features",
      description:
        "Nymphi features: visual agent builder, MCP integrations, knowledge bases with RAG, and enterprise governance.",
      eyebrow: "Features",
      heroTitle: "Build, connect, and govern —",
      heroTitleHighlight: "without trade-offs",
      heroSubtitle: "From the visual builder to MCP integrations and execution logs.",
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
      ctaBandTitle: "Clone a template. Ship your first agent today.",
      searchPlaceholder: "Search templates…",
    },
    integrations: {
      title: "Integrations",
      description:
        "Connect Nymphi agents to your stack via MCP, APIs, webhooks, and knowledge bases.",
      eyebrow: "Integrations",
      heroTitle: "Connect any tool via",
      heroTitleHighlight: "MCP",
      heroSubtitle:
        "Browse the registry, wire tools to your canvas, and extend workflows without custom glue code.",
      screenshotAlt: "MCP integrations registry in Nymphi",
      ctaBandTitle: "Your stack. Connected in minutes.",
      searchPlaceholder: "Search integrations…",
      resultsLabel: "MCP connectors",
      docsLabel: "MCP integration guide",
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
        "Compare Nymphi to n8n and Zapier — visual agent builder, MCP-native integrations, BYO keys, and production governance.",
      eyebrow: "Compare",
      heroTitle: "Nymphi vs n8n",
      heroTitleHighlight: "and Zapier",
      heroSubtitle:
        "See how a governed agent builder compares to workflow automation and zap-style tools — on AI depth, MCP, approvals, and pricing.",
      startBuilding: "Get started free",
      migrationTemplateLink: "Start from the Support Triage template →",
    },
    security: {
      title: "Security",
      description:
        "Nymphi security: RBAC, audit trails, BYO API keys, self-hosted deployment, and compliance-ready governance for production AI agents.",
      eyebrow: "Security",
      heroTitle: "Production agents need",
      heroTitleHighlight: "production governance",
      heroSubtitle:
        "RBAC, immutable audit trails, BYO keys, and self-hosted deployment — built in, not bolted on.",
      faqTitle: "Security FAQ",
      ctaBandTitle: "Governed agents. Without the enterprise tax.",
      screenshotAlt: "Execution logs and audit trail",
    },
    about: {
      title: "About",
      description:
        "Nymphi is building the visual AI agent platform for teams who need speed, control, and governance.",
      eyebrow: "About",
      heroTitle: "Building the future of",
      heroTitleHighlight: "governed AI agents",
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
        "Illustrative Nymphi workflows — support triage, CRM copilots, and governed self-hosted deployments.",
      eyebrow: "Example workflows",
      heroTitle: "How teams ship agents",
      heroTitleHighlight: "without the trade-offs",
      heroSubtitle:
        "Illustrative outcomes from support, rev ops, and platform engineering — built on templates, governed by design. Not verified customer claims.",
      shareStory: "Want to share your story?",
      shareStoryLink: "Get in touch",
      ctaBandTitle: "Your team could be next.",
    },
    blog: {
      title: "Blog",
      description:
        "Guides on MCP integrations, support triage agents, and governance for production AI workflows.",
      eyebrow: "Blog",
      heroTitle: "Patterns for",
      heroTitleHighlight: "production agents",
      heroSubtitle:
        "MCP, templates, and governance — practical guides for teams shipping governed AI workflows.",
    },
    changelog: {
      title: "Changelog",
      description: "Product updates for Nymphi — new features, improvements, and fixes.",
      eyebrow: "Changelog",
      heroTitle: "Shipping fast,",
      heroTitleHighlight: "governed by default",
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
          "You connect provider keys to your workspace. Cloud deployments encrypt credentials at rest. Self-hosted deployments keep keys entirely on your infrastructure.",
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
        question: "How does RBAC work?",
        answer:
          "Role-based access controls scope who can build agents, edit knowledge bases, connect MCP tools, and approve sensitive workflow steps.",
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
        outcome: "Triage incidents, search runbooks, and propose remediation steps with audit trail.",
      },
      {
        title: "Professional Services",
        outcome: "Prepare client deliverables, pull context from docs, and track billable work.",
      },
    ],
    templateGalleryCategories: ["Customer Support", "Sales & RevOps", "Any team"],
    templateGalleryAllLabel: "All",
    templateGallerySearchPlaceholder: "Search templates…",
    integrationsHeading: "Works with the tools your team already uses",
    integrationsSubheading: "Search the MCP registry — OAuth, bearer token, or open connectors.",
    integrationsCustom: "Need a custom connector?",
    integrationsCustomLink: "Talk to us about MCP servers",
    featureSections: [
      {
        eyebrow: "Dashboard",
        title: "One place to",
        titleHighlight: "run every agent",
        subtitle:
          "Monitor workflows, track runs, and jump into the builder — the control center your ops team actually wants.",
      },
      {
        eyebrow: "Agent Builder",
        title: "Design workflows on a visual canvas",
        subtitle:
          "15 node types, drag-and-drop wiring, versioning, and in-canvas testing — builders and engineers in the same interface.",
      },
      {
        eyebrow: "Agents",
        title: "Deploy and govern at scale",
        subtitle:
          "Organize agents by team and environment — with permissions that match how your company actually works.",
      },
      {
        eyebrow: "Governance",
        title: "Audit every execution",
        subtitle:
          "Immutable logs, human approvals, RBAC, and knowledge-base permissions — production confidence, not vibes.",
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
          "Update Intercom (MCP)",
          "Human Review (User Approval)",
          "End",
        ],
        integrations: ["Intercom", "File Search", "User Approval"],
      },
      {
        slug: "crm-copilot",
        title: "CRM Copilot",
        category: "Sales & RevOps",
        description:
          "Answer CRM questions, draft outreach emails, and update deal records through HubSpot MCP — owned by your rev ops team.",
        flow: [
          "Start",
          "CRM Assistant (Agent)",
          "HubSpot Actions (MCP)",
          "End",
        ],
        integrations: ["HubSpot MCP", "Agent"],
      },
      {
        slug: "governed-agents",
        title: "Knowledge Base Chatbot",
        category: "Any team",
        description:
          "RAG over company docs with cited answers — for internal copilots, policy Q&A, and onboarding assistants.",
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
          "See the visual agent builder, MCP integrations, and governance controls in a live walkthrough.",
        cta: "Book a demo",
      },
      {
        title: "Enterprise & self-hosting",
        description:
          "Discuss SSO, audit trail export, SLAs, and on-prem deployment with our team.",
        cta: "Contact us",
      },
    ],
    aboutValues: [
      {
        title: "Builder-first",
        description:
          "The best agent platform is one your team actually uses. We optimize for the visual builder experience first.",
      },
      {
        title: "Your infrastructure",
        description:
          "Your keys, your data, your deployment. We don't believe in credit markups or forced cloud lock-in.",
      },
      {
        title: "Governance by default",
        description:
          "RBAC, audit trails, and permissions aren't enterprise add-ons — they're table stakes for production agents.",
      },
    ],
    aboutMissionLabel: "Our mission",
    aboutMission:
      "Give every team the power to build production-ready agents — without surrendering control of their models, data, or infrastructure.",
    aboutParagraphs: [
      "Nymphi is a visual AI agent builder for teams who need to ship fast without giving up control. We believe the next wave of AI adoption won't come from black-box copilots — it'll come from composable agents your team designs, deploys, and governs on their own terms.",
      "Our platform combines a drag-and-drop canvas with 15 node types, knowledge bases with RAG, MCP integrations, and enterprise-grade RBAC and audit trails. Whether you run in our cloud or self-host on your infrastructure, you bring your own API keys and pay providers directly — no per-task credit markup.",
      "We're an early-stage team focused on giving builders, operators, and security teams a shared surface to ship agents that actually do the work.",
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
        title: "Ship in hours",
        description: "Templates, visual canvas, and MCP registry replace weeks of framework plumbing.",
      },
      {
        highlight: "vs. Both",
        title: "Governance built in",
        description: "RBAC, audit trail, and human approval — not a phase-two project.",
      },
    ],
    securityPillars: [
      {
        highlight: "Access",
        title: "Role-based control",
        description:
          "Scope permissions across agents, knowledge bases, MCP tools, and approval gates — so the right people touch the right workflows.",
      },
      {
        highlight: "Audit",
        title: "Every run logged",
        description:
          "Immutable execution logs with full node trace. Export-ready for compliance reviews and security investigations.",
      },
      {
        highlight: "Data",
        title: "Your keys, your infra",
        description:
          "Bring your own API keys with no credit markup. Enterprise self-hosting keeps data and credentials on your infrastructure.",
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
      "Sensitive actions pause at approval nodes until a human signs off. Security teams get the trail they need. Builders keep shipping without bypassing governance.",
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
