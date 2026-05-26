"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Что происходит на первой сессии?",
    a: "Начинаем с разговора — обсуждаем ваш запрос, страхи, ожидания. Никакого форсирования и обязательств. Первая встреча задаёт темп: столько и того, сколько вы готовы. Мастер не давит и не ведёт туда, куда вы не готовы.",
  },
  {
    q: "Это интимные услуги?",
    a: "Нет. Наши практики — это работа с телом как с картой психики. Весь процесс происходит в полной безопасности, с чётко соблюдёнными границами и уважением к вашему пространству. Интимный контакт полностью исключён.",
  },
  {
    q: "Нужна ли физическая подготовка?",
    a: "Абсолютно нет. Практики адаптируются под ваше состояние, возраст и физические возможности. Приходите такими, какие вы есть — в любом состоянии.",
  },
  {
    q: "Насколько это конфиденциально?",
    a: "Полностью. Мы не раскрываем информацию о клиентах и не ведём публичных записей. То, что происходит в сессии, остаётся только между вами и мастером.",
  },
  {
    q: "Чем тантра отличается от обычного массажа?",
    a: "Обычный массаж работает с мышцами. Тантра работает с телом как с целостной системой — через осознанное прикосновение, дыхание, энергию и присутствие. Цель — не расслабление мышц, а глубинная встреча с собой.",
  },
  {
    q: "Как выбрать мастера и формат?",
    a: "Если не знаете, с чего начать — напишите нам. Мы поможем разобраться в запросе и подобрать подходящего мастера без давления и обязательств. Иногда достаточно короткого разговора.",
  },
  {
    q: "Можно ли прийти, если партнёр против?",
    a: "Да, начать можно с индивидуальной сессии. Иногда один личный опыт меняет отношение партнёра — не через убеждение, а через живой пример изменений в вас.",
  },
  {
    q: "Сколько сессий нужно для результата?",
    a: "Многие замечают изменения уже после первой встречи. Глубокая трансформация — это процесс. Мы не продаём абонементы и не настаиваем на числе сессий. Вы сами чувствуете, когда хочется продолжить.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b border-white/7 last:border-0 group"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-5 text-left gap-6"
      >
        <span className={`text-base font-light leading-snug transition-colors duration-200 ${isOpen ? "text-white/88" : "text-white/60 group-hover:text-white/78"}`}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${isOpen ? "rotate-180 text-purple-400" : "text-purple-400/45"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/45 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #131926 0%, #0f0a28 35%, #180e38 55%, #0f0a28 75%, #131926 100%)" }}
    >
      {/* Blobs */}
      <div className="blob-4 absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(109,40,217,0.22)" }} />
      <div className="blob-3 absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(88,28,135,0.20)" }} />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400/55 text-xs tracking-[0.45em] uppercase mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white/90 leading-tight">Часто задаваемые вопросы</h2>
          <p className="text-purple-200/45 mt-4 text-sm leading-relaxed">
            Всё, что хотели спросить, но не решились
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(9,11,22,0.96)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.3), 0 20px 60px rgba(0,0,0,0.4), 0 0 60px -20px rgba(109,40,217,0.15)",
          }}
        >
          {/* Top glow line */}
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4) 30%, rgba(217,70,239,0.25) 50%, rgba(168,85,247,0.4) 70%, transparent)" }} />

          <div className="px-7 md:px-10 py-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom glow line */}
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-white/25 text-sm mb-4">Не нашли ответ?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-purple-500/22 text-purple-300/70 hover:text-purple-300 hover:border-purple-400/40 hover:bg-purple-500/8 transition-all duration-300"
          >
            Написать напрямую →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
