import { services, differentiators } from "@/lib/content";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const featuredDifferentiators = differentiators.filter((d) =>
  ["Student Creator Network", "Data-Driven Strategies", "Affordable Pricing", "AI-Powered Workflows"].includes(
    d.title
  )
);

export function Offerings() {
  return (
    <section id="offerings" className="relative bg-cream-dim py-28 sm:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="03" label="What joining gets you" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl">
            Not a service menu.
            <br />A community working for your business.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem
              key={s.title}
              className="group relative z-0 bg-cream-dim p-7 transition-all duration-500 ease-cinematic hover:z-10 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_24px_50px_-24px_rgba(21,19,15,0.35)]"
            >
              <span className="font-mono text-xs text-gold-deep transition-all duration-500 group-hover:text-gold group-hover:drop-shadow-[0_0_6px_rgba(223,174,63,0.5)]">
                {String(services.indexOf(s) + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-2.5 font-body text-[13.5px] leading-relaxed text-stone">
                {s.text}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-16 flex flex-wrap gap-3">
          {featuredDifferentiators.map((d) => (
            <Reveal key={d.title} y={12}>
              <span className="inline-flex items-center rounded-full border border-ink/12 bg-cream px-5 py-2.5 font-body text-[13px] font-medium text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_10px_24px_-14px_rgba(223,174,63,0.5)]">
                {d.title}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
