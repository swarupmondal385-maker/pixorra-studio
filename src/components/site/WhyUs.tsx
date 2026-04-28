import { Zap, Wallet, Target, LifeBuoy } from "lucide-react";

const REASONS = [
  { icon: Zap, title: "Delivered in 7–10 Days", desc: "Most agencies take 2 months. We go live in ten days — without cutting corners on quality.", pop: "card-pop-yellow", bg: "bg-pixel-yellow" },
  { icon: Wallet, title: "Priced for Real Businesses", desc: "Honest packages built for local founders. No ₹1 lakh setup fees for a basic brochure site.", pop: "card-pop-pink", bg: "bg-pixel-pink" },
  { icon: Target, title: "Designed for Leads, Not Awards", desc: "Every button, headline and image is placed with one goal: get the phone ringing.", pop: "card-pop-cyan", bg: "bg-pixel-cyan" },
  { icon: LifeBuoy, title: "Lifetime WhatsApp Support", desc: "Text us anytime. Broken link, new offer, small tweak — consider it done, the same day.", pop: "card-pop-purple", bg: "bg-pixel-purple" },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">Why Choose Us</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
              Built different. <span className="text-gradient-pixorra">On purpose.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/60">
              We're not a call-centre agency. You'll speak to the same team that designs, builds and supports your site — for as long as you have it.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {REASONS.map(({ icon: Icon, title, desc, pop, bg }, i) => (
              <div
                key={title}
                className={`reveal rounded-3xl bg-white p-7 ${pop}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink ${bg}`}>
                  <Icon className="h-5 w-5 text-ink" strokeWidth={2.4} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-ink/65 leading-relaxed text-[15px]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
