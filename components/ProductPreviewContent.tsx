import { ProductPreviewMock } from "@/components/ProductPreviewMock";
import { ProductScreenshotImage } from "@/components/ProductScreenshotImage";
import type { ScreenshotKey } from "@/lib/screenshots";

/** MCP registry uses the live icon mock; other views prefer screenshots when available. */
export function ProductPreviewContent({
  screenshot,
  alt,
}: {
  screenshot: ScreenshotKey;
  alt: string;
}) {
  if (screenshot === "mcpRegistry") {
    return <ProductPreviewMock variant="mcpRegistry" />;
  }
  return <ProductScreenshotImage screenshot={screenshot} alt={alt} />;
}
