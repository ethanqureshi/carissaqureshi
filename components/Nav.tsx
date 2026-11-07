"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#education", label: "Education" },
  { href: "#athletics", label: "Athletics" },
  { href: "#record", label: "Record" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const RESUME = "/Carissa-Qureshi-Resume.pdf";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-cream transition-colors duration-300 ${
        scrolled || open ? "border-navy/10" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-[1040px] items-center justify-between px-4 sm:px-8">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
          Carissa Qureshi
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-navy/70 transition-colors hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={RESUME} className="border-b border-gold pb-0.5 text-sm text-navy">
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 text-sm text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-auto w-full max-w-[1040px] border-t border-navy/10 px-4 py-2 sm:px-8 lg:hidden">
          {[...links, { href: RESUME, label: "Resume" }].map((l) => (
            <li key={l.href} className="border-b border-navy/10 last:border-b-0">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[15px] text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
