"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#community", label: "Community" },
  { href: "#offer", label: "Package" },
  { href: "#join", label: "Join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <nav
        className={`wrap flex items-center justify-between transition-[padding] duration-500 ease-cinematic ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="AdverMedia"
            width={36}
            height={29}
            className="h-8 w-auto transition-transform duration-500 ease-cinematic group-hover:rotate-[-6deg] group-hover:scale-110"
            priority
          />
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
            AdverMedia
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-body text-[13.5px] font-medium text-charcoal/80 transition-colors duration-300 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#join" className="hidden md:inline-flex btn-primary !px-6 !py-2.5 !text-[13px]">
          Join the Movement
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ease-cinematic ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ease-cinematic ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="nav-glass border-t border-ink/10 md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-body text-[15px] font-medium text-charcoal transition-colors duration-300 hover:text-gold-deep"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Join the Movement
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
