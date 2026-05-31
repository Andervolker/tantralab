"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";
import BackdropStripes from "@/components/BackdropStripes";

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
    accent: "#22d3ee",
    imgPosition: "center top",
    gallery: ["/lera_modal1.jpg", "/lera_modal2.jpg", "/lera_modal3.jpg", "/lera_modal4.jpg"],
    showGallery: true,
  },
  {
    id: "shambala",
    title: "Шамбала",
    subtitle: "Сессия в 4 руки",
    bg: "/shambala1.jpg",
    short: "Пространство, где можно начать исследовать себя — красиво, интересно и глубоко.",
    description:
      "У каждого человека есть свой жизненный потенциал, данный природой. В нём уже заложены таланты, особенности характера, влияние на людей, связь с материальным миром, способности притягивать определённые события и возможности. Но не всегда это получается увидеть, почувствовать и раскрыть самостоятельно.\n\nСессия Шамбала — это пространство, где можно начать исследовать себя красиво, интересно и глубоко. Понять свои сильные стороны, увидеть внутренние ресурсы, почувствовать своё направление и узнать, как поддерживать в ресурсе свою жизненную силу и энергию в повседневной жизни.\n\nСессия подходит для женщин и мужчин — для каждого, кто чувствует отклик и готов к бережной, глубокой работе с телом, внутренним состоянием и личной трансформации.",
    accent: "#38bdf8",
    imgPosition: "center center",
    gallery: [],
    showGallery: false,
  },
  {
    id: "tantra-par",
    title: "Тантра для пар",
    subtitle: "Совместные практики",
    bg: "/tantra_par.jpg",
    short: "Дуэтный формат с Андреем — возрождение чувствительности и доверия между партнёрами.",
    description:
      "Практики для двоих — возрождение чувствительности, доверия и глубины контакта между партнёрами. Дуэтный формат, который ведут Валерия и Андрей: контакты-настрои, синхронное дыхание, бережная работа с пространством между вами. Не требует физической подготовки — только желание снова почувствовать друг друга.",
    accent: "#22d3ee",
    imgPosition: "center 28%",
    gallery: [],
    showGallery: false,
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
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(10,17,40,0.8)" }}>
          <X size={16} style={{ color: "rgba(230,238,250,0.8)" }} />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────── Practice Modal ── */
function PracticeModal({ program, onClose }: { program: Program; onClose: () => void }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
            boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 60px -20px rgba(0,180,216,0.2)",
          }}
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Banner */}
          <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <Image
              src={program.bg}
              alt={program.title}
              fill
              className="w-full h-full object-cover"
              style={{ objectPosition: program.imgPosition }}
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,36,1) 0%, rgba(8,14,36,0.4) 50%, rgba(8,14,36,0.2) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-9">
              <p className="text-xs tracking-[0.3em] uppercase mb-1.5" style={{ color: program.accent }}>{program.subtitle}</p>
              <h3 className="font-serif text-3xl md:text-4xl" style={{ color: "rgba(230,238,250,0.95)" }}>{program.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center z-20 transition-all duration-200"
              style={{ background: "rgba(8,14,36,0.7)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(8,14,36,0.95)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(8,14,36,0.7)")}
            >
              <X size={16} style={{ color: "rgba(230,238,250,0.8)" }} />
            </button>
          </div>

          <div className="p-8 md:p-12">
            {/* Description — auto-split into paragraphs, line breaks preserved */}
            <div className="mb-10">
              {program.description.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-base leading-relaxed font-light whitespace-pre-line last:mb-0"
                  style={{ color: "rgba(230,238,250,0.74)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Gallery — only where present */}
            {program.showGallery && program.gallery.length > 0 && (
              <div className="mb-10">
                <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.55)" }}>Галерея практики</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {program.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl overflow-hidden cursor-zoom-in group"
                      style={{ aspectRatio: "3/4" }}
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
            )}

            {/* Unified anchor CTA → closes modal & scrolls to contacts */}
            <a
              href="#contacts"
              onClick={onClose}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-medium tracking-wide transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1F4096, #00B4D8)", boxShadow: "0 10px 30px rgba(0,180,216,0.32)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(0,180,216,0.5)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,180,216,0.32)")}
            >
              Записаться на практику <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>{lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}</AnimatePresence>
    </>
  );
}

/* ────────────────────────────────── Main Section ── */
export default function ProgramsSection() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <>
      <section id="programs" className="relative py-32 md:py-48 overflow-hidden" style={{ background: "#0A1128" }}>
        <BackdropStripes />
        <div className="blob-4 absolute bottom-0 left-1/4 w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none" style={{ background: "rgba(31,64,150,0.22)" }} />
        <div className="blob-3 absolute top-1/4 right-0 w-[380px] h-[380px] rounded-full blur-[140px] pointer-events-none" style={{ background: "rgba(0,180,216,0.18)" }} />
        <DecorativeLines variant="cross" opacity={0.3} />

        <div className="max-w-6xl mx-auto px-8 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.65)" }}>Программы</p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{
                background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(0,180,216,0.22))",
              }}
            >
              Три основные практики
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "rgba(230,238,250,0.5)" }}>
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
                style={{ minHeight: "440px", boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.6), 0 0 60px -12px ${p.accent}66`;
                  el.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={p.bg}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectPosition: p.imgPosition }}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,36,0.96) 0%, rgba(8,14,36,0.5) 45%, rgba(8,14,36,0.2) 100%)" }} />

                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-9" style={{ minHeight: "440px" }}>
                  <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: p.accent }}>{p.subtitle}</p>
                  <h3 className="font-serif text-3xl mb-3" style={{ color: "rgba(255,255,255,0.96)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(230,238,250,0.72)" }}>{p.short}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: p.accent }}>
                    Подробнее <ArrowRight size={15} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <PracticeModal program={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
