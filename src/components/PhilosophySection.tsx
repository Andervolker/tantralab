"use client";
import { motion } from "framer-motion";
import DecorativeLines from "@/components/DecorativeLines";

const reasons = [
  "Тело устало от стресса и спешки.",
  "Хочется расслабления, лёгкости и удовольствия.",
  "Нужен глубокий контакт с собой или партнёром.",
  "Вы ищете вектор для внутренних перемен.",
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 20%, #101F42 50%, #0d1a3a 80%, #0A1128 100%)",
      }}
    >
      {/* Neon blob accents */}
      <div
        className="blob-2 absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "rgba(0,119,182,0.28)" }}
      />
      <div
        className="blob-1 absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(31,64,150,0.30)" }}
      />
      <div
        className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[240px] pointer-events-none"
        style={{ background: "rgba(0,180,216,0.07)" }}
      />
      {/* Subtle horizontal teal lines */}
      <div className="absolute top-[30%] inset-x-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.08), transparent)" }} />
      <div className="absolute top-[70%] inset-x-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(31,64,150,0.10), transparent)" }} />

      <DecorativeLines variant="diagonal" opacity={0.4} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs tracking-[0.45em] uppercase mb-5 font-light"
              style={{ color: "rgba(0,180,216,0.65)" }}
            >
              О пространстве
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight mb-8"
              style={{
                background: "linear-gradient(135deg, #E6EEFA 0%, #b8d4f0 60%, #7eb8e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(0,180,216,0.25))",
              }}
            >
              Что это за пространство?
            </h2>
            <p
              className="text-base md:text-lg leading-[1.9] font-light mb-8"
              style={{ color: "rgba(230,238,250,0.72)" }}
            >
              «Океан ощущений» — сообщество телесных практиков и массажистов. На сайте собраны анкеты мастеров с описанием их уникального подхода, чтобы вы легко нашли своего специалиста.
            </p>
            <p
              className="text-base leading-[1.9] font-light"
              style={{ color: "rgba(230,238,250,0.65)" }}
            >
              Мы предлагаем индивидуальные практики для снятия стресса и восстановления ресурса, а также парные тантрические сессии для углубления доверия и осознанной близости. Проект постоянно развивается, пополняясь новыми событиями и экспертами.
            </p>
          </motion.div>

          {/* Right column — "Почему вы здесь?" glass card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div
              className="relative rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(230,238,250,0.055)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(0,180,216,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(230,238,250,0.08)",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.4), transparent)" }} />
              <div className="absolute bottom-0 left-[25%] right-[25%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(31,64,150,0.3), transparent)" }} />

              <p className="text-xs tracking-[0.35em] uppercase mb-6 font-light" style={{ color: "rgba(0,180,216,0.6)" }}>
                Почему вы здесь?
              </p>
              <h3
                className="font-serif text-2xl italic mb-7 leading-snug"
                style={{ color: "rgba(230,238,250,0.88)" }}
              >
                Вы пришли в правильное место, если:
              </h3>

              <ul className="space-y-4 mb-8">
                {reasons.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: "rgba(0,180,216,0.85)",
                        boxShadow: "0 0 8px 2px rgba(0,180,216,0.4)",
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed font-light"
                      style={{ color: "rgba(230,238,250,0.75)" }}
                    >
                      {r}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div
                className="pt-6 border-t"
                style={{ borderColor: "rgba(0,180,216,0.12)" }}
              >
                <p
                  className="text-sm italic leading-relaxed font-light"
                  style={{ color: "rgba(230,238,250,0.55)" }}
                >
                  Любая ваша причина важна. Путь к изменениям начинается с внимания к телу.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
