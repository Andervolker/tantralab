"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

export default function QuizContactSection() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          goal: "Запрос проводникам (форма обратной связи)",
          format: "Обратная связь",
          timing: "Как можно скорее",
        }),
      });
      if (res.ok) {
        setDone(true);
        setForm({ name: "", phone: "" });
      } else {
        setError("Не удалось отправить. Попробуйте ещё раз.");
      }
    } catch {
      setError("Ошибка соединения. Проверьте интернет.");
    } finally {
      setLoading(false);
    }
  };

  const ready = form.name.trim() && form.phone.trim();

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 45%, #0A1128 100%)" }}
    >
      {/* Ocean blobs */}
      <div className="blob-1 absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(0,119,182,0.20)" }} />
      <div className="blob-2 absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(31,64,150,0.18)" }} />
      <DecorativeLines variant="radial" opacity={0.3} />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.45em] uppercase mb-4" style={{ color: "rgba(0,180,216,0.6)" }}>Контакты</p>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight"
            style={{
              background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(0,180,216,0.2))",
            }}
          >
            Оставьте запрос
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(230,238,250,0.45)" }}>
            Оставьте контакты — проводники свяжутся с вами и помогут выбрать формат.
          </p>
        </motion.div>

        {/* Elegant feedback form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-3xl p-8 md:p-10 space-y-5"
          style={{
            background: "rgba(230,238,250,0.045)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(230,238,250,0.07)",
          }}
        >
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase mb-2.5" style={{ color: "rgba(0,180,216,0.55)" }}>
              Ваше имя
            </label>
            <input
              type="text"
              placeholder="Как к вам обращаться"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-5 py-4 rounded-2xl text-sm focus:outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,180,216,0.16)",
                color: "rgba(230,238,250,0.9)",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.5)")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.16)")}
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.2em] uppercase mb-2.5" style={{ color: "rgba(0,180,216,0.55)" }}>
              Телефон / Telegram для связи
            </label>
            <input
              type="text"
              placeholder="+7 ··· или @username"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full px-5 py-4 rounded-2xl text-sm focus:outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,180,216,0.16)",
                color: "rgba(230,238,250,0.9)",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.5)")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.16)")}
            />
          </div>

          {error && <p className="text-rose-400/75 text-xs text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading || !ready}
            className="w-full py-4 rounded-2xl text-sm font-medium tracking-wide transition-all duration-300 mt-2"
            style={{
              background: ready ? "linear-gradient(135deg, #1F4096, #00B4D8)" : "rgba(255,255,255,0.05)",
              color: ready ? "#fff" : "rgba(230,238,250,0.3)",
              boxShadow: ready ? "0 10px 30px rgba(0,180,216,0.32)" : "none",
              cursor: ready && !loading ? "pointer" : "default",
            }}
          >
            {loading ? "Отправляем…" : "Отправить запрос проводникам"}
          </button>

          <p className="text-center text-xs" style={{ color: "rgba(230,238,250,0.2)" }}>
            Ваши данные конфиденциальны
          </p>
        </motion.form>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {done && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(4,8,22,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }} onClick={() => setDone(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 max-w-sm w-full rounded-3xl p-10 text-center"
              style={{
                background: "linear-gradient(160deg, rgba(10,20,50,0.98), rgba(8,14,36,0.98))",
                border: "1px solid rgba(0,180,216,0.2)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 60px -20px rgba(0,180,216,0.25)",
              }}
            >
              <button onClick={() => setDone(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(0,180,216,0.15)", color: "rgba(230,238,250,0.5)" }}>
                <X size={14} />
              </button>

              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(0,180,216,0.12)", border: "1px solid rgba(0,180,216,0.3)", boxShadow: "0 0 24px -6px rgba(0,180,216,0.4)" }}>
                <CheckCircle size={26} style={{ color: "rgba(0,180,216,0.85)" }} />
              </div>

              <h3 className="font-serif text-2xl mb-3" style={{ color: "rgba(230,238,250,0.92)" }}>Запрос принят</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(230,238,250,0.5)" }}>
                Проводники свяжутся с вами в ближайшее время, чтобы обсудить формат и подобрать удобное время.
              </p>

              <div className="flex items-center gap-4 my-6">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.25), transparent)" }} />
                <span className="text-xs" style={{ color: "rgba(0,180,216,0.4)" }}>✦</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.25), transparent)" }} />
              </div>

              <p className="text-xs" style={{ color: "rgba(230,238,250,0.25)" }}>Добро пожаловать в Океан ощущений</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
