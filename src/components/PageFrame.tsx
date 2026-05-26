"use client";

export default function PageFrame() {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden">

      {/* ── Inner viewport glow ── */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 160px -40px rgba(139,92,246,0.10), " +
            "inset 0 0 80px -20px rgba(88,28,135,0.08)",
        }}
      />

      {/* ── Top edge ── */}
      <div
        className="absolute top-0 left-[8%] right-[8%] h-px frame-anim"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 30%, rgba(217,70,239,0.4) 50%, rgba(139,92,246,0.6) 70%, transparent)",
        }}
      />

      {/* ── Bottom edge ── */}
      <div
        className="absolute bottom-0 left-[15%] right-[15%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.35) 40%, rgba(139,92,246,0.35) 60%, transparent)",
          animation: "frame-shimmer 6s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />

      {/* ── Left edge ── */}
      <div
        className="absolute left-0 top-[15%] bottom-[15%] w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(139,92,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent)",
          animation: "frame-shimmer 7s ease-in-out infinite",
          animationDelay: "-1s",
        }}
      />

      {/* ── Right edge ── */}
      <div
        className="absolute right-0 top-[15%] bottom-[15%] w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(139,92,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent)",
          animation: "frame-shimmer 7s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />

      {/* ── Corner TL ── */}
      <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-purple-500/35 rounded-none" />
      <div
        className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full"
        style={{ background: "rgba(139,92,246,0.7)", boxShadow: "0 0 10px 3px rgba(139,92,246,0.5)" }}
      />

      {/* ── Corner TR ── */}
      <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-purple-500/35" />
      <div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
        style={{ background: "rgba(139,92,246,0.7)", boxShadow: "0 0 10px 3px rgba(139,92,246,0.5)" }}
      />

      {/* ── Corner BL ── */}
      <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-purple-500/25" />
      <div
        className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-purple-500/40"
      />

      {/* ── Corner BR ── */}
      <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-purple-500/25" />
      <div
        className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-purple-500/40"
      />

      {/* ── Subtle ambient vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(88,28,135,0.06) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 50% 100%, rgba(88,28,135,0.04) 0%, transparent 40%)",
        }}
      />
    </div>
  );
}
