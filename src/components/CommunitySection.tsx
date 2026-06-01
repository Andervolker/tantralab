"use client";
import { motion } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";
import DecorativeLines from "@/components/DecorativeLines";

const slots = [
  { hint: "Массаж", grad: "linear-gradient(135deg, rgba(0,180,216,0.35), rgba(31,64,150,0.18))", glow: "rgba(0,180,216,0.3)" },
  { hint: "Телесные практики", grad: "linear-gradient(135deg, rgba(31,64,150,0.4), rgba(0,119,182,0.2)) ", glow: "rgba(31,64,150,0.32)" },
  { hint: "Новые направления", grad: "linear-gradient(135deg, rgba(0,180,216,0.3), rgba(31,64,150,0.18))", glow: "rgba(0,119,182,0.28)" },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1128 0%, #0d1a3a 30%, #101F42 55%, #0d1a3a 80%, #0A1128 100%)" }}
    >
      <div className="blob-2 absolute bottom-1/4 right-[8%] w-[560px] h-[560px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(0,119,182,0.26)" }} />
      <div className="blob-3 absolute top-1/4 left-[4%] w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(31,64,150,0.28)" }} />
      <DecorativeLines variant="arc" opacity={0.28} />

      <div className="max-w-5xl mx-auto px-8 md:px-12 relative z-10">
        {/* Heading + Lera's text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.45em] uppercase mb-6" style={{ color: "rgba(0,180,216,0.65)" }}>Сообщество</p>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-12"
            style={{
              background: "linear-gradient(135deg, #E6EEFA, #b8d4f0, #7eb8e8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 28px rgba(0,180,216,0.26))",
            }}
          >
            Ещё специалисты
          </h2>

          <p className="font-serif italic text-2xl md:text-3xl leading-[1.6] mb-8" style={{ color: "rgba(126,184,232,0.95)" }}>
            Это живое пространство, которое будет расти и развиваться вместе с людьми, которые его создают.
          </p>
          <p className="text-lg md:text-xl font-light leading-[1.8]" style={{ color: "rgba(230,238,250,0.68)" }}>
            Здесь будут появляться новые специалисты, практики, встречи и события.
          </p>
        </motion.div>

        {/* Invitation grid — placeholder slots for future masters */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-20 md:mt-24">
          {slots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 8px 28px rgba(0,0,0,0.3), 0 0 40px -22px ${s.glow}`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${s.glow.replace("0.3", "0.1").replace("0.32", "0.1").replace("0.28", "0.1")} 0%, transparent 60%)` }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-10 md:py-12 min-h-[150px] md:min-h-[180px]">
                <div
                  className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: s.grad, boxShadow: `0 0 18px -5px ${s.glow}` }}
                >
                  <Plus size={20} className="text-white/80" />
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: "rgba(230,238,250,0.82)" }}>{s.hint}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase flex items-center gap-1.5" style={{ color: "rgba(0,180,216,0.55)" }}>
                  <Sparkles size={11} /> Скоро
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-sm font-light mt-16"
          style={{ color: "rgba(230,238,250,0.4)" }}
        >
          Хотите присоединиться к пространству как мастер? <a href="#contacts" className="underline-offset-4 hover:underline" style={{ color: "rgba(0,180,216,0.8)" }}>Напишите нам</a>
        </motion.p>
      </div>
    </section>
  );
}
