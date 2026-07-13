type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden>
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-nym-primary/12 blur-[100px] motion-safe:animate-float-slow" />
      <div className="absolute -right-24 top-48 h-72 w-72 rounded-full bg-nym-secondary/10 blur-[90px] motion-safe:animate-float-slower" />
      <div className="hero-grain absolute inset-0 opacity-20" />
    </div>
  );
}
