"use client";

/**
 * Decorative SVG geometric lines — rendered as an absolutely positioned
 * overlay behind section content. Variant selects the pattern.
 */
export type LinesVariant = "radial" | "diagonal" | "cross" | "arc";

interface Props {
  variant?: LinesVariant;
  className?: string;
  opacity?: number;
}

export default function DecorativeLines({
  variant = "radial",
  className = "",
  opacity = 1,
}: Props) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {variant === "radial" && (
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] min-w-[900px]"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric circles */}
          {[80, 160, 240, 320, 400, 480, 560, 640].map((r, i) => (
            <circle
              key={i}
              cx="450"
              cy="450"
              r={r}
              stroke="rgba(139,92,246,0.07)"
              strokeWidth="1"
            />
          ))}
          {/* Radial spokes */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x2 = 450 + 650 * Math.cos(rad);
            const y2 = 450 + 650 * Math.sin(rad);
            return (
              <line
                key={i}
                x1="450"
                y1="450"
                x2={x2}
                y2={y2}
                stroke="rgba(139,92,246,0.045)"
                strokeWidth="1"
              />
            );
          })}
          {/* Center glow dot */}
          <circle cx="450" cy="450" r="3" fill="rgba(139,92,246,0.3)" />
          <circle cx="450" cy="450" r="8" fill="rgba(139,92,246,0.08)" />
        </svg>
      )}

      {variant === "diagonal" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diagonal lines from top-right */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={200 + i * 60}
              y1={0}
              x2={i * 60 - 200}
              y2={700}
              stroke="rgba(139,92,246,0.06)"
              strokeWidth="1"
            />
          ))}
          {/* Counter-diagonals */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1={-100 + i * 120}
              y1={0}
              x2={200 + i * 120}
              y2={600}
              stroke="rgba(167,139,250,0.04)"
              strokeWidth="1"
            />
          ))}
          {/* Horizontal accent lines */}
          {[120, 250, 380, 500].map((y, i) => (
            <line
              key={i}
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke="rgba(139,92,246,0.05)"
              strokeWidth="1"
              strokeDasharray="6 18"
            />
          ))}
        </svg>
      )}

      {variant === "cross" && (
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal lines */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 52}
              x2="1200"
              y2={i * 52}
              stroke="rgba(139,92,246,0.05)"
              strokeWidth="1"
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 65}
              y1="0"
              x2={i * 65}
              y2="700"
              stroke="rgba(139,92,246,0.05)"
              strokeWidth="1"
            />
          ))}
          {/* Corner brackets */}
          <path d="M0 0 L80 0 L80 6 L6 6 L6 80 L0 80 Z" fill="rgba(139,92,246,0.08)" />
          <path d="M1200 0 L1120 0 L1120 6 L1194 6 L1194 80 L1200 80 Z" fill="rgba(139,92,246,0.08)" />
          <path d="M0 700 L80 700 L80 694 L6 694 L6 620 L0 620 Z" fill="rgba(139,92,246,0.06)" />
          <path d="M1200 700 L1120 700 L1120 694 L1194 694 L1194 620 L1200 620 Z" fill="rgba(139,92,246,0.06)" />
        </svg>
      )}

      {variant === "arc" && (
        <svg
          className="absolute right-0 top-0 w-[60%] h-full"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMaxYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arcs from right */}
          {[100, 200, 300, 400, 500, 600, 700, 800].map((r, i) => (
            <path
              key={i}
              d={`M 600 400 m ${-r} 0 a ${r} ${r} 0 0 0 0 ${r * 2}`}
              stroke="rgba(139,92,246,0.065)"
              strokeWidth="1"
              fill="none"
            />
          ))}
          {/* Diagonal accent */}
          <line x1="600" y1="0" x2="0" y2="800" stroke="rgba(167,139,250,0.05)" strokeWidth="1" strokeDasharray="4 14" />
          <line x1="600" y1="100" x2="100" y2="800" stroke="rgba(139,92,246,0.04)" strokeWidth="1" strokeDasharray="4 14" />
        </svg>
      )}
    </div>
  );
}
