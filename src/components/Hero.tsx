"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const step1Options = [
  { id: "stress",   icon: "🌊", label: "Хронический стресс и телесное напряжение" },
  { id: "relax",   icon: "🪷", label: "Хочу научиться расслабляться по-настоящему" },
  { id: "self",    icon: "✦",  label: "Ищу глубокий контакт с собой" },
  { id: "couple",  icon: "∞",  label: "Хочу оживить отношения с партнёром" },
  { id: "curious", icon: "◎",  label: "Просто любопытно — хочу понять, что это" },
];

const step3Options = [
  { id: "ind",    label: "Индивидуальная сессия" },
  { id: "pair",   label: "Тантра для пар" },
  { id: "sham",   label: "Шамбала (4 руки)" },
  { id: "group",  label: "Групповое мероприятие" },
];

const fadeSlide: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.38, ease: "easeOut" as const } },
  exit:   { opacity: 0, x: -24, transition: { duration: 0.22 } },
};

const heroText: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const heroLine: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

export default function HeroSection() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [format, setFormat] = useState("");
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function pickGoal(id: string, label: string) {
    setGoal(label);
    setStep(2);
  }

  async function submit() {
    if (!form.name || !form.phone) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          goal,
          format: format || "Не выбран",
          reason: goal,
        }),
      });
      if (res.ok) {
        setDone(true);
      } else {
        setError("Ошибка отправки. Попробуйте позже.");
      }
    } catch {
      setError("Нет соединения. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  const stepLabel = step === 1 ? "Шаг 1 из 3 · Что привело тебя сюда?" : step === 2 ? "Шаг 2 из 3 · Как с тобой связаться?" : "Шаг 3 из 3 · Какой формат тебе ближе?";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ocean background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ocean.jpg')" }}
      />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,17,40,0.88) 0%, rgba(16,31,66,0.75) 50%, rgba(10,17,40,0.70) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to top, #0A1128, transparent)" }} />
      {/* Subtle neon teal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,180,216,0.08) 40%, rgba(0,180,216,0.08) 60%, transparent 100%)" }} />
        <div className="absolute top-[65%] left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(31,64,150,0.12) 30%, rgba(31,64,150,0.12) 70%, transparent 100%)" }} />
        <div className="blob-1 absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px]" style={{ background: "rgba(0,119,182,0.18)" }} />
        <div className="blob-2 absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[160px]" style={{ background: "rgba(31,64,150,0.22)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Hero text ── */}
          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            <motion.p
              variants={heroLine}
              className="text-xs tracking-[0.5em] uppercase font-light"
              style={{ color: "rgba(0,180,216,0.7)" }}
            >
              Пространство живого контакта
            </motion.p>

            <motion.h1 variants={heroLine} className="font-serif leading-[1.1]">
              <span
                className="block"
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                  background: "linear-gradient(135deg, #E6EEFA 0%, #b8d4f0 50%, #7eb8e8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(0,180,216,0.3))",
                }}
              >
                Добро пожаловать
              </span>
              <span
                className="block mt-1 italic"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  background: "linear-gradient(135deg, #c8dff8 0%, #91c3f0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                в Океан ощущений
              </span>
            </motion.h1>

            <motion.p
              variants={heroLine}
              className="text-base md:text-lg leading-[1.85] font-light max-w-lg"
              style={{ color: "rgba(230,238,250,0.72)" }}
            >
              Пространство живого контакта с собой, созданное для замедления, расслабления и внимания к своим чувствам.
            </motion.p>

            <motion.div variants={heroLine} className="flex items-center gap-4 pt-2">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wider transition-all duration-300 hover:scale-[1.04]"
                style={{
                  background: "rgba(31,64,150,0.28)",
                  border: "1px solid rgba(0,180,216,0.4)",
                  color: "rgba(230,238,250,0.9)",
                  boxShadow: "0 0 24px -6px rgba(0,180,216,0.35)",
                  backdropFilter: "blur(8px)",
                }}
              >
                О пространстве
              </a>
              <a
                href="#masters"
                className="text-sm transition-colors duration-300"
                style={{ color: "rgba(230,238,250,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.45)")}
              >
                Мастера →
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Quiz widget ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(10,17,40,0.60)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(0,180,216,0.18)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(230,238,250,0.07)",
            }}
          >
            {/* Widget header */}
            <div
              className="px-7 pt-7 pb-5"
              style={{ borderBottom: "1px solid rgba(31,64,150,0.2)" }}
            >
              <p className="font-serif text-xl mb-1" style={{ color: "rgba(230,238,250,0.92)" }}>
                Исследовать практики
              </p>
              <p className="text-xs tracking-wider" style={{ color: "rgba(0,180,216,0.65)" }}>
                {stepLabel}
              </p>
              {/* Progress bar */}
              <div className="mt-4 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
                    background: "linear-gradient(90deg, #1F4096, #00B4D8)",
                    boxShadow: "0 0 8px rgba(0,180,216,0.5)",
                  }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="p-7 min-h-[300px]">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    variants={fadeSlide}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center justify-center gap-4 py-8 text-center"
                  >
                    <CheckCircle size={44} style={{ color: "rgba(0,180,216,0.85)" }} />
                    <p className="font-serif text-xl" style={{ color: "rgba(230,238,250,0.92)" }}>
                      Заявка принята
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(230,238,250,0.52)" }}>
                      Мастер свяжется с вами в ближайшее время.
                    </p>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="s1" variants={fadeSlide} initial="hidden" animate="visible" exit="exit" className="space-y-2.5">
                    {step1Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => pickGoal(opt.id, opt.label)}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm text-left transition-all duration-250 group"
                        style={{
                          background: "rgba(31,64,150,0.12)",
                          border: "1px solid rgba(0,180,216,0.12)",
                          color: "rgba(230,238,250,0.72)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "rgba(31,64,150,0.28)";
                          el.style.border = "1px solid rgba(0,180,216,0.38)";
                          el.style.color = "rgba(230,238,250,0.95)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = "rgba(31,64,150,0.12)";
                          el.style.border = "1px solid rgba(0,180,216,0.12)";
                          el.style.color = "rgba(230,238,250,0.72)";
                        }}
                      >
                        <span className="text-lg flex-shrink-0">{opt.icon}</span>
                        <span className="leading-snug">{opt.label}</span>
                      </button>
                    ))}
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div key="s2" variants={fadeSlide} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                    <div
                      className="flex items-center gap-3 p-3.5 rounded-xl mb-4"
                      style={{ background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.15)" }}
                    >
                      <span className="text-sm" style={{ color: "rgba(0,180,216,0.75)" }}>✓</span>
                      <span className="text-xs" style={{ color: "rgba(230,238,250,0.55)" }}>{goal}</span>
                    </div>
                    {[
                      { key: "name", placeholder: "Ваше имя", type: "text" },
                      { key: "phone", placeholder: "Телефон / Telegram", type: "tel" },
                    ].map((f) => (
                      <input
                        key={f.key}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(0,180,216,0.18)",
                          color: "rgba(230,238,250,0.88)",
                        }}
                        onFocus={(e) => ((e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,180,216,0.5)")}
                        onBlur={(e) => ((e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,180,216,0.18)")}
                      />
                    ))}
                    <button
                      onClick={() => { if (form.name && form.phone) setStep(3); }}
                      disabled={!form.name || !form.phone}
                      className="w-full py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 mt-2"
                      style={{
                        background: form.name && form.phone ? "linear-gradient(135deg, #1F4096, #00B4D8)" : "rgba(255,255,255,0.05)",
                        color: form.name && form.phone ? "#fff" : "rgba(255,255,255,0.3)",
                        boxShadow: form.name && form.phone ? "0 8px 24px rgba(0,180,216,0.3)" : "none",
                        cursor: form.name && form.phone ? "pointer" : "default",
                      }}
                    >
                      Далее →
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="s3" variants={fadeSlide} initial="hidden" animate="visible" exit="exit" className="space-y-3">
                    <p className="text-xs mb-4" style={{ color: "rgba(230,238,250,0.45)" }}>Выберите формат (необязательно)</p>
                    {step3Options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setFormat(opt.label)}
                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all duration-200"
                        style={{
                          background: format === opt.label ? "rgba(31,64,150,0.35)" : "rgba(31,64,150,0.10)",
                          border: format === opt.label ? "1px solid rgba(0,180,216,0.45)" : "1px solid rgba(0,180,216,0.12)",
                          color: format === opt.label ? "rgba(230,238,250,0.95)" : "rgba(230,238,250,0.65)",
                        }}
                      >
                        {opt.label}
                        {format === opt.label && <span style={{ color: "rgba(0,180,216,0.8)" }}>✓</span>}
                      </button>
                    ))}
                    {error && <p className="text-xs text-rose-400/75 mt-1">{error}</p>}
                    <button
                      onClick={submit}
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-sm font-medium tracking-wide mt-3 transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #1F4096, #00B4D8)",
                        color: "#fff",
                        boxShadow: "0 8px 28px rgba(0,180,216,0.35)",
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? "Отправка..." : "Отправить заявку"}
                    </button>
                    <button
                      onClick={() => submit()}
                      className="w-full py-2 text-xs transition-colors duration-200"
                      style={{ color: "rgba(230,238,250,0.35)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.6)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.35)")}
                    >
                      Пропустить и отправить →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
