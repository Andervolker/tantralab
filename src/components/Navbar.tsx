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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(11,15,25,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
            }
          : {
              background: "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              borderBottom: "1px solid transparent",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl tracking-[0.2em] text-white/88 hover:text-purple-300 transition-colors duration-300"
          style={{ textShadow: scrolled ? "0 0 20px rgba(168,85,247,0.3)" : "none" }}
        >
          ВАЛЕРИЯ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.15em] uppercase text-white/48 hover:text-white/90 transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.04]"
          style={{
            background: "rgba(109,40,217,0.15)",
            border: "1px solid rgba(168,85,247,0.35)",
            color: "rgba(216,180,254,0.85)",
            boxShadow: "0 0 16px -4px rgba(168,85,247,0.25)",
          }}
        >
          Записаться
        </a>

        {/* Mobile */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-white/65 hover:text-white transition-colors"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden mx-4 mb-4 rounded-2xl p-6"
          style={{
            background: "rgba(11,15,25,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/58 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center py-3 rounded-full text-sm text-purple-300 transition-all"
              style={{
                background: "rgba(109,40,217,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
