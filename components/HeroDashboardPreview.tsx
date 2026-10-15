import { HeroPlatformDashboard } from "@/components/HeroPlatformDashboard";

type HeroDashboardPreviewProps = {
  alt: string;
  className?: string;
};

/** Homepage hero — live HTML/JS replica of the platform dashboard (not a screenshot). */
export function HeroDashboardPreview({ alt, className = "" }: HeroDashboardPreviewProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-nym border border-marketing-border bg-marketing-surface shadow-nym ${className}`}
      role="img"
      aria-label={alt}
    >
      <HeroPlatformDashboard />
    </div>
  );
}
