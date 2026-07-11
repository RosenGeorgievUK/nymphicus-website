import type { ReactNode } from "react";
import { nodeTypeCategories } from "@/lib/node-types";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

type NodeTypesGridProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
};

export function NodeTypesGrid({ eyebrow, title, subtitle }: NodeTypesGridProps) {
  return (
    <section className="section-y" aria-labelledby="nodes-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="nodes-heading"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nodeTypeCategories.map((group) => (
            <ScrollReveal key={group.category}>
              <article className="h-full rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 md:p-8">
                <h3 className="text-lg font-semibold text-marketing-text">{group.category}</h3>
                <p className="mt-1 text-sm text-marketing-text-muted">{group.description}</p>
                <ul className="mt-5 space-y-3">
                  {group.nodes.map((node) => (
                    <li
                      key={node.name}
                      className="flex items-start gap-3 rounded-nym border border-marketing-border/60 bg-marketing-surface-elevated px-3 py-2.5"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nym-primary" />
                      <div>
                        <p className="text-sm font-medium text-marketing-text">{node.name}</p>
                        <p className="text-xs text-marketing-text-muted">{node.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
