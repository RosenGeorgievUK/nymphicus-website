import { ScrollReveal } from "@/components/ScrollReveal";
import { PageSection } from "@/components/PageSection";
import { SectionHeading } from "@/components/SectionHeading";
import { integrationBrands } from "@/lib/integration-brands";

type IntegrationGridProps = {
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
};

function BrandTile({ abbr, color, name }: { abbr: string; color: string; name: string }) {
  return (
    <div
      className="flex h-14 min-w-[3.5rem] items-center justify-center rounded-xl border border-marketing-border/80 bg-marketing-surface/50 px-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-nym-primary/30 hover:shadow-lg hover:shadow-nym-primary/10 md:h-16"
      title={name}
    >
      <span className="text-sm font-bold md:text-base" style={{ color }} aria-hidden>
        {abbr}
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function IntegrationGrid({ title, subtitle, footer }: IntegrationGridProps) {
  return (
    <PageSection className="bg-marketing-surface/30" ariaLabelledBy="integrations-grid-heading">
      <ScrollReveal>
        <SectionHeading
          id="integrations-grid-heading"
          title={title}
          subtitle={subtitle}
          align="center"
        />
      </ScrollReveal>

      <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
        {integrationBrands.map((brand) => (
          <BrandTile key={brand.name} abbr={brand.abbr} color={brand.color} name={brand.name} />
        ))}
      </div>

      {footer && <div className="mt-12 text-center text-sm text-marketing-text-muted">{footer}</div>}
    </PageSection>
  );
}
