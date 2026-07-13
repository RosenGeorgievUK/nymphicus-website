"use client";

import Image from "next/image";
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
};

/** Client-safe product screenshot — use inside interactive previews. */
export function ProductScreenshotImage({
  screenshot,
  alt,
  className = "h-auto w-full",
  priority = false,
}: ProductScreenshotImageProps) {
  return (
    <Image
      src={screenshotPath(screenshot)}
      alt={alt}
      width={screenshotDimensions.width}
      height={screenshotDimensions.height}
      sizes="(max-width: 1280px) 100vw, 1280px"
      className={className}
      priority={priority}
    />
  );
}
