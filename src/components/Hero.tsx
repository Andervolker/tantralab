"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DecorativeLines from "@/components/DecorativeLines";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Animated ambient blobs ── */}
      <div className="blob-1 absolute top-1/4 left-[15%] w-[560px] h-[560px] bg-purple-700/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="blob-2 absolute bottom-[10%] right-[10%] w-[440px] h-[440px] bg-violet-600/14 rounded-full blur-[120px] pointer-events-none" />
      <div className="blob-3 absolute top-[60%] right-[35%] w-[320px] h-[320px] bg-fuchsia-700/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="blob-4 absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Decorative geometric lines */}
      <DecorativeLines variant="radial" opacity={0.6} />

      {/* Radial overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(88,28,135,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Text block ── */}
          <motion.div
            className="order-2 lg:order-1 space-y-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-purple-400/70 text-xs tracking-[0.4em] uppercase font-light"
            >
              Пространство сакрального контакта
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-serif leading-[1.1]">
              <span
                className="block text-6xl md:text-7xl xl:text-8xl font-light text-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #d8b4fe 45%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Валерия.
              </span>
              <span className="block mt-3 text-3xl md:text-4xl xl:text-[2.75rem] font-light text-white/72 leading-snug">
                Проводник в мир<br />
                сакрального контакта<br />
                и телесной глубины
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/38 text-lg font-light leading-relaxed max-w-md">
              Телесный терапевт&nbsp;·&nbsp;Психолог<br />
              Мастер Тантры и массажа
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-purple-900/50"
                style={{
                  background:
                    "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 50%, #a855f7 100%)",
                  boxShadow: "0 0 30px -8px rgba(139,92,246,0.6), 0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                Исследовать практики
                <span className="text-purple-200">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm border border-white/18 text-white/65 hover:border-purple-400/50 hover:text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
              >
                Записаться
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <span className="text-purple-400/40 text-xs tracking-widest">✦</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* ── Photo block ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group float-anim">
              {/* Multi-layer glow behind photo */}
              <div
                className="absolute -inset-6 rounded-[2.8rem] blur-3xl glow-pulse pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, rgba(217,70,239,0.15) 50%, transparent 75%)",
                }}
              />
              <div
                className="absolute -inset-2 rounded-[2.2rem] blur-xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(217,70,239,0.1), transparent 60%)",
                }}
              />

              {/* Gradient border wrapper */}
              <div
                className="relative rounded-[2rem] p-[1px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(217,70,239,0.2), rgba(88,28,135,0.1))",
                  boxShadow:
                    "0 0 0 1px rgba(139,92,246,0.1), 0 20px 60px rgba(0,0,0,0.6), 0 0 80px -20px rgba(139,92,246,0.3)",
                }}
              >
                <div className="relative overflow-hidden rounded-[calc(2rem-1px)] aspect-[3/4] w-full max-w-[480px]">
                  <Image
                    src="/lera-buben.jpg"
                    alt="Валерия — мастер Тантры и телесный терапевт"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/70 via-[#0b0f19]/10 to-transparent pointer-events-none" />
                  {/* Purple shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0b0f19] to-transparent pointer-events-none" />
    </section>
  );
}
