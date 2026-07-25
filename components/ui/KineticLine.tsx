"use client";

import { motion } from "framer-motion";

type KineticLineProps = {
  text: string;
  className?: string;
  once?: boolean;
  amount?: number;
  staggerChildren?: number;
  delay?: number;
};

/**
 * Splits a line into words and reveals them with a soft upward
 * stagger as the passage scrolls into view. Used for the origin-story
 * "manifesto mode" passages, where the words themselves should carry
 * the pacing of the story.
 */
export function KineticLine({
  text,
  className,
  once = true,
  amount = 0.6,
  staggerChildren = 0.045,
  delay = 0,
}: KineticLineProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      <span aria-hidden="true" className="contents">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
      </span>
    </motion.span>
  );
}
