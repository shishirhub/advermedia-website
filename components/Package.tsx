import { pricing, audiences } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { ParticleField } from "./ui/ParticleField";

const included = [
  "Business & market analysis before every campaign",
  "Store visit and professional content shoot",
  "Creative editing, branding and campaign assets",
  "Hand-picked influencer selection from the community",
  "Full campaign launch and active management",
  "Detailed performance report at the end",
];

export function Package() {
  return (
    <section id="offer" className="relative overflow-hidden bg-cream py-28 sm:py-36">
      <ParticleField count={16} color="166, 119, 31" className="opacity-60" />

      <div className="wrap relative">
        <Reveal>
          <SectionLabel index="04" label="The package" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl">
              One package.
              <br />
              Built to join the first wave.
            </h2>
            <p className="mt-6 max-w-md font-body text-stone">
              No confusing tiers, no upsell ladder. Just everything a local
              business needs to become part of the movement — priced for the
              businesses building Hyderabad&rsquo;s next generation of local
              awareness with us, early.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-ink/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide text-stone transition-colors duration-300 hover:border-gold/50 hover:text-gold-deep"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card-sheen group relative overflow-hidden rounded-[28px] bg-ink p-9 text-cream shadow-[0_30px_80px_-30px_rgba(21,19,15,0.5)] transition-transform duration-500 ease-cinematic hover:-translate-y-1 sm:p-12">
              <span aria-hidden className="gold-frame-glow rounded-[28px]" />
              <div className="grain-overlay" />
              <div
                aria-hidden
                className="ambient-glow -right-1/4 -top-1/4 h-[60%] w-[60%] animate-drift bg-gold/[0.09]"
              />
              <div className="relative z-[2]">
                <span className="eyebrow-on-dark">Founding-wave offer</span>

                <div className="mt-6 flex items-end gap-4">
                  <span className="font-display text-2xl text-stone-light line-through decoration-2">
                    {pricing.originalPrice}
                  </span>
                  <span className="relative font-display text-6xl font-medium tracking-[-0.02em] text-gold sm:text-7xl">
                    {pricing.offerPrice}
                  </span>
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-stone-light/85">
                  {pricing.note}
                </p>

                <ul className="mt-9 flex flex-col gap-3.5 border-t border-cream/10 pt-8">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="group/item flex items-start gap-3 font-body text-sm text-stone-light transition-colors duration-300 hover:text-cream"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_0_0_rgba(223,174,63,0.5)] transition-shadow duration-300 group-hover/item:shadow-[0_0_10px_2px_rgba(223,174,63,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#join" className="btn-primary mt-10 w-full">
                  Join the first wave
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
