import Image from "next/image";
import { communityImages } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { ParticleField } from "./ui/ParticleField";

function MarqueeRow({
  images,
  reverse,
  speed,
}: {
  images: string[];
  reverse?: boolean;
  speed: "marquee" | "marquee-slow";
}) {
  const loop = [...images, ...images];
  const speedClass = speed === "marquee" ? "animate-marquee" : "animate-marquee-slow";
  return (
    <div className="group/row flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 pr-4 ${speedClass} group-hover/row:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className={`relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl bg-ink/5 shadow-[0_18px_40px_-24px_rgba(21,19,15,0.35)] transition-[transform,box-shadow] duration-500 ease-cinematic hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.04] hover:shadow-[0_26px_50px_-18px_rgba(21,19,15,0.4),0_0_0_1px_rgba(223,174,63,0.35)] sm:h-80 sm:w-60 ${
              i % 2 === 0 ? "animate-float" : "animate-float-alt"
            } ${i % 3 === 0 ? "rotate-[-0.6deg]" : i % 3 === 1 ? "rotate-[0.5deg]" : "rotate-0"}`}
            aria-hidden={i >= images.length}
          >
            <Image
              src={src}
              alt={i < images.length ? "AdverMedia community creator" : ""}
              fill
              sizes="240px"
              className="object-cover grayscale-[15%] transition duration-700 hover:grayscale-0"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Community() {
  const first = communityImages.slice(0, 7);
  const second = communityImages.slice(7, 14);

  return (
    <section id="community" className="relative overflow-hidden bg-cream py-28 sm:py-36">
      <ParticleField count={20} color="166, 119, 31" className="opacity-70" />

      <div className="wrap relative">
        <Reveal>
          <SectionLabel index="02" label="The community, today" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-6xl">
              Today, we&rsquo;re building Hyderabad&rsquo;s first hyperlocal
              student creator community.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-stone max-w-md lg:ml-auto lg:text-right">
              Real students. Real cameras. Real neighborhoods. Every face in
              this community is a working creator — building opportunities to
              collaborate, innovate and grow alongside the businesses around
              them.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 flex flex-col gap-4 sm:mt-20">
        <MarqueeRow images={first} speed="marquee" />
        <MarqueeRow images={second} reverse speed="marquee-slow" />
      </div>

      <div className="wrap relative mt-14">
        <Reveal>
          <p className="max-w-xl font-body text-sm text-stone">
            This is a living, growing community, not a fixed roster — new
            student creators join AdverMedia as the movement grows across
            Hyderabad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
