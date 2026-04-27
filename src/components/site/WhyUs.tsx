import { Zap, Wallet, Target, LifeBuoy } from "lucide-react";

const REASONS = [
  { icon: Zap, title: "Delivered in 7–10 Days", desc: "Most agencies take 2 months. We go live in ten days — without cutting corners on quality." },
  { icon: Wallet, title: "Priced for Real Businesses", desc: "Honest packages built for local founders. No ₹1 lakh setup fees for a basic brochure site." },
  { icon: Target, title: "Designed for Leads, Not Awards", desc: "Every button, headline and image is placed with one goal: get the phone ringing." },
  { icon: LifeBuoy, title: "Lifetime WhatsApp Support", desc: "Text us anytime. Broken link, new offer, small tweak — consider it done, the same day." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Why Choose Us</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
              Built different. <span className="text-navy">On purpose.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/60">
              We're not a call-centre agency. You'll speak to the same team that designs, builds and supports your site — for as long as you have it.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal rounded-3xl bg-cream p-7 border border-black/5 hover:shadow-card-lg transition-shadow"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={2} />
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
