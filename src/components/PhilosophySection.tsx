"use client";
import { motion } from "framer-motion";

const whyParagraphs = [
  "Возможно, вы искали массаж.",
  "Возможно, ваше тело устало от напряжения, стресса и постоянной спешки.",
  "Возможно, вам хочется расслабиться, восстановить силы, почувствовать больше лёгкости и удовольствия от жизни.",
  "Возможно, вы хотите перемен, но ещё не нашли свой вектор движения.",
  "А может быть, вы ищете более глубокий контакт с собой или со своим партнёром.",
  "Какой бы ни была причина, она важна.",
  "Мы верим, что путь к внутренним изменениям часто начинается с простого шага — внимания к своему телу и своим ощущениям.",
];

const spaceParagraphs = [
  "«Океан ощущений» – это сообщество специалистов, которые помогают людям восстанавливать связь с собой через тело.",
  "Здесь вы можете выбрать мастера под свой запрос: массажиста, телесного практика или специалиста другого направления. Для каждого создана отдельная страница с описанием подхода, опыта и особенностей работы, чтобы вам было легче найти именно своего человека.",
  "Мы собрали практики, которые помогают расслабиться, снять напряжение, восстановить ресурс, почувствовать больше лёгкости и гармонии. Для пар также доступны практики осознанной близости и тантрический подход к отношениям, где через прикосновение, доверие и присутствие можно открывать новые грани контакта друг с другом.",
  "Это живое пространство, которое будет расти и развиваться вместе с людьми, которые его создают. Здесь будут появляться новые специалисты, практики, встречи и события.",
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A1128 0%, #0d1a3a 22%, #101F42 52%, #0d1a3a 80%, #0A1128 100%)",
      }}
    >
      {/* Brighter ambient spheres for inner glow / depth */}
      <div className="blob-2 absolute top-[-8%] right-[-6%] w-[760px] h-[760px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(0,119,182,0.30)" }} />
      <div className="blob-1 absolute bottom-[-8%] left-[-6%] w-[660px] h-[660px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(31,64,150,0.32)" }} />
      <div className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[200px] pointer-events-none" style={{ background: "rgba(0,180,216,0.10)" }} />

      <div className="max-w-3xl mx-auto px-8 md:px-12 relative z-10">

        {/* ── Почему вы здесь? ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.45em] uppercase mb-7 font-light" style={{ color: "rgba(0,180,216,0.65)" }}>
            Почему вы здесь
          </p>
          <h2
            className="font-serif text-4xl md:text-6xl leading-tight mb-14"
            style={{
              background: "linear-gradient(135deg, #E6EEFA 0%, #b8d4f0 55%, #7eb8e8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 32px rgba(0,180,216,0.28))",
            }}
          >
            Почему вы здесь?
          </h2>

          <div className="space-y-6 md:space-y-7">
            {whyParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="text-lg md:text-xl leading-[1.85] font-light"
                style={{ color: "rgba(230,238,250,0.74)" }}
              >
                {p}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif italic text-2xl md:text-3xl pt-4"
              style={{ color: "rgba(126,184,232,0.95)" }}
            >
              Добро пожаловать в «Океан ощущений»
            </motion.p>
          </div>
        </motion.div>

        {/* Soft divider */}
        <div className="my-24 md:my-32 h-px mx-auto max-w-md" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.3), transparent)" }} />

        {/* ── Что это за пространство? ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.45em] uppercase mb-7 font-light" style={{ color: "rgba(0,180,216,0.65)" }}>
            О пространстве
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-14"
            style={{
              background: "linear-gradient(135deg, #E6EEFA 0%, #b8d4f0 55%, #7eb8e8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 32px rgba(0,180,216,0.28))",
            }}
          >
            Что это за пространство?
          </h2>

          <div className="space-y-7 md:space-y-8 text-left">
            {spaceParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="text-base md:text-lg leading-[1.95] font-light"
                style={{ color: "rgba(230,238,250,0.72)" }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
