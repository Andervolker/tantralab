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
      style={{ background: "#131926" }}
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
          {/* BEFORE — тёмная, тяжёлая атмосфера */}
          <div
            className="rounded-3xl p-7 md:p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(4,2,8,0.99) 0%, rgba(8,4,14,0.98) 100%)",
              border: "1px solid rgba(190,18,60,0.22)",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.65), 0 0 50px -12px rgba(190,18,60,0.25), inset 0 0 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Heavy top line */}
            <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(225,29,72,0.55), transparent)" }} />
            {/* Dark inner vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(180,0,30,0.08) 0%, transparent 60%)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-rose-600/70" style={{ boxShadow: "0 0 8px 3px rgba(190,18,60,0.4)" }} />
              <span className="text-rose-500/60 text-xs tracking-[0.35em] uppercase font-light">До</span>
            </div>
            <p className="text-white/42 text-base leading-relaxed font-light italic">{t.before}</p>
          </div>

          {/* AFTER — светлая, лёгкая атмосфера */}
          <div
            className="rounded-3xl p-7 md:p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(30,18,60,0.88) 0%, rgba(20,12,45,0.92) 50%, rgba(25,16,52,0.90) 100%)",
              border: "1px solid rgba(168,85,247,0.30)",
              boxShadow: `0 0 0 1px rgba(139,92,246,0.08), 0 16px 48px rgba(0,0,0,0.35), 0 0 60px -10px rgba(139,92,246,0.30), inset 0 0 80px rgba(139,92,246,0.04)`,
            }}
          >
            {/* Luminous top line */}
            <div className="absolute top-0 left-[15%] right-[15%] h-px" style={{ background: `linear-gradient(90deg, transparent, rgba(168,85,247,0.70), transparent)` }} />
            {/* Soft purple inner glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 65%)" }} />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full" style={{ background: "rgba(192,132,252,0.9)", boxShadow: "0 0 10px 3px rgba(168,85,247,0.55)" }} />
              <span className="text-purple-300/75 text-xs tracking-[0.35em] uppercase font-light">После</span>
            </div>
            <p className="text-white/88 text-base leading-relaxed font-light">{t.after}</p>
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
