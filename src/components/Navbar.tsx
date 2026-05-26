"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#philosophy", label: "Философия" },
  { href: "#programs", label: "Программы" },
  { href: "#masters", label: "Мастера" },
  { href: "#events", label: "Мероприятия" },
  { href: "#contact", label: "Контакт" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl tracking-[0.2em] text-white/90 hover:text-purple-300 transition-colors duration-300"
        >
          ВАЛЕРИЯ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white/90 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-wider uppercase border border-purple-500/40 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/60 backdrop-blur-sm transition-all duration-300"
        >
          Записаться
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mb-4 bg-[#0d1220]/98 backdrop-blur-2xl rounded-2xl border border-white/10 p-6">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center py-3 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm hover:bg-purple-500/20 transition-all"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
