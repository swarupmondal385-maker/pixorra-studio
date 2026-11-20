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

/** Compact auto-playing stepper: one card, five steps, plays like a story once on screen. */
export function ProcessFlow() {
  const root = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const DURATION = 3800;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running || paused) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), DURATION);
    return () => clearTimeout(id);
  }, [step, running, paused]);

  const cur = STEPS[step];
  const Icon = cur.icon;

  return (
    <section id="process" ref={root} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
            How it works
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <h2 className="mt-6 max-w-2xl font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
          Live in 10 days. <span className="text-ink/35">You see it before you pay.</span>
        </h2>

        <div
          className="mt-10 rounded-[1.75rem] border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_#111] md:p-6"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          {/* Step pills with story-style progress */}
          <div role="tablist" className="grid grid-cols-5 gap-1.5 md:gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === step}
                aria-label={`${s.when}: ${s.title}`}
                onClick={() => setStep(i)}
                className="group text-left"
              >
                <span className="block h-1.5 overflow-hidden rounded-full bg-ink/10">
                  <span
                    key={i === step ? `${step}-${running && !paused}` : i}
                    className={`block h-full rounded-full bg-ink ${
                      i < step ? "w-full" : i === step ? "story-fill" : "w-0"
                    }`}
                    style={
                      i === step
                        ? {
                            animationDuration: `${DURATION}ms`,
                            animationPlayState: running && !paused ? "running" : "paused",
                          }
                        : undefined
                    }
                  />
                </span>
                <span
                  className={`mt-2 hidden text-xs font-bold transition-colors md:block ${
                    i === step ? "text-ink" : "text-ink/40 group-hover:text-ink/70"
                  }`}
                >
                  {s.when}
                </span>
              </button>
            ))}
          </div>

          {/* Active step */}
          <div
            key={step}
            className="step-swap mt-6 grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-yellow-cta shadow-pixel">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-pixel text-[9px] tracking-wider text-pixel-pink">
                  STEP {step + 1} · {cur.when.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                {cur.title}
              </h3>
              <p className="mt-2 max-w-md text-[17px] leading-relaxed text-ink/65">{cur.text}</p>
              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1 + STEPS.length) % STEPS.length)}
                  className="rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep((s) => (s + 1) % STEPS.length)}
                  className="rounded-full border-2 border-ink bg-ink px-4 py-1.5 text-sm font-bold text-white"
                >
                  {step === STEPS.length - 1 ? "Start again" : "Next step"}
                </button>
              </div>
            </div>
            <div className="grid h-[140px] place-items-center rounded-2xl bg-cream md:h-[190px] md:w-[280px]">
              <div className="scale-[1.35] md:scale-[1.9]">
                <StepArt i={step} on big />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small animated graphic per step; plays once the step is lit. */
function StepArt({ i, on, big = false }: { i: number; on: boolean; big?: boolean }) {
  const base = `relative shrink-0 overflow-hidden border-2 border-ink/80 ${
    big ? "block h-[90px] w-[120px] rounded-xl" : "hidden h-20 w-24 rounded-xl sm:block"
  } ${on ? "step-on" : ""}`;
  if (i === 0)
    return (
      <div className={`${base} grid place-items-center bg-[#fff1f7]`} aria-hidden>
        <span className="ring-pulse absolute h-10 w-10 rounded-full border-2 border-pixel-pink" />
        <span className="ring-pulse absolute h-10 w-10 rounded-full border-2 border-pixel-pink [animation-delay:0.6s]" />
        <span className="phone-wiggle relative grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-white text-base">
          📞
        </span>
      </div>
    );
  if (i === 1)
    return (
      <div className={`${base} bg-white p-1.5`} aria-hidden>
        <div className="flex gap-0.5">
          <span className="h-1 w-1 rounded-full bg-pixel-pink" />
          <span className="h-1 w-1 rounded-full bg-pixel-yellow" />
          <span className="h-1 w-1 rounded-full bg-pixel-green" />
        </div>
        <div className="mt-1.5 space-y-1">
          <span
            className="type-line block h-1.5 rounded-full bg-ink"
            style={{ ["--w" as string]: "80%" }}
          />
          <span
            className="type-line block h-1.5 rounded-full bg-ink/70 [animation-delay:0.3s]"
            style={{ ["--w" as string]: "60%" }}
          />
          <span
            className="type-line block h-1 rounded-full bg-ink/20 [animation-delay:0.6s]"
            style={{ ["--w" as string]: "70%" }}
          />
          <span
            className="type-line mt-1 block h-3 rounded-full bg-yellow-cta [animation-delay:0.9s]"
            style={{ ["--w" as string]: "45%" }}
          />
        </div>
      </div>
    );
  if (i === 2)
    return (
      <div className={`${base} grid place-items-center bg-[#effbe9]`} aria-hidden>
        <svg viewBox="0 0 40 40" className="h-14 w-14 -rotate-90">
          <circle cx="20" cy="20" r="15" fill="none" stroke="rgba(17,17,17,.12)" strokeWidth="5" />
          <circle
            className="donut-fill"
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="#111"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="94.2"
            strokeDashoffset="94.2"
          />
        </svg>
        <span className="absolute font-display text-xs font-bold">20%</span>
      </div>
    );
  if (i === 3)
    return (
      <div className={`${base} flex flex-col justify-end gap-1 bg-[#eaf6ff] p-2`} aria-hidden>
        <span className="gear-spin absolute right-1.5 top-1.5 text-sm">⚙️</span>
        <span className="block-in block h-3 w-3/4 rounded border-2 border-ink bg-pixel-pink/70 [animation-delay:0.6s]" />
        <span className="block-in block h-3 w-full rounded border-2 border-ink bg-pixel-yellow [animation-delay:0.3s]" />
        <span className="block-in block h-3 w-5/6 rounded border-2 border-ink bg-pixel-cyan/70" />
      </div>
    );
  return (
    <div className={`${base} grid place-items-center bg-[#fffbe0]`} aria-hidden>
      <span className="rocket-up text-2xl">🚀</span>
      <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-ink px-1.5 py-0.5 font-pixel text-[6px] text-white">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-pixel-green" /> LIVE
      </span>
    </div>
  );
}
