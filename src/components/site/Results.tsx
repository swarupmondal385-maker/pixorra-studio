import { Quote } from "lucide-react";

const RESULTS = [
  { biz: "Mumbai Dental Clinic", service: "Website + Google Ads", stat: "3× more bookings", period: "in 60 days", quote: "We went from 4 enquiries a week to 4 a day. The new site and Google campaign completely changed our clinic.", name: "Dr. Ankit S." },
  { biz: "Pune Gym Owner", service: "High-Converting Website", stat: "₹0 → ₹2L/month", period: "online revenue", quote: "Pixorra didn't just make a website — they made me a real online business. Members literally sign up at midnight.", name: "Rahul M." },
  { biz: "Surat D2C Jewellery", service: "Shopify + Ads", stat: "5.8× ROAS", period: "on Meta & Google", quote: "Clean store, fast checkout, and ads that actually pay back. Best decision we took this year.", name: "Priya & Kunal" },
  { biz: "Kolkata CA Firm", service: "SEO + Branding", stat: "Ranked #1", period: "for 12 local keywords", quote: "I used to cold-call clients. Now clients call me. The SEO work paid for itself in the second month.", name: "Suman B." },
];

export function Results() {
  return (
    <section id="work" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Client Results</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Real businesses. <span className="text-navy">Real numbers.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {RESULTS.map((r, i) => (
            <div
              key={r.biz}
              className="reveal relative rounded-3xl bg-white p-7 md:p-9 border border-black/5 shadow-card overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-gold" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-ink/50">{r.biz}</div>
                  <div className="mt-1 text-sm text-ink/70">{r.service}</div>
                </div>
                <Quote className="h-8 w-8 text-gold/40 shrink-0" />
              </div>
              <div className="mt-6">
                <div className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{r.stat}</div>
                <div className="mt-1 text-sm text-ink/60">{r.period}</div>
              </div>
              <p className="mt-6 text-ink/75 leading-relaxed">"{r.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                  {r.name.split(" ").map((x) => x[0]).join("")}
                </div>
                <div className="text-sm font-semibold text-ink">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
