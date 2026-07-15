import Link from "next/link";
import { WalkthroughDemoCanvas } from "@/components/WalkthroughDemoCanvas";

export function ProductDemoSection() {
  return (
    <section
      id="product-demo"
      className="scroll-mt-20 border-t border-marketing-border py-14 md:py-20"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-nym-primary">Product walkthrough</p>
            <h2
              id="demo-heading"
              className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-marketing-text"
            >
              How it works
            </h2>
            <p className="mt-3 text-base text-marketing-text-muted">
              Drag steps onto the canvas, connect your apps, and require human approval before anything sensitive runs.
            </p>
          </div>

          <Link
            href="/features"
            className="nym-focus shrink-0 text-sm font-semibold text-nym-primary hover:underline"
          >
            Full product overview →
          </Link>
        </div>

        <div className="mt-8">
          <div className="overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-xl shadow-black/20 ring-1 ring-white/5">
            <WalkthroughDemoCanvas />
          </div>

          <p className="mt-4 text-center text-sm leading-relaxed text-marketing-text-muted md:text-base">
            Support Triage Agent — classify tickets, search your KB, draft replies, and route through human review before anything goes out.
          </p>
        </div>
      </div>
    </section>
  );
}
