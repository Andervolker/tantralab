"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    practice: "Тантра",
    name: "А. К.",
    city: "Екатеринбург",
    before: "Постоянное напряжение в плечах и шее, невозможность расслабиться даже в отпуске. Казалось, тело живёт отдельной, очень напряжённой жизнью.",
    after: "После третьей сессии впервые за годы почувствовала, что живу в теле, а не наблюдаю за ним снаружи. Хроническое напряжение в плечах ушло.",
    accentBefore: "rgba(190,18,60,0.15)",
    accentAfter: "rgba(109,40,217,0.18)",
  },
  {
    practice: "Шамбала",
    name: "Д. М.",
    city: "Екатеринбург",
    before: "Постоянный ментальный контроль — невозможность «отпустить». Даже на обычном массаже мозг не выключался и продолжал работать.",
    after: "Формат с двумя мастерами — это другое измерение. Разум не успевал контролировать. Первый раз в жизни провалился в настоящий, глубокий отдых.",
    accentBefore: "rgba(190,18,60,0.15)",
    accentAfter: "rgba(88,28,135,0.22)",
  },
  {
    practice: "Тантра для пар",
    name: "Е. и С.",
    city: "Екатеринбург",
    before: "Вместе 7 лет. Близость стала привычкой, потеряли живой контакт. Думали — это нормально, просто «притёрлись».",
    after: "Ощущение, будто снова встретились. Вернулась нежность, которой давно не было. Продолжаем ходить раз в месяц — уже полгода.",
    accentBefore: "rgba(190,18,60,0.15)",
    accentAfter: "rgba(168,85,247,0.18)",
  },
  {
    practice: "Дыхательные практики",
    name: "И. Н.",
    city: "Екатеринбург",
    before: "Панические атаки в метро и на работе. Классическая терапия помогала, но слабо — только через слова и мысли.",
    after: "Три месяца практики — атак нет уже полгода. Дыхание стало инструментом, который работает мгновенно, без таблеток.",
    accentBefore: "rgba(190,18,60,0.15)",
    accentAfter: "rgba(124,58,237,0.20)",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#0b0f19" }}
    >
      {/* Blobs */}
      <div className="blob-1 absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(109,40,217,0.20)" }} />
      <div className="blob-2 absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(168,85,247,0.17)" }} />
      <div className="glow-pulse absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400/55 text-xs tracking-[0.45em] uppercase mb-4">Отзывы</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white/82 leading-tight">До и после</h2>
          <p className="text-white/30 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Реальные истории людей из Екатеринбурга
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300"
              style={
                active === i
                  ? {
                      background: "linear-gradient(135deg, rgba(109,40,217,0.5), rgba(168,85,247,0.3))",
                      border: "1px solid rgba(168,85,247,0.45)",
                      color: "rgba(233,213,255,0.9)",
                      boxShadow: "0 0 16px -4px rgba(168,85,247,0.4)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                    }
              }
            >
              {t.practice}
            </button>
          ))}
        </div>

        {/* Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* BEFORE */}
          <div
            className="rounded-3xl p-7 md:p-8 relative overflow-hidden"
            style={{
              background: "rgba(10,8,16,0.96)",
              border: "1px solid rgba(190,18,60,0.18)",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.3), 0 12px 40px rgba(0,0,0,0.45), 0 0 40px -15px rgba(190,18,60,0.2)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-[20%] right-[20%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(225,29,72,0.4), transparent)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-rose-500/60" style={{ boxShadow: "0 0 6px 2px rgba(225,29,72,0.3)" }} />
              <span className="text-rose-400/65 text-xs tracking-[0.3em] uppercase font-light">До</span>
            </div>
            <p className="text-white/55 text-base leading-relaxed font-light">{t.before}</p>
          </div>

          {/* AFTER */}
          <div
            className="rounded-3xl p-7 md:p-8 relative overflow-hidden"
            style={{
              background: "rgba(10,8,18,0.97)",
              border: `1px solid ${t.accentAfter.replace("0.18","0.22").replace("0.22","0.22").replace("0.20","0.22")}`,
              boxShadow: `0 0 0 1px rgba(0,0,0,0.3), 0 12px 40px rgba(0,0,0,0.45), 0 0 40px -15px ${t.accentAfter}`,
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-[20%] right-[20%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${t.accentAfter.replace("0.18","0.5").replace("0.22","0.5").replace("0.20","0.5")}, transparent)` }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(168,85,247,0.8)", boxShadow: "0 0 8px 2px rgba(168,85,247,0.4)" }} />
              <span className="text-purple-400/65 text-xs tracking-[0.3em] uppercase font-light">После</span>
            </div>
            <p className="text-white/70 text-base leading-relaxed font-light">{t.after}</p>
          </div>
        </motion.div>

        {/* Author */}
        <motion.div
          key={`author-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mt-6"
        >
          <div className="h-px w-12 bg-purple-500/20" />
          <span className="text-white/30 text-xs">
            {t.name} · {t.city}
          </span>
          <div className="h-px w-12 bg-purple-500/20" />
        </motion.div>
      </div>
    </section>
  );
}
