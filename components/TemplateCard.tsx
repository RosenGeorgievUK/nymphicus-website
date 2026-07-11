import { ProductScreenshot } from "@/components/ProductScreenshot";
import { GradientButton } from "@/components/GradientButton";
import type { ScreenshotKey } from "@/lib/screenshots";
import { platformUrls } from "@/lib/site";

type TemplateCardProps = {
  title: string;
  category: string;
  description: string;
  flow: string[];
  integrations: string[];
  screenshots: ScreenshotKey[];
  ctaLabel: string;
  className?: string;
};

export function TemplateCard({
  title,
  category,
  description,
  flow,
  integrations,
  screenshots,
  ctaLabel,
  className = "",
}: TemplateCardProps) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface transition-all hover:border-nym-primary/30 hover:shadow-xl hover:shadow-nym-primary/10 ${className}`}
    >
      <div className={screenshots.length > 1 ? "grid gap-px sm:grid-cols-2" : ""}>
        {screenshots.map((shot) => (
          <ProductScreenshot
            key={shot}
            screenshot={shot}
            alt={`${title} — Nymphicus`}
            glow={false}
            chrome={false}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-nym-primary">{category}</p>
        <h2 className="mt-2 text-xl font-semibold text-marketing-text">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-marketing-text-muted">{description}</p>

        <ol className="mt-4 space-y-1.5 text-sm text-marketing-text">
          {flow.map((step, index) => (
            <li key={step} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nym-primary-100 text-xs font-medium text-nym-primary">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-4 flex flex-wrap gap-2">
          {integrations.map((integration) => (
            <span
              key={integration}
              className="rounded-full border border-marketing-border bg-marketing-surface-elevated px-3 py-1 text-xs text-marketing-text-muted"
            >
              {integration}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <GradientButton href={platformUrls.register} className="w-full justify-center sm:w-auto">
            {ctaLabel}
          </GradientButton>
        </div>
      </div>
    </article>
  );
}
