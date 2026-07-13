export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  caseStudySlug?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We needed agents our security team would sign off on — not another black-box copilot with a credit meter. Nymphi was the first platform that let us keep our keys and still move fast.",
    name: "Alex M.",
    role: "Head of Platform Engineering",
    company: "Series B SaaS (illustrative)",
    caseStudySlug: "governed-agents",
  },
  {
    quote:
      "Support triage went from a two-day engineering project to an afternoon on the canvas. Human approval before every send gave our team confidence to actually turn it on.",
    name: "Jordan K.",
    role: "Director of Customer Success",
    company: "B2B software (illustrative)",
    caseStudySlug: "support-triage",
  },
  {
    quote:
      "MCP changed how we integrate. HubSpot and Intercom wired in without custom glue code, and the execution logs made our compliance review straightforward.",
    name: "Sam R.",
    role: "RevOps Lead",
    company: "Growth-stage startup (illustrative)",
    caseStudySlug: "crm-copilot",
  },
];
