"use client";

/**
 * Ambient horizontal "ocean current" stripes — softly drifting glowing lines
 * that animate the otherwise flat dark background so it breathes.
 */
const lines = [
  { top: "14%", cls: "stripe-1", c: "rgba(0,180,216,0.10)", h: 1 },
  { top: "31%", cls: "stripe-3", c: "rgba(31,64,150,0.14)", h: 2 },
  { top: "48%", cls: "stripe-2", c: "rgba(0,180,216,0.08)", h: 1 },
  { top: "66%", cls: "stripe-5", c: "rgba(126,184,232,0.10)", h: 1 },
  { top: "83%", cls: "stripe-4", c: "rgba(31,64,150,0.12)", h: 2 },
];

export default function BackdropStripes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {lines.map((l, i) => (
        <div
          key={i}
          className={`absolute left-[-5%] right-[-5%] ${l.cls}`}
          style={{
            top: l.top,
            height: `${l.h}px`,
            background: `linear-gradient(90deg, transparent 0%, ${l.c} 30%, ${l.c} 70%, transparent 100%)`,
          }}
        />
      ))}
    </div>
  );
}
