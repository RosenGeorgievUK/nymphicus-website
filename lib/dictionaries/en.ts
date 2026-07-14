import type { Dictionary } from "./types";

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
    heroBadge: "Visual agent platform",
    heroTitlePrefix: "Build",
    heroGradientPhrase: "AI agents",
    heroTitleSuffix: "your team can trust",
    heroSubhead:
      "Design workflows, connect tools via MCP, and run agents at scale — on infrastructure you control.",
    heroFootnote: "No credit card · BYO API keys · Self-host or cloud",
    heroScreenshotAlt: "Nymphi agent builder dashboard",
    getStartedFree: "Get started — it's free",
  },
  cta: {
    login: "Log in",
    signIn: "Sign in",
    getStarted: "Get started",
    startFree: "Start building",
    register: "Create account",
    bookDemo: "Book a demo",
    contactUs: "Contact us",
    startFromTemplate: "Start from template",
    getStartedFree: "Get started free",
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
      { href: "/features", label: "Features" },
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
    capabilityMarqueeAria: "Platform capabilities",
    capabilities: [
      "Visual canvas",
      "15 node types",
      "MCP integrations",
      "Knowledge + RAG",
      "BYO API keys",
      "Self-hosted",
      "RBAC",
      "Audit trail",
      "Human approval",
      "Execution logs",
      "HubSpot",
      "Intercom",
      "Stripe",
      "Notion",
      "GitHub",
    ],
    ctaBand: {
      title: "Your agents. Your keys. Your infrastructure.",
      subtitle: "Start building in minutes — no credit card, no per-task credit markup.",
      primaryLabel: "Get started free",
    },
  },
  home: {
    pillarsEyebrow: "Why teams switch",
    pillarsTitle: "The control plane for",
    pillarsTitleHighlight: "production agents",
    pillarsSubtitle:
      "Not another credit-based copilot. A visual builder with governance your security team will approve.",
    pillars: [
      {
        highlight: "Speed",
        title: "Ship in hours, not quarters",
        description:
          "15 node types, templates, and in-canvas testing — builders own the workflow end to end.",
      },
      {
        highlight: "Control",
        title: "Your keys. No credit markup.",
        description: "Connect OpenAI, Anthropic, or self-host. You pay providers directly.",
      },
      {
        highlight: "Trust",
        title: "Governance built in",
        description: "RBAC, audit trail, human approval, and execution logs from day one.",
      },
    ],
    bentoEyebrow: "Product",
    bentoTitle: "From template to production",
    bentoTitleHighlight: "in one platform",
    bentoSubtitle:
      "Pre-built workflows for support, sales, and knowledge — or build your own on the canvas.",
    bentoItems: [
      {
        title: "Support triage",
        description: "Classify tickets, search KB, draft replies — with human approval.",
        href: "/templates",
      },
      {
        title: "CRM copilot",
        description: "HubSpot Q&A and deal updates via MCP.",
        href: "/templates",
      },
      {
        title: "Knowledge + RAG",
        description: "Cited answers over your company docs.",
        href: "/templates",
      },
      {
        title: "MCP registry",
        description: "Connect any tool without glue code.",
        href: "/integrations",
      },
    ],
    bentoLinks: {
      templates: "All templates",
      features: "Features",
      useCases: "Use cases",
    },
    diffEyebrow: "Why Nymphi",
    diffTitle: "Visual builder. Your keys. Production governance.",
    diffPoints: [
      {
        title: "BYO keys",
        body: "Pay providers directly. No per-task credit markup.",
        href: "/pricing",
        label: "See pricing",
      },
      {
        title: "MCP-native",
        body: "Connect HubSpot, Intercom, Stripe, and more from the registry.",
        href: "/integrations",
        label: "Integrations",
      },
      {
        title: "Governed by default",
        body: "RBAC, audit trail, and human approval on every sensitive action.",
        href: "/security",
        label: "Security",
      },
    ],
    diffCompareLink: "Full comparison vs copilots & DIY →",
    caseStudyEyebrow: "Example workflow",
    caseStudyTitle: "From blocked pilot to",
    caseStudyTitleHighlight: "production in one afternoon",
    caseStudySubtitle:
      "An illustrative support triage workflow — ship governed agents without a multi-week sprint.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions",
    integrationsSection: {
      title: "Plug agents into your data & MCP integrations",
      subtitle:
        "Pre-built connectors for common apps. Custom API connections for everything else.",
      cta: "Browse all integrations",
    },
    spotlights: [
      {
        title: "Flexible, visual AI workflow automation",
        bullets: [
          "Drag-and-drop canvas with 15 node types — no glue code between steps",
          "Test runs in the builder before you ship to production",
          "Templates for support, sales, and knowledge workflows out of the box",
        ],
        href: "/features",
        label: "Explore features",
      },
      {
        title: "Connect your stack via MCP",
        bullets: [
          "Browse HubSpot, Intercom, Stripe, and more from the integrations registry",
          "Standard MCP interface — no per-tool custom adapters",
          "Wire tools visually from the canvas, not from a config file",
        ],
        href: "/integrations",
        label: "View integrations",
      },
      {
        title: "Run with governance built in",
        bullets: [
          "RBAC and workspace isolation from day one",
          "Human approval gates before sensitive actions execute",
          "Full execution logs and audit trail for every node run",
        ],
        href: "/security",
        label: "Security & governance",
      },
    ],
  },
  pages: {
    pricing: {
      title: "Pricing",
      description:
        "Transparent pricing for Nymphi — start free with your own API keys. Pro from $49/seat/mo. Enterprise with self-hosting and SSO.",
      eyebrow: "Pricing",
      heroTitle: "Transparent pricing,",
      heroTitleHighlight: "no credit anxiety",
      heroSubtitle:
        "Start free with your own keys. Pro from $49/seat/mo. Enterprise when you need self-hosting, SSO, and SLAs.",
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
      title: "Compare",
      description:
        "Compare Nymphi to credit-based copilots and DIY agent frameworks — visual builder, BYO keys, MCP, and governance.",
      eyebrow: "Compare",
      heroTitle: "The platform security approves",
      heroTitleHighlight: "and builders use",
      heroSubtitle:
        "Nymphi sits between opaque credit copilots and months-long DIY framework projects — visual, governed, and MCP-native.",
      startBuilding: "Start building free",
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
    homepageFaq: [
      {
        question: "How is Nymphi different from Zapier or n8n?",
        answer:
          "Zapier and n8n excel at deterministic automation. Nymphi is built for AI agents — LLM nodes, RAG, human approval gates, and MCP-native tool calls — with governance (RBAC, audit trail) designed for production agent workloads.",
      },
      {
        question: "Do I need to be a developer?",
        answer:
          "No. The visual canvas lets ops and support teams build workflows with drag-and-drop. Developers can still extend via MCP servers, custom HTTP nodes, and self-hosted deployments when needed.",
      },
      {
        question: "What happens to my API keys?",
        answer:
          "You bring your own keys. Nymphi orchestrates calls through your provider accounts — we don't resell tokens or add a per-task credit markup. Enterprise and self-hosted options keep keys entirely on your infrastructure.",
      },
      {
        question: "Can my security team review every agent action?",
        answer:
          "Yes. Every run produces an immutable execution log with full node trace. RBAC controls who can build, deploy, and approve. Human-in-the-loop gates stop sensitive actions before they execute.",
      },
      {
        question: "How fast can we ship our first agent?",
        answer:
          "Most teams deploy their first agent from a template in under an hour. Support Triage, CRM Copilot, and Knowledge Base templates include pre-wired flows you customize on the canvas.",
      },
      {
        question: "Is there a free plan?",
        answer:
          "Yes — the Free tier includes the visual builder, 15 node types, knowledge bases, MCP integrations, and community support. No credit card required.",
      },
    ],
    pricingFaq: [
      {
        question: "How do bring-your-own API keys work?",
        answer:
          "You connect your own provider accounts (OpenAI, Anthropic, etc.) directly. Nymphi orchestrates calls through your keys — no per-task credit markup from us. You pay providers at their standard rates.",
      },
      {
        question: "Can I self-host Nymphi?",
        answer:
          "Yes. Enterprise includes a self-hosted deployment option so you can run agents on your own infrastructure with full data residency control. Contact us for deployment details.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Cloud deployments use encrypted storage in your chosen region. Self-hosted deployments keep all data on your infrastructure. Knowledge-base permissions and RBAC apply in both modes.",
      },
      {
        question: "Does Nymphi support MCP integrations?",
        answer:
          "Yes. MCP is a first-class integration path — connect any MCP-compatible tool to your agent workflows without custom glue code.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Free tier has no commitment. Paid plans can be cancelled at the end of your billing period — no long-term lock-in required.",
      },
      {
        question: "What does Pro cost?",
        answer:
          "Pro starts at $49 per seat per month for growing teams that need collaboration, advanced RBAC, and priority support. Contact us for volume pricing or annual billing.",
      },
    ],
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
    pricingTiers: [
      {
        id: "free",
        name: "Free",
        price: "$0",
        priceNote: "forever",
        description: "Start building — bring your own keys",
        features: [
          "Visual agent builder",
          "15 node types",
          "Knowledge bases + RAG",
          "MCP integrations",
          "Community support",
        ],
        ctaLabel: "Get started free",
      },
      {
        id: "pro",
        name: "Pro",
        price: "From $49",
        priceNote: "per seat / month",
        description: "For growing teams that need collaboration and scale",
        features: [
          "Everything in Free",
          "Team collaboration",
          "Advanced RBAC",
          "Priority support",
          "Usage analytics",
        ],
        ctaLabel: "Book a demo",
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        priceNote: "self-host · SSO · SLA",
        description: "For regulated teams with infrastructure requirements",
        features: [
          "Everything in Pro",
          "Self-hosted deployment",
          "SSO / SAML",
          "Full audit trail export",
          "Dedicated SLA",
        ],
        ctaLabel: "Contact us",
      },
    ],
    pricingValueSignals: [
      {
        value: "$0",
        label: "Credit markup",
        detail: "Pay LLM providers directly at their rates",
      },
      {
        value: "BYO",
        label: "API keys",
        detail: "Your OpenAI, Anthropic, or self-hosted models",
      },
      {
        value: "Anytime",
        label: "Cancel",
        detail: "No long-term lock-in on paid plans",
      },
    ],
    caseStudies: [
      {
        slug: "support-triage",
        title: "Support triage in an afternoon",
        company: "B2B software company",
        industry: "Customer Support",
        template: "Support Triage Agent",
        challenge:
          "Support volume was climbing but every AI pilot got blocked — black-box copilots with credit meters didn't pass security review, and a custom LangChain build was quoted at two engineering weeks.",
        solution:
          "The CS team cloned the Support Triage template, connected Intercom via MCP, and attached their existing knowledge base. Human approval gates were added before any customer-facing reply went out.",
        results: [
          { value: "~4 hrs", label: "Typical build time" },
          { value: "High", label: "Draft acceptance (varies)" },
          { value: "0%", label: "Platform credit markup" },
        ],
        quote: {
          text: "Support triage went from a two-day engineering project to an afternoon on the canvas. Human approval before every send gave our team confidence to actually turn it on.",
          name: "Jordan K.",
          role: "Director of Customer Success",
        },
        highlights: [
          "Ticket classification and KB search automated",
          "Every draft requires human sign-off before send",
          "Full execution trace for compliance reviews",
        ],
      },
      {
        slug: "crm-copilot",
        title: "RevOps copilot without glue code",
        company: "Growth-stage startup",
        industry: "Sales & RevOps",
        template: "CRM Copilot",
        challenge:
          "RevOps needed CRM Q&A and deal updates in Slack, but internal tools wanted a maintained Python service. Previous copilot trials added unpredictable per-seat AI credits on top of HubSpot.",
        solution:
          "They deployed the CRM Copilot template with HubSpot wired through the MCP registry. The team customized deal-update logic on the canvas and connected their own Anthropic keys.",
        results: [
          { value: "~1 day", label: "Typical time to production" },
          { value: "3+", label: "MCP tools connectable" },
          { value: "Direct", label: "Provider billing (BYO keys)" },
        ],
        quote: {
          text: "MCP changed how we integrate. HubSpot and Intercom wired in without custom glue code, and the execution logs made our compliance review straightforward.",
          name: "Sam R.",
          role: "RevOps Lead",
        },
        highlights: [
          "HubSpot queries and updates via MCP — no custom API layer",
          "Outreach drafts scoped to rev ops, not a generic copilot",
          "Immutable logs for every CRM write action",
        ],
      },
      {
        slug: "governed-agents",
        title: "Agents security would actually approve",
        company: "Series B SaaS",
        industry: "Platform Engineering",
        template: "Custom multi-agent workflows",
        challenge:
          "Platform engineering needed internal agents for onboarding and policy Q&A, but security rejected every SaaS copilot — opaque data handling, no audit trail, and keys held by the vendor.",
        solution:
          "The team self-hosted Nymphi on their infrastructure, connected BYO API keys, and enforced RBAC so only approved builders could publish agents. Execution logs became the default incident review surface.",
        results: [
          { value: "Full", label: "Run audit trace" },
          { value: "SSO", label: "Enterprise option" },
          { value: "Self-host", label: "Deployment option" },
        ],
        quote: {
          text: "We needed agents our security team would sign off on — not another black-box copilot with a credit meter. Nymphi was the first platform that let us keep our keys and still move fast.",
          name: "Alex M.",
          role: "Head of Platform Engineering",
        },
        highlights: [
          "Self-hosted deployment with full data residency",
          "RBAC across agents, knowledge bases, and tools",
          "Export-ready audit trail for security reviews",
        ],
      },
    ],
    blogPosts: [
      {
        slug: "what-is-mcp-for-ai-agents",
        title: "What is MCP — and why your agent stack needs it",
        excerpt:
          "Model Context Protocol lets agents call real tools without custom glue code. Here's how MCP changes the integration story for production teams.",
        date: "2026-06-18",
        readTime: "6 min read",
        category: "Integrations",
        sections: [
          {
            type: "paragraph",
            content:
              "Most agent projects stall on integrations. Every new tool — CRM, ticketing, payments — means another adapter, another secret to rotate, another service to maintain. Model Context Protocol (MCP) flips that model: tools expose a standard interface, and your agent canvas wires them in visually.",
          },
          {
            type: "heading",
            content: "MCP in one sentence",
          },
          {
            type: "paragraph",
            content:
              "MCP is an open protocol for connecting AI applications to external data sources and tools. Instead of hard-coding HubSpot or Intercom into every workflow, you register an MCP server once and call it from any agent node.",
          },
          {
            type: "heading",
            content: "Why agent builders care",
          },
          {
            type: "list",
            content: "Key benefits for production teams:",
            items: [
              "No per-integration glue code — connect via the registry",
              "Consistent auth and scoping across tools",
              "Composable workflows: one MCP node, many providers",
              "Audit-friendly: tool calls appear in execution logs",
            ],
          },
          {
            type: "paragraph",
            content:
              "On Nymphi, MCP is first-class. Browse the registry, attach tools to your canvas, and ship — whether you're building support triage, a CRM copilot, or internal ops automation.",
          },
        ],
      },
      {
        slug: "support-triage-agent-in-one-afternoon",
        title: "How to ship a support triage agent in one afternoon",
        excerpt:
          "A step-by-step walkthrough using the Support Triage template — classify tickets, search your KB, draft replies, and gate sends with human approval.",
        date: "2026-06-02",
        readTime: "5 min read",
        category: "Templates",
        sections: [
          {
            type: "paragraph",
            content:
              "Support teams don't need another black-box copilot. They need a workflow they can inspect, test, and approve. The Support Triage template on Nymphi gives you that starting point — and most teams customize it in a single afternoon.",
          },
          {
            type: "heading",
            content: "The workflow",
          },
          {
            type: "list",
            content: "Out of the box, the template runs:",
            items: [
              "Classify incoming ticket intent",
              "Search your knowledge base with RAG",
              "Draft a customer reply with citations",
              "Pause at a human approval gate",
              "Update Intercom (or your connected tool) on approval",
            ],
          },
          {
            type: "heading",
            content: "What to customize first",
          },
          {
            type: "paragraph",
            content:
              "Start with your knowledge base documents and approval policy. Most teams add a second approval path for billing or security topics, and tune the classifier node with 5–10 example tickets from their backlog.",
          },
          {
            type: "paragraph",
            content:
              "Bring your own API keys, run in-canvas tests, and check execution logs before turning on production traffic. Governance isn't a phase two — it's day one.",
          },
        ],
      },
      {
        slug: "governance-checklist-production-ai-agents",
        title: "A governance checklist for production AI agents",
        excerpt:
          "RBAC, audit trails, human approval, and BYO keys — the controls security teams ask for before agents touch customer data.",
        date: "2026-05-14",
        readTime: "7 min read",
        category: "Security",
        sections: [
          {
            type: "paragraph",
            content:
              "Moving from demo to production means answering hard questions: Who can publish agents? What gets logged? Can we stop a run mid-flight? This checklist covers what platform and security teams typically require before sign-off.",
          },
          {
            type: "heading",
            content: "Before you ship",
          },
          {
            type: "list",
            content: "Minimum controls for production agents:",
            items: [
              "Role-based access — builders vs operators vs viewers",
              "Immutable execution logs with full node trace",
              "Human-in-the-loop gates on external actions",
              "BYO API keys — no vendor credit markup",
              "Data residency option (cloud region or self-host)",
            ],
          },
          {
            type: "heading",
            content: "During operation",
          },
          {
            type: "paragraph",
            content:
              "Runbooks should reference execution log IDs, not chat transcripts. When something goes wrong, you need the node-level trace — which MCP tool fired, which KB chunk was retrieved, which approval was pending.",
          },
          {
            type: "paragraph",
            content:
              "Nymphi bakes these controls into the platform rather than bolting them on. RBAC, audit trail, and approval nodes are table stakes — not enterprise upsells.",
          },
        ],
      },
    ],
    changelogEntries: [
      {
        version: "0.9.0",
        date: "2026-06-20",
        title: "MCP registry & template library",
        changes: [
          {
            type: "feature",
            text: "MCP integrations registry — browse and connect tools from the canvas",
          },
          {
            type: "feature",
            text: "Support Triage, CRM Copilot, and Knowledge Base templates",
          },
          {
            type: "improvement",
            text: "Execution logs now include full MCP tool call trace",
          },
        ],
      },
      {
        version: "0.8.0",
        date: "2026-05-28",
        title: "Governance & approval gates",
        changes: [
          { type: "feature", text: "Human-in-the-loop approval node" },
          { type: "feature", text: "RBAC across agents, knowledge bases, and workflows" },
          { type: "feature", text: "Export-ready audit trail for compliance reviews" },
          {
            type: "improvement",
            text: "Dashboard metrics for active runs and success rate",
          },
        ],
      },
      {
        version: "0.7.0",
        date: "2026-05-05",
        title: "Visual builder launch",
        changes: [
          { type: "feature", text: "Drag-and-drop canvas with 15 node types" },
          { type: "feature", text: "Knowledge bases with RAG query nodes" },
          { type: "feature", text: "Bring-your-own API keys — no credit markup" },
          { type: "fix", text: "Canvas performance improvements for large workflows" },
        ],
      },
    ],
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
    integrationsHeading: "Works with the tools your team already uses",
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
