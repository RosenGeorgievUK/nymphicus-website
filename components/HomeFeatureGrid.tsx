import Link from "next/link";
import { ProductPreviewFrame } from "@/components/ProductPreviewFrame";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { bentoScreenshotForItem } from "@/lib/view-helpers";

type FeatureGridItem = {
  title: string;
  description: string;
  href: string;
};

type HomeFeatureGridProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FeatureGridItem[];
  localizeHref: (href: string) => string;
};

export function HomeFeatureGrid({
  eyebrow,
  title,
  subtitle,
  items,
  localizeHref,
}: HomeFeatureGridProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="feature-grid-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="feature-grid-heading"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80}>
              <Link
                href={localizeHref(item.href)}
                className="nym-focus group flex h-full flex-col overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface/30 transition-all hover:border-nym-primary/35 hover:shadow-xl hover:shadow-nym-primary/10"
              >
                <div className="overflow-hidden border-b border-marketing-border/60">
                  <ProductPreviewFrame
                    screenshot={bentoScreenshotForItem(item.href, index)}
                    alt={item.title}
                    glow={false}
                    chrome={false}
                    className="transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-marketing-text group-hover:text-nym-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-marketing-text-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
