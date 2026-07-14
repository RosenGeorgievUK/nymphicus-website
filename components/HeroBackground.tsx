type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden>
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute -left-40 top-24 h-64 w-64 rounded-full bg-nym-primary/10 blur-[72px] motion-safe:md:h-80 motion-safe:md:w-80 motion-safe:md:bg-nym-primary/12 motion-safe:md:blur-[100px] motion-safe:md:animate-float-slow" />
      <div className="absolute -right-24 top-48 h-56 w-56 rounded-full bg-nym-secondary/8 blur-[64px] motion-safe:md:h-72 motion-safe:md:w-72 motion-safe:md:bg-nym-secondary/10 motion-safe:md:blur-[90px] motion-safe:md:animate-float-slower" />
      <div className="hero-grain absolute inset-0 opacity-15 md:opacity-20" />
    </div>
  );
}
