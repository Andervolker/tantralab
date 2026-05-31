"use client";
import { motion, type Variants } from "framer-motion";

const heroText: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};

const heroLine: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ocean background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/ocean.jpg')" }} />
      {/* Depth overlays */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,17,40,0.88) 0%, rgba(16,31,66,0.72) 50%, rgba(10,17,40,0.68) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: "linear-gradient(to top, #0A1128, transparent)" }} />
      {/* Glowing ambient spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-1 absolute top-[22%] right-[14%] w-[520px] h-[520px] rounded-full blur-[140px]" style={{ background: "rgba(0,119,182,0.30)" }} />
        <div className="blob-2 absolute bottom-[18%] left-[8%] w-[440px] h-[440px] rounded-full blur-[140px]" style={{ background: "rgba(31,64,150,0.32)" }} />
        <div className="blob-3 absolute top-[55%] right-[35%] w-[320px] h-[320px] rounded-full blur-[130px]" style={{ background: "rgba(0,180,216,0.18)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 pt-32 pb-24 w-full text-center">
        <motion.div variants={heroText} initial="hidden" animate="visible" className="space-y-10">
          <motion.p
            variants={heroLine}
            className="text-xs md:text-sm tracking-[0.5em] uppercase font-light"
            style={{ color: "rgba(0,180,216,0.7)" }}
          >
            Пространство живого контакта
          </motion.p>

          <motion.h1 variants={heroLine} className="font-serif leading-[1.12]">
            <span
              className="block"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                background: "linear-gradient(135deg, #E6EEFA 0%, #b8d4f0 50%, #7eb8e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 44px rgba(0,180,216,0.32))",
              }}
            >
              Добро пожаловать
            </span>
            <span
              className="block mt-2 italic"
              style={{
                fontSize: "clamp(2.1rem, 5vw, 4rem)",
                background: "linear-gradient(135deg, #c8dff8 0%, #91c3f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              в Океан ощущений
            </span>
          </motion.h1>

          <motion.p
            variants={heroLine}
            className="text-lg md:text-2xl leading-[1.7] font-light max-w-2xl mx-auto"
            style={{ color: "rgba(230,238,250,0.78)" }}
          >
            Это пространство про тело, прикосновение, чувствование и живой контакт с собой.
          </motion.p>

          <motion.div variants={heroLine} className="flex items-center justify-center gap-7 pt-4">
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "rgba(31,64,150,0.28)",
                border: "1px solid rgba(0,180,216,0.4)",
                color: "rgba(230,238,250,0.92)",
                boxShadow: "0 0 28px -6px rgba(0,180,216,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              Узнать больше
            </a>
            <a
              href="#contacts"
              className="text-sm tracking-wider transition-colors duration-300"
              style={{ color: "rgba(230,238,250,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.92)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,238,250,0.5)")}
            >
              Связаться →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
