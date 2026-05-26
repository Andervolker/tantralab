export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 py-20 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-900/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] text-white/85 mb-5">ВАЛЕРИЯ</p>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Проводник в мир сакрального контакта и телесной глубины. Тантра, массаж, дыхательные практики, Шамбала.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
              <span className="text-purple-400/40 text-xs">✦</span>
            </div>
          </div>

          {/* Practices */}
          <div>
            <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-5">Практики</p>
            <ul className="space-y-3 text-white/35 text-sm">
              {[
                { href: "#programs", label: "Тантра" },
                { href: "#programs", label: "Шамбала" },
                { href: "#programs", label: "Тантра для пар" },
                { href: "#events", label: "Дыхательные практики" },
                { href: "#events", label: "Групповые мероприятия" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white/70 transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-5">Контакт</p>
            <ul className="space-y-3 text-white/35 text-sm">
              <li>
                <a href="#contact" className="hover:text-white/70 transition-colors duration-300">
                  Записаться на сессию
                </a>
              </li>
              <li>
                <a href="https://t.me/" className="hover:text-white/70 transition-colors duration-300">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/70 transition-colors duration-300">
                  WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-white/25 text-xs leading-relaxed">
                Безопасное пространство для работы с телом и сознанием.
                Конфиденциальность гарантирована.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2025 Валерия. Все права защищены.</p>
          <p className="text-white/15 text-xs">Пространство для работы с телом и сознанием</p>
        </div>
      </div>
    </footer>
  );
}
