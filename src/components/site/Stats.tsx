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
    <section className="py-16 md:py-24 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((s) => (
            <div key={s.label} className="reveal text-center md:text-left">
              <div className="font-display font-bold text-5xl md:text-7xl tracking-tight bg-gradient-gold bg-clip-text text-transparent">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm md:text-base text-ink/60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
