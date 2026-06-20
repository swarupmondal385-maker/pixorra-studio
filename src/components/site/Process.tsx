import { Target, Hammer, Rocket } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Target,
    title: "We Map Your Growth System",
    desc: "A free strategy call. We understand your business, your ideal client, and design the full system that will bring them to you.",
    time: "Day 1",
    pop: "card-pop-pink",
    bg: "bg-pixel-pink",
    emoji: "🎯",
  },
  {
    n: "02",
    icon: Hammer,
    title: "We Build Everything",
    desc: "Website, funnel, chatbot, automation, CRM — your entire client-getting machine, built and tested in 7–10 days.",
    time: "Day 2–9",
    pop: "card-pop-yellow",
    bg: "bg-pixel-yellow",
    emoji: "🛠️",
  },
  {
    n: "03",
    icon: Rocket,
    title: "Your System Runs on Autopilot",
    desc: "Go live. The AI handles leads, WhatsApp follows up, funnels convert — and you just focus on serving clients.",
    time: "Day 10",
    pop: "card-pop-cyan",
    bg: "bg-pixel-cyan",
    emoji: "🚀",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            From idea to <span className="text-gradient-pixorra">autopilot in 10 days.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-7 relative">
          <svg
            className="hidden md:block absolute top-20 left-[18%] right-[18%] h-3 -z-0"
            viewBox="0 0 800 12"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 6 Q 100 -4, 200 6 T 400 6 T 600 6 T 800 6"
              stroke="var(--pixel-pink)"
              strokeWidth="3"
              strokeDasharray="6 8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          {STEPS.map(({ n, icon: Icon, title, desc, time, pop, bg, emoji }, i) => (
            <div
              key={n}
              className={`reveal relative rounded-3xl glass-card p-8 ${pop}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-pixel text-2xl text-ink">{n}</span>
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink ${bg} text-xl`}
                >
                  {emoji}
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink bg-pixel-yellow border border-ink rounded-full px-2.5 py-1">
                <Icon className="h-3 w-3" /> {time}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-ink/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
