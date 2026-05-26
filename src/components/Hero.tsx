"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import DecorativeLines from "@/components/DecorativeLines";

const stagger: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#131926" }}>
      {/* Ambient blobs */}
      <div className="blob-1 absolute top-[20%] left-[10%] w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none" style={{ background: "rgba(109,40,217,0.18)" }} />
      <div className="blob-2 absolute bottom-[15%] right-[8%] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(124,58,237,0.13)" }} />
      <div className="blob-3 absolute top-[55%] right-[30%] w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(168,85,247,0.10)" }} />
      <div className="blob-4 absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(67,20,100,0.18)" }} />

      <DecorativeLines variant="radial" opacity={0.55} />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            className="order-2 lg:order-1 space-y-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-purple-400/65 text-xs tracking-[0.45em] uppercase font-light">
              Пространство сакрального контакта
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-serif leading-[1.08]">
              <span
                className="block text-6xl md:text-7xl xl:text-8xl font-light"
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #e9d5ff 40%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 40px rgba(168,85,247,0.35))",
                }}
              >
                Валерия.
              </span>
              <span className="block mt-4 text-3xl md:text-4xl xl:text-[2.6rem] font-light text-white/68 leading-snug">
                Проводник в мир<br />
                сакрального контакта<br />
                и телесной глубины
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/38 text-lg font-light leading-relaxed">
              Телесный терапевт · Психолог<br />
              Мастер Тантры и массажа
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-1">
              <a
                href="#programs"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-[1.04]"
                style={{
                  background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                  boxShadow: "0 0 32px -8px rgba(147,51,234,0.65), 0 4px 20px rgba(0,0,0,0.45)",
                }}
              >
                Исследовать практики <span className="text-purple-200 text-base">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm border border-white/15 text-white/60 hover:border-purple-400/45 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                Записаться
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
              <span className="text-purple-500/35 text-xs">✦</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Outer glow pulse */}
              <div
                className="absolute -inset-6 rounded-[2.8rem] blur-3xl glow-pulse pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(147,51,234,0.28) 0%, rgba(109,40,217,0.12) 50%, transparent 75%)" }}
              />

              {/* Gradient border */}
              <div
                className="relative rounded-[2rem] p-[1.5px]"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.55), rgba(109,40,217,0.2), rgba(88,28,135,0.08))",
                  boxShadow: "0 24px 70px rgba(0,0,0,0.65), 0 0 80px -20px rgba(147,51,234,0.35)",
                }}
              >
                <div className="overflow-hidden rounded-[calc(2rem-1px)]">
                  <Image
                    src="/lera-buben.jpg"
                    alt="Валерия — мастер Тантры и телесный терапевт"
                    width={460}
                    height={600}
                    className="block w-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ height: "600px", maxWidth: "460px" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131926]/65 via-transparent to-transparent pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, transparent 55%)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#131926] to-transparent pointer-events-none" />
    </section>
  );
}
