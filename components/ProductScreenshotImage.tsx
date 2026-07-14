import {
  screenshotDimensions,
  screenshotPath,
  type ScreenshotKey,
} from "@/lib/screenshots";

type ProductScreenshotImageProps = {
  screenshot: ScreenshotKey;
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

/** Optimized product screenshot — server-rendered with native lazy loading. */
export function ProductScreenshotImage({
  screenshot,
  alt,
  className = "h-auto w-full",
  priority = false,
  loading,
}: ProductScreenshotImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={screenshotPath(screenshot)}
      alt={alt}
      width={screenshotDimensions.width}
      height={screenshotDimensions.height}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
      className={className}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
