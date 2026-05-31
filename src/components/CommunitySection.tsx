"use client";
import { motion } from "framer-motion";
import DecorativeLines from "@/components/DecorativeLines";

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

      <div className="max-w-3xl mx-auto px-8 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
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
      </div>
    </section>
  );
}
