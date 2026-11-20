import type { ReactNode } from "react";

/** Hand-drawn marker stroke behind a key word (kree8-style highlight). */
export function MarkerHighlight({
  children,
  color = "var(--pixel-yellow)",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <svg
        aria-hidden
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="absolute -inset-x-[6%] bottom-[0.02em] -z-0 h-[0.62em] w-[112%]"
      >
        <path
          d="M4 26 C 40 14, 90 30, 130 18 S 190 22, 196 14 L 194 34 C 150 40, 90 30, 50 38 S 8 36, 4 34 Z"
          fill={color}
          opacity="0.85"
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}
