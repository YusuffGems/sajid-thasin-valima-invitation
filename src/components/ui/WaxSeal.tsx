interface WaxSealProps {
  size?: number;
}

export function WaxSeal({ size = 88 }: WaxSealProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="wax" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#c8203f" />
          <stop offset="70%" stopColor="#8e1230" />
          <stop offset="100%" stopColor="#5e0b20" />
        </radialGradient>
      </defs>
      <path
        d="M50 4c8 0 11 6 18 7s12 5 12 12 7 9 8 17-4 11-4 18-8 11-12 17-10 7-18 7-11-6-18-7-12-5-12-12-7-9-8-17 4-11 4-18 8-11 12-17 11-7 18-7z"
        fill="url(#wax)"
      />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#e6cf72" strokeWidth="1.6" opacity="0.9" />
      <path
        d="M50 28l4 14 14-1-11 9 5 13-12-8-12 8 5-13-11-9 14 1z"
        fill="none"
        stroke="#e6cf72"
        strokeWidth="1.4"
      />
      <path d="M38 62a14 14 0 1 0 12 18 11 11 0 1 1-12-18z" transform="translate(12 -30) scale(.7)" fill="#e6cf72" />
    </svg>
  );
}
