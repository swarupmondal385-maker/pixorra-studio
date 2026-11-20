import { useEffect, useState } from "react";

/** Counts down to the last second of the current month (a REAL deadline, so the offer stays honest). */
function endOfMonth() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth() + 1, 0, 23, 59, 59, 999).getTime();
}

export function useCountdown() {
  const [t, setT] = useState<null | { d: number; h: number; m: number; s: number }>(null);
  useEffect(() => {
    const target = endOfMonth();
    const tick = () => {
      const ms = Math.max(0, target - Date.now());
      setT({
        d: Math.floor(ms / 864e5),
        h: Math.floor(ms / 36e5) % 24,
        m: Math.floor(ms / 6e4) % 60,
        s: Math.floor(ms / 1e3) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function PriceCountdown({ className = "" }: { className?: string }) {
  const t = useCountdown();
  const cells: [string, number | undefined][] = [
    ["Days", t?.d],
    ["Hrs", t?.h],
    ["Min", t?.m],
    ["Sec", t?.s],
  ];
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-live="off">
      {cells.map(([label, v]) => (
        <div
          key={label}
          className="min-w-[3.4rem] rounded-xl border-2 border-ink bg-white px-2 py-1.5 text-center shadow-pixel"
        >
          <div className="font-pixel text-base tabular-nums text-ink">
            {v === undefined ? "--" : String(v).padStart(2, "0")}
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
