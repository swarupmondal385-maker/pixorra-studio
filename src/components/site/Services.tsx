import { useState } from "react";
import { Globe, ShoppingBag, TrendingUp, Palette, Film, Wrench, ArrowUpRight, Check, X, ArrowRight } from "lucide-react";

type Service = {
  icon: typeof Globe;
  title: string;
  desc: string;
  tag: string;
  pop: string;
  bg: string;
  ic: string;
  long: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  startingAt: string;
};

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "High-Converting Websites",
    desc: "Bespoke sites engineered to turn visitors into booked leads — fast.",
    tag: "01",
    pop: "card-pop-pink",
    bg: "bg-pixel-pink/15",
    ic: "text-pixel-pink",
    long: "Custom-coded, lightning-fast websites built around your business goals — not a recycled template. We design every section to guide visitors toward one outcome: booking, buying, or calling you.",
    features: [
      "Custom UI/UX tailored to your brand",
      "Mobile-first, blazing-fast performance",
      "SEO-ready structure & schema markup",
      "Lead capture forms + WhatsApp integration",
      "Analytics & conversion tracking setup",
    ],
    deliverables: ["5–10 page website", "Admin CMS access", "1 month free support"],
    timeline: "10–14 days",
    startingAt: "₹25,000",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Shopify",
    desc: "Beautiful stores that handle checkouts, GST, and scale with your orders.",
    tag: "02",
    pop: "card-pop-yellow",
    bg: "bg-pixel-yellow/30",
    ic: "text-pixel-orange",
    long: "Sell online without the headaches. We build stores on Shopify or custom stacks with Indian payment gateways, GST invoicing, and inventory that just works.",
    features: [
      "Shopify / WooCommerce / custom builds",
      "Razorpay, UPI, COD payment setup",
      "GST-compliant invoicing",
      "Product catalog & inventory management",
      "Abandoned cart & email automations",
    ],
    deliverables: ["Fully launched store", "Up to 50 products uploaded", "Staff training session"],
    timeline: "14–21 days",
    startingAt: "₹45,000",
  },
  {
    icon: TrendingUp,
    title: "Google Ads & SEO",
    desc: "Get found by customers who are actively searching for what you sell.",
    tag: "03",
    pop: "card-pop-cyan",
    bg: "bg-pixel-cyan/25",
    ic: "text-pixel-blue",
    long: "Stop relying on referrals alone. We run high-ROI Google Ads and rank your site organically so qualified buyers find you when they're ready to buy.",
    features: [
      "Keyword research & competitor audit",
      "Google Search & Performance Max ads",
      "Local SEO & Google Business Profile",
      "On-page SEO + technical fixes",
      "Monthly reports with real numbers",
    ],
    deliverables: ["Ad account setup", "Landing page optimization", "Monthly strategy call"],
    timeline: "Ongoing (3-month minimum)",
    startingAt: "₹15,000/mo",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logos, colour systems and brand kits that make you instantly recognisable.",
    tag: "04",
    pop: "card-pop-purple",
    bg: "bg-pixel-purple/15",
    ic: "text-pixel-purple",
    long: "A brand isn't just a logo. We craft a complete identity system — colors, type, voice, and visuals — so you look premium everywhere your customers see you.",
    features: [
      "Logo design (3 concepts, unlimited revisions)",
      "Color palette & typography system",
      "Business card & stationery design",
      "Social media templates",
      "Brand guidelines PDF",
    ],
    deliverables: ["Full brand kit (AI, PNG, SVG)", "Brand guidelines document", "Social templates"],
    timeline: "7–14 days",
    startingAt: "₹18,000",
  },
  {
    icon: Film,
    title: "AI Video & Creative",
    desc: "Scroll-stopping reels, ads and product videos produced in days, not weeks.",
    tag: "05",
    pop: "card-pop-green",
    bg: "bg-pixel-green/20",
    ic: "text-pixel-green",
    long: "Modern AI workflows + sharp creative direction = stunning videos at a fraction of the cost. Perfect for Instagram Reels, YouTube Shorts, and paid ads.",
    features: [
      "AI-generated product & lifestyle videos",
      "Reels & Shorts (vertical format)",
      "UGC-style ad creatives",
      "Voiceovers in Hindi & English",
      "Captions, motion graphics, music",
    ],
    deliverables: ["4–8 videos per month", "Source files included", "Posting calendar"],
    timeline: "3–5 days per batch",
    startingAt: "₹12,000/mo",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Updates, backups, security and speed — so your site never lets you down.",
    tag: "06",
    pop: "card-pop-orange",
    bg: "bg-pixel-orange/20",
    ic: "text-pixel-orange",
    long: "Don't wait for things to break. We monitor, update and optimize your site every month so it stays fast, secure, and bug-free year-round.",
    features: [
      "Daily automated backups",
      "Security monitoring & malware scans",
      "Plugin & core updates",
      "Performance & uptime monitoring",
      "Up to 2 hours of edits/month included",
    ],
    deliverables: ["Monthly health report", "Priority support", "Emergency restore"],
    timeline: "Monthly",
    startingAt: "₹3,500/mo",
  },
];

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">What We Do</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Everything you need to <span className="text-gradient-pixorra">win online</span> — under one roof.
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            No juggling three vendors. No finger-pointing. One team, one invoice, one plan to grow your business.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => setActive(s)}
                className={`reveal group relative text-left rounded-3xl bg-white p-7 md:p-8 ${s.pop} focus:outline-none focus-visible:ring-4 focus-visible:ring-pixel-pink/40`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute top-5 right-6 font-pixel text-[10px] text-ink/40 tracking-widest">
                  {s.tag}
                </div>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink ${s.bg}`}>
                  <Icon className={`h-6 w-6 ${s.ic}`} strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-ink/65 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:text-pixel-pink transition-colors">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-2 border-ink shadow-pixel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-10 w-10 rounded-full border-2 border-ink bg-pixel-yellow flex items-center justify-center hover:rotate-90 transition-transform"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-7 md:p-9">
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink ${service.bg}`}>
            <Icon className={`h-6 w-6 ${service.ic}`} strokeWidth={2.2} />
          </div>
          <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold text-ink">{service.title}</h3>
          <p className="mt-3 text-ink/70 leading-relaxed">{service.long}</p>

          <div className="mt-6">
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-pixel-pink">What's included</div>
            <ul className="mt-3 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-pixel-green/20 border-2 border-ink flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border-2 border-ink bg-cream p-4">
              <div className="text-[10px] font-bold tracking-widest uppercase text-ink/50">Timeline</div>
              <div className="mt-1 font-bold text-ink">{service.timeline}</div>
            </div>
            <div className="rounded-2xl border-2 border-ink bg-pixel-yellow/40 p-4">
              <div className="text-[10px] font-bold tracking-widest uppercase text-ink/50">Starting at</div>
              <div className="mt-1 font-bold text-ink">{service.startingAt}</div>
            </div>
            <div className="rounded-2xl border-2 border-ink bg-pixel-cyan/30 p-4">
              <div className="text-[10px] font-bold tracking-widest uppercase text-ink/50">You get</div>
              <div className="mt-1 font-bold text-ink text-sm">{service.deliverables[0]}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-pixel-purple">Deliverables</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.deliverables.map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink" /> {d}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919932740091?text=Hi%20Pixorra%2C%20I%27m%20interested%20in%20your%20service%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-gradient-pixorra text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition flex-1"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-ink font-bold border-2 border-ink hover:bg-cream transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
