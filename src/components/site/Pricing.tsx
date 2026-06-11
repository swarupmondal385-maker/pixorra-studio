import { Check, Star, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WHATSAPP = "https://wa.me/918927840261?text=Hi%20Pixorra%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pricing.";

const ELITE_ALL_FEATURES = [
  "Custom website (up to 15 pages)",
  "Mobile-first smart design",
  "AI chatbot & WhatsApp automation",
  "Full funnel setup (landing → close)",
  "CRM & workflow automation",
  "Full SEO + Local SEO",
  "Google Ads setup & management",
  "Social media management",
  "Reputation management",
  "Dedicated account manager",
  "6 months white glove support",
];

const PACKAGES = [
  {
    name: "Ignite",
    price: "₹14,999",
    period: "/month",
    tagline: "For businesses just starting to grow online",
    features: [
      "Custom website (up to 3 pages)",
      "Mobile optimized",
      "Basic SEO setup",
      "WhatsApp chatbot",
      "Lead capture form",
      "1 month support",
      "Monthly performance report",
    ],
    cta: "Start with Ignite",
    popular: false,
    flagship: false,
  },
  {
    name: "Growth Engine",
    price: "₹24,999",
    period: "/month",
    tagline: "Our most chosen package for serious growth",
    features: [
      "Custom website (up to 8 pages)",
      "Mobile-first smart design",
      "AI WhatsApp chatbot & automation",
      "Full SEO setup",
      "Google Maps optimization",
      "Lead capture & CRM",
      "Social media integration",
      "3 months priority support",
      "Monthly strategy review",
    ],
    cta: "Go Growth Engine",
    popular: true,
    flagship: false,
  },
  {
    name: "Elite",
    price: "₹39,999",
    period: "/month",
    tagline: "Complete AI-powered growth partner for market leaders",
    features: [
      "Custom website (up to 15 pages)",
      "Mobile-first smart design",
      "AI chatbot & WhatsApp automation",
      "Full funnel setup",
      "CRM & workflow automation",
      "Full SEO + Local SEO",
      "Social media management",
      "Reputation management",
      "Dedicated account manager",
    ],
    cta: "Go Elite",
    popular: false,
    flagship: true,
  },
];

export function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [eliteOpen, setEliteOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-pixel-pink/20 blur-3xl blob" aria-hidden />
      <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-pixel-cyan/20 blur-3xl blob" style={{animationDelay:"3s"}} aria-hidden />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-pixel-yellow/25 blur-3xl blob" style={{animationDelay:"5s"}} aria-hidden />
      <div className="absolute top-16 left-10 h-3 w-3 bg-pixel-pink sparkle-pulse" aria-hidden />
      <div className="absolute top-32 right-24 h-2.5 w-2.5 bg-pixel-purple sparkle-pulse" style={{animationDelay:"1s"}} aria-hidden />
      <div className="absolute bottom-24 right-10 h-3 w-3 bg-pixel-green sparkle-pulse" style={{animationDelay:"2s"}} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-ink uppercase shadow-pixel">
            <span className="h-2 w-2 rounded-full bg-pixel-pink" /> Pricing
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance leading-[1.05]">
            Honest pricing. <span className="text-gradient-pixorra">No surprises.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            Three monthly plans built to grow your business. From Ignite to Elite — there's a growth engine for every stage.
          </p>
        </div>

        <div ref={sliderRef} className="mt-14 md:grid md:grid-cols-3 md:gap-6 max-w-6xl mx-auto flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 pt-6 md:pt-10 px-3 md:px-4 scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {PACKAGES.map(({ name, price, period, tagline, features, cta, popular, flagship }, i) => (
            <div
              key={name}
              className={`reveal snap-center shrink-0 w-[85vw] md:w-auto md:shrink relative rounded-3xl p-7 md:p-10 transition-all duration-500 flex flex-col border-2 border-ink ${
                flagship
                  ? "bg-ink text-white"
                  : "glass-card text-ink hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${i * 120}ms`, boxShadow: flagship ? "10px 10px 0 0 var(--cyan-cta)" : "8px 8px 0 0 var(--pixel-yellow)" }}
            >
              {flagship && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-pixel-purple px-4 py-1.5 text-xs font-bold text-white border-2 border-ink whitespace-nowrap">
                  <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                  Flagship
                </div>
              )}
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-pixel-purple px-4 py-1.5 text-xs font-bold text-white border-2 border-ink whitespace-nowrap">
                  <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                  Most Popular
                </div>
              )}
              <div>
                <h4 className={`font-display text-2xl font-bold ${flagship ? "text-white" : "text-ink"}`}>{name}</h4>
                <p className={`mt-1.5 text-sm ${flagship ? "text-white/70" : "text-ink/60"}`}>{tagline}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`font-display text-5xl font-bold ${flagship ? "text-white" : "text-ink"}`}>{price}</span>
                <span className={`text-sm ${flagship ? "text-white/60" : "text-ink/50"}`}>{period}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded-full border border-ink flex items-center justify-center ${flagship ? "bg-pixel-yellow" : "bg-pixel-green"}`}>
                      <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-relaxed ${flagship ? "text-white/90" : "text-ink/80"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-all min-h-12 border-2 border-ink ${
                  flagship
                    ? "bg-pixel-purple text-white hover:-translate-y-0.5"
                    : "bg-gold text-ink hover:bg-gold-soft"
                }`}
              >
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              {flagship && (
                <button
                  type="button"
                  onClick={() => setEliteOpen(true)}
                  className="mt-3 inline-flex items-center justify-center rounded-full border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition-all hover:bg-white/10"
                >
                  More Features
                </button>
              )}
            </div>
          ))}
        </div>

        <Dialog open={eliteOpen} onOpenChange={setEliteOpen}>
          <DialogContent className="max-w-2xl border-2 border-ink bg-ink p-6 md:p-8 max-h-[85vh] overflow-y-auto text-white" style={{ boxShadow: "10px 10px 0 0 var(--cyan-cta)" }}>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl text-white">Elite Features</DialogTitle>
              <DialogDescription className="text-white/70">
                Everything included in the Elite flagship plan.
              </DialogDescription>
            </DialogHeader>
            <ul className="mt-6 space-y-3">
              {ELITE_ALL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full border border-ink flex items-center justify-center bg-pixel-yellow">
                    <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed text-white/90">{f}</span>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>

        {/* Swipe indicators — mobile only */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-3">
          {PACKAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                sliderRef.current?.children[i]?.scrollIntoView({ behavior: "smooth", inline: "center" });
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-7 bg-pixel-purple"
                  : "w-2.5 bg-ink/20"
              }`}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/50 reveal">
          Need something custom? <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline underline-offset-4 hover:text-gold">WhatsApp us</a> — we'll build a quote around your goals.
        </p>
      </div>
    </section>
  );
}
