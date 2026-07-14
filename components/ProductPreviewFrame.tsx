import fs from "node:fs";
import path from "node:path";
import { PreviewFrameChrome } from "@/components/PreviewFrameChrome";
import { ProductPreviewMock } from "@/components/ProductPreviewMock";
import { ProductScreenshotImage } from "@/components/ProductScreenshotImage";
import {
  screenshots,
  type ScreenshotKey,
} from "@/lib/screenshots";
type ProductPreviewFrameProps = {
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
  glow?: boolean;
  chrome?: boolean;
};

function screenshotFileExists(key: ScreenshotKey): boolean {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "branding",
      "screenshots",
      screenshots[key],
    );
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function ScreenshotOrMock({
  screenshot,
  alt,
  className = "h-auto w-full",
}: {
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
}) {
  if (screenshotFileExists(screenshot)) {
    return (
      <ProductScreenshotImage
        screenshot={screenshot}
        alt={alt}
        className={className}
        priority={screenshot === "dashboard"}
      />
    );
  }
  return <ProductPreviewMock variant={screenshot} className={className} />;
}

/** Image or mock only — no browser chrome or outer frame. */
export function ProductScreenshot({
  screenshot,
  alt,
  className = "h-auto w-full",
}: {
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
}) {
  return <ScreenshotOrMock screenshot={screenshot} alt={alt} className={className} />;
}

/** Server-rendered preview — prefers real demo PNG, falls back to light HTML/CSS mock. */
export function ProductPreviewFrame({
  screenshot,
  alt,
  className = "",
  glow = true,
  chrome = false,
}: ProductPreviewFrameProps) {
  return (
    <div
      className={`group relative ${glow ? "browser-glow" : ""} ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-2xl [&_img]:block">
        {chrome && <PreviewFrameChrome />}
        <ScreenshotOrMock screenshot={screenshot} alt={alt} />
      </div>
    </div>
  );
}
