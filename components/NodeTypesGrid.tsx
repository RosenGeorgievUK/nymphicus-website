import type { ReactNode } from "react";
import { PageSection } from "@/components/PageSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { nodeTypeCategories } from "@/lib/node-types";

type NodeTypesGridProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
};

export function NodeTypesGrid({ eyebrow, title, subtitle }: NodeTypesGridProps) {
  return (
    <PageSection ariaLabelledBy="nodes-heading">
      <ScrollReveal>
        <SectionHeading
          id="nodes-heading"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {nodeTypeCategories.map((group) => (
          <ScrollReveal key={group.category}>
            <article className="surface-card h-full p-6 md:p-8">
              <h3 className="text-lg font-semibold text-marketing-text">{group.category}</h3>
              <p className="mt-2 text-sm text-marketing-text-muted md:text-base">{group.description}</p>
              <ul className="mt-5 space-y-3">
                {group.nodes.map((node) => (
                  <li
                    key={node.name}
                    className="flex items-start gap-3 rounded-nym border border-marketing-border/60 bg-marketing-surface-elevated/80 px-3 py-2.5"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-nym-primary to-nym-secondary" />
                    <div>
                      <p className="text-sm font-medium text-marketing-text">{node.name}</p>
                      <p className="text-xs text-marketing-text-muted md:text-sm">{node.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </PageSection>
  );
}
