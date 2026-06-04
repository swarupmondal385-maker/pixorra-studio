import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

// Fixed target date — 10 days from first render this month.
// We compute a stable target stored in localStorage so the same visitor always
// sees a smoothly counting-down clock (not a fresh 10 days on every reload).
const KEY = "pixorra-offer-target";
const DURATION_MS = 10 * 24 * 60 * 60 * 1000;

function getTarget(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const saved = Number(localStorage.getItem(KEY));
  if (saved && saved > Date.now()) return saved;
  const t = Date.now() + DURATION_MS;
  try { localStorage.setItem(KEY, String(t)); } catch {}
  return t;
}

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function Countdown() {
  const [target, setTarget] = useState<number>(() => Date.now() + DURATION_MS);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    setTarget(getTarget());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ms = Math.max(0, target - now);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((ms / (1000 * 60)) % 60);
  const secs = Math.floor((ms / 1000) % 60);

  const cells: { label: string; value: string }[] = [
    { label: "Days", value: pad(days) },
    { label: "Hours", value: pad(hours) },
    { label: "Minutes", value: pad(mins) },
    { label: "Seconds", value: pad(secs) },
  ];

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* gold glow */}
      <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold/30 blur-3xl opacity-70" />
      <div
        className="relative rounded-3xl border border-gold/40 p-5 md:p-7 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.04 258 / 0.92) 0%, oklch(0.26 0.08 258 / 0.92) 100%)",
          boxShadow:
            "0 30px 80px -20px color-mix(in oklab, var(--gold) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/40 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
          <Flame className="h-3.5 w-3.5" /> Limited-Time Summer Offer
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white">
          Save up to <span className="text-gold">30%</span> on every package
        </h3>
        <p className="mt-1 text-sm text-white/70">Lock in 2025 pricing before this offer closes.</p>

        <div className="mt-5 grid grid-cols-4 gap-2 md:gap-3">
          {cells.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/15 bg-white/10 px-2 py-3 md:py-4 backdrop-blur"
            >
              <div className="font-display text-2xl md:text-4xl font-bold text-white tabular-nums">
                {c.value}
              </div>
              <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
