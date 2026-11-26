import { useMemo } from "react";

const WINDOW_ROWS = [378, 398, 418];

function useStars(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (i * 97) % 400,
        y: (i * 53) % 250,
        r: 0.4 + ((i * 7) % 10) / 10,
      })),
    [count],
  );
}

function Palace() {
  return (
    <g>
      <rect x="40" y="370" width="320" height="70" fill="#1c2a45" />
      <rect x="140" y="330" width="120" height="110" fill="#22304f" />
      <path d="M150 330a50 50 0 0 1 100 0z" fill="#26365a" />
      <path d="M170 300a30 30 0 0 1 60 0v30h-60z" fill="#2a3b62" />
      <path d="M176 300a24 24 0 0 1 48 0z" fill="#31446f" />
      <rect x="198" y="262" width="4" height="22" fill="#c9a93a" />
      {[60, 90, 290, 320].map((x) => (
        <g key={x}>
          <rect x={x} y="344" width="22" height="26" fill="#22304f" />
          <path d={`M${x} 344a11 11 0 0 1 22 0z`} fill="#2a3b62" />
        </g>
      ))}
      {WINDOW_ROWS.map((y) =>
        Array.from({ length: 14 }, (_, i) => (
          <rect key={`${y}-${i}`} x={52 + i * 22.4} y={y} width="8" height="12" rx="4" fill="#f3b94d" opacity="0.92" />
        )),
      )}
      {Array.from({ length: 5 }, (_, i) => (
        <path key={i} d={`M${156 + i * 20} 440v-34a7 7 0 0 1 14 0v34z`} fill="#f7c964" />
      ))}
    </g>
  );
}

export function NightScene() {
  const stars = useStars(70);
  return (
    <svg
      className="night-scene"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050d1f" />
          <stop offset="55%" stopColor="#10244a" />
          <stop offset="100%" stopColor="#1c3a66" />
        </linearGradient>
        <radialGradient id="moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f4f1e6" />
          <stop offset="75%" stopColor="#cfcbbb" />
          <stop offset="100%" stopColor="#a8a595" />
        </radialGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dfe8ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#dfe8ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#18325c" />
          <stop offset="100%" stopColor="#0a1a36" />
        </linearGradient>
        <linearGradient id="marble" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9d3c9" />
          <stop offset="100%" stopColor="#f2eee6" />
        </linearGradient>
      </defs>
      <rect width="400" height="800" fill="url(#sky)" />
      {stars.map((s) => (
        <circle key={s.id} cx={s.x} cy={s.y} r={s.r} fill="#fff" opacity="0.7" />
      ))}
      <circle cx="200" cy="130" r="120" fill="url(#moonGlow)" />
      <circle cx="200" cy="130" r="52" fill="url(#moon)" />
      <g opacity="0.18" fill="#7d7a6c">
        <circle cx="182" cy="116" r="9" />
        <circle cx="214" cy="146" r="12" />
        <circle cx="196" cy="150" r="5" />
      </g>
      <Palace />
      <rect y="440" width="400" height="200" fill="url(#water)" />
      <g transform="translate(0 880) scale(1 -1)" opacity="0.28">
        <Palace />
      </g>
      <rect y="620" width="400" height="180" fill="url(#marble)" />
      <rect y="600" width="400" height="14" fill="#cfc8bb" />
      {Array.from({ length: 21 }, (_, i) => (
        <g key={i}>
          <rect x={6 + i * 19.5} y="560" width="9" height="40" rx="3" fill="#e4ded2" />
          <circle cx={10.5 + i * 19.5} cy="560" r="5.5" fill="#ece7dc" />
        </g>
      ))}
      <rect y="552" width="400" height="9" fill="#d8d1c4" />
      {[70, 330].map((x) => (
        <g key={x}>
          <rect x={x - 10} y="520" width="20" height="30" rx="3" fill="#2b2112" />
          <rect x={x - 7} y="524" width="14" height="22" fill="#ffd27a" />
          <circle cx={x} cy="535" r="26" fill="#ffc861" opacity="0.18" />
        </g>
      ))}
    </svg>
  );
}
