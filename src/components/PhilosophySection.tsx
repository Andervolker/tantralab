"use client";
import { motion } from "framer-motion";
import DecorativeLines from "@/components/DecorativeLines";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1a1040 0%, #1e1b4b 35%, #311042 65%, #1a1040 100%)",
      }}
    >
      {/* Rich inner glow blobs */}
      <div
        className="blob-2 absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(109,40,217,0.30)" }}
      />
      <div
        className="blob-1 absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "rgba(88,28,135,0.28)" }}
      />
      <div
        className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.08)" }}
      />

      <DecorativeLines variant="diagonal" opacity={0.5} />

      {/* Top/bottom fade-in edges */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#0b0f19] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0b0f19] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-purple-300/60 text-xs tracking-[0.45em] uppercase mb-6 text-center">
            Философия
          </p>

          {/* Headline with neon glow */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-20">
            <span className="text-white/90">Куда ты попал?</span>
            <br />
            <span className="text-white/65">Что это за пространство?</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #e9d5ff 0%, #c084fc 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(192,132,252,0.55))",
              }}
            >
              Почему ты здесь?
            </span>
          </h2>

          {/* Body text — brighter against dark indigo */}
          <div className="space-y-7 text-white/62 text-lg md:text-xl leading-[1.88] font-light">
            <p>
              Тело всё помнит. Каждый стресс, каждое подавленное чувство,
              каждая непроговорённая боль — всё это откладывается в виде зажимов,
              блоков и хронических паттернов напряжения. Мы живём в голове,
              давно утратив живой контакт с собственным телом.
            </p>
            <p>
              Здесь практики работают слоями — через прикосновение, дыхание,
              осознанное присутствие. Слой за слоем уходит напряжение, открывается
              чувствительность, возвращается ощущение себя живым, целым, настоящим.
            </p>
            <p>
              Это не терапия в классическом смысле. Это встреча с собой —
              через тело, через доверие, через тишину.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 my-16">
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.35), transparent)" }}
            />
            <span style={{ color: "rgba(192,132,252,0.4)", fontSize: "0.875rem" }}>✦</span>
            <div
              className="h-px flex-1"
              style={{ background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.35), transparent)" }}
            />
          </div>

          {/* ── Glassmorphism "Сам процесс" card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(168,85,247,0.28)",
              boxShadow:
                "0 0 0 1px rgba(168,85,247,0.08), " +
                "0 20px 60px rgba(0,0,0,0.35), " +
                "inset 0 1px 0 rgba(255,255,255,0.10), " +
                "0 0 60px -20px rgba(168,85,247,0.3)",
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-[10%] right-[10%] h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(192,132,252,0.6), rgba(217,70,239,0.3), rgba(192,132,252,0.6), transparent)",
              }}
            />
            {/* Corner accent */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-purple-400/30 rounded-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-purple-400/30" />

            {/* Glowing left border */}
            <div
              className="absolute left-0 top-[20%] bottom-[20%] w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(168,85,247,0.7) 40%, rgba(217,70,239,0.5) 60%, transparent)",
                boxShadow: "0 0 12px 2px rgba(168,85,247,0.3)",
              }}
            />

            <p className="text-purple-300/65 text-xs tracking-[0.35em] uppercase mb-5 pl-5">
              Сам процесс
            </p>
            <blockquote className="font-serif italic text-white/75 text-xl md:text-2xl leading-relaxed pl-5">
              "Представьте тёплый, приглушённый свет, мягкую музыку, аромат
              эфирных масел. Пространство создано так, чтобы тело захотело
              расслабиться само — ещё до первого прикосновения."
            </blockquote>
            <div className="mt-6 flex items-center gap-3 pl-5">
              <div
                className="w-6 h-px"
                style={{ background: "rgba(168,85,247,0.5)" }}
              />
              <span className="text-purple-400/55 text-sm font-light">Валерия</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
