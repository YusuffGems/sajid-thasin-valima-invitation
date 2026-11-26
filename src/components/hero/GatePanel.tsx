import { useMemo } from "react";

interface GatePanelProps {
  side: "left" | "right";
}

function Garland({ side }: GatePanelProps) {
  const flowers = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        x: ((i * 37) % 180) + 10,
        y: ((i * 23) % 120) + 8,
        r: 9 + ((i * 5) % 9),
      })),
    [],
  );
  return (
    <g transform={side === "right" ? "translate(200 0) scale(-1 1)" : undefined}>
      {flowers.map((f) => (
        <g key={f.id}>
          <circle cx={f.x} cy={f.y} r={f.r} fill="#f4ecd9" />
          <circle cx={f.x} cy={f.y} r={f.r * 0.55} fill="#fffaf0" />
          <circle cx={f.x} cy={f.y} r={f.r * 0.18} fill="#e6cf72" />
        </g>
      ))}
      {[30, 80, 130, 170].map((x, i) => (
        <path
          key={x}
          d={`M${x} 110 q${i % 2 ? 6 : -6} 60 0 ${80 + i * 14}`}
          stroke="#7a9462"
          strokeWidth="2"
          fill="none"
        />
      ))}
    </g>
  );
}

export function GatePanel({ side }: GatePanelProps) {
  return (
    <svg
      className={`gate gate--${side}`}
      viewBox="0 0 200 800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`gold-${side}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1de8e" />
          <stop offset="50%" stopColor="#b8962c" />
          <stop offset="100%" stopColor="#e6cf72" />
        </linearGradient>
        <pattern id={`scroll-${side}`} width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="16" fill="none" stroke={`url(#gold-${side})`} strokeWidth="3" />
          <circle cx="25" cy="25" r="6" fill="none" stroke={`url(#gold-${side})`} strokeWidth="2.5" />
        </pattern>
      </defs>
      <rect width="200" height="800" fill="rgba(20,12,6,0.55)" />
      <rect x="10" y="150" width="180" height="470" fill={`url(#scroll-${side})`} opacity="0.95" />
      {[10, 70, 130, 190].map((x) => (
        <rect key={x} x={x - 3} y="0" width="6" height="800" fill={`url(#gold-${side})`} />
      ))}
      <rect x="0" y="620" width="200" height="180" fill="#6b4a14" />
      <rect x="14" y="640" width="172" height="140" rx="6" fill="none" stroke={`url(#gold-${side})`} strokeWidth="4" />
      <circle cx={side === "left" ? 190 : 10} cy="400" r="9" fill="#e6cf72" />
      <Garland side={side} />
    </svg>
  );
}
