"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { ParticleField } from "./ui/ParticleField";

const RINGS = [1, 2, 3, 4];

export function BrandReveal() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-ink py-28 text-cream">
      <div
        aria-hidden
        className="ambient-glow left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 animate-drift bg-gold/[0.08]"
      />
      <ParticleField count={26} />
      <div className="grain-overlay" />

      {/* Aperture-ring motif, referencing the camera in the AdverMedia mark.
          The whole cluster drifts through an extremely slow full rotation —
          a near-imperceptible "lens" motion, felt more than seen. */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="relative flex h-[46vh] w-[46vh] max-h-[420px] max-w-[420px] items-center justify-center"
      >
        {RINGS.map((r, i) => {
          const size = 40 + i * 20; // percentage of container
          return (
            <motion.span
              key={r}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.16 + i * 0.05 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 1.4,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute rounded-full border border-gold"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                top: `${(100 - size) / 2}%`,
                left: `${(100 - size) / 2}%`,
              }}
            />
          );
        })}

        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gold sm:h-40 sm:w-40"
        >
          <span aria-hidden className="gold-frame-glow" />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/images/logo.png"
              alt={brand.name}
              width={200}
              height={159}
              className="h-16 w-auto sm:h-20"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <Reveal delay={0.8} className="wrap relative mt-12 text-center">
        <h2 className="font-display text-4xl font-medium tracking-[-0.01em] sm:text-6xl">
          {brand.name} was born.
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-body text-stone-light/95">
          Not to run another campaign. To prove that a real, local community
          of creators can do more for a business than an advertisement ever
          could.
        </p>
      </Reveal>
    </section>
  );
}
