"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { brand } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { ParticleField } from "./ui/ParticleField";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const business = String(form.get("business") ?? "");
    const contact = String(form.get("contact") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Join the movement — ${business || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nBusiness: ${business}\nPhone / Email: ${contact}\n\n${message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="join" className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <ParticleField count={24} />
      <div className="grain-overlay" />
      <div
        aria-hidden
        className="ambient-glow -bottom-1/3 right-0 h-[60vh] w-[60vh] animate-drift bg-gold/10"
      />
      <div
        aria-hidden
        className="ambient-glow -top-1/4 left-[-10%] h-[35vh] w-[35vh] animate-drift-reverse bg-gold/[0.05]"
      />

      <div className="wrap relative">
        <Reveal>
          <SectionLabel index="06" label="Join the movement" onDark />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-6xl">
                Your business doesn&rsquo;t need another ad.
                <br />
                It needs a community.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md font-body text-stone-light/95">
                Tell us about your business and we&rsquo;ll reach out to start
                the onboarding conversation — no pressure, just a real
                conversation about whether we&rsquo;re a fit.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-12 flex flex-col gap-5">
              <a
                href={`mailto:${brand.email}`}
                className="group relative flex items-center justify-between overflow-hidden border-b border-cream/15 pb-4 font-body text-lg transition-colors duration-300 hover:border-gold/40 hover:text-gold"
              >
                {brand.email}
                <span className="font-mono text-xs text-stone-light/75 transition-colors group-hover:text-gold">
                  EMAIL
                </span>
              </a>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between overflow-hidden border-b border-cream/15 pb-4 font-body text-lg transition-colors duration-300 hover:border-gold/40 hover:text-gold"
              >
                {brand.instagramHandle}
                <span className="font-mono text-xs text-stone-light/75 transition-colors group-hover:text-gold">
                  INSTAGRAM
                </span>
              </a>
              <div className="flex items-center justify-between pb-4 font-body text-lg">
                {brand.location}
                <span className="font-mono text-xs text-stone-light/75">BASED IN</span>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="mt-10 flex items-center gap-4">
              <div className="group relative h-20 w-20 overflow-hidden rounded-xl bg-cream shadow-[0_0_0_1px_rgba(223,174,63,0.15)] transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(223,174,63,0.4),0_0_30px_-6px_rgba(223,174,63,0.5)] sm:h-24 sm:w-24">
                <Image
                  src="/images/instagram-qr.jpg"
                  alt="Scan to visit AdverMedia on Instagram"
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/75">
                Scan to follow the
                <br />
                community on Instagram
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="card-sheen relative rounded-[28px] border border-cream/12 bg-ink-soft p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] transition-shadow duration-500 hover:border-cream/20 sm:p-10"
            >
              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/80">
                    Your name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream outline-none transition-all duration-300 placeholder:text-stone-light/40 focus:border-gold focus:bg-cream/[0.03]"
                    placeholder="Full name"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/80">
                    Business name
                  </span>
                  <input
                    required
                    name="business"
                    type="text"
                    className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream outline-none transition-all duration-300 placeholder:text-stone-light/40 focus:border-gold focus:bg-cream/[0.03]"
                    placeholder="e.g. Cafe Ombré, Jubilee Hills"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/80">
                    Phone or email
                  </span>
                  <input
                    required
                    name="contact"
                    type="text"
                    className="rounded-xl border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream outline-none transition-all duration-300 placeholder:text-stone-light/40 focus:border-gold focus:bg-cream/[0.03]"
                    placeholder="Where should we reach you?"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/80">
                    Tell us about your business
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    className="resize-none rounded-xl border border-cream/15 bg-transparent px-4 py-3 font-body text-sm text-cream outline-none transition-all duration-300 placeholder:text-stone-light/40 focus:border-gold focus:bg-cream/[0.03]"
                    placeholder="What are you hoping to grow?"
                  />
                </label>

                <button type="submit" className="btn-primary mt-2 w-full">
                  Start the conversation
                </button>

                {sent && (
                  <p className="text-center font-mono text-[11px] uppercase tracking-widest2 text-gold">
                    Opening your email app…
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
