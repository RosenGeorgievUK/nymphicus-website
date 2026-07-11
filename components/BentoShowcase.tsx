import Link from "next/link";
import { ProductScreenshot } from "@/components/ProductScreenshot";
import type { ScreenshotKey } from "@/lib/screenshots";

export type BentoShowcaseItem = {
  title: string;
  description: string;
  href: string;
  screenshot: ScreenshotKey;
  span?: "large" | "default";
};

type BentoShowcaseProps = {
  items: BentoShowcaseItem[];
};

export function BentoShowcase({ items }: BentoShowcaseProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`nym-focus group overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface transition-all hover:border-nym-primary/30 hover:shadow-xl hover:shadow-nym-primary/10 ${
            item.span === "large" ? "lg:col-span-2 lg:row-span-2" : ""
          }`}
        >
          <ProductScreenshot
            screenshot={item.screenshot}
            alt={item.title}
            glow={false}
            chrome={false}
          />
          <div className="border-t border-marketing-border p-5">
            <h3 className="font-semibold text-marketing-text group-hover:text-nym-primary">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-marketing-text-muted">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
