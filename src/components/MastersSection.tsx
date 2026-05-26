"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, AlertTriangle, X } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

interface AccordionItemProps {
  title: string;
  content: string;
}

function AccordionItem({ title, content }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm text-white/68 group-hover:text-white/90 transition-colors duration-200 font-light tracking-wide pr-4">
          {title}
        </span>
        <ChevronDown
          size={15}
          className={`text-purple-400/55 flex-shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-purple-400" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/42 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

const masters = [
  {
    name: "Валерия",
    role: "Телесный терапевт · Психолог · Мастер Тантры",
    photo: "/lera.jpg",
    description:
      "Валерия — проводник в мир телесной осознанности и сакрального контакта. Её подход сочетает глубокое психологическое понимание с практиками работы с телом, создавая безопасное пространство для подлинной трансформации.",
    forWhom: [
      "Хроническая усталость и истощение",
      "Гиперконтроль и тревожность",
      "Телесные зажимы и напряжение",
      "Потеря чувствительности и контакта с собой",
      "Трудности в отношениях и близости",
    ],
    programs: [
      {
        title: "Индивидуальный тантра массаж",
        content:
          "Работа с языком тела — зажимы, блоки, хроническое напряжение. Через осознанное прикосновение тело начинает отпускать то, что накапливалось годами. Сессия проходит в атмосфере полного доверия и безопасности.",
      },
      {
        title: "Тантра для пар (соло)",
        content:
          "Индивидуальная подготовительная сессия для одного из партнёров. Помогает раскрыть внутренние блоки, мешающие близости, прежде чем выйти в совместное пространство.",
      },
      {
        title: "Дыхательные практики",
        content:
          "Пранаяма и осознанное дыхание как инструмент работы с эмоциями и телесными блоками. Дыхание — самый прямой путь к нервной системе и глубинным состояниям.",
      },
      {
        title: "Шамбала (дуэт с мастером)",
        content:
          "Уникальная сессия в 4 руки — Валерия и второй мастер ведут вас одновременно. Этот формат обходит ментальный контроль и позволяет уйти в глубокое расслабление.",
      },
      {
        title: "Тантра для пар (дуэт с Андреем)",
        content:
          "Совместная сессия для пары с двумя мастерами — Валерией и Андреем. Безопасное пространство для восстановления доверия, чувствительности и глубины контакта между партнёрами.",
      },
      {
        title: "Мнуши",
        content:
          "Особая практика глубокого расслабления через специфические техники работы с телом. Создаёт состояние полного отпускания и внутреннего покоя.",
      },
    ],
  },
  {
    name: "Елена",
    role: "Мастер телесных практик · Работа с сознанием и эмоциями",
    photo: "/lena.jpg",
    description:
      "Елена работает на стыке телесных практик и глубинной работы с эмоциями и сознанием. Её сессии помогают выйти за пределы привычных паттернов, почувствовать себя в теле и встретить собственную внутреннюю природу.",
    forWhom: [
      "Эмоциональные блоки и подавленные чувства",
      "Ментальный гиперконтроль",
      "Поиск внутреннего ресурса",
      "Работа с травматическим опытом",
    ],
    programs: [
      {
        title: "Индивидуальный массаж",
        content:
          "Работа с телом как с пространством памяти и эмоций. Бережные техники, направленные на освобождение хронических напряжений и восстановление живого контакта с собой.",
      },
      {
        title: "Шамбала (сессия в 4 руки с Валерией)",
        content:
          "Совместная сессия с Валерией, созданная для обхода контроля ума. Когда двое мастеров ведут одновременно — разуму некуда бежать, остаётся только присутствие.",
      },
      {
        title: "Консультация",
        content:
          "Индивидуальная встреча для прояснения запроса, выбора подходящего формата и знакомства с пространством. Без обязательств, в полной безопасности.",
      },
    ],
  },
  {
    name: "Андрей",
    role: "Энерготерапевт · Мастер Тантры",
    photo: "/andrey.jpg",
    description:
      "Андрей — мастер тантрических и энергетических практик. Работает с телом через призму энергии и глубокого присутствия. В его практиках сочетаются мужская сила и тонкость — безопасное пространство для любого запроса.",
    forWhom: [
      "Поиск мужской энергии и внутренней силы",
      "Работа с парными отношениями",
      "Глубокие энергетические запросы",
      "Практики для пар любого состава",
    ],
    programs: [
      {
        title: "Индивидуальные тантрические практики",
        content:
          "Работа с телом через тантрические техники — энергетический контакт, осознанное присутствие, пробуждение чувствительности. Формат адаптируется под запрос.",
      },
      {
        title: "Телесно-энергетические практики для пар (дуэт с Валерией)",
        content:
          "Контакты-настрои, синхронное дыхание, развитие доверия и чувствительности между партнёрами. Не требует физической подготовки.",
      },
      {
        title: "Тантра для пар (соло)",
        content:
          "Индивидуальная сессия для одного партнёра — помогает раскрыть личное пространство и подготовиться к совместной практике.",
      },
    ],
  },
];

const glowColors = [
  "rgba(139,92,246,0.28)",
  "rgba(124,58,237,0.28)",
  "rgba(109,40,217,0.28)",
];

type Master = (typeof masters)[0];

function MasterModal({ master, onClose }: { master: Master; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(8, 10, 20, 0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: "linear-gradient(160deg, rgba(26,16,64,0.97) 0%, rgba(19,14,40,0.98) 100%)",
          border: "1px solid rgba(139,92,246,0.22)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 60px -20px rgba(139,92,246,0.3)",
        }}
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-[15%] right-[15%] h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 z-20"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
        >
          <X size={16} className="text-white/60" />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div
              className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(139,92,246,0.3)",
                boxShadow: "0 0 20px -5px rgba(139,92,246,0.4)",
              }}
            >
              <Image src={master.photo} alt={master.name} fill className="object-cover object-top" sizes="80px" />
            </div>
            <div className="pt-1">
              <h3
                className="font-serif text-3xl mb-1"
                style={{
                  background: "linear-gradient(135deg, #fff, #e9d5ff, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {master.name}
              </h3>
              <p className="text-purple-300/55 text-xs tracking-wider leading-relaxed">{master.role}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-purple-100/72 text-sm leading-relaxed mb-8">{master.description}</p>

          {/* For whom */}
          <div className="mb-8">
            <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-4">Для кого подходит</p>
            <ul className="space-y-2">
              {master.forWhom.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-purple-100/58 text-sm leading-relaxed">
                  <span
                    className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "rgba(139,92,246,0.9)", boxShadow: "0 0 6px 2px rgba(139,92,246,0.4)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="mb-8">
            <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-4">Программы</p>
            <div
              className="rounded-2xl border border-white/8 px-5"
              style={{
                background: "rgba(10,13,26,0.7)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {master.programs.map((prog, j) => (
                <AccordionItem key={j} title={prog.title} content={prog.content} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-medium tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.75), rgba(109,40,217,0.75))",
              border: "1px solid rgba(139,92,246,0.4)",
              boxShadow: "0 8px 24px rgba(109,40,217,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(109,40,217,0.45)";
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(109,40,217,0.9))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(109,40,217,0.3)";
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, rgba(139,92,246,0.75), rgba(109,40,217,0.75))";
            }}
          >
            Записаться к{" "}
            {master.name === "Андрей" ? "Андрею" : master.name === "Елена" ? "Елене" : "Валерии"}
            <span>→</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MastersSection() {
  const [selectedMaster, setSelectedMaster] = useState<Master | null>(null);

  return (
    <>
      <section
        id="masters"
        className="relative py-28 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #131926 0%, #1a0d35 20%, #311042 45%, #2a0a3a 65%, #131926 100%)",
        }}
      >
        <div
          className="blob-3 absolute top-[15%] right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
          style={{ background: "rgba(139,92,246,0.28)" }}
        />
        <div
          className="blob-1 absolute top-[50%] left-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: "rgba(88,28,135,0.26)" }}
        />
        <div
          className="blob-4 absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[180px] pointer-events-none"
          style={{ background: "rgba(190,18,60,0.18)" }}
        />
        <DecorativeLines variant="arc" opacity={0.5} />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">Мастера</p>
            <h2 className="font-serif text-4xl md:text-5xl text-center text-white/90 mb-5 leading-tight text-glow-sm">
              Профили мастеров
            </h2>
            <p className="text-purple-100/38 text-center mb-10 max-w-xl mx-auto text-sm leading-relaxed">
              Каждый мастер несёт уникальный путь. Выбор — за вами.
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-4 rounded-2xl p-5 md:p-6 mb-20 max-w-3xl mx-auto"
            style={{
              background: "rgba(120,20,30,0.2)",
              border: "1px solid rgba(244,63,94,0.2)",
              boxShadow: "0 0 40px -15px rgba(244,63,94,0.15)",
            }}
          >
            <AlertTriangle size={18} className="text-rose-400/75 flex-shrink-0 mt-0.5" />
            <p className="text-rose-200/65 text-sm leading-relaxed">
              <strong className="text-rose-300/88 font-medium">Внимание:</strong>{" "}
              Наши сессии — это не про интимные услуги. Это пространство глубокого контакта,
              расслабления и бережной работы с телом и сознанием.
            </p>
          </motion.div>

          {/* Master profiles */}
          <div className="space-y-32">
            {masters.map((master, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
              >
                {/* Photo — clickable to open modal */}
                <div className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedMaster(master)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedMaster(master)}
                    aria-label={`Открыть профиль — ${master.name}`}
                  >
                    {/* Glow aura */}
                    <div
                      className="absolute -inset-4 rounded-[2.8rem] blur-3xl glow-slow pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse, ${glowColors[i]} 0%, transparent 70%)`,
                      }}
                    />
                    {/* Gradient border wrapper */}
                    <div
                      className="relative rounded-[2rem] p-[1px] transition-all duration-400"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(88,28,135,0.15), rgba(139,92,246,0.05))",
                        boxShadow: `0 20px 60px rgba(0,0,0,0.55), 0 0 60px -20px ${glowColors[i]}`,
                      }}
                    >
                      <div className="relative overflow-hidden rounded-[calc(2rem-1px)] aspect-[3/4] w-full">
                        <Image
                          src={master.photo}
                          alt={master.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#131926]/85 via-[#131926]/10 to-transparent pointer-events-none" />
                        {/* Hover overlay hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div
                            className="px-5 py-2.5 rounded-full text-white/90 text-sm font-light tracking-wide"
                            style={{
                              background: "rgba(109,40,217,0.7)",
                              backdropFilter: "blur(8px)",
                              border: "1px solid rgba(139,92,246,0.4)",
                            }}
                          >
                            Подробнее о мастере
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="font-serif text-3xl md:text-4xl text-white mb-1">{master.name}</h3>
                          <p className="text-purple-300/65 text-xs tracking-wider">{master.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <p className="text-purple-100/72 leading-relaxed mb-8 text-base">{master.description}</p>

                  {/* For whom */}
                  <div className="mb-8">
                    <p className="text-purple-300/52 text-xs tracking-[0.25em] uppercase mb-4">Для кого подходит</p>
                    <ul className="space-y-2.5">
                      {master.forWhom.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-purple-100/60 text-sm leading-relaxed">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{
                              background: "rgba(139,92,246,0.8)",
                              boxShadow: "0 0 6px 2px rgba(139,92,246,0.4)",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs accordion */}
                  <div>
                    <p className="text-purple-300/52 text-xs tracking-[0.25em] uppercase mb-4">Программы</p>
                    <div
                      className="rounded-2xl border border-white/8 px-5"
                      style={{
                        background: "rgba(10,13,26,0.7)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                      }}
                    >
                      {master.programs.map((prog, j) => (
                        <AccordionItem key={j} title={prog.title} content={prog.content} />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4 mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm text-purple-400/65 hover:text-purple-300 transition-colors duration-300 group/cta"
                    >
                      Записаться к{" "}
                      {master.name === "Андрей"
                        ? "Андрею"
                        : master.name === "Елена"
                        ? "Елене"
                        : "Валерии"}
                      <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </a>
                    <span className="text-white/12">·</span>
                    <button
                      onClick={() => setSelectedMaster(master)}
                      className="text-sm text-white/35 hover:text-purple-300/70 transition-colors duration-300"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master modal */}
      <AnimatePresence>
        {selectedMaster && (
          <MasterModal master={selectedMaster} onClose={() => setSelectedMaster(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
