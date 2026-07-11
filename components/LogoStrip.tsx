import Link from "next/link";
import { integrationLogos } from "@/lib/use-cases-data";

type LogoStripProps = {
  className?: string;
};

export function LogoStrip({ className = "" }: LogoStripProps) {
  const logos = [...integrationLogos];

  return (
    <section className={`py-10 md:py-12 ${className}`} aria-labelledby="logo-strip-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <p
          id="logo-strip-heading"
          className="mb-6 text-center text-sm font-medium text-marketing-text-muted"
        >
          Connects to the tools your team already uses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {logos.map((name) => (
            <span
              key={name}
              className="rounded-nym-lg border border-marketing-border/80 bg-marketing-surface/60 px-4 py-2 text-sm font-medium text-marketing-text-muted transition-colors hover:border-nym-primary/25 hover:text-marketing-text"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-marketing-text-muted">
          + any MCP-compatible tool via the{" "}
          <Link href="/integrations" className="font-medium text-nym-primary hover:underline">
            integrations registry
          </Link>
        </p>
      </div>
    </section>
  );
}
