import Image from "next/image";
import { brand, closingLines } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink py-12 text-cream">
      <div className="wrap flex flex-col gap-8">
        <p className="max-w-md font-display text-xl font-medium leading-snug tracking-[-0.01em]">
          {closingLines.tagline}
        </p>

        <div className="flex flex-col gap-6 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt={brand.name}
              width={28}
              height={22}
              className="h-6 w-auto transition-transform duration-500 ease-cinematic group-hover:rotate-[-8deg] group-hover:scale-110"
            />
            <span className="font-display text-sm font-semibold">
              {brand.name}
            </span>
          </a>

          <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone-light/75">
            &copy; {new Date().getFullYear()} {brand.name} · {brand.location}
          </p>

          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widest2 text-stone-light/75">
            <a href={`mailto:${brand.email}`} className="transition-colors duration-300 hover:text-gold">
              Email
            </a>
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-gold">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
