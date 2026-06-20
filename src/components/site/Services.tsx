import { useState } from "react";
import { Globe, MessageCircle, TrendingUp, Palette, Zap, ArrowUpRight, Check, X, ArrowRight } from "lucide-react";

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
    title: "Smart Business Websites",
    desc: "Designed to convert visitors into booked leads, not just look good.",
    tag: "01",
    pop: "card-pop-pink",
    bg: "bg-pixel-pink/15",
    ic: "text-pixel-pink",
    long: "Not a recycled template. Every site we build is custom-coded around one goal: turning visitors into booked leads. Lightning-fast, mobile-first, and wired with your entire growth system.",
    features: [
      "Custom UI/UX tailored to your brand",
      "Mobile-first, blazing-fast performance",
      "SEO-ready structure & schema markup",
      "Lead capture forms + WhatsApp integration",
      "Analytics & conversion tracking setup",
    ],
    deliverables: ["Custom website", "Admin CMS access", "1 month free support"],
    timeline: "7–10 days",
    startingAt: "Included in all plans",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots & WhatsApp Automation",
    desc: "Never miss a lead. Your business replies, follows up & books clients at 2 AM.",
    tag: "02",
    pop: "card-pop-yellow",
    bg: "bg-pixel-yellow/30",
    ic: "text-pixel-orange",
    long: "Your AI chatbot talks to every website visitor, qualifies them, and books appointments — even at midnight. Paired with WhatsApp automation sequences that follow up on every lead, send reminders, and nurture clients without you lifting a finger.",
    features: [
      "AI chatbot trained on your business",
      "WhatsApp lead capture & auto-reply",
      "Automated follow-up sequences",
      "Appointment booking via chat",
      "Multi-language support (Hindi, English)",
    ],
    deliverables: ["AI chatbot live on site", "WhatsApp automation flow", "Dashboard & analytics"],
    timeline: "3–5 days",
    startingAt: "Included in Growth Engine +",
  },
  {
    icon: TrendingUp,
    title: "Business Funnels & CRM",
    desc: "A full pipeline that takes a stranger and turns them into a paying customer, step by step.",
    tag: "03",
    pop: "card-pop-cyan",
    bg: "bg-pixel-cyan/25",
    ic: "text-pixel-blue",
    long: "A funnel is the automated path from stranger → interested → paying customer. We build the entire journey — landing page, WhatsApp follow-up, offer, close — and wire it to a CRM that tracks every lead so nothing falls through the cracks.",
    features: [
      "Landing page & lead magnet design",
      "Email & WhatsApp drip sequences",
      "CRM setup with lead tracking",
      "Pipeline management dashboard",
      "Conversion analytics & reporting",
    ],
    deliverables: ["Full funnel setup", "CRM configured", "Automation workflows live"],
    timeline: "7–10 days",
    startingAt: "Included in Elite",
  },
  {
    icon: TrendingUp,
    title: "Local SEO & Google Visibility",
    desc: "Rank #1 when your customer searches. Own your city on Google.",
    tag: "04",
    pop: "card-pop-purple",
    bg: "bg-pixel-purple/15",
    ic: "text-pixel-purple",
    long: "When someone in your city searches for what you offer, you need to be the first result they see. We optimize your Google Business Profile, build local citations, and rank your site so qualified buyers find you first.",
    features: [
      "Google Business Profile optimization",
      "Local keyword ranking strategy",
      "Citation building & NAP consistency",
      "Review generation & management",
      "Monthly ranking reports",
    ],
    deliverables: ["GBP fully optimized", "Local citations built", "Monthly ranking report"],
    timeline: "Ongoing",
    startingAt: "Included in Growth Engine +",
  },
  {
    icon: Palette,
    title: "Social Media & Reputation",
    desc: "Build trust, collect 5-star reviews, and make your brand impossible to ignore.",
    tag: "05",
    pop: "card-pop-green",
    bg: "bg-pixel-green/20",
    ic: "text-pixel-green",
    long: "Your social presence is your new storefront. We craft a content strategy, design scroll-stopping creatives, and manage your reputation across Google, Instagram, and Facebook — so every touchpoint builds trust.",
    features: [
      "Content strategy & calendar",
      "Reel & post design (static + video)",
      "Review management & response templates",
      "Instagram & Facebook page optimization",
      "Monthly engagement & growth report",
    ],
    deliverables: ["Content calendar", "Designed posts & reels", "Reputation dashboard"],
    timeline: "Ongoing",
    startingAt: "Included in Elite",
  },
  {
    icon: Zap,
    title: "Full AI Growth Systems",
    desc: "End-to-end autonomous systems: lead capture → nurture → close → retain. All on autopilot.",
    tag: "06",
    pop: "card-pop-orange",
    bg: "bg-pixel-orange/20",
    ic: "text-pixel-orange",
    long: "The complete package. We wire together lead capture, AI chatbots, WhatsApp automation, CRM, funnels, SEO, and ads into one unified system that runs on autopilot — so you focus on serving clients while the machine brings them in.",
    features: [
      "Custom website + AI chatbot",
      "WhatsApp automation & CRM",
      "Full funnel setup (landing → close)",
      "Google Ads management",
      "Local SEO & reputation management",
      "Monthly strategy & performance review",
    ],
    deliverables: ["Complete growth system", "All automations live", "Dedicated account manager"],
    timeline: "10–14 days",
    startingAt: "Included in Elite",
  },
];

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">What We Do</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Every system you need to <span className="text-gradient-pixorra">grow on autopilot</span> — under one roof.
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            AI chatbots, automation, funnels, CRM, websites and SEO — all wired together to turn strangers into paying clients. No juggling vendors.
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
                className={`reveal group relative text-left rounded-3xl glass-card p-7 md:p-8 ${s.pop} focus:outline-none focus-visible:ring-4 focus-visible:ring-pixel-pink/40`}
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border-2 border-ink shadow-pixel"
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
                  <span key={d} className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-background px-3 py-1.5 text-sm font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink" /> {d}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918927840261?text=Hi%20Pixorra%2C%20I%27m%20interested%20in%20your%20service%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-pixel-green text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition flex-1"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-background text-ink font-bold border-2 border-ink hover:bg-cream transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

