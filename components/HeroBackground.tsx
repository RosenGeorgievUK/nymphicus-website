type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden>
      <div className="hero-mesh absolute inset-0" />
    </div>
  );
}
