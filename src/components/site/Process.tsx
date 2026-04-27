import { Phone, Hammer, Rocket } from "lucide-react";

const STEPS = [
  { n: "01", icon: Phone, title: "Tell Us About Your Business", desc: "A free 20-minute call. We listen, understand your goals, and map out exactly what will work for you.", time: "Day 1" },
  { n: "02", icon: Hammer, title: "We Build Your Dream Website", desc: "Our team designs, writes and develops your complete site while you stay in the loop with daily updates.", time: "Day 2–9" },
  { n: "03", icon: Rocket, title: "Go Live & Start Getting Customers", desc: "We launch, set up Google, and hand you the keys — plus ongoing support whenever you need us.", time: "Day 10" },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">How It Works</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            From idea to <span className="text-navy">customers in 10 days.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6 relative">
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px border-t-2 border-dashed border-gold/40" aria-hidden />
          {STEPS.map(({ n, icon: Icon, title, desc, time }, i) => (
            <div
              key={n}
              className="reveal relative rounded-3xl bg-white p-8 border border-black/5 shadow-card"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-gold/80">{n}</span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {time}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-ink/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
