import Link from "next/link";
import { McpServerIcon } from "@/components/McpServerIcon";
import {
  extraTemplateAppCount,
  iconsForTemplateApps,
} from "@/lib/template-card-icons";

type TrendingTemplateCardProps = {
  title: string;
  text: string;
  href: string;
  apps?: string[];
  iconSlugs?: string[];
  category: string;
};

function TrendingTemplateIcon({ src, alt, slug }: { src: string; alt: string; slug: string }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm">
      <McpServerIcon src={src} alt={alt} slug={slug} className="h-5 w-5" />
    </div>
  );
}

export function TrendingTemplateCard({
  title,
  text,
  href,
  apps = [],
  iconSlugs = [],
  category,
}: TrendingTemplateCardProps) {
  const icons = iconsForTemplateApps(apps, iconSlugs);
  const extraCount = extraTemplateAppCount(apps, icons.length);

  return (
    <Link
      href={href}
      className="nym-focus group flex min-h-[168px] flex-col justify-between rounded-nym border border-marketing-border bg-marketing-surface p-5 shadow-nym transition-colors hover:border-nym-primary/35 md:min-h-[176px] md:p-6"
    >
      <div>
        <p className="text-sm font-semibold text-marketing-text">{title}</p>
        <p className="mt-2 text-sm font-normal leading-snug text-marketing-text-muted">
          {text}
        </p>
      </div>

      <div className="mt-6 flex items-end justify-between gap-3">
        <div className="flex items-center gap-1.5">
          {icons.map((icon) => (
            <TrendingTemplateIcon key={icon.slug} src={icon.iconUrl} alt={icon.name} slug={icon.slug} />
          ))}
          {extraCount > 0 && (
            <span className="flex h-8 min-w-8 items-center justify-center rounded-nym border border-marketing-border bg-marketing-bg px-2 text-xs font-medium text-marketing-text-muted">
              +{extraCount}
            </span>
          )}
        </div>

        <span className="shrink-0 rounded-full border border-marketing-border bg-marketing-bg px-2.5 py-1 text-[10px] font-medium text-marketing-text-muted">
          {category}
        </span>
      </div>
    </Link>
  );
}
