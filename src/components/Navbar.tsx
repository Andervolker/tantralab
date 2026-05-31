"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#", label: "Главная" },
  { href: "#philosophy", label: "О пространстве" },
  { href: "#masters", label: "Мастера" },
  { href: "#events", label: "Услуги" },
  { href: "#contacts", label: "Контакты" },
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
              background: "rgba(10,17,40,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(31,64,150,0.25)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.45)",
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
        {/* Brand */}
        <a
          href="#"
          className="font-serif tracking-[0.18em] transition-colors duration-300"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            color: scrolled ? "rgba(230,238,250,0.95)" : "rgba(255,255,255,0.92)",
            textShadow: scrolled ? "0 0 24px rgba(0,180,216,0.35)" : "none",
            letterSpacing: "0.2em",
          }}
        >
          ОКЕАН ОЩУЩЕНИЙ
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.18em] uppercase transition-all duration-300"
              style={{ color: "rgba(230,238,250,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.95)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.5)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacts"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.04]"
          style={{
            background: "rgba(31,64,150,0.22)",
            border: "1px solid rgba(0,180,216,0.35)",
            color: "rgba(230,238,250,0.88)",
            boxShadow: "0 0 18px -4px rgba(0,180,216,0.25)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(31,64,150,0.38)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px -4px rgba(0,180,216,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(31,64,150,0.22)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px -4px rgba(0,180,216,0.25)";
          }}
        >
          Записаться
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors"
          style={{
            background: "rgba(31,64,150,0.15)",
            border: "1px solid rgba(0,180,216,0.2)",
            color: "rgba(230,238,250,0.7)",
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
            background: "rgba(10,17,40,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(31,64,150,0.25)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm transition-colors"
                style={{ color: "rgba(230,238,250,0.6)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 text-center py-3 rounded-full text-sm transition-all"
              style={{
                background: "rgba(31,64,150,0.22)",
                border: "1px solid rgba(0,180,216,0.3)",
                color: "rgba(230,238,250,0.9)",
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
