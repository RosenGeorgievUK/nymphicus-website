"use client";

import { useEffect, useState } from "react";

/**
 * Advances through demo steps sequentially (not per-frame).
 * Pauses on the final step, then restarts — keeps React updates low for smooth CSS transitions.
 */
export function useScriptedDemo(
  stepCount: number,
  stepMs: number,
  pauseMs: number,
  active: boolean,
  resetKey: string,
) {
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setStep(reducedMotion ? Math.max(0, stepCount - 1) : 0);
  }, [resetKey, stepCount, reducedMotion]);

  useEffect(() => {
    if (!active || reducedMotion || stepCount < 2) return;

    let cancelled = false;
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;

    const schedule = (delay: number, fn: () => void) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    const tick = () => {
      if (current < stepCount - 1) {
        current += 1;
        setStep(current);
        schedule(stepMs, tick);
      } else {
        schedule(pauseMs, () => {
          current = 0;
          setStep(0);
          schedule(stepMs, tick);
        });
      }
    };

    schedule(stepMs, tick);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [active, pauseMs, resetKey, reducedMotion, stepCount, stepMs]);

  return step;
}
