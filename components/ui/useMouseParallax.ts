"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

type ParallaxValues = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

/**
 * Tracks pointer position within a container and exposes a very subtle,
 * spring-smoothed parallax offset. Intended for extremely small
 * movement (a handful of pixels) on decorative layers only — never on
 * copy, layout, or anything that would shift reading position.
 *
 * No-ops gracefully on touch devices and respects reduced-motion.
 */
export function useMouseParallax(strength = 14): {
  ref: React.RefObject<HTMLDivElement>;
  values: ParallaxValues;
} {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouch) return;

    function handlePointerMove(e: PointerEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      rawX.set(relX * strength);
      rawY.set(relY * strength);
    }

    function handlePointerLeave() {
      rawX.set(0);
      rawY.set(0);
    }

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [rawX, rawY, strength]);

  return { ref, values: { x, y } };
}
