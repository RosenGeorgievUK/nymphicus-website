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
  caption: string;
}[] = [
  {
    id: "template",
    label: "Build",
    caption: "Drag nodes onto the canvas and configure approval gates before you publish.",
  },
  {
    id: "connect",
    label: "Connect",
    caption: "Wire HubSpot, Intercom, Stripe, and more from the MCP registry — no glue code.",
  },
  {
    id: "govern",
    label: "Govern",
    caption: "Every run is logged. Sensitive actions pause until an approver confirms.",
  },
];

export function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState<WalkthroughStepId>("template");
  const current = steps.find((step) => step.id === activeStep) ?? steps[0];

  return (
    <section
      id="product-demo"
      className="border-t border-marketing-border py-14 md:py-16 scroll-mt-20"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="demo-heading"
            className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold text-marketing-text"
          >
            How it works
          </h2>
          <Link
            href="/features"
            className="nym-focus text-sm font-semibold text-nym-primary hover:underline"
          >
            Full product overview →
          </Link>
        </div>

        <div
          className="mt-6 inline-flex rounded-xl border border-marketing-border bg-marketing-surface/40 p-1"
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
              className={`nym-focus rounded-lg px-5 py-2 text-sm font-medium ${
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

        <div
          role="tabpanel"
          id={`demo-panel-${current.id}`}
          className="mt-6"
        >
          <div className="overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-xl">
            <WalkthroughDemoCanvas stepId={current.id} />
          </div>
          <p className="mt-4 text-center text-sm text-marketing-text-muted md:text-base">
            {current.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
