type TrustBadgesProps = {
  badges: string[];
  ariaLabel: string;
  className?: string;
};

export function TrustBadges({ badges, ariaLabel, className = "" }: TrustBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="list"
      aria-label={ariaLabel}
    >
      {badges.map((badge) => (
        <span
          key={badge}
          role="listitem"
          className="rounded-full border border-marketing-border bg-marketing-surface-elevated px-3 py-1 text-xs text-marketing-text-muted"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
