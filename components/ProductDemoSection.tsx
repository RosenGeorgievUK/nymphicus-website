"use client";

import { useState } from "react";
import { GhostButton } from "@/components/GhostButton";
import { GradientButton } from "@/components/GradientButton";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import type { ScreenshotKey } from "@/lib/screenshots";
import { ctaLabels, platformUrls, siteConfig } from "@/lib/site";

type DemoStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  screenshot: ScreenshotKey;
};

const walkthroughSteps: DemoStep[] = [
  {
    id: "template",
    label: "01 · Template",
    title: "Start from a workflow that already works",
    description:
      "Clone Support Triage, CRM Copilot, or Knowledge Base — then customize every node on the canvas.",
    screenshot: "supportWorkflow",
  },
  {
    id: "connect",
    label: "02 · Connect",
    title: "Wire your stack via MCP",
    description:
      "Browse the registry, connect HubSpot, Intercom, Stripe, and more — no custom glue code.",
    screenshot: "mcpRegistry",
  },
  {
    id: "govern",
    label: "03 · Govern",
    title: "Run with full audit trail",
    description:
      "Every node execution logged. Human approval gates before sensitive actions. RBAC built in.",
    screenshot: "executionLogs",
  },
];

export function ProductDemoSection() {
  const [activeStep, setActiveStep] = useState(walkthroughSteps[0].id);
  const current = walkthroughSteps.find((s) => s.id === activeStep)!;
  const hasVideo = Boolean(siteConfig.demoVideo);

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
            subtitle="Watch the walkthrough or step through how teams ship their first governed agent."
            align="center"
          />
        </ScrollReveal>

        {hasVideo ? (
          <ScrollReveal className="mt-12">
            <VideoEmbed url={siteConfig.demoVideo} title="Nymphicus product demo" />
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton href={platformUrls.register}>{ctaLabels.getStarted}</GradientButton>
              <GhostButton href={platformUrls.bookDemo}>{ctaLabels.bookDemo}</GhostButton>
            </div>
          </ScrollReveal>
        ) : (
          <>
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
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`demo-panel-${current.id}`}
              className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h3 className="text-xl font-semibold text-marketing-text md:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-4 leading-relaxed text-marketing-text-muted">
                  {current.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <GradientButton href={platformUrls.register}>
                    {ctaLabels.startFree}
                  </GradientButton>
                  <GhostButton href={platformUrls.bookDemo}>
                    Watch live demo
                  </GhostButton>
                </div>
              </div>
              <ProductScreenshot
                screenshot={current.screenshot}
                alt={current.title}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
