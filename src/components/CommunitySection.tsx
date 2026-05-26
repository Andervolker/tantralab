"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Specialist {
  name: string;
  role: string;
  description: string;
  specialties: string[];
  initial: string;
  gradFrom: string;
  gradTo: string;
  glow: string;
}

const specialists: Specialist[] = [
  {
    name: "Игорь",
    role: "Практик осознанности",
    description:
      "Преподаватель медитации с 10-летним опытом. Работает с вниманием, присутствием и внутренним пространством. Проводит индивидуальные и групповые погружения.",
    specialties: ["Медитация", "Випассана", "Работа с умом"],
    initial: "И",
    gradFrom: "rgba(109,40,217,0.5)",
    gradTo: "rgba(139,92,246,0.25)",
    glow: "rgba(109,40,217,0.3)",
  },
  {
    name: "Мария",
    role: "Йога-терапевт",
    description:
      "Специализируется на терапевтической йоге для работы с телесными блоками и восстановления после стресса. Адаптирует практику под состояние и запрос.",
    specialties: ["Йога-терапия", "Работа с телом", "Восстановление"],
    initial: "М",
    gradFrom: "rgba(124,58,237,0.5)",
    gradTo: "rgba(167,139,250,0.25)",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    name: "Дмитрий",
    role: "Шаманские практики",
    description:
      "Проводник в мир шаманских церемоний и архетипов. Создаёт пространство для глубоких трансформационных переживаний и работы с родовым полем.",
    specialties: ["Церемонии", "Архетипы", "Трансформация"],
    initial: "Д",
    gradFrom: "rgba(79,70,229,0.5)",
    gradTo: "rgba(109,40,217,0.25)",
    glow: "rgba(79,70,229,0.3)",
  },
  {
    name: "Светлана",
    role: "Нутриционист · Аюрведа",
    description:
      "Работает с питанием и образом жизни через призму аюрведы. Помогает восстановить баланс на физическом уровне как фундамент для всех практик.",
    specialties: ["Аюрведа", "Питание", "Баланс"],
    initial: "С",
    gradFrom: "rgba(168,85,247,0.5)",
    gradTo: "rgba(217,70,239,0.25)",
    glow: "rgba(168,85,247,0.3)",
  },
  {
    name: "Павел",
    role: "Дыхательные практики",
    description:
      "Мастер пранаямы и холотропного дыхания. Работает с дыхательными паттернами как инструментом трансформации эмоций и расширения состояний сознания.",
    specialties: ["Пранаяма", "Холотропное дыхание", "Нервная система"],
    initial: "П",
    gradFrom: "rgba(139,92,246,0.5)",
    gradTo: "rgba(79,70,229,0.25)",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    name: "Наталья",
    role: "Танцевально-двигательный терапевт",
    description:
      "Использует движение и танец как язык для работы с подавленными эмоциями и телесной памятью. Групповые и индивидуальные сессии.",
    specialties: ["Движение", "Эмоции", "Телесная терапия"],
    initial: "Н",
    gradFrom: "rgba(124,58,237,0.5)",
    gradTo: "rgba(109,40,217,0.25)",
    glow: "rgba(124,58,237,0.3)",
  },
];

export default function CommunitySection() {
  const [selected, setSelected] = useState<Specialist | null>(null);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #131926 0%, #130d2e 20%, #1c1240 50%, #130d2e 75%, #131926 100%)" }}>
      <div className="blob-2 absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">Экосистема</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center text-white/85 mb-5 leading-tight text-glow-sm">
            Сообщество специалистов
          </h2>
          <p className="text-white/32 text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed">
            Сеть приглашённых мастеров разных направлений. Нажмите на карточку — узнайте подробнее.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {specialists.map((spec, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelected(spec)}
              className="group relative text-left rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.07), 0 8px 28px rgba(0,0,0,0.35), 0 0 40px -20px ${spec.glow}`,
              }}
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-400 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${spec.gradFrom}, ${spec.gradTo}, transparent)`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />

              <div className="relative z-10 p-6">
                <div
                  className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${spec.gradFrom}, ${spec.gradTo})`,
                    boxShadow: `0 0 16px -4px ${spec.glow}`,
                  }}
                >
                  <span className="font-serif text-lg text-white/85">{spec.initial}</span>
                </div>
                <h3 className="font-medium text-white/85 text-sm mb-1 group-hover:text-white transition-colors">
                  {spec.name}
                </h3>
                <p className="text-purple-400/50 text-xs leading-snug">{spec.role}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/78 backdrop-blur-xl" />

            {/* Panel */}
            <motion.div
              className="relative z-10 max-w-md w-full rounded-3xl p-[1px] shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: `linear-gradient(135deg, ${selected.gradFrom}, rgba(139,92,246,0.15), transparent)`,
                boxShadow: `0 0 80px -20px ${selected.glow}, 0 24px 60px rgba(0,0,0,0.7)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative rounded-[calc(1.5rem-1px)] p-8 md:p-10"
                style={{ background: "linear-gradient(160deg, rgba(11,16,28,0.99), rgba(7,9,20,0.99))" }}
              >
                {/* Inner ambient */}
                <div
                  className="absolute inset-0 rounded-[calc(1.5rem-1px)] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 0%, ${selected.glow.replace("0.3", "0.08")} 0%, transparent 55%)`,
                  }}
                />

                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
                >
                  <X size={14} />
                </button>

                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${selected.gradFrom}, ${selected.gradTo})`,
                    boxShadow: `0 0 24px -6px ${selected.glow}`,
                  }}
                >
                  <span className="font-serif text-2xl text-white/85">{selected.initial}</span>
                </div>

                <h3 className="font-serif text-2xl text-white/92 mb-1 relative z-10">{selected.name}</h3>
                <p className="text-purple-400/60 text-xs tracking-wider mb-6 relative z-10">{selected.role}</p>
                <p className="text-white/52 text-sm leading-relaxed mb-7 relative z-10">{selected.description}</p>

                <div className="relative z-10">
                  <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-3">Направления</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.specialties.map((s, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs border border-purple-500/18 text-purple-300/72"
                        style={{ background: "rgba(139,92,246,0.07)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
