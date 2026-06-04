import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 150, suffix: "+", label: "Websites Delivered" },
  { n: 120, suffix: "+", label: "Happy Clients" },
  { n: 18, suffix: "", label: "Cities Served" },
  { n: 4, suffix: "x", label: "Average Client ROI" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{v}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Premium gradient background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--navy) 6%, var(--background)) 0%, var(--background) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[460px] w-[760px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent)" }}
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal relative rounded-3xl glass-strong p-5 md:p-7 text-center md:text-left"
              style={{
                animationDelay: `${i * 80}ms`,
                boxShadow: "0 24px 60px -28px color-mix(in oklab, var(--navy) 50%, transparent)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)" }}
              />
              <div className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-ink tabular-nums">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-ink/60 font-semibold uppercase tracking-[0.15em]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

