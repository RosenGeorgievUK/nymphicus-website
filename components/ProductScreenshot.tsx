import { BrowserFrame } from "@/components/BrowserFrame";
import type { ScreenshotKey } from "@/lib/screenshots";

type ProductScreenshotProps = {
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
  priority?: boolean;
  glow?: boolean;
  chrome?: boolean;
};

export function ProductScreenshot({
  screenshot,
  alt,
  className = "",
  priority = false,
  glow = true,
  chrome = true,
}: ProductScreenshotProps) {
  return (
    <BrowserFrame
      screenshot={screenshot}
      alt={alt}
      className={className}
      priority={priority}
      glow={glow}
      chrome={chrome}
    />
  );
}
