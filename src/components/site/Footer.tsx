import { Sparkles, Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-black/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-xl bg-gradient-gold inline-flex items-center justify-center shadow-gold">
                <Sparkles className="h-4 w-4 text-ink" strokeWidth={2.5}/>
              </span>
              <span className="font-display text-2xl font-bold text-ink">Pixorra</span>
            </a>
            <p className="mt-5 text-ink/65 max-w-sm leading-relaxed">
              Premium websites, ads and branding for ambitious Indian businesses. Designed in Mumbai, loved across India.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
                  <Icon className="h-4 w-4 text-ink"/>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-ink/40">Services</div>
            <ul className="mt-5 space-y-3 text-ink/70">
              {["Websites","Shopify & E-Commerce","Google Ads & SEO","Branding","AI Video & Creative","Maintenance"].map(s => (
                <li key={s}><a href="#services" className="hover:text-ink">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-ink/40">Contact</div>
            <ul className="mt-5 space-y-4 text-ink/80">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold"/><a href="tel:+919932740091">+91 99327 40091</a></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold"/><a href="mailto:hello@pixorra.in">hello@pixorra.in</a></li>
              <li className="text-sm text-ink/60">Mumbai, Maharashtra, India</li>
              <li className="text-sm text-ink/60">Mon–Sat · 10 AM – 8 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-black/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-ink/50">
          <div>© {new Date().getFullYear()} Pixorra. All rights reserved.</div>
          <div className="font-semibold text-ink/70">Website by Pixorra</div>
        </div>
      </div>
    </footer>
  );
}
