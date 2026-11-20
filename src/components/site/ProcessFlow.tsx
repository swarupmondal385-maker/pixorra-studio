import { useEffect, useRef, useState } from "react";
import {
  PhoneCall,
  MonitorSmartphone,
  BadgeCheck,
  Hammer,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Step = { icon: LucideIcon; when: string; title: string; text: string };

const STEPS: Step[] = [
  {
    icon: PhoneCall,
    when: "Day 0",
    title: "A free 15-minute call",
    text: "Tell us about your business. We map what will bring you customers.",
  },
  {
    icon: MonitorSmartphone,
    when: "48 hours",
    title: "Your free demo website",
    text: "You see your new website before paying a single rupee.",
  },
  {
    icon: BadgeCheck,
    when: "Day 2",
    title: "Approve & pay 20%",
    text: "Love it? Pay a 20% advance and we start building.",
  },
  {
    icon: Hammer,
    when: "Day 3–9",
    title: "We build everything",
    text: "Website, WhatsApp AI, CRM and Google, all connected and tested.",
  },
  {
    icon: Rocket,
    when: "Day 10",
    title: "You go live",
    text: "Pay the remaining 80% on delivery. Your phone starts ringing.",
  },
];

/** Scroll-driven flow: the line fills and each step lights up as you scroll. */
export function ProcessFlow() {
  const list = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);
  const [lit, setLit] = useState(-1);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
      setFill(p);
      const items = Array.from(el.children) as HTMLElement[];
      let n = -1;
      items.forEach((it, i) => {
        if (it.getBoundingClientRect().top + 28 <= line) n = i;
      });
      setLit(n);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
            How it works
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <h2 className="mt-6 max-w-2xl font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
          From first call to live in 10 days.{" "}
          <span className="text-ink/35">You see it before you pay.</span>
        </h2>

        <ol ref={list} className="relative mx-auto mt-14 max-w-2xl md:mt-20">
          {/* track + animated fill */}
          <span
            aria-hidden
            className="absolute bottom-7 left-[27px] top-7 w-1 rounded-full bg-ink/10"
          />
          <span
            aria-hidden
            className="absolute left-[27px] top-7 w-1 origin-top rounded-full bg-ink transition-[height] duration-150"
            style={{ height: `calc((100% - 3.5rem) * ${fill})` }}
          />
          {STEPS.map(({ icon: Icon, when, title, text }, i) => {
            const on = i <= lit;
            return (
              <li key={title} className="relative flex gap-5 pb-10 last:pb-0 md:gap-7 md:pb-14">
                <span
                  className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-ink transition-all duration-500 ${
                    on ? "scale-100 bg-yellow-cta shadow-pixel" : "scale-90 bg-white"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors ${on ? "text-ink" : "text-ink/35"}`}
                  />
                </span>
                <div
                  className={`flex-1 rounded-2xl border-2 bg-white p-5 transition-all duration-700 md:p-6 ${
                    on
                      ? "translate-y-0 border-ink opacity-100 shadow-pixel"
                      : "translate-y-3 border-ink/15 opacity-50"
                  }`}
                >
                  <span className="font-pixel text-[9px] tracking-wider text-pixel-pink">
                    {when.toUpperCase()}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-ink/65">{text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
