const stats = [
  { value: "5+", label: "лет в телесной\nтерапии" },
  { value: "1500+", label: "проведённых\nсессий" },
  { value: "3", label: "сертифицированных\nмастера" },
  { value: "100%", label: "безопасное\nпространство" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient band */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-violet-950/10 to-fuchsia-950/20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-4 transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 60%, #e879f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <p className="text-white/40 text-sm leading-snug whitespace-pre-line font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
