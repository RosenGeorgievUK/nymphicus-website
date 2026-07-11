export type BlogSection = {
  type: "heading" | "paragraph" | "list";
  content: string;
  items?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
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
          "On Nymphicus, MCP is first-class. Browse the registry, attach tools to your canvas, and ship — whether you're building support triage, a CRM copilot, or internal ops automation.",
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
          "Support teams don't need another black-box copilot. They need a workflow they can inspect, test, and approve. The Support Triage template on Nymphicus gives you that starting point — and most teams customize it in a single afternoon.",
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
          "Nymphicus bakes these controls into the platform rather than bolting them on. RBAC, audit trail, and approval nodes are table stakes — not enterprise upsells.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
