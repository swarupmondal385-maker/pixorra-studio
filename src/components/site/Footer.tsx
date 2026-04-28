import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin, Clock, ArrowRight, Heart } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

export function Footer() {
  return (
    <footer className="relative bg-cream border-t-2 border-ink overflow-hidden">
      {/* rainbow top bar */}
      <div className="h-2 bg-gradient-rainbow" />

      {/* decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 bg-pixel-pink/15 blob" />
        <div className="absolute bottom-0 -right-16 h-80 w-80 bg-pixel-cyan/15 blob" style={{ animationDelay: "3s" }} />
      </div>

      {/* CTA strip */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14">
        <div className="rounded-3xl border-2 border-ink bg-white shadow-pixel p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-pixel-yellow border-2 border-ink flex items-center justify-center text-2xl wobble">
              ✨
            </div>
            <div>
              <div className="font-display text-xl md:text-2xl font-bold text-ink">Ready to grow online?</div>
              <div className="text-ink/60 text-sm">Get a free demo website tailored to your business — no commitment.</div>
            </div>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-pixorra text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition"
          >
            Get Free Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5 group">
              <img src={logoMark} alt="Pixorra" className="h-12 w-12 object-contain group-hover:rotate-6 transition-transform" />
              <span className="font-display text-2xl font-bold text-ink">Pixorra</span>
            </a>
            <p className="mt-5 text-ink/65 max-w-sm leading-relaxed">
              Premium websites, ads and branding for ambitious Indian businesses. Designed in Mumbai, loved across India.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, c: "bg-pixel-pink" },
                { Icon: Linkedin, c: "bg-pixel-blue" },
                { Icon: Facebook, c: "bg-pixel-cyan" },
                { Icon: Twitter, c: "bg-pixel-purple" },
              ].map(({ Icon, c }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`h-11 w-11 rounded-xl bg-white border-2 border-ink flex items-center justify-center hover:${c} hover:text-white shadow-pixel hover:-translate-y-0.5 transition-all`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-white bg-ink px-3 py-1 rounded-full">
              Services
            </div>
            <ul className="mt-5 space-y-3 text-ink/75">
              {[
                { t: "Websites", e: "💻" },
                { t: "Shopify & E-Commerce", e: "🛒" },
                { t: "Google Ads & SEO", e: "📈" },
                { t: "Branding", e: "🎨" },
                { t: "AI Video & Creative", e: "✨" },
                { t: "Maintenance", e: "🔧" },
              ].map((s) => (
                <li key={s.t}>
                  <a href="#services" className="inline-flex items-center gap-2 hover:text-ink hover:translate-x-1 transition-transform">
                    <span>{s.e}</span> {s.t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-white bg-pixel-pink px-3 py-1 rounded-full border-2 border-ink">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-ink/85">
              <li>
                <a href="tel:+919932740091" className="flex items-center gap-3 rounded-2xl bg-white border-2 border-ink shadow-pixel px-4 py-3 hover:-translate-y-0.5 transition">
                  <span className="h-9 w-9 rounded-lg bg-pixel-yellow border-2 border-ink flex items-center justify-center"><Phone className="h-4 w-4 text-ink" /></span>
                  <span className="font-semibold">+91 99327 40091</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@pixorra.in" className="flex items-center gap-3 rounded-2xl bg-white border-2 border-ink shadow-pixel px-4 py-3 hover:-translate-y-0.5 transition">
                  <span className="h-9 w-9 rounded-lg bg-pixel-cyan border-2 border-ink flex items-center justify-center"><Mail className="h-4 w-4 text-ink" /></span>
                  <span className="font-semibold">hello@pixorra.in</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink/70 px-1">
                <MapPin className="h-4 w-4 text-pixel-pink" /> Mumbai, Maharashtra, India
              </li>
              <li className="flex items-center gap-3 text-sm text-ink/70 px-1">
                <Clock className="h-4 w-4 text-pixel-purple" /> Mon–Sat · 10 AM – 8 PM IST
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-dashed border-ink/20 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-ink/60">
          <div>© {new Date().getFullYear()} Pixorra. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5 font-semibold text-ink/80">
            Made with <Heart className="h-3.5 w-3.5 fill-pixel-pink text-pixel-pink" /> in Mumbai
          </div>
        </div>
      </div>
    </footer>
  );
}
