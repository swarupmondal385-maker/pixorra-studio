import { Check, Star, ArrowRight, Globe, TrendingUp, Instagram } from "lucide-react";

const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Pixorra%2C%20I%27d%20like%20to%20know%20more%20about%20your%20pricing.";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Beautiful, fast, mobile-optimized websites tailored for your business.",
    from: "₹14,999",
    suffix: "one-time",
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    desc: "Rank on Google for local searches and get more customers organically.",
    from: "₹4,999",
    suffix: "/month",
    badge: "Most Popular",
  },
  {
    icon: Instagram,
    title: "Social Media Marketing",
    desc: "Grow your brand presence on Instagram, Facebook & more.",
    from: "₹6,999",
    suffix: "/month",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "₹14,999",
    tagline: "Perfect for new businesses getting online",
    features: [
      "Custom website (up to 5 pages)",
      "Mobile optimized",
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
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Pricing</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Honest pricing. <span className="text-navy">No surprises.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            Transparent starting prices for every service — plus two all-in-one packages built to get you online and growing.
          </p>
        </div>

        {/* Service starting prices */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, from, suffix, badge }, i) => {
            const pops = ["card-pop-pink","card-pop-yellow","card-pop-cyan"];
            const bgs = ["bg-pixel-pink","bg-pixel-yellow","bg-pixel-cyan"];
            return (
            <div
              key={title}
              className={`reveal relative rounded-3xl bg-white p-7 ${pops[i]} flex flex-col`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {badge && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-pixorra px-3 py-1 text-[11px] font-bold text-white border-2 border-ink">
                  <Star className="h-3 w-3 fill-white" strokeWidth={0} />
                  {badge}
                </div>
              )}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink ${bgs[i]}`}>
                <Icon className="h-5 w-5 text-ink" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-ink/60 leading-relaxed text-sm">{desc}</p>
              <div className="mt-6 pt-5 border-t-2 border-dashed border-ink/15">
                <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Starting from</div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold text-ink">{from}</span>
                  <span className="text-sm text-ink/60">{suffix}</span>
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* Packages */}
        <div className="mt-16 text-center reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Website Packages</p>
          <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Pick the package that fits your business.
          </h3>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {PACKAGES.map(({ name, price, tagline, features, cta, popular }, i) => (
            <div
              key={name}
              className={`reveal relative rounded-3xl p-7 md:p-10 transition-all duration-500 flex flex-col border-2 border-ink ${
                popular
                  ? "bg-ink text-white"
                  : "bg-white text-ink hover:-translate-y-1"
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

        <p className="mt-10 text-center text-sm text-ink/50 reveal">
          Need something custom? <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline underline-offset-4 hover:text-gold">WhatsApp us</a> — we'll build a quote around your goals.
        </p>
      </div>
    </section>
  );
}
