"use client";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";
import BackdropStripes from "@/components/BackdropStripes";

type Contact = { label: string; value: string; href: string; icon: "tg" | "wa" };

const masters: { name: string; accent: string; contacts: Contact[] }[] = [
  {
    name: "Валерия",
    accent: "#00B4D8",
    contacts: [
      { label: "Telegram", value: "Написать Валерии", href: "https://t.me/leraindigo", icon: "tg" },
    ],
  },
  {
    name: "Елена",
    accent: "#7eb8e8",
    contacts: [
      { label: "Telegram", value: "Написать Елене", href: "https://t.me/Elena_ES_12", icon: "tg" },
    ],
  },
  {
    name: "Андрей",
    accent: "#38bdf8",
    contacts: [
      { label: "Telegram", value: "Написать Андрею", href: "https://t.me/andervolker", icon: "tg" },
    ],
  },
];

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="relative py-32 md:py-48 overflow-hidden scroll-mt-24"
      style={{ background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 45%, #101F42 100%)" }}
    >
      <BackdropStripes />
      <div className="blob-1 absolute top-0 right-0 w-[620px] h-[620px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(0,119,182,0.28)" }} />
      <div className="blob-2 absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(31,64,150,0.30)" }} />
      <div className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(0,180,216,0.10)" }} />
      <DecorativeLines variant="radial" opacity={0.3} />

      <div className="max-w-4xl mx-auto px-8 md:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="text-center mb-20 md:mb-28"
        >
          <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "rgba(0,180,216,0.65)" }}>Центр связи</p>
          <h2
            className="font-serif text-4xl md:text-6xl leading-tight mb-7"
            style={{
              background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0,180,216,0.28))",
            }}
          >
            Не знаете что выбрать?
          </h2>
          <p className="text-base md:text-lg font-light leading-[1.8] max-w-2xl mx-auto" style={{ color: "rgba(230,238,250,0.68)" }}>
            Пишите, пожалуйста, в любой из мессенджеров — мастера свяжутся с вами напрямую и помогут выбрать формат.
          </p>
        </motion.div>

        {/* 3 floating master contact blocks — no rigid frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {masters.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-7">
                <span className="h-px w-6" style={{ background: `linear-gradient(90deg, transparent, ${m.accent})` }} />
                <h3 className="font-serif text-2xl" style={{ color: "rgba(230,238,250,0.95)" }}>{m.name}</h3>
                <span className="h-px w-6" style={{ background: `linear-gradient(90deg, ${m.accent}, transparent)` }} />
              </div>

              <div className="space-y-5">
                {m.contacts.map((c, j) => (
                  <a
                    key={j}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transition-all duration-300"
                  >
                    <p className="text-[10px] tracking-[0.25em] uppercase mb-1.5" style={{ color: "rgba(230,238,250,0.35)" }}>
                      {c.label}
                    </p>
                    <span
                      className="inline-flex items-center gap-2.5 text-base font-light transition-all duration-300 group-hover:scale-[1.04]"
                      style={{ color: m.accent, filter: `drop-shadow(0 0 12px ${m.accent}55)` }}
                    >
                      {c.icon === "tg" ? <Send size={15} /> : <MessageCircle size={15} />}
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-sm font-light mt-24 md:mt-32"
          style={{ color: "rgba(230,238,250,0.3)" }}
        >
          Добро пожаловать в «Океан ощущений»
        </motion.p>
      </div>
    </section>
  );
}
