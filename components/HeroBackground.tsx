type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-nym-primary/20 blur-[100px] motion-safe:animate-float-slow" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-nym-secondary/15 blur-[90px] motion-safe:animate-float-slower" />
      <div className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-nym-primary/10 blur-[80px]" />
      <div className="hero-grain absolute inset-0 opacity-[0.35]" />
    </div>
  );
}
