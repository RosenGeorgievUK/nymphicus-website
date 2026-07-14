"use client";

import { useEffect, useRef, useState } from "react";

function isElementInView(element: HTMLElement, rootMargin: string) {
  const rect = element.getBoundingClientRect();
  const windowH = window.innerHeight || document.documentElement.clientHeight;

  const bottomInset = rootMargin.includes("-")
    ? Math.abs(parseFloat(rootMargin.split(" ")[2] ?? "0") / 100) * windowH
    : 0;

  const visibleTop = rect.top < windowH - bottomInset;
  const visibleBottom = rect.bottom > windowH * 0.12;
  return visibleTop && visibleBottom && rect.height > 0;
}

export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let mounted = true;
    const set = (value: boolean) => {
      if (mounted) setInView(value);
    };

    const observer = new IntersectionObserver(
      ([entry]) => set(entry.isIntersecting),
      { threshold: 0.12, rootMargin },
    );

    observer.observe(element);

    const recheck = () => {
      if (element) set(isElementInView(element, rootMargin));
    };

    recheck();
    const raf = requestAnimationFrame(recheck);
    const t1 = window.setTimeout(recheck, 80);
    const t2 = window.setTimeout(recheck, 350);
    const t3 = window.setTimeout(recheck, 800);

    window.addEventListener("load", recheck);
    window.addEventListener("hashchange", recheck);
    window.addEventListener("pageshow", recheck);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("load", recheck);
      window.removeEventListener("hashchange", recheck);
      window.removeEventListener("pageshow", recheck);
      observer.disconnect();
    };
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
