"use client";

export default function SiteFooter() {
  return (
    <footer
      className="relative py-20 overflow-hidden"
      style={{ borderTop: "1px solid rgba(0,180,216,0.12)", background: "#0A1128" }}
    >
      {/* Ambient ocean glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(31,64,150,0.18)" }} />
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(0,180,216,0.10)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] mb-5" style={{ color: "rgba(230,238,250,0.9)" }}>
              ОКЕАН ОЩУЩЕНИЙ
            </p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(230,238,250,0.4)" }}>
              Сообщество телесных практиков. Пространство живого контакта с собой — для замедления, расслабления и внимания к своим чувствам.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,180,216,0.35), transparent)" }} />
              <span className="text-xs" style={{ color: "rgba(0,180,216,0.4)" }}>✦</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.5)" }}>Навигация</p>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#philosophy", label: "О пространстве" },
                { href: "#masters", label: "Мастера" },
                { href: "#events", label: "Услуги" },
                { href: "#contacts", label: "Контакты" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="transition-colors duration-300"
                    style={{ color: "rgba(230,238,250,0.4)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.8)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.4)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.5)" }}>Связь</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#contacts" className="transition-colors duration-300" style={{ color: "rgba(230,238,250,0.4)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.8)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.4)")}>
                  Оставить запрос
                </a>
              </li>
              <li>
                <a href="https://t.me/" className="transition-colors duration-300" style={{ color: "rgba(230,238,250,0.4)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.8)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.4)")}>
                  Telegram
                </a>
              </li>
            </ul>

            <div
              className="mt-8 p-4 rounded-2xl"
              style={{ border: "1px solid rgba(0,180,216,0.10)", background: "rgba(31,64,150,0.06)" }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "rgba(230,238,250,0.3)" }}>
                Безопасное пространство для работы с телом и сознанием. Конфиденциальность гарантирована.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(0,180,216,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(230,238,250,0.25)" }}>© 2025 Океан ощущений. Все права защищены.</p>
          <a href="/privacy" className="text-xs transition-colors duration-300" style={{ color: "rgba(230,238,250,0.2)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.5)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.2)")}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
