"use client";

import { useState } from "react";
import Link from "next/link";
import {
  WalkthroughDemoCanvas,
  type WalkthroughStepId,
} from "@/components/WalkthroughDemoCanvas";

const steps: {
  id: WalkthroughStepId;
  label: string;
  headline: string;
  caption: string;
}[] = [
  {
    id: "template",
    label: "Build",
    headline: "Design on a visual canvas",
    caption: "Drag nodes, wire approvals, and publish — no glue code between steps.",
  },
  {
    id: "connect",
    label: "Connect",
    headline: "Wire your stack via MCP",
    caption: "HubSpot, Intercom, Stripe, and more from the registry — standard interfaces, no custom adapters.",
  },
  {
    id: "govern",
    label: "Govern",
    headline: "Run with audit trail built in",
    caption: "Every execution is logged. Sensitive actions pause until an approver confirms.",
  },
];

export function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState<WalkthroughStepId>("template");
  const current = steps.find((step) => step.id === activeStep) ?? steps[0];

  return (
    <section
      id="product-demo"
      className="scroll-mt-20 border-t border-marketing-border py-14 md:py-20"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Product walkthrough</p>
          <h2
            id="demo-heading"
            className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-marketing-text"
          >
            How it works
          </h2>
          <p className="mt-3 text-base text-marketing-text-muted">
            Three steps from template to production — build the flow, connect your tools, govern every run.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="inline-flex rounded-xl border border-marketing-border bg-marketing-surface/60 p-1"
            role="tablist"
            aria-label="Product workflow steps"
          >
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={activeStep === step.id}
                aria-controls={`demo-panel-${step.id}`}
                className={`nym-focus rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
                  activeStep === step.id
                    ? "bg-marketing-bg text-marketing-text shadow-sm"
                    : "text-marketing-text-muted hover:text-marketing-text"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.label}
              </button>
            ))}
          </div>

          <Link
            href="/features"
            className="nym-focus shrink-0 text-sm font-semibold text-nym-primary hover:underline"
          >
            Full product overview →
          </Link>
        </div>

        <div
          role="tabpanel"
          id={`demo-panel-${current.id}`}
          className="mt-6"
        >
          <p className="mb-4 text-sm font-medium text-marketing-text md:text-base">{current.headline}</p>

          <div className="overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-xl shadow-black/20 ring-1 ring-white/5">
            <WalkthroughDemoCanvas stepId={current.id} />
          </div>

          <p className="mt-4 text-center text-sm leading-relaxed text-marketing-text-muted md:text-base">
            {current.caption}
            <span className="mt-1 block text-xs text-marketing-text-muted/80">
              Auto-plays when in view — {current.id === "template" ? "19" : current.id === "connect" ? "10" : "9"} steps
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
