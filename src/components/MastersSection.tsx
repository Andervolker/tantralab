"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

const masters = [
  {
    id: "lera",
    name: "Валерия",
    role: "Телесный терапевт · Психолог · Мастер Тантры",
    photo: "/lera_master.jpg",
    description:
      "Проводник в мир телесной осознанности и сакрального контакта. Сочетает глубокое психологическое понимание с практиками работы с телом, создавая безопасное пространство для подлинной трансформации.",
    character:
      "Мягкая и внимательная, она чувствует тело клиента как открытую книгу — там, где другие торопятся, Валерия даёт время. Больше всего любит момент, когда напряжение, копившееся годами, наконец отпускает.",
    strengths: ["Чуткость и безоценочность", "Психологическая глубина", "Работа с зажимами и контролем"],
    accent: "#00B4D8",
  },
  {
    id: "lena",
    name: "Елена",
    role: "Мастер телесных практик · Сознание и эмоции",
    photo: "/lera_modal1.jpg",
    description:
      "Работает на стыке телесных практик и глубинной работы с эмоциями и сознанием. Её сессии помогают выйти за пределы привычных паттернов и встретить собственную внутреннюю природу.",
    character:
      "Спокойная сила и ясность — рядом с Еленой легко перестать контролировать и начать чувствовать. Обожает работать в дуэте, где две пары рук ведут человека глубже, чем он мог бы пойти один.",
    strengths: ["Работа с эмоциями", "Формат «4 руки»", "Бережное сопровождение"],
    accent: "#7eb8e8",
  },
  {
    id: "andrey",
    name: "Андрей",
    role: "Энерготерапевт · Мастер Тантры",
    photo: "/andrey1.jpg",
    description:
      "Мастер тантрических и энергетических практик. Работает с телом через призму энергии и глубокого присутствия — безопасное пространство для любого запроса.",
    character:
      "Сочетает мужскую силу и тонкость. Уверенное, заземляющее присутствие, рядом с которым возникает доверие. Больше всего ценит парные практики, где партнёры заново открывают друг друга.",
    strengths: ["Энергетическая работа", "Парные практики", "Заземление и доверие"],
    accent: "#1F4096",
  },
];

export default function MastersSection() {
  return (
    <section
      id="masters"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 18%, #101F42 45%, #0d1a3a 75%, #0A1128 100%)" }}
    >
      <div className="blob-3 absolute top-[15%] right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(0,119,182,0.22)" }} />
      <div className="blob-1 absolute bottom-[15%] left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(31,64,150,0.22)" }} />
      <DecorativeLines variant="arc" opacity={0.4} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="text-center mb-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 font-light" style={{ color: "rgba(0,180,216,0.6)" }}>Команда</p>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(0,180,216,0.2))",
            }}
          >
            Профили мастеров
          </h2>
          <p className="text-sm font-light max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(230,238,250,0.42)" }}>
            Каждый мастер несёт уникальный путь. Выбор — за вами. Сообщество специалистов.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start gap-4 rounded-2xl p-4 md:p-5 mb-16 max-w-2xl mx-auto"
          style={{ background: "rgba(120,20,30,0.15)", border: "1px solid rgba(244,63,94,0.18)" }}
        >
          <AlertTriangle size={16} className="text-rose-400/70 flex-shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,200,200,0.55)" }}>
            <strong className="font-medium" style={{ color: "rgba(255,200,200,0.75)" }}>Внимание:</strong>{" "}
            Наши сессии — это не про интимные услуги. Это пространство глубокого контакта, расслабления и бережной работы с телом и сознанием.
          </p>
        </motion.div>

        {/* Masters grid — text-informational */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {masters.map((master, i) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(230,238,250,0.05)",
              }}
            >
              {/* Portrait */}
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={master.photo}
                  alt={master.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,17,40,0.95) 0%, rgba(10,17,40,0.25) 45%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-serif text-2xl mb-1" style={{ color: "rgba(255,255,255,0.96)" }}>{master.name}</h3>
                  <p className="text-xs leading-relaxed px-2" style={{ color: master.accent }}>{master.role}</p>
                </div>
              </div>

              {/* Text block */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(230,238,250,0.68)" }}>
                  {master.description}
                </p>
                <p className="text-sm leading-relaxed italic mb-6" style={{ color: "rgba(230,238,250,0.5)" }}>
                  {master.character}
                </p>

                <div className="mt-auto">
                  <p className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(0,180,216,0.5)" }}>Сильные стороны</p>
                  <div className="flex flex-wrap gap-2">
                    {master.strengths.map((s, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-xs"
                        style={{
                          background: `${master.accent}14`,
                          border: `1px solid ${master.accent}33`,
                          color: "rgba(230,238,250,0.72)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
