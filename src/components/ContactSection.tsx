"use client";
import { useState } from "react";
import { Send, X, CheckCircle } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          reason: form.message || "Не указан",
          format: "Сайт — форма записи",
          timing: "Как можно скорее",
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", message: "" });
      } else {
        setError("Произошла ошибка. Попробуйте ещё раз или напишите напрямую в Telegram.");
      }
    } catch {
      setError("Не удалось отправить заявку. Проверьте соединение и попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white/90 placeholder:text-white/25 focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.05] transition-all duration-300 text-sm";

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/12 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[180px] pointer-events-none" />
      <DecorativeLines variant="radial" opacity={0.4} />

      <div className="max-w-2xl mx-auto px-6">
        <p className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">Запись</p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-white/85 mb-5 leading-tight">
          Начать путь
        </h2>
        <p className="text-white/35 text-center mb-12 max-w-md mx-auto text-sm leading-relaxed">
          Оставьте контакт — мастер свяжется с вами и поможет выбрать подходящий формат и время
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Телефон или @Telegram"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            className={inputClass}
          />
          <textarea
            placeholder="Ваш запрос (необязательно)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className={`${inputClass} resize-none`}
          />

          {error && (
            <p className="text-rose-400/80 text-xs text-center px-4 py-3 rounded-xl border border-rose-500/20 bg-rose-950/20">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl text-white text-sm font-medium transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-900/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{
              background: loading
                ? "rgba(107,70,193,0.5)"
                : "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #a855f7 100%)",
            }}
          >
            {loading ? (
              <span className="opacity-70 text-sm">Отправляем заявку…</span>
            ) : (
              <>
                <Send size={15} />
                Записаться на сессию
              </>
            )}
          </button>

          <p className="text-white/20 text-xs text-center">
            Мы не передаём ваши данные третьим лицам
          </p>
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-lg"
            onClick={() => setSuccess(false)}
          />
          <div className="relative z-10 max-w-sm w-full rounded-3xl border border-purple-500/25 bg-[#0c1020]/98 p-10 text-center shadow-2xl shadow-purple-950/50">
            {/* Close */}
            <button
              onClick={() => setSuccess(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={14} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/25 to-violet-600/25 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-purple-400" />
            </div>

            <h3 className="font-serif text-2xl text-white/90 mb-3">Заявка принята</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Мастер свяжется с вами в ближайшее время, чтобы обсудить формат, ответить на вопросы и подобрать удобное время.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
              <span className="text-purple-400/40 text-xs">✦</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
            </div>

            <p className="mt-5 text-white/25 text-xs">Мы ждём вас в нашем пространстве</p>

            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top, rgba(139,92,246,0.08) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
