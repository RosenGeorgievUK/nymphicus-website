"use client";

import { useEffect, useRef, useState } from "react";

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
  const wasActive = useRef(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setStep(Math.max(0, stepCount - 1));
      return;
    }
    setStep(0);
  }, [resetKey, stepCount, reducedMotion]);

  useEffect(() => {
    if (!active || reducedMotion || stepCount < 2) {
      wasActive.current = false;
      return;
    }

    const justActivated = !wasActive.current;
    wasActive.current = true;

    let cancelled = false;
    let current = 0;
    let timer: ReturnType<typeof setTimeout>;

    const schedule = (delay: number, fn: () => void) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    if (justActivated) {
      current = 0;
      setStep(0);
    }

    const tick = () => {
      if (current < stepCount - 1) {
        current += 1;
        setStep(current);
        schedule(stepMs, tick);
      } else {
        schedule(pauseMs, () => {
          if (cancelled) return;
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
