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
    title: "How to connect your apps without custom code",
    excerpt:
      "Stop building one-off integrations for every tool. Here's how Nymphi lets you plug in HubSpot, Intercom, and more from a simple directory.",
    date: "2026-06-18",
    readTime: "6 min read",
    category: "Integrations",
    sections: [
      {
        type: "paragraph",
        content:
          "Most AI projects stall on integrations. Every new tool — CRM, ticketing, payments — means another adapter, another password to manage, another service to maintain. Nymphi's app directory flips that: connect a tool once, then use it in any workflow you build.",
      },
      {
        type: "heading",
        content: "The idea in one sentence",
      },
      {
        type: "paragraph",
        content:
          "Instead of hard-coding HubSpot or Intercom into every workflow, you connect them from the app directory and drag them onto your canvas. One connection, many workflows.",
      },
      {
        type: "heading",
        content: "Why teams care",
      },
      {
        type: "list",
        content: "Key benefits for production teams:",
        items: [
          "No custom code per integration — connect from the directory",
          "Consistent sign-in and permissions across tools",
          "One connection step, many workflows",
          "Every app action shows up in your activity log",
        ],
      },
      {
        type: "paragraph",
        content:
          "On Nymphi, app connections are built in. Browse the directory, attach tools to your workflow, and launch — whether you're building support triage, a CRM assistant, or internal automation.",
      },
    ],
  },
  {
    slug: "support-triage-agent-in-one-afternoon",
    title: "How to build a support assistant in one afternoon",
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
          "Search your help docs for relevant answers",
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
          "Bring your own AI account, test in the builder, and check the activity log before going live. Security isn't an afterthought — it's built in from the start.",
      },
    ],
  },
  {
    slug: "governance-checklist-production-ai-agents",
    title: "A security checklist before launching AI assistants",
    excerpt:
      "Team permissions, activity logs, human approval, and your own AI account — what security teams ask for before AI touches customer data.",
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
        content: "Before you launch",
      },
      {
        type: "list",
        content: "Minimum controls for production agents:",
        items: [
          "Team permissions — who can build, run, and approve",
          "Complete activity log for every step",
          "Human approval before external actions",
          "Your own AI account — no vendor markup",
          "Option to run on your own servers",
        ],
      },
      {
        type: "heading",
        content: "During operation",
      },
      {
        type: "paragraph",
        content:
          "Runbooks should reference activity log IDs, not chat transcripts. When something goes wrong, you need to see exactly which app was called, which document was used, and which approval was still pending.",
      },
      {
        type: "paragraph",
        content:
          "Nymphi includes these controls from the start — team permissions, activity logs, and approval steps are included, not sold as expensive add-ons.",
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
