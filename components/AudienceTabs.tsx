"use client";

import { useCallback, useState } from "react";
import { GradientButton } from "@/components/GradientButton";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import type { ScreenshotKey } from "@/lib/screenshots";

type Persona = {
  id: string;
  label: string;
  title: string;
  bullets: string[];
  screenshot: ScreenshotKey;
  cta: string;
  href: string;
};

const personas: Persona[] = [
  {
    id: "builders",
    label: "Builders",
    title: "Ship agents without writing glue code",
    bullets: [
      "Drag-and-drop 15 node types on the canvas",
      "Start from Support, CRM, or KB templates",
      "Test workflows in-canvas before deploy",
    ],
    screenshot: "supportWorkflow",
    cta: "Explore templates",
    href: "/templates",
  },
  {
    id: "ops",
    label: "Operations",
    title: "Run and monitor every agent from one dashboard",
    bullets: [
      "Track active runs, success rates, and latency",
      "Jump from dashboard into any workflow",
      "Immutable execution logs for every run",
    ],
    screenshot: "dashboard",
    cta: "See features",
    href: "/features",
  },
  {
    id: "security",
    label: "Security",
    title: "Governance your team can actually enforce",
    bullets: [
      "RBAC across agents, knowledge bases, and tools",
      "Human-in-the-loop approval gates",
      "Self-hosted deployment with full data residency",
    ],
    screenshot: "executionLogs",
    cta: "Review security",
    href: "/security",
  },
];

export function AudienceTabs() {
  const [active, setActive] = useState(personas[0].id);
  const current = personas.find((p) => p.id === active)!;

  const focusTab = useCallback((index: number) => {
    const tab = document.getElementById(`persona-tab-${personas[index].id}`);
    tab?.focus();
    setActive(personas[index].id);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % personas.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + personas.length) % personas.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(personas.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="section-y border-t border-marketing-border" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Built for your team</p>
          <h2 id="audience-heading" className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-marketing-text">
            One platform. <span className="text-gradient">Three teams.</span> Zero trade-offs.
          </h2>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Team personas"
        >
          {personas.map((persona, index) => (
            <button
              key={persona.id}
              type="button"
              role="tab"
              id={`persona-tab-${persona.id}`}
              tabIndex={active === persona.id ? 0 : -1}
              aria-selected={active === persona.id}
              aria-controls={`persona-panel-${persona.id}`}
              className={`nym-focus rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === persona.id
                  ? "bg-gradient-nym text-on-gradient"
                  : "border border-marketing-border text-marketing-text-muted hover:text-marketing-text"
              }`}
              onClick={() => setActive(persona.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {persona.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`persona-panel-${current.id}`}
          aria-labelledby={`persona-tab-${current.id}`}
          className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h3 className="text-2xl font-semibold text-marketing-text">{current.title}</h3>
            <ul className="mt-6 space-y-3 text-sm text-marketing-text">
              {current.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nym-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GradientButton href={current.href}>{current.cta}</GradientButton>
            </div>
          </div>
          <ProductScreenshot
            screenshot={current.screenshot}
            alt={`${current.label} view in Nymphicus`}
          />
        </div>
      </div>
    </section>
  );
}
