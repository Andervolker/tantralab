"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, CheckCircle, ArrowRight } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

/* ────────────────────────────────── Data ── */
const programs = [
  {
    id: "tantra",
    title: "Тантра",
    subtitle: "Индивидуальные сессии",
    bg: "/lera_indiv.jpg",
    short: "Индивидуальный формат с Валерией — глубокая работа с телом, дыханием и присутствием.",
    description:
      "Путешествие в глубину тела через осознанное прикосновение, дыхание и присутствие. Индивидуальный формат, где Валерия бережно ведёт вас слой за слоем: снимая зажимы, восстанавливая чувствительность и возвращая контакт с собой. Каждая сессия выстраивается под ваш запрос — в атмосфере полного доверия и безопасности.",
    accent: "#00B4D8",
    gallery: ["/lera_modal1.jpg", "/lera_modal2.jpg", "/lera_modal3.jpg", "/lera_modal4.jpg"],
  },
  {
    id: "shambala",
    title: "Шамбала",
    subtitle: "Сессия в 4 руки",
    bg: "/shambala1.jpg",
    short: "Уникальный формат с двумя мастерами — Валерией и Еленой — для обхода контроля ума.",
    description:
      "Уникальный формат с двумя мастерами одновременно — Валерией и Еленой. Когда двое ведут вас в расслабление синхронно, разуму некуда бежать: ментальный контроль отступает, и тело впервые отпускает по-настоящему. Это глубокое, обволакивающее погружение, недостижимое в обычной индивидуальной сессии.",
    accent: "#7eb8e8",
    gallery: ["/shambala1.jpg", "/lera_modal2.jpg", "/lena.jpg", "/lera_modal3.jpg"],
  },
  {
    id: "tantra-par",
    title: "Тантра для пар",
    subtitle: "Совместные практики",
    bg: "/tantra_par.jpg",
    short: "Дуэтный формат с Андреем — возрождение чувствительности и доверия между партнёрами.",
    description:
      "Практики для двоих — возрождение чувствительности, доверия и глубины контакта между партнёрами. Дуэтный формат, который ведут Валерия и Андрей: контакты-настрои, синхронное дыхание, бережная работа с пространством между вами. Не требует физической подготовки — только желание снова почувствовать друг друга.",
    accent: "#1F4096",
    gallery: ["/tantra_par.jpg", "/andrey1.jpg", "/lera_modal4.jpg", "/lera1.jpg"],
  },
];

type Program = (typeof programs)[0];

/* ────────────────────────────────── Lightbox ── */
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[400] flex items-center justify-center p-4 cursor-zoom-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ background: "rgba(4,8,22,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }} />
      <motion.div
        className="relative z-10 max-w-3xl max-h-[88vh] rounded-2xl overflow-hidden"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px -20px rgba(0,180,216,0.25)" }}
      >
        <Image src={src} alt="Фото практики" width={900} height={1100} className="block w-full h-auto object-cover" style={{ maxHeight: "88vh" }} />
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(10,17,40,0.8)", border: "1px solid rgba(0,180,216,0.3)" }}>
          <X size={16} style={{ color: "rgba(230,238,250,0.8)" }} />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────── Practice Modal ── */
function PracticeModal({ program, onClose }: { program: Program; onClose: () => void }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const ready = form.name.trim() && form.phone.trim();

  async function book() {
    if (!ready) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          goal: `Практика: ${program.title} · ${program.subtitle}`,
          format: program.title,
          timing: "Как можно скорее",
        }),
      });
      if (res.ok) setDone(true);
      else setError("Не удалось отправить. Попробуйте ещё раз.");
    } catch {
      setError("Ошибка соединения. Проверьте интернет.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[300] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <div className="absolute inset-0" style={{ background: "rgba(4,8,22,0.82)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }} />

        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl"
          style={{
            background: "linear-gradient(160deg, rgba(10,20,50,0.97) 0%, rgba(8,14,36,0.98) 100%)",
            border: "1px solid rgba(0,180,216,0.18)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 60px -20px rgba(0,180,216,0.2)",
          }}
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero banner inside modal */}
          <div className="relative h-44 md:h-56 w-full overflow-hidden">
            <Image src={program.bg} alt={program.title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 700px" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,36,1) 0%, rgba(8,14,36,0.4) 50%, rgba(8,14,36,0.2) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
              <p className="text-xs tracking-[0.3em] uppercase mb-1.5" style={{ color: program.accent }}>{program.subtitle}</p>
              <h3 className="font-serif text-3xl md:text-4xl" style={{ color: "rgba(230,238,250,0.95)" }}>{program.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center z-20 transition-all duration-200"
              style={{ background: "rgba(8,14,36,0.7)", border: "1px solid rgba(0,180,216,0.25)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(8,14,36,0.95)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(8,14,36,0.7)")}
            >
              <X size={16} style={{ color: "rgba(230,238,250,0.8)" }} />
            </button>
          </div>

          <div className="p-7 md:p-10">
            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(230,238,250,0.72)" }}>
              {program.description}
            </p>

            {/* Gallery */}
            <div className="mb-9">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(0,180,216,0.5)" }}>Галерея практики</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {program.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden cursor-zoom-in group"
                    style={{ aspectRatio: "3/4", border: "1px solid rgba(0,180,216,0.12)" }}
                    onClick={() => setLightboxSrc(src)}
                  >
                    <Image src={src} alt={`${program.title} — фото ${i + 1}`} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="160px" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,17,40,0.45)" }}>
                      <ZoomIn size={20} style={{ color: "rgba(230,238,250,0.9)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking form */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(230,238,250,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm mb-5" style={{ color: "rgba(230,238,250,0.7)" }}>
                Записаться на практику <span style={{ color: program.accent }}>«{program.title}»</span>
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,180,216,0.16)", color: "rgba(230,238,250,0.9)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.16)")}
                />
                <input
                  type="text"
                  placeholder="Телефон / Telegram для связи"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,180,216,0.16)", color: "rgba(230,238,250,0.9)" }}
                  onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(0,180,216,0.16)")}
                />
                {error && <p className="text-rose-400/75 text-xs">{error}</p>}
                <button
                  onClick={book}
                  disabled={loading || !ready}
                  className="w-full py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
                  style={{
                    background: ready ? "linear-gradient(135deg, #1F4096, #00B4D8)" : "rgba(255,255,255,0.05)",
                    color: ready ? "#fff" : "rgba(230,238,250,0.3)",
                    boxShadow: ready ? "0 8px 24px rgba(0,180,216,0.3)" : "none",
                    cursor: ready && !loading ? "pointer" : "default",
                  }}
                >
                  {loading ? "Отправляем…" : "Записаться на эту практику"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>{lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}</AnimatePresence>

      {/* Success modal */}
      <AnimatePresence>
        {done && (
          <motion.div className="fixed inset-0 z-[450] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0" style={{ background: "rgba(4,8,22,0.88)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }} onClick={() => { setDone(false); onClose(); }} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 max-w-sm w-full rounded-3xl p-10 text-center"
              style={{ background: "linear-gradient(160deg, rgba(10,20,50,0.98), rgba(8,14,36,0.98))", border: "1px solid rgba(0,180,216,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.7)" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(0,180,216,0.12)", border: "1px solid rgba(0,180,216,0.3)" }}>
                <CheckCircle size={26} style={{ color: "rgba(0,180,216,0.85)" }} />
              </div>
              <h3 className="font-serif text-2xl mb-3" style={{ color: "rgba(230,238,250,0.92)" }}>Запрос принят</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(230,238,250,0.5)" }}>
                Ваша заявка на практику «{program.title}» отправлена. Проводники свяжутся с вами в ближайшее время.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ────────────────────────────────── Main Section ── */
export default function ProgramsSection() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <>
      <section id="programs" className="relative py-28 md:py-40 overflow-hidden" style={{ background: "#0A1128" }}>
        <div className="blob-4 absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(31,64,150,0.16)" }} />
        <div className="blob-3 absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(0,180,216,0.12)" }} />
        <DecorativeLines variant="cross" opacity={0.4} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.45em] uppercase mb-4" style={{ color: "rgba(0,180,216,0.6)" }}>Программы</p>
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
              Три основные практики
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(230,238,250,0.42)" }}>
              Каждая программа — отдельный мир. Нажмите на карточку, чтобы узнать детали.
            </p>
          </motion.div>

          {/* Banner cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {programs.map((p, i) => (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onClick={() => setSelected(p)}
                className="group relative rounded-3xl overflow-hidden text-left cursor-pointer transition-all duration-400"
                style={{
                  minHeight: "420px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = `1px solid ${p.accent}66`;
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.6), 0 0 50px -12px ${p.accent}55`;
                  el.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = "1px solid rgba(255,255,255,0.08)";
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.45)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Background image (scales on hover) */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={p.bg}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Darkening overlay for legibility */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, rgba(8,14,36,0.96) 0%, rgba(8,14,36,0.55) 45%, rgba(8,14,36,0.25) 100%)" }}
                />
                {/* Accent top line */}
                <div className="absolute top-0 left-[12%] right-[12%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}aa, transparent)` }} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8" style={{ minHeight: "420px" }}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: p.accent }}>{p.subtitle}</p>
                  <h3 className="font-serif text-3xl mb-3" style={{ color: "rgba(255,255,255,0.96)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(230,238,250,0.7)" }}>{p.short}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: p.accent }}
                  >
                    Подробнее <ArrowRight size={15} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Practice modal */}
      <AnimatePresence>
        {selected && <PracticeModal program={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
