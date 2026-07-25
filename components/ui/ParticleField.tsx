"use client";

import { useEffect, useRef } from "react";

type ParticleFieldProps = {
  /** Roughly how many particles to render. Kept small on purpose —
   *  this is dust, not a snowstorm. */
  count?: number;
  className?: string;
  /** RGB triplet as "r, g, b" — defaults to the AdverMedia gold. */
  color?: string;
};

type Particle = {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  phase: number;
  speed: number;
  drift: number;
};

/**
 * A near-invisible field of extremely tiny golden particles that drift
 * upward and sideways, ultra-slowly, with a gentle twinkle. Rendered on
 * <canvas> so it stays smooth at 60fps with a tiny CPU/GPU footprint
 * (small particle count, no DOM nodes, paused when off-screen or when
 * the tab is hidden, and skipped entirely for prefers-reduced-motion).
 *
 * Purely decorative — absolutely positioned, pointer-events: none —
 * so it never affects layout, spacing or content of the section it
 * sits inside.
 */
export function ParticleField({ count = 34, className = "", color = "223, 174, 63" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let frame = 0;
    let visible = true;
    let raf = 0;

    function seed() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        baseOpacity: Math.random() * 0.35 + 0.12,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.12 + 0.03,
        drift: (Math.random() - 0.5) * 0.06,
      }));
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        frame > 0 && (p.y -= p.speed);
        p.x += p.drift;

        if (p.y < -4) p.y = height + 4;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;

        const twinkle =
          p.baseOpacity + Math.sin(frame * 0.008 + p.phase) * p.baseOpacity * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${Math.max(0, twinkle)})`;
        ctx.fill();
      }

      frame++;
      raf = requestAnimationFrame(draw);
    }

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.baseOpacity * 0.6})`;
        ctx.fill();
      }
    }

    resize();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(draw);
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      visible = document.visibilityState === "visible";
      if (!prefersReducedMotion) {
        if (visible && !raf) raf = requestAnimationFrame(draw);
        if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && canvas.parentElement) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;
          if (prefersReducedMotion) return;
          if (entry.isIntersecting) {
            if (!raf) raf = requestAnimationFrame(draw);
          } else if (raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        },
        { threshold: 0 }
      );
      observer.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
