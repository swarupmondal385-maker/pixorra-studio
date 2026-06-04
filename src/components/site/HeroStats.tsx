import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 150, suffix: "+", label: "Websites Shipped" },
  { n: 98, suffix: "%", label: "Client Satisfaction" },
  { n: 4, suffix: "x", label: "Avg. Client ROI" },
  { n: 7, suffix: "d", label: "Avg. Launch Time" },
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
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{v}{suffix}</span>;
}

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-ink/10 bg-white/60 backdrop-blur-md px-4 py-5 text-center transition hover:-translate-y-0.5"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), 0 12px 30px -12px color-mix(in oklab, var(--navy) 22%, transparent)",
          }}
        >
          <div className="font-display text-3xl md:text-4xl font-bold text-ink tabular-nums tracking-tight">
            <Counter to={s.n} suffix={s.suffix} />
          </div>
          <div className="mt-1 text-[11px] md:text-xs uppercase tracking-[0.15em] text-ink/55 font-semibold">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
