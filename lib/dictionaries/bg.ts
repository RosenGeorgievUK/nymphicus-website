import type { Dictionary } from "./types";

const bg: Dictionary = {
  locale: "bg",
  meta: {
    siteTitle: "Визуален AI agent builder",
    siteDescription:
      "Прави workflow-и, вържи инструменти през MCP и пускай агенти в production — на инфра, която ти контролираш.",
    ogAlt: "Nymphicus — Визуален AI agent builder",
  },
  site: {
    name: "Nymphicus",
    tagline: "AI агенти, на които екипът ти може да разчита.",
    heroBadge: "Визуален agent builder",
    heroTitlePrefix: "Прави",
    heroGradientPhrase: "AI агенти",
    heroTitleSuffix: "без да губиш контрол",
    heroSubhead:
      "Дизайнвай workflow-и, вържи tool-ове през MCP и пускай агенти в мащаб — с твои ключове и твоя инфра.",
    heroFootnote: "Без карта · BYO API keys · Self-host или cloud",
    heroScreenshotAlt: "Nymphicus dashboard — agent builder",
    getStartedFree: "Започни безплатно",
  },
  cta: {
    login: "Вход",
    signIn: "Влез",
    getStarted: "Започни",
    startFree: "Пусни го",
    register: "Регистрация",
    bookDemo: "Демо",
    contactUs: "Пиши ни",
    startFromTemplate: "От шаблон",
    getStartedFree: "Започни безплатно",
  },
  nav: {
    ariaMain: "Навигация",
    ariaHome: "Nymphicus — начало",
    openMenu: "Меню",
    closeMenu: "Затвори",
    menu: "Меню",
    links: [
      { href: "/use-cases", label: "Use cases" },
      { href: "/templates", label: "Шаблони" },
      { href: "/features", label: "Функции" },
      { href: "/security", label: "Security" },
      { href: "/pricing", label: "Цени" },
      { href: "/blog", label: "Блог" },
    ],
  },
  footer: {
    product: {
      title: "Продукт",
      links: [
        { href: "/features", label: "Функции" },
        { href: "/use-cases", label: "Use cases" },
        { href: "/templates", label: "Шаблони" },
        { href: "/integrations", label: "Интеграции" },
        { href: "/pricing", label: "Цени" },
        { href: "/customers", label: "Примери" },
        { href: "/compare", label: "Сравнение" },
        { href: "/security", label: "Security" },
      ],
    },
    resources: {
      title: "Ресурси",
      links: [
        { href: "https://docs.nymphicus.ai", label: "Документация", external: true },
        { href: "/blog", label: "Блог" },
        { href: "/changelog", label: "Changelog" },
        { href: "https://docs.nymphicus.ai/integrations/mcp", label: "MCP ръководство", external: true },
      ],
    },
    company: {
      title: "Компания",
      links: [
        { href: "/about", label: "За нас" },
        { href: "/contact", label: "Контакт" },
        { href: "/privacy", label: "Поверителност" },
        { href: "/terms", label: "Условия" },
      ],
    },
    privacy: "Поверителност",
    terms: "Условия",
    copyright: "© Nymphicus",
  },
  common: {
    skipToContent: "Към съдържанието",
    readMore: "Още",
    backToBlog: "← Блог",
    illustrativeDisclaimer:
      "Примерни workflow-и — не verified customer stories. Показваме как изглежда setup-ът с шаблони и governance.",
    startedFromTemplate: "Базирано на шаблон",
    seeAllWorkflows: "Всички примери →",
    readWorkflow: "Виж workflow-а →",
    challenge: "Проблемът",
    solution: "Решението",
    whatTheyShipped: "Какво пуснаха в prod",
    moreStories: "Още примери",
    getStartedArrow: "Започни безплатно →",
    llmCostsNote:
      "LLM разходите идват директно от provider-а ти — Nymphicus не слага markup на токени.",
    faqTitle: "ЧЗВ",
    pricingFaqLink: "ЧЗВ за цени →",
    trustBadgesAria: "Compliance badges",
    trustBadges: ["SOC 2 (в процес)", "GDPR-ready", "Self-host опция"],
    capabilityMarqueeAria: "Какво включва платформата",
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
      title: "Твоите агенти. Твоите ключове. Твоята инфра.",
      subtitle: "Пусни първи workflow за минути — без карта, без credit markup.",
      primaryLabel: "Започни безплатно",
    },
  },
  home: {
    pillarsEyebrow: "Защо сменят",
    pillarsTitle: "Control plane за",
    pillarsTitleHighlight: "production агенти",
    pillarsSubtitle:
      "Не още един credit-based copilot. Visual builder с governance, който security екипът реално одобрява.",
    pillars: [
      {
        highlight: "Скорост",
        title: "От идея до prod за часове",
        description:
          "15 node types, шаблони и тест в canvas — ops и dev работят на едно място.",
      },
      {
        highlight: "Контрол",
        title: "Твоите ключове. Нулев markup.",
        description:
          "OpenAI, Anthropic или self-host — плащаш директно на provider-а, не на нас.",
      },
      {
        highlight: "Trust",
        title: "Governance out of the box",
        description:
          "RBAC, audit trail, human approval и execution logs — от ден один.",
      },
    ],
    bentoEyebrow: "Продукт",
    bentoTitle: "От шаблон до production на едно място",
    bentoSubtitle:
      "Готови workflow-и за support, sales и knowledge — или си ги правиш на canvas.",
    bentoItems: [
      {
        title: "Support triage",
        description: "Тикети, KB search, draft reply — с approval преди send.",
        href: "/templates",
      },
      {
        title: "CRM copilot",
        description: "HubSpot Q&A и deal updates през MCP.",
        href: "/templates",
      },
      {
        title: "Knowledge + RAG",
        description: "Отговори с citations от фирмените ти docs.",
        href: "/templates",
      },
      {
        title: "MCP registry",
        description: "Вържи tool-ове без custom glue code.",
        href: "/integrations",
      },
    ],
    bentoLinks: {
      templates: "Шаблони",
      features: "Функции",
      useCases: "Use cases",
    },
    diffEyebrow: "Защо Nymphicus",
    diffTitle: "Visual builder. Твоите keys. Production governance.",
    diffPoints: [
      {
        title: "BYO keys",
        body: "Плащаш provider-ите директно — без per-task credit markup.",
        href: "/pricing",
        label: "Цени",
      },
      {
        title: "MCP-native",
        body: "HubSpot, Intercom, Stripe и още — от registry-то.",
        href: "/integrations",
        label: "Интеграции",
      },
      {
        title: "Governed by default",
        body: "RBAC, audit trail и approval на всяко чувствително действие.",
        href: "/security",
        label: "Security",
      },
    ],
    diffCompareLink: "Пълно сравнение с copilots и DIY →",
    caseStudyEyebrow: "Примерен workflow",
    caseStudyTitle: "От блокиран pilot до",
    caseStudyTitleHighlight: "prod за един следобед",
    caseStudySubtitle:
      "Support triage пример — governed агент без multi-week engineering sprint.",
    faqEyebrow: "ЧЗВ",
    faqTitle: "Често питат",
  },
  pages: {
    pricing: {
      title: "Цени",
      description:
        "Прозрачни цени — free tier с BYO keys. Pro от $49/seat/мес. Enterprise с self-host и SSO.",
      eyebrow: "Цени",
      heroTitle: "Ясни цени,",
      heroTitleHighlight: "без credit anxiety",
      heroSubtitle:
        "Free с твоите keys. Pro от $49/seat/мес. Enterprise когато ти трябват self-host, SSO и SLA.",
    },
    features: {
      title: "Функции",
      description:
        "Visual agent builder, MCP интеграции, knowledge bases с RAG и enterprise governance.",
      eyebrow: "Функции",
      heroTitle: "Build, connect, govern —",
      heroTitleHighlight: "без trade-offs",
      heroSubtitle: "От canvas-а до MCP и execution logs.",
      getStartedLink: "Започни безплатно →",
    },
    templates: {
      title: "Шаблони",
      description:
        "Готови шаблони: Support Triage, CRM Copilot и Knowledge Base Chatbot.",
      eyebrow: "Шаблони",
      heroTitle: "Тръгни от workflow, който",
      heroTitleHighlight: "вече работи",
      heroSubtitle:
        "Три production-ready шаблона. Пипни ги на canvas-а, deploy-ни с твоите keys.",
      ctaBandTitle: "Clone-ни шаблон. Пусни първия агент днес.",
    },
    integrations: {
      title: "Интеграции",
      description:
        "Вържи агентите към stack-а ти през MCP, API, webhooks и knowledge bases.",
      eyebrow: "Интеграции",
      heroTitle: "Вържи всичко през",
      heroTitleHighlight: "MCP",
      heroSubtitle:
        "Browse registry, wire tools на canvas-а — без custom glue code.",
      screenshotAlt: "MCP registry в Nymphicus",
      ctaBandTitle: "Stack-ът ти. Свързан за минути.",
    },
    useCases: {
      title: "Use cases",
      description:
        "AI агенти за sales, marketing, support, e-commerce, finance, legal, HR, product, engineering и services.",
      eyebrow: "Use cases",
      heroTitle: "Агенти за всеки екип в",
      heroTitleHighlight: "компанията",
      heroSubtitle:
        "Избери use case, вържи tool-овете, тръгни от шаблон — или build-ни custom workflow на canvas.",
      ctaBandTitle: "Една платформа. Всеки екип.",
      ctaBandSubtitle: "Шаблон или custom workflow — ти решаваш.",
    },
    compare: {
      title: "Сравнение",
      description:
        "Nymphicus vs credit copilots и DIY frameworks — visual builder, BYO keys, MCP, governance.",
      eyebrow: "Сравнение",
      heroTitle: "Платформата, която security одобрява",
      heroTitleHighlight: "и dev ползва",
      heroSubtitle:
        "Между opaque credit copilots и месеци DIY plumbing — visual, governed, MCP-native.",
      startBuilding: "Започни безплатно",
    },
    security: {
      title: "Security",
      description:
        "RBAC, audit trails, BYO keys, self-host и compliance-ready governance за production агенти.",
      eyebrow: "Security",
      heroTitle: "Production агенти =",
      heroTitleHighlight: "production governance",
      heroSubtitle:
        "RBAC, audit trail, BYO keys, self-host — built in, не phase two.",
      faqTitle: "Security ЧЗВ",
      ctaBandTitle: "Governed агенти. Без enterprise tax.",
      screenshotAlt: "Execution logs и audit trail",
    },
    about: {
      title: "За нас",
      description:
        "Nymphicus — visual AI agent platform за екипи, които искат speed, control и governance.",
      eyebrow: "За нас",
      heroTitle: "Бъдещето на",
      heroTitleHighlight: "governed AI агенти",
      startBuilding: "Започни безплатно",
    },
    contact: {
      title: "Контакт",
      description:
        "Демо, Enterprise self-host или free account — пиши ни.",
      eyebrow: "Контакт",
      heroTitle: "Да поговорим за агентите ти",
      heroSubtitle:
        "Дали explore-ваш, готов си да build-неш или ти трябва Enterprise — тук сме.",
      emailPrefix: "Или на",
    },
    customers: {
      title: "Примерни workflow-и",
      description:
        "Примери: support triage, CRM copilot, governed self-hosted deploy.",
      eyebrow: "Примери",
      heroTitle: "Как екипите пускат агенти",
      heroTitleHighlight: "без trade-offs",
      heroSubtitle:
        "Примерни setup-и от support, rev ops и platform — на шаблони, с governance. Не verified customer claims.",
      shareStory: "Искаш да споделиш setup?",
      shareStoryLink: "Пиши ни",
      ctaBandTitle: "Следващият екип може да си ти.",
    },
    blog: {
      title: "Блог",
      description:
        "MCP, support triage агенти и governance за production AI workflow-и.",
      eyebrow: "Блог",
      heroTitle: "Патърни за",
      heroTitleHighlight: "production агенти",
      heroSubtitle:
        "MCP, шаблони, governance — практични guides за екипи, които ship-ват реални workflow-и.",
    },
    changelog: {
      title: "Changelog",
      description: "Какво ново в Nymphicus — features, improvements, fixes.",
      eyebrow: "Changelog",
      heroTitle: "Ship-ваме бързо,",
      heroTitleHighlight: "governance by default",
      heroSubtitle:
        "Нови features и fixes — платформата расте с екипите, които я ползват.",
      betaPrompt: "Искаш ранен достъп?",
      betaLink: "Beta list",
    },
    privacy: {
      title: "Privacy",
      description:
        "Как обработваме данни на www.nymphicus.ai и връзка към app.nymphicus.ai.",
      eyebrow: "Legal",
      heroTitle: "Privacy Policy",
      heroSubtitle: "Последна промяна: юли 2026",
      ctaBandTitle: "Готов да build-неш?",
      ctaPrimaryLabel: "Започни безплатно",
      seeAlsoTerms: "Виж и Terms of Service.",
    },
    terms: {
      title: "Terms",
      description: "Условия за ползване на www.nymphicus.ai.",
      eyebrow: "Legal",
      heroTitle: "Terms of Service",
      heroSubtitle: "Последна промяна: юли 2026",
      seeAlsoPrivacy: "Виж и Privacy Policy.",
    },
    notFound: {
      title: "404",
      description: "Страницата не съществува.",
      eyebrow: "404",
      heroTitle: "Няма такава страница — но",
      heroTitleHighlight: "първият ти агент",
      heroTitleSuffix: "може да е тук",
      heroSubtitle:
        "Link-ът е счупен или е преместен. Back to home или започни да build-ваш.",
      backToHome: "Към началото",
      getStartedLink: "Започни безплатно →",
    },
  },
  data: {
    homepageFaq: [
      {
        question: "Чем се различава от Zapier или n8n?",
        answer:
          "Zapier и n8n са топ за класическа автоматизация. Nymphicus е за AI агенти — LLM nodes, RAG, approval gates и MCP tool calls, с RBAC и audit trail за production workloads.",
      },
      {
        question: "Трябва ли да съм dev?",
        answer:
          "Не. Canvas-ът е drag-and-drop — ops и support могат сами да правят workflow-и. Dev-овете пак могат да extend-ват с MCP servers, HTTP nodes и self-host.",
      },
      {
        question: "Какво става с API keys?",
        answer:
          "BYO keys — Nymphicus orchestrate-ва през твоите provider акаунти. Без token resale, без per-task markup. Enterprise/self-host държи keys на твоя инфра.",
      },
      {
        question: "Security вижда ли всяко действие?",
        answer:
          "Да. Всеки run има immutable execution log с full node trace. RBAC + human-in-the-loop gates преди чувствителни действия.",
      },
      {
        question: "Колко бързо до първи агент в prod?",
        answer:
          "Повечето екипи пускат първи агент от шаблон за под час. Support Triage, CRM Copilot и Knowledge Base идват pre-wired — пипаш на canvas.",
      },
      {
        question: "Има ли free tier?",
        answer:
          "Да — visual builder, 15 node types, knowledge bases, MCP и community support. Без карта.",
      },
    ],
    pricingFaq: [
      {
        question: "Как работят BYO API keys?",
        answer:
          "Вързваш OpenAI, Anthropic и др. директно. Nymphicus ползва твоите keys — без наш markup. Плащаш provider-ите по техните rates.",
      },
      {
        question: "Мога ли да self-host-на?",
        answer:
          "Да. Enterprise включва self-host — агенти на твоя инфра, пълен data residency control. Пиши ни за deploy details.",
      },
      {
        question: "Къде са данните?",
        answer:
          "Cloud = encrypted storage в избран регион. Self-host = всичко при теб. KB permissions и RBAC важат и за двата режима.",
      },
      {
        question: "Има ли MCP?",
        answer:
          "MCP е first-class — вързваш MCP-compatible tools към workflow-и без custom glue.",
      },
      {
        question: "Cancel по всяко време?",
        answer:
          "Free tier без ангажимент. Paid планове — cancel в края на billing period, без lock-in.",
      },
      {
        question: "Колко е Pro?",
        answer:
          "От $49/seat/мес за екипи с collaboration, advanced RBAC и priority support. Volume/annual — пиши ни.",
      },
    ],
    securityFaq: [
      {
        question: "Къде се пазят API keys?",
        answer:
          "Keys са в workspace-а ти. Cloud ги encrypt-ва at rest. Self-host = 100% на твоя инфра.",
      },
      {
        question: "Export на audit logs?",
        answer:
          "Да. Execution logs с full node trace — export за compliance и incident response.",
      },
      {
        question: "Какви сертификати?",
        answer:
          "SOC 2 Type II в процес. GDPR-ready днес, region picker на cloud deploy.",
      },
      {
        question: "Как е RBAC?",
        answer:
          "Roles определят кой build-ва агенти, edit-ва KB, вързва MCP tools и approve-ва sensitive steps.",
      },
    ],
    pricingTiers: [
      {
        id: "free",
        name: "Free",
        price: "$0",
        priceNote: "завинаги",
        description: "Build с твоите keys",
        features: [
          "Visual agent builder",
          "15 node types",
          "Knowledge bases + RAG",
          "MCP integrations",
          "Community support",
        ],
        ctaLabel: "Започни безплатно",
      },
      {
        id: "pro",
        name: "Pro",
        price: "От $49",
        priceNote: "/ seat / мес",
        description: "За екипи, които scale-ват",
        features: [
          "Всичко от Free",
          "Team collaboration",
          "Advanced RBAC",
          "Priority support",
          "Usage analytics",
        ],
        ctaLabel: "Демо",
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        priceNote: "self-host · SSO · SLA",
        description: "За regulated екипи с infra изисквания",
        features: [
          "Всичко от Pro",
          "Self-hosted deployment",
          "SSO / SAML",
          "Full audit trail export",
          "Dedicated SLA",
        ],
        ctaLabel: "Пиши ни",
      },
    ],
    pricingValueSignals: [
      {
        value: "$0",
        label: "Надценка на кредити",
        detail: "Плащайте LLM доставчиците директно по техните тарифи",
      },
      {
        value: "BYO",
        label: "API ключове",
        detail: "Вашите OpenAI, Anthropic или self-hosted модели",
      },
      {
        value: "Anytime",
        label: "Анулиране",
        detail: "Без дългосрочно обвързване при платените планове",
      },
    ],
    caseStudies: [
      {
        slug: "support-triage",
        title: "Support triage за един следобед",
        company: "B2B софтуерна компания",
        industry: "Customer Support",
        template: "Support Triage Agent",
        challenge:
          "Обемът на поддръжката нарастваше, но всеки AI пилот беше блокиран — black-box copilots с credit meters не минаваха security review, а custom LangChain build беше оценен на две инженерни седмици.",
        solution:
          "CS екипът клонира Support Triage шаблона, свърза Intercom чрез MCP и прикачи съществуващата knowledge base. Human approval gates бяха добавени преди всеки customer-facing отговор.",
        results: [
          { value: "~4 ч.", label: "Типично време за изграждане" },
          { value: "Високо", label: "Приемане на чернови (варира)" },
          { value: "0%", label: "Platform credit markup" },
        ],
        quote: {
          text: "Support triage премина от двудневен инженерен проект до един следобед на canvas. Human approval преди всяко изпращане даде на екипа ни увереност да го включим.",
          name: "Jordan K.",
          role: "Director of Customer Success",
        },
        highlights: [
          "Автоматизирана класификация на тикети и KB търсене",
          "Всяка чернова изисква human sign-off преди изпращане",
          "Пълен execution trace за compliance reviews",
        ],
      },
      {
        slug: "crm-copilot",
        title: "RevOps copilot без glue code",
        company: "Startup в растеж",
        industry: "Sales & RevOps",
        template: "CRM Copilot",
        challenge:
          "RevOps се нуждаеше от CRM Q&A и актуализации на сделки в Slack, но internal tools искаха поддържан Python service. Предишни copilot trials добавиха непредвидими per-seat AI credits върху HubSpot.",
        solution:
          "Внедриха CRM Copilot шаблона с HubSpot, свързан през MCP registry. Екипът персонализира deal-update логиката на canvas и свърза собствените Anthropic ключове.",
        results: [
          { value: "~1 ден", label: "Типично време до production" },
          { value: "3+", label: "Свързваеми MCP инструменти" },
          { value: "Директно", label: "Provider billing (BYO ключове)" },
        ],
        quote: {
          text: "MCP промени начина, по който интегрираме. HubSpot и Intercom се свързаха без custom glue code, а execution logs направиха compliance review-то ни straightforward.",
          name: "Sam R.",
          role: "RevOps Lead",
        },
        highlights: [
          "HubSpot заявки и актуализации чрез MCP — без custom API layer",
          "Outreach чернови, scoped към rev ops, не generic copilot",
          "Неизменяеми logs за всяко CRM write действие",
        ],
      },
      {
        slug: "governed-agents",
        title: "Агенти, които сигурността наистина одобрява",
        company: "Series B SaaS",
        industry: "Platform Engineering",
        template: "Custom multi-agent workflows",
        challenge:
          "Platform engineering се нуждаеше от internal агенти за onboarding и policy Q&A, но сигурността отхвърляше всеки SaaS copilot — непрозрачна обработка на данни, без audit trail и ключове при vendor.",
        solution:
          "Екипът self-host-на Nymphicus на своята инфраструктура, свърза BYO API ключове и приложи RBAC, така че само одобрени builder-и да публикуват агенти. Execution logs станаха default incident review surface.",
        results: [
          { value: "Пълен", label: "Run audit trace" },
          { value: "SSO", label: "Enterprise опция" },
          { value: "Self-host", label: "Deployment опция" },
        ],
        quote: {
          text: "Нуждаехме се от агенти, които екипът ни по сигурност ще одобри — не още един black-box copilot с credit meter. Nymphicus беше първата платформа, която ни позволи да запазим ключовете си и все пак да се движим бързо.",
          name: "Alex M.",
          role: "Head of Platform Engineering",
        },
        highlights: [
          "Self-hosted deployment с пълен data residency",
          "RBAC за агенти, knowledge bases и инструменти",
          "Export-ready audit trail за security reviews",
        ],
      },
    ],
    blogPosts: [
      {
        slug: "what-is-mcp-for-ai-agents",
        title: "Какво е MCP — и защо agent stack-ът ви го нуждае",
        excerpt:
          "Model Context Protocol позволява на агентите да извикват реални инструменти без custom glue code. Ето как MCP променя интеграционната история за production екипи.",
        date: "2026-06-18",
        readTime: "6 мин четене",
        category: "Интеграции",
        sections: [
          {
            type: "paragraph",
            content:
              "Повечето agent проекти застиват на интеграциите. Всеки нов инструмент — CRM, ticketing, payments — означава нов adapter, нов secret за ротация, нов service за поддръжка. Model Context Protocol (MCP) обръща този модел: инструментите излагат стандартен интерфейс, а agent canvas-ът ви ги свързва визуално.",
          },
          {
            type: "heading",
            content: "MCP в едно изречение",
          },
          {
            type: "paragraph",
            content:
              "MCP е отворен протокол за свързване на AI приложения с външни източници на данни и инструменти. Вместо да hard-code-вате HubSpot или Intercom във всеки workflow, регистрирате MCP сървър веднъж и го извиквате от всеки agent node.",
          },
          {
            type: "heading",
            content: "Защо agent builder-ите се интересуват",
          },
          {
            type: "list",
            content: "Ключови предимства за production екипи:",
            items: [
              "Без per-integration glue code — свързване чрез registry",
              "Последователна auth и scoping между инструменти",
              "Composable workflows: един MCP node, много providers",
              "Audit-friendly: tool calls се виждат в execution logs",
            ],
          },
          {
            type: "paragraph",
            content:
              "В Nymphicus MCP е first-class. Разгледайте registry, прикачете инструменти към canvas и внедрете — независимо дали строите support triage, CRM copilot или internal ops automation.",
          },
        ],
      },
      {
        slug: "support-triage-agent-in-one-afternoon",
        title: "Как да внедрите support triage агент за един следобед",
        excerpt:
          "Стъпка по стъпка с Support Triage шаблона — класифицирайте тикети, търсете в KB, чернови на отговори и gate на изпращания с human approval.",
        date: "2026-06-02",
        readTime: "5 мин четене",
        category: "Шаблони",
        sections: [
          {
            type: "paragraph",
            content:
              "Support екипите не се нуждаят от още един black-box copilot. Те се нуждаят от workflow, който могат да inspect-ват, тестват и одобряват. Support Triage шаблонът в Nymphicus дава тази отправна точка — и повечето екипи го персонализират за един следобед.",
          },
          {
            type: "heading",
            content: "Работният поток",
          },
          {
            type: "list",
            content: "Out of the box шаблонът изпълнява:",
            items: [
              "Класифициране на intent на входящ тикет",
              "Търсене в knowledge base с RAG",
              "Чернова на customer reply с цитати",
              "Пауза на human approval gate",
              "Актуализация на Intercom (или свързания инструмент) след одобрение",
            ],
          },
          {
            type: "heading",
            content: "Какво да персонализирате първо",
          },
          {
            type: "paragraph",
            content:
              "Започнете с knowledge base документите и approval policy. Повечето екипи добавят втори approval path за billing или security теми и настройват classifier node с 5–10 примерни тикета от backlog.",
          },
          {
            type: "paragraph",
            content:
              "Носете собствени API ключове, пускайте in-canvas тестове и проверявайте execution logs преди production traffic. Governance не е phase two — това е day one.",
          },
        ],
      },
      {
        slug: "governance-checklist-production-ai-agents",
        title: "Checklist за governance на production AI агенти",
        excerpt:
          "RBAC, audit trails, human approval и BYO ключове — контролите, които security екипите искат преди агентите да докоснат customer data.",
        date: "2026-05-14",
        readTime: "7 мин четене",
        category: "Сигурност",
        sections: [
          {
            type: "paragraph",
            content:
              "Преминаването от demo към production означава трудни въпроси: Кой може да публикува агенти? Какво се логва? Можем ли да спрем run mid-flight? Този checklist покрива какво platform и security екипите обикновено изискват преди sign-off.",
          },
          {
            type: "heading",
            content: "Преди да внедрите",
          },
          {
            type: "list",
            content: "Минимални контроли за production агенти:",
            items: [
              "Role-based access — builders vs operators vs viewers",
              "Неизменяеми execution logs с пълен node trace",
              "Human-in-the-loop gates при external actions",
              "BYO API ключове — без vendor credit markup",
              "Data residency опция (cloud region или self-host)",
            ],
          },
          {
            type: "heading",
            content: "По време на работа",
          },
          {
            type: "paragraph",
            content:
              "Runbooks трябва да реферират execution log IDs, не chat transcripts. Когато нещо се обърка, ви трябва node-level trace — кой MCP tool е fired, кой KB chunk е retrieved, кое approval е pending.",
          },
          {
            type: "paragraph",
            content:
              "Nymphicus вгражда тези контроли в платформата, вместо да ги добавя после. RBAC, audit trail и approval nodes са table stakes — не enterprise upsells.",
          },
        ],
      },
    ],
    changelogEntries: [
      {
        version: "0.9.0",
        date: "2026-06-20",
        title: "MCP registry и template library",
        changes: [
          {
            type: "feature",
            text: "MCP integrations registry — разглеждайте и свързвайте инструменти от canvas",
          },
          {
            type: "feature",
            text: "Support Triage, CRM Copilot и Knowledge Base шаблони",
          },
          {
            type: "improvement",
            text: "Execution logs вече включват пълен MCP tool call trace",
          },
        ],
      },
      {
        version: "0.8.0",
        date: "2026-05-28",
        title: "Governance и approval gates",
        changes: [
          { type: "feature", text: "Human-in-the-loop approval node" },
          {
            type: "feature",
            text: "RBAC за агенти, knowledge bases и workflows",
          },
          {
            type: "feature",
            text: "Export-ready audit trail за compliance reviews",
          },
          {
            type: "improvement",
            text: "Dashboard metrics за active runs и success rate",
          },
        ],
      },
      {
        version: "0.7.0",
        date: "2026-05-05",
        title: "Стартиране на визуалния конструктор",
        changes: [
          { type: "feature", text: "Drag-and-drop canvas с 15 типа възли" },
          { type: "feature", text: "Knowledge bases с RAG query nodes" },
          {
            type: "feature",
            text: "Bring-your-own API ключове — без credit markup",
          },
          {
            type: "fix",
            text: "Подобрения на canvas performance за големи workflows",
          },
        ],
      },
    ],
    industryUseCases: [
      {
        title: "Продажби",
        outcome:
          "Квалифицирайте leads, актуализирайте CRM и чернови на follow-ups от един agent workflow.",
      },
      {
        title: "Маркетинг",
        outcome:
          "Генерирайте campaign briefs, repurposed content и route approvals преди publish.",
      },
      {
        title: "Customer Support",
        outcome:
          "Triage на тикети, търсене в knowledge base и чернови на отговори с human approval.",
      },
      {
        title: "E-commerce",
        outcome:
          "Обработвайте order lookups, returns и inventory въпроси през storefront инструменти.",
      },
      {
        title: "Финанси",
        outcome:
          "Reconcile транзакции, flag anomalies и summarize month-end close задачи.",
      },
      {
        title: "Право / Compliance",
        outcome:
          "Review на договори спрямо policy, cite sources и route exceptions за review.",
      },
      {
        title: "HR",
        outcome:
          "Отговаряйте на policy въпроси, route requests и onboard employees с guided flows.",
      },
      {
        title: "Продукт",
        outcome:
          "Summarize feedback, draft specs и sync insights към roadmap инструменти.",
      },
      {
        title: "Инженеринг",
        outcome:
          "Triage на incidents, търсене в runbooks и propose remediation steps с audit trail.",
      },
      {
        title: "Професионални услуги",
        outcome:
          "Подгответе client deliverables, pull context от docs и track billable work.",
      },
    ],
    integrationsHeading: "Работи с инструментите, които екипът ви вече използва",
    integrationsCustom: "Нужен ви е custom connector?",
    integrationsCustomLink: "Поговорете с нас за MCP сървъри",
    featureSections: [
      {
        eyebrow: "Dashboard",
        title: "Едно място, за да",
        titleHighlight: "управлявате всеки агент",
        subtitle:
          "Мониторирайте workflows, track runs и влезете в builder — control center, който ops екипът ви наистина иска.",
      },
      {
        eyebrow: "Agent Builder",
        title: "Проектирай workflows на canvas",
        subtitle:
          "15 типа възли, drag-and-drop wiring, versioning и in-canvas testing — builder-и и инженери в един интерфейс.",
      },
      {
        eyebrow: "Agents",
        title: "Внедрявайте и управлявайте в мащаб",
        subtitle:
          "Организирайте агенти по екип и environment — с permissions, които отговарят на начина, по който компанията ви работи.",
      },
      {
        eyebrow: "Governance",
        title: "Audit на всяко изпълнение",
        subtitle:
          "Неизменяеми logs, human approvals, RBAC и knowledge-base permissions — production confidence, не vibes.",
      },
    ],
    templateCards: [
      {
        title: "Support Triage Agent",
        category: "Customer Support",
        description:
          "Класифицирайте входящи тикети, търсете в knowledge base, чернова на отговор, актуализация на Intercom и route за human approval преди изпращане.",
        flow: [
          "Класифициране на ticket intent",
          "Търсене в knowledge base (RAG)",
          "Чернова на customer reply",
          "Актуализация на Intercom",
          "Human approval gate",
        ],
        integrations: ["Intercom", "File Search (RAG)", "Human Approval"],
      },
      {
        title: "CRM Copilot",
        category: "Sales & RevOps",
        description:
          "Отговаряйте на CRM въпроси, чернови на outreach emails и актуализирайте deal records чрез HubSpot MCP — owned от rev ops екипа ви.",
        flow: [
          "Parse sales question",
          "Query HubSpot via MCP",
          "Draft email or update",
          "Log activity to CRM",
        ],
        integrations: ["HubSpot MCP", "LLM", "Output"],
      },
      {
        title: "Knowledge Base Chatbot",
        category: "Всеки екип",
        description:
          "RAG върху company docs с cited answers — за internal copilots, policy Q&A и onboarding assistants.",
        flow: [
          "Receive user query",
          "Retrieve relevant chunks",
          "Generate cited answer",
          "Return with sources",
        ],
        integrations: ["Knowledge Base", "RAG Query", "File Search"],
      },
    ],
    contactOptions: [
      {
        title: "Започни да build-ваш",
        description: "Free акаунт + твоите API keys. Без карта.",
        cta: "Започни",
      },
      {
        title: "Демо",
        description:
          "Visual builder, MCP и governance — live walkthrough.",
        cta: "Демо",
      },
      {
        title: "Enterprise & self-host",
        description:
          "SSO, audit export, SLA, on-prem — пиши ни.",
        cta: "Пиши ни",
      },
    ],
    aboutValues: [
      {
        title: "Builder-first",
        description:
          "Най-добрата agent платформа е тази, която екипът ви наистина използва. Оптимизираме първо за визуалния builder experience.",
      },
      {
        title: "Вашата инфраструктура",
        description:
          "Вашите ключове, вашите данни, вашият deployment. Не вярваме в credit markups или forced cloud lock-in.",
      },
      {
        title: "Governance по подразбиране",
        description:
          "RBAC, audit trails и permissions не са enterprise add-ons — те са table stakes за production агенти.",
      },
    ],
    aboutMissionLabel: "Нашата мисия",
    aboutMission:
      "Да дадем на всеки екип силата да строи production-ready агенти — без да отказва контрол върху моделите, данните или инфраструктурата си.",
    aboutParagraphs: [
      "Nymphicus е визуален AI agent builder за екипи, които трябва да внедряват бързо, без да губят контрол. Вярваме, че следващата вълна AI adoption няма да дойде от black-box copilots — а от composable агенти, които екипът ви проектира, внедрява и управлява на собствени условия.",
      "Платформата ни комбинира drag-and-drop canvas с 15 типа възли, knowledge bases с RAG, MCP интеграции и enterprise-grade RBAC и audit trails. Независимо дали работите в нашия облак или self-host на ваша инфраструктура, носите собствени API ключове и плащате директно на доставчиците — без per-task credit markup.",
      "Ние сме early-stage екип, фокусиран върху даването на builder-и, operators и security екипи на обща surface, за да внедряват агенти, които наистина свършват работата.",
    ],
    comparePillars: [
      {
        highlight: "vs. Copilots",
        title: "Без тревога от кредити",
        description:
          "Плащайте OpenAI и Anthropic директно. Без per-task markup, който ви наказва при мащабиране.",
      },
      {
        highlight: "vs. DIY",
        title: "Стартирайте за часове",
        description:
          "Шаблони, визуален canvas и MCP registry заменят седмици framework plumbing.",
      },
      {
        highlight: "vs. Both",
        title: "Управление, вградено от самото начало",
        description: "RBAC, audit trail и human approval — не phase-two проект.",
      },
    ],
    securityPillars: [
      {
        highlight: "Access",
        title: "Role-based контрол",
        description:
          "Scope permissions за агенти, knowledge bases, MCP инструменти и approval gates — правилните хора докосват правилните workflows.",
      },
      {
        highlight: "Audit",
        title: "Всяко изпълнение е logged",
        description:
          "Неизменяеми execution logs с пълен node trace. Export-ready за compliance reviews и security investigations.",
      },
      {
        highlight: "Data",
        title: "Вашите ключове, вашата infra",
        description:
          "Bring your own API ключове без credit markup. Enterprise self-hosting държи data и credentials на вашата инфраструктура.",
      },
    ],
    securityBullets: [
      "Approval gates преди external actions",
      "Пълен node-level execution trace",
      "Scoped access по екип и role",
      "Cloud или self-hosted data residency",
    ],
    securitySectionTitle: "Human-in-the-loop by design",
    securitySectionBody:
      "Чувствителните действия спират на approval nodes, докато human не sign-off-не. Security екипите получават trail, от който се нуждаят. Builder-ите продължават да ship-ват, без да заобикалят governance.",
    nodeTypesEyebrow: "Canvas",
    nodeTypesTitle: "15 типа възли. Нула black boxes.",
    nodeTypesSubtitle:
      "Всяка стъпка в agent workflow е visible, testable и auditable — от trigger до output.",
    comparisonColumns: {
      feature: "Възможност",
      nymphicus: "Nymphicus",
      copilots: "Credit copilots",
      diy: "DIY frameworks",
    },
    comparisonLink: "Вижте пълното сравнение →",
    customersShareStory: "Искате да споделите историята си?",
    customersShareStoryLink: "Пиши ни",
    blogMoreGuides: "Още ръководства скоро.",
    blogRequestTopic: "Предложете тема",
    privacySections: [
      {
        heading: "Въведение",
        paragraphs: [
          'Тази Политика за поверителност описва как Nymphicus ("ние", "нас") събира и използва информация, когато посещавате www.nymphicus.ai ("Маркетингов сайт") или се свързвате с нас.',
        ],
      },
      {
        heading: "Какво покрива тази политика",
        paragraphs: [
          "Тази политика важи само за маркетинговия уебсайт. Когато създавате акаунт или използвате приложението Nymphicus на app.nymphicus.ai, използването се управлява от application terms и privacy practices, описани при регистрация и в workspace settings.",
        ],
      },
      {
        heading: "Информация, която събираме",
        paragraphs: [
          "На Маркетинговия сайт можем да събираме contact information — ако ни пишете по имейл или заявите демо (напр. име, имейл, компания); usage data — посетени страници, referrer, browser type и приблизителна локация чрез analytics (ако е включено); и technical data — IP адрес и cookies, необходими за работа и сигурност на сайта.",
          "Не събираме payment information на Маркетинговия сайт. Регистрацията и billing се извършват на application subdomain.",
        ],
      },
      {
        heading: "Как използваме информацията",
        paragraphs: [
          "Използваме събраната информация, за да отговаряме на запитвания и demo заявки, подобряваме Маркетинговия сайт и измерваме conversion, изпращаме product updates, за които сте се абонирали, и спазваме правни задължения.",
        ],
      },
      {
        heading: "Правно основание (GDPR)",
        paragraphs: [
          "Където GDPR важи, обработваме данни на база legitimate interests (работа и подобрение на сайта), consent (marketing communications) и contractual necessity (отговор на вашите заявки).",
        ],
      },
      {
        heading: "Съхранение на данни",
        paragraphs: [
          "Contact inquiries се съхраняват толкова дълго, колкото е необходимо за отговор и business records, обикновено до 24 месеца, освен ако законът не изисква по-дълъг период.",
        ],
      },
      {
        heading: "Вашите права",
        paragraphs: [
          "В зависимост от локацията ви може да имате права за access, correct, delete или restrict processing на personal data. Свържете се с нас на hello@nymphicus.ai, за да упражните тези права.",
        ],
      },
      {
        heading: "Трети страни",
        paragraphs: [
          "Можем да използваме hosting, analytics и email providers за работа на Маркетинговия сайт. Тези providers обработват данни от наше име при подходящи споразумения. Не продаваме personal information.",
        ],
      },
      {
        heading: "Контакт",
        paragraphs: ["Въпроси относно тази политика: hello@nymphicus.ai"],
      },
    ],
    termsSections: [
      {
        heading: "Въведение",
        paragraphs: [
          'Тези Общи условия ("Условия") управляват достъпа ви и използването на маркетинговия уебсайт на Nymphicus на www.nymphicus.ai ("Сайт"). С използването на Сайта приемате тези Условия.',
        ],
      },
      {
        heading: "Сайтът срещу приложението",
        paragraphs: [
          "Сайтът предоставя информация за продуктите и услугите на Nymphicus. Използването на приложението Nymphicus на app.nymphicus.ai подлежи на отделни application terms, представени при регистрация. При конфликт между тези Условия и application terms, application terms управляват използването на приложението.",
        ],
      },
      {
        heading: "Разрешена употреба",
        paragraphs: [
          "Можете да използвате Сайта за законни цели, за да научите за Nymphicus и да се свържете с нас. Не можете да се опитвате да получите неоторизиран достъп до системите ни, да scrape-вате или automate-вате достъп по начин, който натоварва инфраструктурата, да misrepresent-вате affiliation с Nymphicus или да използвате Сайта в нарушение на приложимото право.",
        ],
      },
      {
        heading: "Интелектуална собственост",
        paragraphs: [
          "Сайтът, включително text, graphics, logos и design, е собственост на Nymphicus или неговите licensors и е защитен от закони за интелектуална собственост. Не можете да copy, modify или distribute Site content без писмено разрешение, освен за personal, non-commercial reference.",
        ],
      },
      {
        heading: "Отказ от отговорност",
        paragraphs: [
          'Сайтът и съдържанието му се предоставят "as is" за информационни цели. Product descriptions, example workflows, pricing и roadmap items могат да се променят. Не гарантираме, че Сайтът ще бъде uninterrupted или error-free.',
          "Example outcomes и illustrative workflows на Сайта не са гаранции за резултати за вашата организация.",
        ],
      },
      {
        heading: "Ограничение на отговорността",
        paragraphs: [
          "До максимално допустимата от закона степен Nymphicus не носи отговорност за indirect, incidental, special или consequential damages, произтичащи от използването на Сайта.",
        ],
      },
      {
        heading: "Връзки към трети страни",
        paragraphs: [
          "Сайтът може да съдържа връзки към third-party services (documentation, integration providers и др.). Не носим отговорност за third-party content или practices.",
        ],
      },
      {
        heading: "Промени",
        paragraphs: [
          "Можем да актуализираме тези Условия от време на време. Продължителното използване на Сайта след промени означава приемане на актуализираните Условия.",
        ],
      },
      {
        heading: "Контакт",
        paragraphs: ["Въпроси относно тези Условия: hello@nymphicus.ai"],
      },
    ],
  },
};

export default bg;
