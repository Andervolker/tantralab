"use client";
import { motion } from "framer-motion";
import DecorativeLines from "@/components/DecorativeLines";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-28 md:py-40 overflow-hidden">
      {/* Blobs */}
      <div className="blob-2 absolute top-0 right-0 w-[500px] h-[500px] bg-violet-800/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="blob-1 absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative diagonal lines */}
      <DecorativeLines variant="diagonal" opacity={0.7} />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-6 text-center"
          >
            Философия
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-20"
          >
            <span className="text-white/80">Куда ты попал?</span>
            <br />
            <span className="text-white/55">Что это за пространство?</span>
            <br />
            <span
              className="text-glow"
              style={{
                background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Почему ты здесь?
            </span>
          </motion.h2>

          {/* Body text */}
          <div className="space-y-7 text-white/52 text-lg md:text-xl leading-[1.85] font-light">
            {[
              "Тело всё помнит. Каждый стресс, каждое подавленное чувство, каждая непроговорённая боль — всё это откладывается в виде зажимов, блоков и хронических паттернов напряжения. Мы живём в голове, давно утратив живой контакт с собственным телом.",
              "Здесь практики работают слоями — через прикосновение, дыхание, осознанное присутствие. Слой за слоем уходит напряжение, открывается чувствительность, возвращается ощущение себя живым, целым, настоящим.",
              "Это не терапия в классическом смысле. Это встреча с собой — через тело, через доверие, через тишину.",
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-6 my-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
            <span className="text-purple-400/30 text-sm">✦</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
          </motion.div>

          {/* Atmosphere block */}
          <motion.div variants={fadeUp} className="relative pl-8 py-4">
            {/* Glowing left border */}
            <div
              className="absolute left-0 inset-y-0 w-px"
              style={{
                background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.6) 30%, rgba(217,70,239,0.4) 60%, transparent)",
                boxShadow: "0 0 12px 2px rgba(139,92,246,0.3)",
              }}
            />

            <p className="text-purple-300/50 text-xs tracking-[0.3em] uppercase mb-5">Сам процесс</p>
            <blockquote className="font-serif italic text-white/62 text-xl md:text-2xl leading-relaxed">
              "Представьте тёплый, приглушённый свет, мягкую музыку,
              аромат эфирных масел. Пространство создано так, чтобы тело
              захотело расслабиться само —&nbsp;ещё до первого прикосновения."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-5 h-px bg-purple-500/40" />
              <span className="text-purple-400/50 text-sm font-light">Валерия</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
