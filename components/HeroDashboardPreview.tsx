import { HeroPlatformDashboard } from "@/components/HeroPlatformDashboard";

type HeroDashboardPreviewProps = {
  alt: string;
  className?: string;
};

/** Homepage hero — live HTML/JS replica of the platform dashboard (not a screenshot). */
export function HeroDashboardPreview({ alt, className = "" }: HeroDashboardPreviewProps) {
  return (
    <div
      className={`group relative browser-glow ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="relative overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface shadow-2xl transition-transform duration-500 motion-safe:group-hover:scale-[1.01]">
        <HeroPlatformDashboard />
      </div>
    </div>
  );
}
