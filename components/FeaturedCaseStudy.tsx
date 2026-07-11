import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { CaseStudyCopy } from "@/lib/dictionaries/types";

type FeaturedCaseStudyProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  featured: CaseStudyCopy;
  readWorkflowLabel: string;
  seeAllWorkflowsLabel: string;
  customersHref: string;
  studyHref: string;
};

export function FeaturedCaseStudy({
  eyebrow,
  title,
  subtitle,
  featured,
  readWorkflowLabel,
  seeAllWorkflowsLabel,
  customersHref,
  studyHref,
}: FeaturedCaseStudyProps) {
  return (
    <section className="section-y border-t border-marketing-border" aria-labelledby="case-study-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="case-study-heading"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <article className="rounded-nym-lg border border-nym-primary/30 bg-marketing-surface p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-nym-primary">
                {featured.industry}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-marketing-text">{featured.title}</h3>
              <p className="mt-2 text-sm text-marketing-text-muted">{featured.company}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 md:mt-0 md:shrink-0">
              {featured.results.slice(0, 2).map((result) => (
                <div key={result.label}>
                  <p className="text-xl font-semibold text-gradient">{result.value}</p>
                  <p className="text-xs text-marketing-text-muted">{result.label}</p>
                </div>
              ))}
            </div>
            <Link
              href={studyHref}
              className="nym-focus mt-6 inline-flex shrink-0 text-sm font-medium text-nym-primary hover:underline md:mt-0"
            >
              {readWorkflowLabel}
            </Link>
          </article>
        </ScrollReveal>

        <p className="mt-6 text-center">
          <Link
            href={customersHref}
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            {seeAllWorkflowsLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
