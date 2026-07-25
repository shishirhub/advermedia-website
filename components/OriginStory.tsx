"use client";

import { motion } from "framer-motion";
import { originStory, foundersNote } from "@/lib/content";
import { KineticLine } from "./ui/KineticLine";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { ParticleField } from "./ui/ParticleField";

export function OriginStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <div
        aria-hidden
        className="ambient-glow left-[-10%] top-[10%] h-[50vh] w-[50vh] animate-drift bg-gold/[0.05]"
      />
      <div
        aria-hidden
        className="ambient-glow bottom-[5%] right-[-10%] h-[40vh] w-[40vh] animate-drift-reverse bg-gold/[0.04]"
      />
      <ParticleField count={22} />
      <div className="grain-overlay" />

      <div className="wrap relative">
        <Reveal>
          <SectionLabel index="01" label={originStory.eyebrow} onDark />
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:mt-24 sm:gap-24">
          {originStory.beats.map((beat, i) => (
            <div
              key={beat.label}
              className="group relative grid grid-cols-1 gap-4 border-t border-cream/10 pt-8 sm:grid-cols-[140px_1fr] sm:gap-10"
            >
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent"
              />

              <Reveal y={10} className="flex items-start gap-3 sm:block">
                <span className="font-mono text-xs text-stone-light/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
                  {beat.label}
                </span>
              </Reveal>

              <KineticLine
                text={beat.text}
                amount={0.5}
                className="max-w-[22ch] font-display text-2xl font-medium leading-[1.15] tracking-[-0.01em] sm:max-w-3xl sm:text-4xl lg:text-[2.75rem]"
              />
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="relative mt-24 border-t border-cream/10 pt-14 sm:mt-32">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/80">
            {foundersNote}
          </p>
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 max-w-3xl font-display text-3xl font-medium leading-tight tracking-[-0.01em] text-gold sm:text-5xl"
          >
            <motion.span
              aria-hidden
              initial={{ opacity: 0.15 }}
              whileInView={{ opacity: [0.15, 0.4, 0.15] }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.4, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[100%] bg-gold/10 blur-3xl"
            />
            &ldquo;{originStory.vision}&rdquo;
          </motion.blockquote>
        </Reveal>
      </div>
    </section>
  );
}
