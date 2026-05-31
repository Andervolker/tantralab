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
    directions: [
      "Тантра массаж",
      "Мнуши - массаж",
      "Тантрические практики",
      "Дыхательные упражнения",
      "Шамбала",
      "Тантра для пар",
    ],
    accent: "#00B4D8",
  },
  {
    id: "lena",
    name: "Елена",
    role: "Мастер телесных практик · Сознание и эмоции",
    photo: "/lena.jpg",
    description:
      "Работает на стыке телесных практик и глубинной работы с эмоциями и сознанием. Её сессии помогают выйти за пределы привычных паттернов и встретить собственную внутреннюю природу.",
    character:
      "Спокойная сила и ясность — рядом с Еленой легко перестать контролировать и начать чувствовать. Обожает работать в дуэте, где две пары рук ведут человека глубже, чем он мог бы пойти один.",
    directions: ["Тантра массаж", "Шамбала", "Консультация"],
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
    directions: ["Тантра для пар", "Тантрические практики", "Чайная церемония", "Фестивали"],
    accent: "#1F4096",
  },
];

export default function MastersSection() {
  return (
    <section
      id="masters"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 18%, #101F42 45%, #0d1a3a 75%, #0A1128 100%)" }}
    >
      <div className="blob-3 absolute top-[12%] right-0 w-[640px] h-[640px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(0,119,182,0.28)" }} />
      <div className="blob-1 absolute bottom-[12%] left-0 w-[540px] h-[540px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(31,64,150,0.28)" }} />
      <DecorativeLines variant="arc" opacity={0.35} />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="text-center mb-10">
          <p className="text-xs tracking-[0.4em] uppercase mb-5 font-light" style={{ color: "rgba(0,180,216,0.65)" }}>Команда</p>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-5"
            style={{
              background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(0,180,216,0.25))",
            }}
          >
            Профили мастеров
          </h2>
          <p className="text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(230,238,250,0.5)" }}>
            Каждый мастер несёт уникальный путь. Выбор — за вами. Сообщество специалистов.
          </p>
        </motion.div>

        {/* Disclaimer — borderless, soft */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-start gap-3 max-w-2xl mx-auto mb-24 md:mb-32 text-center justify-center"
        >
          <AlertTriangle size={15} className="text-rose-400/55 flex-shrink-0 mt-1" />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,200,200,0.5)" }}>
            Наши сессии — это не про интимные услуги. Это пространство глубокого контакта, расслабления и бережной работы с телом и сознанием.
          </p>
        </motion.div>

        {/* Master profiles — alternating, borderless, airy */}
        <div className="space-y-28 md:space-y-40">
          {masters.map((master, i) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              {/* Portrait — soft floating, no harsh frame */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative mx-auto max-w-[360px]">
                  <div
                    className="absolute -inset-6 rounded-full blur-3xl glow-slow pointer-events-none"
                    style={{ background: `radial-gradient(ellipse, ${master.accent}33 0%, transparent 70%)` }}
                  />
                  <div className="relative rounded-[2rem] overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}>
                    <Image
                      src={master.photo}
                      alt={master.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,17,40,0.6) 0%, transparent 45%)" }} />
                  </div>
                </div>
              </div>

              {/* Text — airy, no boxes */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""} px-1 md:px-2`}>
                <h3 className="font-serif text-3xl md:text-4xl mb-2" style={{ color: "rgba(230,238,250,0.95)" }}>{master.name}</h3>
                <p className="text-xs tracking-[0.18em] uppercase mb-7" style={{ color: master.accent }}>{master.role}</p>

                <p className="text-base leading-[1.9] font-light mb-5" style={{ color: "rgba(230,238,250,0.72)" }}>
                  {master.description}
                </p>
                <p className="text-base leading-[1.9] font-light italic mb-9" style={{ color: "rgba(230,238,250,0.55)" }}>
                  {master.character}
                </p>

                {/* Направления — clean list, no pills */}
                <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.6)" }}>Направления</p>
                <ul className="space-y-3">
                  {master.directions.map((d, j) => (
                    <li key={j} className="flex items-center gap-3.5 text-base font-light" style={{ color: "rgba(230,238,250,0.8)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: master.accent, boxShadow: `0 0 8px 1px ${master.accent}` }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
