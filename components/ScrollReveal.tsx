"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Skip animation — content visible immediately (use above the fold). */
  eager?: boolean;
};

export function ScrollReveal({ children, className = "", delay = 0, eager = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(eager);

  useEffect(() => {
    if (eager) return;

    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "80px 0px -2% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${
        inView
          ? "motion-safe:translate-y-0 motion-safe:opacity-100"
          : "motion-safe:translate-y-4 motion-safe:opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
