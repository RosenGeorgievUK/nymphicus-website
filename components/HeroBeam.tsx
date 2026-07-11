export function HeroBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-beam absolute left-1/2 top-0 h-[70%] w-px -translate-x-1/2 motion-safe:animate-beam-pulse" />
      <div className="hero-beam-glow absolute left-1/2 top-0 h-[55%] w-32 -translate-x-1/2 motion-safe:animate-beam-pulse" />
      <div className="hero-beam-fog absolute left-1/2 top-[12%] h-64 w-96 -translate-x-1/2 rounded-full motion-safe:animate-beam-drift" />
    </div>
  );
}
