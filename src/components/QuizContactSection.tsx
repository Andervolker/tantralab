"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

const step1 = [
  { id: "stress", icon: "🌀", label: "Хронический стресс и телесное напряжение" },
  { id: "relax", icon: "🌊", label: "Хочу научиться расслабляться по-настоящему" },
  { id: "contact", icon: "✦", label: "Ищу глубокий контакт с собой" },
  { id: "couple", icon: "∞", label: "Хочу оживить отношения с партнёром" },
  { id: "curious", icon: "◎", label: "Просто любопытно — хочу понять, что это" },
];

const step2 = [
  { id: "individual", label: "Индивидуальная сессия", desc: "Только я и мастер" },
  { id: "pair", label: "Тантра для пар", desc: "Мы вдвоём с партнёром" },
  { id: "shamb", label: "Шамбала (4 руки)", desc: "Два мастера — для глубокого расслабления" },
  { id: "group", label: "Групповое мероприятие", desc: "Ecstatic Dance, Церемония, Саунд-хилинг" },
];

const slideVariants: Variants = {
  enter: { opacity: 0, x: 32 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -32, transition: { duration: 0.25 } },
};

export default function QuizContactSection() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ why: string; format: string }>({ why: "", format: "" });
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const pickWhy = (id: string) => {
    setAnswers((a) => ({ ...a, why: id }));
    setTimeout(() => setStep(2), 300);
  };

  const pickFormat = (id: string) => {
    setAnswers((a) => ({ ...a, format: id }));
    setTimeout(() => setStep(3), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const whyLabel = step1.find((o) => o.id === answers.why)?.label ?? answers.why;
    const fmtLabel = step2.find((o) => o.id === answers.format)?.label ?? answers.format;

    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          reason: whyLabel,
          format: fmtLabel,
          timing: "Как можно скорее",
        }),
      });

      if (res.ok) {
        setDone(true);
      } else {
        setError("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch {
      setError("Ошибка соединения. Проверьте интернет.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "#0b0f19" }}
    >
      <div className="blob-1 absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(109,40,217,0.13)" }} />
      <div className="blob-2 absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(88,28,135,0.10)" }} />
      <DecorativeLines variant="radial" opacity={0.35} />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400/55 text-xs tracking-[0.45em] uppercase mb-4">Запись</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white/82 leading-tight">Начать путь</h2>
          <p className="text-white/28 mt-4 text-sm leading-relaxed">
            Ответьте на два вопроса — мастер подберёт подходящий формат и свяжется с вами
          </p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="transition-all duration-400"
              style={{
                width: step === s ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: step >= s
                  ? "linear-gradient(90deg, rgba(139,92,246,0.9), rgba(168,85,247,0.7))"
                  : "rgba(255,255,255,0.12)",
                boxShadow: step === s ? "0 0 10px -2px rgba(168,85,247,0.5)" : "none",
              }}
            />
          ))}
        </div>

        {/* Quiz card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(9,11,22,0.97)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.3), 0 20px 60px rgba(0,0,0,0.5), 0 0 80px -20px rgba(109,40,217,0.2)",
          }}
        >
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.45) 30%, rgba(217,70,239,0.25) 50%, rgba(168,85,247,0.45) 70%, transparent)" }} />

          <div className="p-8 md:p-10 min-h-[380px] flex flex-col">
            <AnimatePresence mode="wait">

              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="s1" variants={slideVariants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
                  <p className="text-white/55 text-sm mb-6">Шаг 1 из 3 · Что привело тебя сюда?</p>
                  <div className="space-y-3 flex-1">
                    {step1.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => pickWhy(opt.id)}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 group"
                        style={{
                          background: answers.why === opt.id ? "rgba(109,40,217,0.2)" : "rgba(255,255,255,0.03)",
                          border: answers.why === opt.id ? "1px solid rgba(168,85,247,0.4)" : "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span className="text-xl w-7 flex-shrink-0">{opt.icon}</span>
                        <span className="text-white/65 text-sm group-hover:text-white/88 transition-colors">{opt.label}</span>
                        <ArrowRight size={14} className="ml-auto text-purple-400/0 group-hover:text-purple-400/60 transition-all duration-200" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="s2" variants={slideVariants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
                  <p className="text-white/55 text-sm mb-6">Шаг 2 из 3 · Какой формат тебе ближе?</p>
                  <div className="space-y-3 flex-1">
                    {step2.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => pickFormat(opt.id)}
                        className="w-full flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-200 group"
                        style={{
                          background: answers.format === opt.id ? "rgba(109,40,217,0.2)" : "rgba(255,255,255,0.03)",
                          border: answers.format === opt.id ? "1px solid rgba(168,85,247,0.4)" : "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="flex-1">
                          <div className="text-white/75 text-sm font-light group-hover:text-white/90 transition-colors">{opt.label}</div>
                          <div className="text-white/30 text-xs mt-0.5">{opt.desc}</div>
                        </div>
                        <ArrowRight size={14} className="mt-0.5 text-purple-400/0 group-hover:text-purple-400/60 transition-all duration-200 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="mt-5 text-white/25 text-xs hover:text-white/45 transition-colors self-start">
                    ← Назад
                  </button>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="s3" variants={slideVariants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
                  <p className="text-white/55 text-sm mb-2">Шаг 3 из 3 · Как с вами связаться?</p>

                  {/* Summary */}
                  <div className="flex flex-wrap gap-2 mb-7 mt-3">
                    <span className="px-3 py-1 rounded-full text-xs border border-purple-500/20 text-purple-300/65" style={{ background: "rgba(109,40,217,0.1)" }}>
                      {step1.find((o) => o.id === answers.why)?.label}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs border border-purple-500/20 text-purple-300/65" style={{ background: "rgba(109,40,217,0.1)" }}>
                      {step2.find((o) => o.id === answers.format)?.label}
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 rounded-2xl text-white/85 text-sm placeholder:text-white/22 focus:outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => (e.target.style.border = "1px solid rgba(168,85,247,0.4)")}
                      onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    />
                    <input
                      type="text"
                      placeholder="Телефон или @Telegram"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full px-5 py-4 rounded-2xl text-white/85 text-sm placeholder:text-white/22 focus:outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => (e.target.style.border = "1px solid rgba(168,85,247,0.4)")}
                      onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                    />

                    {error && <p className="text-rose-400/75 text-xs text-center">{error}</p>}

                    <div className="flex items-center gap-3 mt-auto pt-2">
                      <button type="button" onClick={() => setStep(2)} className="text-white/25 text-xs hover:text-white/45 transition-colors">
                        ← Назад
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-4 rounded-2xl text-white text-sm font-medium transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                          boxShadow: "0 0 24px -6px rgba(147,51,234,0.55)",
                        }}
                      >
                        {loading ? "Отправляем…" : "Записаться →"}
                      </button>
                    </div>

                    <p className="text-white/18 text-xs text-center">Ваши данные конфиденциальны</p>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {done && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/78 backdrop-blur-xl" onClick={() => setDone(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 max-w-sm w-full rounded-3xl p-[1.5px] text-center"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(109,40,217,0.2), transparent)",
                boxShadow: "0 0 80px -20px rgba(147,51,234,0.4), 0 24px 60px rgba(0,0,0,0.7)",
              }}
            >
              <div
                className="relative rounded-[calc(1.5rem-1px)] p-10"
                style={{ background: "rgba(10,8,20,0.99)" }}
              >
                <button onClick={() => setDone(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/8 bg-white/4 flex items-center justify-center text-white/45 hover:text-white transition-all">
                  <X size={14} />
                </button>

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(109,40,217,0.3), rgba(168,85,247,0.2))",
                    border: "1px solid rgba(168,85,247,0.3)",
                    boxShadow: "0 0 24px -6px rgba(168,85,247,0.4)",
                  }}
                >
                  <CheckCircle size={26} className="text-purple-400" />
                </div>

                <h3 className="font-serif text-2xl text-white/90 mb-3">Заявка принята</h3>
                <p className="text-white/48 text-sm leading-relaxed">
                  Мастер свяжется с вами в ближайшее время, чтобы обсудить формат и подобрать удобное время.
                </p>

                <div className="flex items-center gap-4 my-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                  <span className="text-purple-400/35 text-xs">✦</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                </div>

                <p className="text-white/22 text-xs">Добро пожаловать в пространство</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
