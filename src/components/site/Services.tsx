import { Globe, ShoppingBag, TrendingUp, Palette, Film, Wrench, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Globe, title: "High-Converting Websites", desc: "Bespoke sites engineered to turn visitors into booked leads — fast.", tag: "01", pop: "card-pop-pink", bg: "bg-pixel-pink/15", ic: "text-pixel-pink" },
  { icon: ShoppingBag, title: "E-Commerce & Shopify", desc: "Beautiful stores that handle checkouts, GST, and scale with your orders.", tag: "02", pop: "card-pop-yellow", bg: "bg-pixel-yellow/30", ic: "text-pixel-orange" },
  { icon: TrendingUp, title: "Google Ads & SEO", desc: "Get found by customers who are actively searching for what you sell.", tag: "03", pop: "card-pop-cyan", bg: "bg-pixel-cyan/25", ic: "text-pixel-blue" },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, colour systems and brand kits that make you instantly recognisable.", tag: "04", pop: "card-pop-purple", bg: "bg-pixel-purple/15", ic: "text-pixel-purple" },
  { icon: Film, title: "AI Video & Creative", desc: "Scroll-stopping reels, ads and product videos produced in days, not weeks.", tag: "05", pop: "card-pop-green", bg: "bg-pixel-green/20", ic: "text-pixel-green" },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, security and speed — so your site never lets you down.", tag: "06", pop: "card-pop-orange", bg: "bg-pixel-orange/20", ic: "text-pixel-orange" },
];

export function Services() {
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
          {SERVICES.map(({ icon: Icon, title, desc, tag, pop, bg, ic }, i) => (
            <div
              key={title}
              className={`reveal group relative rounded-3xl bg-white p-7 md:p-8 ${pop}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-5 right-6 font-pixel text-[10px] text-ink/40 tracking-widest">
                {tag}
              </div>
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink ${bg}`}>
                <Icon className={`h-6 w-6 ${ic}`} strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-ink/65 leading-relaxed">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:text-pixel-pink transition-colors">
                Learn more
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
