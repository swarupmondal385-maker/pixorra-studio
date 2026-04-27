import { Globe, ShoppingBag, TrendingUp, Palette, Film, Wrench, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Globe, title: "High-Converting Websites", desc: "Bespoke sites engineered to turn visitors into booked leads — fast.", tag: "01" },
  { icon: ShoppingBag, title: "E-Commerce & Shopify", desc: "Beautiful stores that handle checkouts, GST, and scale with your orders.", tag: "02" },
  { icon: TrendingUp, title: "Google Ads & SEO", desc: "Get found by customers who are actively searching for what you sell.", tag: "03" },
  { icon: Palette, title: "Branding & Identity", desc: "Logos, colour systems and brand kits that make you instantly recognisable.", tag: "04" },
  { icon: Film, title: "AI Video & Creative", desc: "Scroll-stopping reels, ads and product videos produced in days, not weeks.", tag: "05" },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, security and speed — so your site never lets you down.", tag: "06" },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">What We Do</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Everything you need to win online — under one roof.
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            No juggling three vendors. No finger-pointing. One team, one invoice, one plan to grow your business.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="reveal group relative rounded-3xl bg-cream p-7 md:p-8 border border-black/5 hover:border-gold hover:-translate-y-1 transition-all duration-500 shadow-card hover:shadow-card-lg"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-6 right-6 font-display text-xs font-bold text-ink/30 tracking-widest">
                {tag}
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-black/5 group-hover:bg-gradient-gold group-hover:border-gold transition-all">
                <Icon className="h-6 w-6 text-navy group-hover:text-ink" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-ink/60 leading-relaxed">{desc}</p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-ink/70 group-hover:text-gold transition-colors">
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
