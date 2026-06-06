import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, IndianRupee, Sparkles, CheckCircle2, ArrowRight, Copy, Star, Play, Stethoscope, Users, HandHeart, ShieldCheck } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

const UPI_ID = "pixorrastudio@upi";
const UPI_NAME = "Pixorra Studio";

const DONATION_TIERS = [
  { amount: "₹101", label: "Meal Sponsor", desc: "Feeds a family for a day", emoji: "🍲", c: "bg-pixel-pink" },
  { amount: "₹251", label: "Medicine Angel", desc: "Covers basic medicines", emoji: "💊", c: "bg-pixel-yellow", badge: "Popular" },
  { amount: "₹501", label: "Healing Hand", desc: "Supports a doctor visit", emoji: "🩺", c: "bg-pixel-cyan" },
  { amount: "₹1,001", label: "Life Guardian", desc: "Helps fund a surgery", emoji: "🏥", c: "bg-pixel-purple" },
];

const IMPACT_CARDS = [
  { img: "🍲", title: "Feed The Hungry", desc: "Every ₹101 provides a day's meal for a family struggling to afford food.", c: "bg-pixel-pink" },
  { img: "💊", title: "Medicine For All", desc: "Your donations help buy essential medicines for those who can't afford them.", c: "bg-pixel-yellow" },
  { img: "🏥", title: "Hospital Support", desc: "We donate a portion of every project sale to local hospitals treating underprivileged patients.", c: "bg-pixel-cyan" },
  { img: "👶", title: "Child Healthcare", desc: "Supporting vaccinations and checkups for children in low-income communities.", c: "bg-pixel-purple" },
];

const HOSPITAL_SECTION = [
  { icon: Stethoscope, title: "Every Sale Helps", desc: "10% of every website & branding project revenue goes directly to partner hospitals.", c: "bg-pixel-pink", stat: "10%" },
  { icon: Users, title: "Community First", desc: "We work with local Mumbai hospitals to identify families most in need of financial aid.", c: "bg-pixel-yellow", stat: "5+" },
  { icon: HandHeart, title: "Direct Impact", desc: "Your donation goes 100% to patient care — we cover all operational costs ourselves.", c: "bg-pixel-cyan", stat: "100%" },
  { icon: ShieldCheck, title: "Transparent", desc: "Monthly reports published on how every rupee was spent. No hidden cuts.", c: "bg-pixel-purple", stat: "✓" },
];

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — Pixorra Cares" },
      { name: "description", content: "Help us feed families, provide medicines, and support hospital care for those in need. Every project we deliver donates a portion to healthcare." },
    ],
  }),
});

function DonatePage() {
  const [selected, setSelected] = useState(1);
  const [copied, setCopied] = useState(false);
  const tier = DONATION_TIERS[selected];

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-cream text-ink">
      {/* Video Hero */}
      <section className="relative h-screen min-h-[600px] max-h-[850px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 via-fuchsia-700/70 to-purple-900/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 animate-pulse z-0" style={{ animationDuration: "4s" }}>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,217,61,0.3) 0%, transparent 50%)" }} />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white/30 sparkle-pulse" style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`, width: `${2 + Math.random() * 6}px`, height: `${2 + Math.random() * 6}px`, animationDelay: `${Math.random() * 3}s` }} />
          ))}
        </div>
        <div className="relative z-20 text-center px-5 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse" />
              <img src={logoMark} alt="Pixorra" className="relative h-28 w-28 md:h-36 md:w-36 object-contain bounce-soft drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-xs font-bold tracking-wider uppercase mb-6">
            <Heart className="h-3 w-3 text-pink-300" fill="currentColor" />
            <span className="text-white/90">Pixorra Cares Initiative</span>
          </div>
          <h1 className="font-display font-bold text-white text-balance text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.05]">
            Every project we build<br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">helps someone heal.</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            10% of every website, branding, and marketing project goes to hospitals treating those who can't afford care. Your donation multiplies the impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#donate-now" className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold border-2 border-white/30 shadow-lg hover:-translate-y-0.5 transition-transform">Donate Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></a>
            <a href="#our-mission" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/20 transition-colors"><Play className="h-4 w-4" /> Learn More</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-white/40 flex justify-center pt-1"><div className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce" /></div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-pixel-pink/15 blob" aria-hidden />
        <div className="absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-pixel-cyan/15 blob" style={{ animationDelay: "2s" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center reveal max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-ink uppercase shadow-pixel"><Heart className="h-3 w-3 text-pixel-pink" fill="currentColor" /> Our Mission</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance leading-[1.05]">Design that <span className="text-gradient-pixorra">heals.</span></h2>
            <p className="mt-5 text-lg text-ink/65">We believe great design should serve more than just business goals. That's why every project we deliver gives back to the communities that need it most — starting with healthcare.</p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_CARDS.map((card, i) => (
              <div key={card.title} className="reveal relative rounded-3xl bg-cream border-2 border-ink shadow-pixel p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`h-16 w-16 rounded-2xl ${card.c} border-2 border-ink flex items-center justify-center text-3xl shadow-pixel`}>{card.img}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Partnership */}
      <section className="relative py-20 md:py-32 bg-cream overflow-hidden">
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-pixel-yellow/20 blob" style={{ animationDelay: "3s" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center reveal max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-pixorra text-white px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase shadow-pixel border-2 border-ink"><Stethoscope className="h-3 w-3" /> Hospital Partnership</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance leading-[1.05]">From every sale, <span className="text-gradient-pixorra">a life touched.</span></h2>
            <p className="mt-5 text-lg text-ink/65">Here's how we turn design projects into real healthcare support for families in need.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {HOSPITAL_SECTION.map(({ icon: Icon, title, desc, c, stat }, i) => (
              <div key={title} className="reveal relative rounded-3xl bg-white border-2 border-ink shadow-pixel p-7 md:p-9 flex gap-5 hover:-translate-y-1 transition-transform" style={{ animationDelay: `${i * 80}ms` }}>
                <div className={`h-14 w-14 rounded-2xl ${c} border-2 border-ink flex items-center justify-center shrink-0`}><Icon className="h-6 w-6 text-ink" /></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
                    <span className="font-display text-2xl font-bold text-gradient-pixorra shrink-0">{stat}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Now */}
      <section id="donate-now" className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-pixel-pink/15 blob" aria-hidden />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-pixel-purple/15 blob" style={{ animationDelay: "3s" }} aria-hidden />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8">
          <div className="text-center reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-ink uppercase shadow-pixel"><IndianRupee className="h-3 w-3 text-pixel-green" /> Choose Your Impact</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance leading-[1.05]">Every rupee <span className="text-gradient-pixorra">changes a life.</span></h2>
            <p className="mt-5 text-lg text-ink/65 max-w-xl mx-auto">Select an amount below and send via any UPI app. 100% goes to patient care.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
            {DONATION_TIERS.map((t, i) => (
              <button key={t.amount} onClick={() => setSelected(i)} className={`relative rounded-2xl border-2 border-ink p-5 text-center transition-all duration-200 hover:-translate-y-1 ${selected === i ? "bg-white shadow-pixel scale-105" : "bg-white/60 hover:bg-white hover:shadow-pixel"}`}>
                {t.badge && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-pixorra px-2.5 py-0.5 text-[10px] font-bold text-white border border-ink whitespace-nowrap"><Star className="h-2.5 w-2.5 fill-white" strokeWidth={0} />{t.badge}</div>)}
                <span className="text-3xl md:text-4xl">{t.emoji}</span>
                <div className="mt-2 font-display text-xl md:text-2xl font-bold text-ink">{t.amount}</div>
                <div className="text-xs font-bold text-ink/70 mt-0.5">{t.label}</div>
                <div className="text-[11px] text-ink/40 mt-1 leading-tight">{t.desc}</div>
              </button>
            ))}
          </div>
          <div className="mt-8 reveal">
            <div className="rounded-3xl bg-cream border-2 border-ink shadow-pixel p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={`h-12 w-12 rounded-xl ${tier.c} border-2 border-ink flex items-center justify-center text-2xl`}>{tier.emoji}</div>
                <div>
                  <div className="font-display text-xl font-bold text-ink">{tier.label} — {tier.amount}</div>
                  <div className="text-xs text-ink/50 font-semibold">{tier.desc} • Send via any UPI app</div>
                </div>
              </div>
              <div className="rounded-2xl bg-white border-2 border-dashed border-ink/20 p-5">
                <div className="text-xs text-ink/50 font-bold uppercase tracking-wider mb-3">UPI ID</div>
                <div className="flex items-center justify-between gap-3 bg-cream rounded-xl border-2 border-ink p-4">
                  <span className="font-mono font-bold text-ink text-base md:text-lg">{UPI_ID}</span>
                  <button onClick={handleCopy} className={`inline-flex items-center gap-1.5 h-10 px-4 rounded-full border-2 border-ink text-sm font-bold transition-all ${copied ? "bg-pixel-green text-ink" : "bg-ink text-white hover:-translate-y-0.5"}`}>
                    {copied ? (<><CheckCircle2 className="h-4 w-4" /> Copied</>) : (<><Copy className="h-4 w-4" /> Copy UPI</>)}
                  </button>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-sm text-ink/50">Works with Google Pay, PhonePe, Paytm, BHIM & all UPI apps</p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-ink/40 font-bold"><CheckCircle2 className="h-3 w-3 text-pixel-green" /> Account: {UPI_NAME}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-pixorra overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pixel-yellow/30 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-pixel-pink/25 blur-2xl" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative"><img src={logoMark} alt="Pixorra" className="h-24 w-24 md:h-32 md:w-32 object-contain bounce-soft" /></div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight text-balance">Together, we can <span className="underline decoration-pixel-yellow decoration-4 underline-offset-4">build and heal.</span></h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">Whether you hire us for a project or donate directly — every contribution reaches someone who needs it.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#donate-now" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-ink font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform"><Heart className="h-5 w-5 text-pixel-pink" fill="currentColor" /> Donate Now</a>
            <a href="/" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-ink text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform">Back to Home <ArrowRight className="h-5 w-5" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
