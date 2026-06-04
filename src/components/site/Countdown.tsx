import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

// Persist a single 7-day deadline per visitor in localStorage.
const KEY = "pixorra-offer-deadline";
const WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

function getDeadline() {
  if (typeof window === "undefined") return Date.now() + WINDOW_MS;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const ts = Number(raw);
      if (Number.isFinite(ts) && ts > Date.now()) return ts;
    }
    const next = Date.now() + WINDOW_MS;
    localStorage.setItem(KEY, String(next));
    return next;
  } catch {
    return Date.now() + WINDOW_MS;
  }
}

function format(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

function Cell({ value, label }: { value: number; label: string }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="relative">
      <div className="relative rounded-2xl glass-strong px-4 py-3 md:px-6 md:py-4 min-w-[68px] md:min-w-[88px] text-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)" }}
        />
        <div className="font-display text-3xl md:text-5xl font-semibold tabular-nums text-ink leading-none tracking-tight">
          {v}
        </div>
        <div className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-ink/55 font-semibold">
          {label}
        </div>
      </div>
    </div>
  );
}

export function Countdown({
  title = "Summer Launch Offer",
  subtitle = "Save up to 25% on website builds. Free demo included.",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const [deadline, setDeadline] = useState<number>(() => Date.now() + WINDOW_MS);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    setDeadline(getDeadline());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = format(deadline - now);

  return (
    <div className={`relative reveal ${className}`}>
      {/* Soft gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl rounded-3xl glass-strong p-5 md:p-7 text-center"
        style={{ boxShadow: "0 30px 80px -30px color-mix(in oklab, var(--gold) 35%, transparent)" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-ink">
          <Sparkles className="h-3 w-3 text-gold" fill="currentColor" />
          Limited time
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-1.5 text-sm md:text-base text-ink/65">{subtitle}</p>
        <div className="mt-5 flex items-center justify-center gap-2 md:gap-3">
          <Cell value={t.d} label="Days" />
          <Cell value={t.h} label="Hrs" />
          <Cell value={t.m} label="Min" />
          <Cell value={t.s} label="Sec" />
        </div>
      </div>
    </div>
  );
}
