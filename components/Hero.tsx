"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import { KineticLine } from "./ui/KineticLine";
import { ParticleField } from "./ui/ParticleField";
import { useMouseParallax } from "./ui/useMouseParallax";

export function Hero() {
  const { ref: parallaxRef, values } = useMouseParallax(16);

  return (
    <section
      id="top"
      ref={parallaxRef}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink pt-28 text-cream"
    >
      {/* Cinematic ambient light — two very slow drifting gold glows,
          replacing the previous single static blur circle. Decorative
          only, same visual "feel" and position as before, now alive. */}
      <motion.div
        aria-hidden
        style={{ x: values.x, y: values.y }}
        className="ambient-glow -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 animate-drift bg-gold/10"
      />
      <div
        aria-hidden
        className="ambient-glow bottom-[-20%] right-[-10%] h-[45vh] w-[45vh] animate-drift-reverse bg-gold/[0.06]"
      />

      <ParticleField count={30} />
      <div className="grain-overlay" />
      <div className="grain-overlay-fine animate-grain" />

      <motion.div
        style={{ x: values.x, y: values.y }}
        className="wrap relative flex flex-1 flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="eyebrow-on-dark">{brand.name}</span>
          <span className="h-px w-8 bg-cream/25" />
          <span className="eyebrow-on-dark">
            Since {brand.since} · {brand.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[19ch] font-display text-[13vw] font-medium leading-[0.98] tracking-[-0.02em] sm:text-[9vw] lg:text-[6.4vw]"
        >
          <KineticLine text="Communities are more" delay={0.15} />
          <KineticLine text="powerful than" delay={0.15} />
          <span className="relative inline-block text-gold">
            <KineticLine text="advertisements." delay={0.15} />
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.25] }}
              transition={{ duration: 2.4, delay: 1.1, ease: "easeOut" }}
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 rounded-[100%] bg-gold/20 blur-3xl"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md font-body text-base text-stone-light/95 sm:text-lg"
        >
          AdverMedia is a student-powered creator community, not another
          marketing agency — built by three students who believe local
          business growth should come from real people, not campaigns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#story" className="btn-primary">
            Hear how it started
          </a>
          <a href="#offer" className="btn-ghost-on-dark">
            See the package
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="wrap relative flex items-center justify-between pb-8 pt-10"
      >
        <span className="eyebrow-on-dark">A movement, not a media buy</span>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
          />
          <span className="eyebrow-on-dark">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
