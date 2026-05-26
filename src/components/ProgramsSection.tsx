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
    gradBorder: "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(88,28,135,0.2), rgba(139,92,246,0.08))",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    symbol: "◎",
    title: "Шамбала",
    subtitle: "Сессия в 4 руки",
    description:
      "Уникальный формат с двумя мастерами одновременно — создан специально для обхода ментального контроля. Когда двое ведут тебя в расслабление, разуму некуда бежать.",
    tags: ["Дуэт мастеров", "Глубокое расслабление"],
    gradBorder: "linear-gradient(135deg, rgba(167,139,250,0.5), rgba(109,40,217,0.2), rgba(167,139,250,0.08))",
    glow: "rgba(167,139,250,0.25)",
  },
  {
    symbol: "∞",
    title: "Тантра для пар",
    subtitle: "Совместные практики",
    description:
      "Практики для двоих — возрождение чувствительности, доверия и глубины контакта между партнёрами. Работа с телом и пространством между вами.",
    tags: ["Для пар", "Соло или дуэт"],
    gradBorder: "linear-gradient(135deg, rgba(217,70,239,0.45), rgba(139,92,246,0.2), rgba(217,70,239,0.06))",
    glow: "rgba(217,70,239,0.22)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative py-28 md:py-40 overflow-hidden">
      <div className="blob-4 absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-800/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="blob-3 absolute top-1/4 right-0 w-[300px] h-[300px] bg-fuchsia-800/8 rounded-full blur-[150px] pointer-events-none" />
      <DecorativeLines variant="cross" opacity={0.65} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">Программы</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center text-white/85 mb-5 leading-tight text-glow-sm">
            Три основные практики
          </h2>
          <p className="text-white/32 text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed">
            Каждая программа — отдельный мир. Подбирайте вместе с мастером исходя из вашего запроса.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl overflow-hidden cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(13,18,40,0.95), rgba(8,10,24,0.98))",
                padding: "1px",
                boxShadow: `0 0 0 1px rgba(139,92,246,0.1), 0 12px 40px rgba(0,0,0,0.55), 0 0 60px -25px ${p.glow}`,
              }}
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: p.gradBorder, padding: "1px" }}
              />

              <div
                className="relative rounded-[calc(1.5rem-1px)] p-8 md:p-10 h-full"
                style={{ background: "linear-gradient(160deg, rgba(13,18,40,0.97), rgba(7,9,20,0.99))" }}
              >
                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 20%, ${p.glow.replace("0.22", "0.08").replace("0.25", "0.08")} 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Symbol with glow */}
                  <div
                    className="text-5xl mb-7 font-light transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #c4b5fd, #a78bfa, #e879f9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 12px rgba(139,92,246,0.6))",
                    }}
                  >
                    {p.symbol}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-1">{p.title}</h3>
                  <p className="text-purple-400/55 text-xs tracking-wider uppercase mb-5">{p.subtitle}</p>
                  <p className="text-white/42 text-sm leading-relaxed mb-7">{p.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs border border-white/8 text-white/30"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#masters"
                    className="inline-flex items-center gap-2 text-sm text-purple-400/65 hover:text-purple-300 transition-colors duration-300 group/link"
                  >
                    Подробнее о программе
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
