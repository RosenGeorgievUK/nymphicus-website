"use client";

import { useEffect, useRef, useState } from "react";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ProductScreenshotImage } from "@/components/ProductScreenshotImage";
import { McpMock } from "@/components/product-mock-shared";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ScreenshotKey } from "@/lib/screenshots";
import { ctaLabels, platformUrls } from "@/lib/site";

type DemoStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  screenshot: ScreenshotKey;
  durationMs: number;
};

const walkthroughSteps: DemoStep[] = [
  {
    id: "template",
    label: "01 · Template",
    title: "Start from a workflow that already works",
    description:
      "Clone Support Triage, CRM Copilot, or Knowledge Base — then customize every node on the canvas.",
    screenshot: "supportWorkflow",
    durationMs: 10000,
  },
  {
    id: "connect",
    label: "02 · Connect",
    title: "Wire your stack via MCP",
    description:
      "Browse the registry, connect HubSpot, Intercom, Stripe, and more — no custom glue code.",
    screenshot: "mcpRegistry",
    durationMs: 8000,
  },
  {
    id: "govern",
    label: "03 · Govern",
    title: "Run with full audit trail",
    description:
      "Every node execution logged. Human approval gates before sensitive actions. RBAC built in.",
    screenshot: "executionLogs",
    durationMs: 7000,
  },
];

const totalDuration = walkthroughSteps.reduce((sum, step) => sum + step.durationMs, 0);

function stepForElapsed(elapsedMs: number) {
  const looped = elapsedMs % totalDuration;
  let accumulated = 0;
  for (const step of walkthroughSteps) {
    accumulated += step.durationMs;
    if (looped < accumulated) return step;
  }
  return walkthroughSteps[0];
}

export function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState(walkthroughSteps[0].id);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const elapsedRef = useRef(0);

  const current = walkthroughSteps.find((s) => s.id === activeStep) ?? walkthroughSteps[0];

  useEffect(() => {
    if (!playing) return;

    const tickMs = 100;
    const id = window.setInterval(() => {
      elapsedRef.current += tickMs;
      const elapsed = elapsedRef.current;
      const nextProgress = ((elapsed % totalDuration) / totalDuration) * 100;
      setProgress(nextProgress);
      setActiveStep(stepForElapsed(elapsed).id);
    }, tickMs);

    return () => window.clearInterval(id);
  }, [playing]);

  const jumpToStep = (stepId: string) => {
    const index = walkthroughSteps.findIndex((s) => s.id === stepId);
    if (index < 0) return;
    const offset = walkthroughSteps.slice(0, index).reduce((sum, s) => sum + s.durationMs, 0);
    elapsedRef.current = offset;
    setProgress((offset / totalDuration) * 100);
    setActiveStep(stepId);
  };

  return (
    <section className="section-y border-t border-marketing-border" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="demo-heading"
            eyebrow="See it in action"
            title={
              <>
                From template to production{" "}
                <span className="text-gradient">in 90 seconds</span>
              </>
            }
            subtitle="Watch the walkthrough — a live simulation of how teams ship their first governed agent."
            align="center"
          />
        </ScrollReveal>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Product walkthrough steps"
        >
          {walkthroughSteps.map((step) => (
            <button
              key={step.id}
              type="button"
              role="tab"
              aria-selected={activeStep === step.id}
              aria-controls={`demo-panel-${step.id}`}
              className={`nym-focus rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeStep === step.id
                  ? "bg-gradient-nym text-on-gradient"
                  : "border border-marketing-border text-marketing-text-muted hover:text-marketing-text"
              }`}
              onClick={() => jumpToStep(step.id)}
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          <div className="flex items-center gap-3 rounded-full border border-marketing-border bg-marketing-surface/40 px-4 py-2">
            <button
              type="button"
              className="nym-focus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-nym text-on-gradient"
              aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? (
                <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                  <rect x="2" y="1" width="3" height="10" rx="0.5" />
                  <rect x="7" y="1" width="3" height="10" rx="0.5" />
                </svg>
              ) : (
                <svg className="ml-0.5 h-3.5 w-3.5" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                  <path d="M3 2l8 4-8 4V2z" />
                </svg>
              )}
            </button>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-marketing-border/60">
              <div
                className="recording-progress-fill h-full rounded-full bg-gradient-nym"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-marketing-text-muted">
              {Math.floor((progress / 100) * (totalDuration / 1000))}s
            </span>
          </div>
        </div>

        <div
          role="tabpanel"
          id={`demo-panel-${current.id}`}
          className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h3 className="text-xl font-semibold text-marketing-text md:text-2xl">{current.title}</h3>
            <p className="mt-4 leading-relaxed text-marketing-text-muted">{current.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GradientButton href={platformUrls.register}>{ctaLabels.startFree}</GradientButton>
              <GhostButton href={platformUrls.bookDemo}>Watch live demo</GhostButton>
            </div>
          </div>
          <ProductInteractivePreview
            screenshot={current.screenshot}
            alt={current.title}
            autoPlay={playing}
            resetKey={current.id}
          >
            {current.screenshot === "mcpRegistry" ? (
              <McpMock />
            ) : (
              <ProductScreenshotImage screenshot={current.screenshot} alt={current.title} />
            )}
          </ProductInteractivePreview>
        </div>
      </div>
    </section>
  );
}
