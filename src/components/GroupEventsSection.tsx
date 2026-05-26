"use client";
import { motion } from "framer-motion";
import { Users, Music2, Flame, Waves } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

const events = [
  {
    Icon: Users,
    title: "Тантра для пар",
    description:
      "Групповой формат для 6 пар. Практики близости, доверия и осознанного контакта в безопасном кругу единомышленников.",
    tag: "до 6 пар",
    iconGrad: "linear-gradient(135deg, rgba(109,40,217,0.5), rgba(139,92,246,0.3))",
    glow: "rgba(109,40,217,0.3)",
    borderGrad: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(88,28,135,0.15))",
  },
  {
    Icon: Music2,
    title: "Ecstatic Dance",
    description:
      "Свободный танец как медитация. Тело двигается интуитивно, ум отдыхает, энергия течёт. Живая музыка, никаких правил.",
    tag: "групповой",
    iconGrad: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(167,139,250,0.3))",
    glow: "rgba(124,58,237,0.28)",
    borderGrad: "linear-gradient(135deg, rgba(167,139,250,0.4), rgba(109,40,217,0.1))",
  },
  {
    Icon: Flame,
    title: "Тантра Церемония",
    description:
      "Ритуальное пространство для глубокого погружения. Медитации, практики присутствия, работа с энергией в группе.",
    tag: "церемония",
    iconGrad: "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(217,70,239,0.3))",
    glow: "rgba(168,85,247,0.28)",
    borderGrad: "linear-gradient(135deg, rgba(217,70,239,0.35), rgba(139,92,246,0.1))",
  },
  {
    Icon: Waves,
    title: "Саунд-хилинг",
    description:
      "Исцеление звуком под живую музыку. Поющие чаши, горловое пение, вибрации, которые проникают глубже слов.",
    tag: "живая музыка",
    iconGrad: "linear-gradient(135deg, rgba(79,70,229,0.5), rgba(109,40,217,0.3))",
    glow: "rgba(79,70,229,0.28)",
    borderGrad: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(79,70,229,0.1))",
  },
];

export default function GroupEventsSection() {
  return (
    <section id="events" className="relative py-28 md:py-40 overflow-hidden" style={{ background: "#131926" }}>
      <div className="blob-1 absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(79,70,229,0.15)" }} />
      <div className="blob-4 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(168,85,247,0.13)" }} />
      {/* Centered glow accent */}
      <div className="glow-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(109,40,217,0.08)" }} />
      <DecorativeLines variant="diagonal" opacity={0.5} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400/60 text-xs tracking-[0.4em] uppercase mb-4 text-center">Групповые форматы</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center text-white/85 mb-5 leading-tight text-glow-sm">
            Мероприятия и события
          </h2>
          <p className="text-white/32 text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed">
            Живые встречи, где тело, звук и пространство становятся единым
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {events.map((ev, i) => {
            const { Icon } = ev;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.75, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.035)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)`,
              }}
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: ev.borderGrad,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />

                {/* Inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${ev.glow.replace("0.3", "0.06").replace("0.28", "0.06")} 0%, transparent 55%)`,
                  }}
                />

                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start justify-between mb-7">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400"
                      style={{
                        background: ev.iconGrad,
                        boxShadow: `0 0 20px -4px ${ev.glow}`,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon size={20} className="text-white/80" />
                    </div>
                    <span className="text-xs text-purple-400/50 tracking-wider uppercase border border-purple-500/14 rounded-full px-3 py-1"
                      style={{ background: "rgba(139,92,246,0.05)" }}>
                      {ev.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white/90 mb-3">{ev.title}</h3>
                  <p className="text-white/42 text-sm leading-relaxed">{ev.description}</p>

                  <div
                    className="mt-7 h-px transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${ev.glow.replace("0.3", "0.35").replace("0.28", "0.35")} 0%, transparent 100%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
