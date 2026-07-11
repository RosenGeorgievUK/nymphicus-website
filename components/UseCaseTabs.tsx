"use client";

import { useCallback, useState } from "react";

type UseCase = {
  id: string;
  label: string;
  description: string;
  flow: string[];
};

const useCases: UseCase[] = [
  {
    id: "support",
    label: "Support",
    description:
      "Resolve tickets faster with agents that search your knowledge base, draft replies, and escalate when needed.",
    flow: ["Ticket", "RAG", "LLM", "Reply"],
  },
  {
    id: "sales",
    label: "Sales & CRM",
    description:
      "Qualify leads, update CRM records, and schedule follow-ups — all from a visual workflow your rev ops team owns.",
    flow: ["Lead", "Enrich", "Score", "CRM"],
  },
  {
    id: "ops",
    label: "Operations",
    description:
      "Automate internal requests, route approvals, and keep a full audit trail for every agent action.",
    flow: ["Request", "Route", "Approve", "Act"],
  },
  {
    id: "internal",
    label: "Internal tools",
    description:
      "Build custom internal copilots connected to your stack via MCP — no per-task credit markup on API calls.",
    flow: ["Query", "MCP", "Tool", "Result"],
  },
];

function MiniFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-hidden>
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-nym border border-nym-primary/30 bg-nym-primary-50 px-3 py-1.5 text-xs font-medium text-marketing-text">
            {step}
          </span>
          {i < steps.length - 1 && (
            <svg width="16" height="8" viewBox="0 0 16 8" className="text-nym-primary/50">
              <path d="M0 4h12M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}

export function UseCaseTabs() {
  const [active, setActive] = useState(useCases[0].id);
  const current = useCases.find((u) => u.id === active)!;

  const focusTab = useCallback((index: number) => {
    const tab = document.getElementById(`tab-${useCases[index].id}`);
    tab?.focus();
    setActive(useCases[index].id);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % useCases.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + useCases.length) % useCases.length;
        event.preventDefault();
        focusTab(nextIndex);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(useCases.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="section-y" aria-labelledby="use-cases-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <h2 id="use-cases-heading" className="sr-only">
          Use cases
        </h2>

        <div
          className="flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Use case categories"
        >
          {useCases.map((uc, index) => (
            <button
              key={uc.id}
              type="button"
              role="tab"
              id={`tab-${uc.id}`}
              tabIndex={active === uc.id ? 0 : -1}
              aria-selected={active === uc.id}
              aria-controls={`panel-${uc.id}`}
              className={`nym-focus rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === uc.id
                  ? "bg-gradient-nym text-on-gradient"
                  : "border border-marketing-border text-marketing-text-muted hover:text-marketing-text"
              }`}
              onClick={() => setActive(uc.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {uc.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-8 rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 md:p-10"
        >
          <p className="text-lg text-marketing-text md:text-xl">{current.description}</p>
          <div className="mt-6">
            <MiniFlow steps={current.flow} />
          </div>
        </div>
      </div>
    </section>
  );
}
