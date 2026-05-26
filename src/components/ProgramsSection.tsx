"use client";
import { motion } from "framer-motion";
import DecorativeLines from "@/components/DecorativeLines";

const programs = [
  {
    symbol: "◈",
    title: "Тантра",
    subtitle: "Индивидуальные сессии",
    description:
      "Путешествие в глубину тела через осознанное прикосновение, дыхание и присутствие. Работа с зажимами, восстановление чувствительности — слой за слоем.",
    tags: ["Индивидуально", "Для пар (соло)"],
    accentColor: "#a855f7",
    glowHover: "rgba(168,85,247,0.22)",
    borderColor: "rgba(168,85,247,0.22)",
    symbolGrad: "linear-gradient(135deg, #e9d5ff, #c084fc)",
  },
  {
    symbol: "◎",
    title: "Шамбала",
    subtitle: "Сессия в 4 руки",
    description:
      "Уникальный формат с двумя мастерами одновременно — для обхода ментального контроля. Когда двое ведут тебя в расслабление, разуму некуда бежать.",
    tags: ["Дуэт мастеров", "Глубокое расслабление"],
    accentColor: "#c084fc",
    glowHover: "rgba(192,132,252,0.22)",
    borderColor: "rgba(192,132,252,0.22)",
    symbolGrad: "linear-gradient(135deg, #f3e8ff, #d8b4fe)",
  },
  {
    symbol: "∞",
    title: "Тантра для пар",
    subtitle: "Совместные практики",
    description:
      "Практики для двоих — возрождение чувствительности, доверия и глубины контакта между партнёрами. Работа с телом и пространством между вами.",
    tags: ["Для пар", "Соло или дуэт"],
    accentColor: "#e879f9",
    glowHover: "rgba(232,121,249,0.2)",
    borderColor: "rgba(232,121,249,0.2)",
    symbolGrad: "linear-gradient(135deg, #fae8ff, #e879f9)",
  },
];

export default function ProgramsSection() {
  return (
    <>
      {/* ── Inter-section glow divider ── */}
      <div className="relative h-px overflow-visible">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-24 w-[500px] h-[200px] rounded-full blur-[120px] pointer-events-none glow-slow"
          style={{ background: "rgba(139,92,246,0.18)" }}
        />
        <div
          className="absolute inset-x-[20%] top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }}
        />
      </div>

      <section
        id="programs"
        className="relative py-28 md:py-40 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0b0f19 0%, #08091c 45%, #0b0f19 100%)" }}
      >
        <div
          className="blob-4 absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: "rgba(79,70,229,0.13)" }}
        />
        <div
          className="blob-3 absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: "rgba(168,85,247,0.10)" }}
        />
        <DecorativeLines variant="cross" opacity={0.5} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-purple-400/55 text-xs tracking-[0.45em] uppercase mb-4">Программы</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white/85 leading-tight">
              Три основные практики
            </h2>
            <p className="text-white/30 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Каждая программа — отдельный мир. Подбирайте вместе с мастером.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl overflow-hidden cursor-default transition-shadow duration-400"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(30,27,60,0.75) 0%, rgba(20,15,45,0.9) 100%)",
                  border: `1px solid ${p.borderColor}`,
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.5)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 0 1px ${p.borderColor}, 0 12px 48px rgba(0,0,0,0.55), 0 0 40px -8px ${p.glowHover}, inset 0 0 40px -20px ${p.glowHover}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.5)`;
                }}
              >
                {/* Top shimmer line */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.accentColor}88, transparent)`,
                  }}
                />

                {/* Hover inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 40% 0%, ${p.glowHover} 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-8 md:p-10">
                  <div
                    className="text-5xl mb-7 font-light transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: p.symbolGrad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: `drop-shadow(0 0 14px ${p.accentColor}88)`,
                    }}
                  >
                    {p.symbol}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white/92 mb-1">{p.title}</h3>
                  <p
                    className="text-xs tracking-wider uppercase mb-5"
                    style={{ color: `${p.accentColor}99` }}
                  >
                    {p.subtitle}
                  </p>
                  <p className="text-white/48 text-sm leading-relaxed mb-7">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs text-white/35"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid rgba(255,255,255,0.08)`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#masters"
                    className="inline-flex items-center gap-2 text-sm transition-colors duration-300 group/link"
                    style={{ color: `${p.accentColor}aa` }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = p.accentColor)}
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = `${p.accentColor}aa`)
                    }
                  >
                    Подробнее
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inter-section glow divider (programs → masters) ── */}
      <div className="relative h-px overflow-visible">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-20 w-[600px] h-[180px] rounded-full blur-[140px] pointer-events-none glow-pulse"
          style={{ background: "rgba(109,40,217,0.20)" }}
        />
        <div
          className="absolute inset-x-[25%] top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.35), transparent)" }}
        />
      </div>
    </>
  );
}
