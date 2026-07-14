"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

export function useDemoPhase(maxPhase: number, intervalMs: number, active: boolean, resetKey: string) {
  const [phase, setPhase] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setPhase(reducedMotion ? Math.max(0, maxPhase - 1) : 0);
  }, [resetKey, maxPhase, reducedMotion]);

  useEffect(() => {
    if (!active || reducedMotion || maxPhase < 2) return;

    const id = window.setInterval(() => {
      setPhase((current) => (current + 1) % maxPhase);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [active, intervalMs, maxPhase, reducedMotion, resetKey]);

  return phase;
}
