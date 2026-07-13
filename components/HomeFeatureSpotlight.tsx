import Link from "next/link";
import { ProductPreviewContent } from "@/components/ProductPreviewContent";
import { ProductInteractivePreview } from "@/components/ProductInteractivePreview";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { ScreenshotKey } from "@/lib/screenshots";

type SpotlightItem = {
  title: string;
  bullets: string[];
  href: string;
  label: string;
};

type HomeFeatureSpotlightProps = {
  items: SpotlightItem[];
  screenshots: ScreenshotKey[];
  localizeHref: (href: string) => string;
};

export function HomeFeatureSpotlight({
  items,
  screenshots,
  localizeHref,
}: HomeFeatureSpotlightProps) {
  return (
    <section className="border-t border-marketing-border py-16 md:py-20" aria-labelledby="spotlights-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <h2 id="spotlights-heading" className="sr-only">
          Product capabilities
        </h2>

        <div className="space-y-6 md:space-y-8">
          {items.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <article className="spotlight-card relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface/25 p-6 md:p-8 lg:p-10">
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className={reverse ? "lg:order-2" : ""}>
                      <h3 className="text-section-title font-semibold text-marketing-text">
                        {item.title}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm leading-relaxed text-marketing-text-muted md:text-base"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-nym-primary to-nym-secondary"
                              aria-hidden
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={localizeHref(item.href)}
                        className="nym-focus mt-6 inline-flex text-sm font-medium text-nym-primary hover:underline"
                      >
                        {item.label} →
                      </Link>
                    </div>

                    <div className={reverse ? "lg:order-1" : ""}>
                      <ProductInteractivePreview
                        screenshot={screenshots[index] ?? "dashboard"}
                        alt={item.title}
                        glow
                      >
                        <ProductPreviewContent
                          screenshot={screenshots[index] ?? "dashboard"}
                          alt={item.title}
                        />
                      </ProductInteractivePreview>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
