import { GradientButton } from "@/components/GradientButton";
import { McpBrandTile } from "@/components/McpServerIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { mcpMarqueeServers } from "@/lib/mcp-icons";

type IntegrationMarqueeProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

function MarqueeRow() {
  const servers = [...mcpMarqueeServers, ...mcpMarqueeServers];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max gap-4 motion-safe:animate-marquee md:gap-5">
        {servers.map((server, index) => (
          <McpBrandTile
            key={`${server.slug}-${index}`}
            src={server.iconUrl}
            alt={server.name}
            slug={server.slug}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}

export function IntegrationMarquee({ title, subtitle, ctaLabel, ctaHref }: IntegrationMarqueeProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="integrations-marquee-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="integrations-marquee-heading"
              className="text-section-title font-semibold text-marketing-text"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-marketing-text-muted md:text-xl">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-marketing-bg to-transparent md:w-28"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-marketing-bg to-transparent md:w-28"
            aria-hidden
          />

          <MarqueeRow />
        </div>

        <div className="mt-10 text-center">
          <GradientButton href={ctaHref}>{ctaLabel}</GradientButton>
        </div>
      </div>
    </section>
  );
}
