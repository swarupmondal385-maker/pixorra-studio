import { Quote, TrendingUp, Sparkles } from "lucide-react";

const RESULTS = [
  { biz: "Mumbai Dental Clinic", service: "Website + Google Ads", stat: "3× more bookings", period: "in 60 days", quote: "We went from 4 enquiries a week to 4 a day. The new site and Google campaign completely changed our clinic.", name: "Dr. Ankit S.", c: "bg-pixel-pink", emoji: "🦷" },
  { biz: "Pune Gym Owner", service: "High-Converting Website", stat: "₹0 → ₹2L/mo", period: "online revenue", quote: "Pixorra didn't just make a website — they made me a real online business. Members literally sign up at midnight.", name: "Rahul M.", c: "bg-pixel-yellow", emoji: "💪" },
  { biz: "Surat D2C Jewellery", service: "Shopify + Ads", stat: "5.8× ROAS", period: "on Meta & Google", quote: "Clean store, fast checkout, and ads that actually pay back. Best decision we took this year.", name: "Priya & Kunal", c: "bg-pixel-cyan", emoji: "💎" },
  { biz: "Kolkata CA Firm", service: "SEO + Branding", stat: "Ranked #1", period: "for 12 local keywords", quote: "I used to cold-call clients. Now clients call me. The SEO work paid for itself in the second month.", name: "Suman B.", c: "bg-pixel-purple", emoji: "📊" },
];

export function Results() {
  return (
    <section id="work" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-16 h-72 w-72 bg-pixel-yellow/30 blob" />
        <div className="absolute bottom-10 -right-16 h-72 w-72 bg-pixel-cyan/25 blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pixel-pink text-white text-xs font-bold border-2 border-ink shadow-pixel uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" fill="currentColor" /> Client Results
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Real businesses. <span className="text-gradient-pixorra">Real numbers.</span>
          </h2>
          <p className="mt-4 text-ink/65 text-lg">
            Not vanity metrics. Bookings, revenue, rankings — the stuff that actually pays the bills.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {RESULTS.map((r, i) => (
            <div
              key={r.biz}
              className="reveal relative rounded-3xl bg-white p-7 md:p-9 border-2 border-ink shadow-pixel hover:-translate-y-1 hover:translate-x-0.5 transition-transform"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* corner sticker */}
              <div className={`absolute -top-4 -left-4 h-14 w-14 rounded-2xl ${r.c} border-2 border-ink shadow-pixel flex items-center justify-center text-2xl wobble`}>
                {r.emoji}
              </div>

              <div className="flex items-start justify-between gap-4 pl-10">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-ink/50">{r.biz}</div>
                  <div className="mt-1 text-sm text-ink/70">{r.service}</div>
                </div>
                <Quote className="h-8 w-8 text-pixel-pink/50 shrink-0" />
              </div>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border-2 border-ink bg-pixel-yellow/40 px-4 py-3">
                <TrendingUp className="h-6 w-6 text-ink" />
                <div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight leading-none">{r.stat}</div>
                  <div className="mt-1 text-xs text-ink/65 font-semibold uppercase tracking-wider">{r.period}</div>
                </div>
              </div>

              <p className="mt-6 text-ink/75 leading-relaxed">"{r.quote}"</p>

              <div className="mt-5 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${r.c} border-2 border-ink text-white flex items-center justify-center text-xs font-bold`}>
                  {r.name.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-ink/55">Verified client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
