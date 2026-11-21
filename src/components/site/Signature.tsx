/** Fountain-pen style signature: the name writes itself left to right, then a looping
 *  flourish is drawn under it. Black ink with a slight wobble and bleed so it reads as a
 *  real pen stroke rather than a typed font. Animations start when a parent `.reveal`
 *  gets `is-visible`. Everything sits inside a padded viewBox so no stroke gets clipped. */
export function Signature({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 330 170"
      role="img"
      aria-label="Signature of Swarup"
      className={`overflow-visible ${className}`}
    >
      <defs>
        {/* Ink: tiny wobble + soft bleed, like wet ink on paper */}
        <filter id="sig-ink" x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="7"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" result="d" />
          <feGaussianBlur in="d" stdDeviation="0.35" result="b" />
          <feComposite in="b" in2="d" operator="over" />
        </filter>
        {/* Reveal mask that sweeps left to right, so the name looks hand-written */}
        <mask id="sig-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="330" height="170">
          <rect className="sig-sweep" x="-20" y="0" width="370" height="170" fill="#fff" />
        </mask>
      </defs>

      <g filter="url(#sig-ink)" fill="#0d0d12" stroke="#0d0d12">
        <text
          x="36"
          y="104"
          mask="url(#sig-reveal)"
          className="font-sign"
          fontSize="104"
          stroke="none"
          transform="rotate(-6 190 90)"
        >
          Swarup
        </text>

        {/* Flourish: sweeps back from the p, loops under the name and kicks up past the S */}
        <path
          className="sig-stroke sig-stroke-1"
          d="M257 99 C 278 122, 252 144, 190 141 C 130 138, 64 132, 40 120 C 22 111, 30 96, 56 102 C 84 108, 104 124, 128 128"
          fill="none"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(-6 190 90)"
        />
        {/* Quick second pass: thin, fast underline like the pen lifting off */}
        <path
          className="sig-stroke sig-stroke-2"
          d="M140 151 C 184 147, 236 140, 292 126"
          fill="none"
          strokeWidth="1.3"
          strokeLinecap="round"
          transform="rotate(-6 190 90)"
        />
        {/* Full stop, pressed in at the end */}
        <circle
          className="sig-dot"
          cx="302"
          cy="104"
          r="3.2"
          stroke="none"
          transform="rotate(-6 190 90)"
        />
      </g>
    </svg>
  );
}
