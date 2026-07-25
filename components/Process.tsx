import { process } from "@/lib/content";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

export function Process() {
  return (
    <section id="process" className="relative bg-cream-dim py-28 sm:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="05" label="What happens after you join" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl">
            Eight steps. Zero guesswork.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {process.map((p) => (
            <StaggerItem key={p.step}>
              <div className="group grid grid-cols-1 gap-3 py-8 transition-all duration-500 ease-cinematic hover:pl-2 sm:grid-cols-[80px_1fr_2fr] sm:items-baseline sm:gap-8">
                <span className="font-display text-3xl font-medium text-gold-deep transition-colors duration-500 group-hover:text-gold">
                  {p.step}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-stone sm:max-w-md">
                  {p.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
