import { Check, Star, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const WHATSAPP = "https://wa.me/918927840261?text=Hi%20Pixorra%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pricing.";

const PACKAGES = [
  {
    name: "Starter",
    price: "₹14,999",
    tagline: "Perfect for new businesses getting online",
    features: [
      "Custom website (up to 5 pages)",
      "Mobile optimized",
      "Business blueprint strategy",
      "Google Maps integration",
      "WhatsApp chat button",
      "Basic SEO setup",
      "1 month free support",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹19,999",
    tagline: "Our most chosen package for serious growth",
    features: [
      "Custom website (up to 10 pages)",
      "Mobile optimized",
      "Detailed business blueprint",
      "Google Maps + Reviews integration",
      "WhatsApp & Call button",
      "Full SEO setup",
      "Social media integration",
      "3 months free support",
      "Google Analytics setup",
    ],
    cta: "Go Professional",
    popular: true,
  },
];

export function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section id="pricing" className="relative py-20 md:py-32 bg-white md:overflow-hidden overflow-visible">
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
            Two all-in-one packages built to get you online and growing. Every package includes a business blueprint strategy.
          </p>
        </div>

        <div ref={sliderRef} className="mt-14 md:grid md:grid-cols-2 md:gap-6 max-w-5xl mx-auto flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 pt-6 md:pt-0 scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {PACKAGES.map(({ name, price, tagline, features, cta, popular }, i) => (
            <div
              key={name}
              className={`reveal snap-center shrink-0 w-[85vw] md:w-auto md:shrink relative rounded-3xl p-7 md:p-10 transition-all duration-500 flex flex-col border-2 border-ink ${
                popular
                  ? "bg-ink text-white"
                  : "glass-card text-ink hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${i * 120}ms`, boxShadow: popular ? "10px 10px 0 0 var(--pixel-pink)" : "8px 8px 0 0 var(--pixel-yellow)" }}
            >
              {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-pixorra px-4 py-1.5 text-xs font-bold text-white border-2 border-ink whitespace-nowrap">
                  <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                  Most Popular
                </div>
              )}
              <div>
                <h4 className={`font-display text-2xl font-bold ${popular ? "text-white" : "text-ink"}`}>{name}</h4>
                <p className={`mt-1.5 text-sm ${popular ? "text-white/70" : "text-ink/60"}`}>{tagline}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`font-display text-5xl font-bold ${popular ? "text-white" : "text-ink"}`}>{price}</span>
                <span className={`text-sm ${popular ? "text-white/60" : "text-ink/50"}`}>one-time</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded-full border border-ink flex items-center justify-center ${popular ? "bg-pixel-yellow" : "bg-pixel-green"}`}>
                      <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-relaxed ${popular ? "text-white/90" : "text-ink/80"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold transition-all min-h-12 border-2 border-ink ${
                  popular
                    ? "bg-gradient-pixorra text-white hover:-translate-y-0.5"
                    : "bg-ink text-white hover:bg-pixel-purple"
                }`}
              >
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

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
                  ? "w-7 bg-gradient-pixorra"
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
