"use client";

export default function PageFrame() {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden">
      {/* Soft ambient depth — no hard frame, no corners */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,119,182,0.05) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 50% 100%, rgba(31,64,150,0.04) 0%, transparent 45%)",
        }}
      />
    </div>
  );
}
