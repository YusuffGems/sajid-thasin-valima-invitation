import { useMemo, type CSSProperties } from "react";

const COLORS = ["#e6cf72", "#c9a93a", "#f6ecc0", "#b8962c", "#8c1d40"];
const COUNT = 42;

export function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        style: {
          "--x": `${Math.random() * 100}%`,
          "--drift": `${(Math.random() - 0.5) * 120}px`,
          "--delay": `${Math.random() * 0.6}s`,
          "--dur": `${2.2 + Math.random() * 1.6}s`,
          "--size": `${6 + Math.random() * 6}px`,
          "--color": COLORS[i % COLORS.length],
        } as CSSProperties,
      })),
    [],
  );

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span key={piece.id} style={piece.style} />
      ))}
    </div>
  );
}
