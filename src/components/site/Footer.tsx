import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
} from "lucide-react";
import logoFull from "@/assets/pixorra-logo.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-cream border-t-2 border-ink overflow-hidden">
      <div className="h-2 bg-gradient-rainbow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 bg-pixel-pink/15 blob" />
        <div
          className="absolute bottom-0 -right-16 h-80 w-80 bg-pixel-cyan/15 blob"
          style={{ animationDelay: "3s" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14">
        <div className="rounded-3xl border-2 border-ink glass-card shadow-pixel p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="h-14 w-14 rounded-2xl bg-pixel-yellow border-2 border-ink flex items-center justify-center text-2xl wobble">
              ✨
            </div>
            <div>
              <div className="font-display text-xl md:text-2xl font-bold text-ink">
                Ready to grow online?
              </div>
              <div className="text-ink/60 text-sm">
                Get a free demo website tailored to your business — no commitment.
              </div>
            </div>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-cyan-cta text-ink font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition"
          >
            Get Free Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-block group">
              <img
                src={logoFull}
                alt="Pixorra"
                className="h-24 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="mt-5 text-ink/65 max-w-sm leading-relaxed">
              Premium websites, ads and branding for ambitious Indian businesses. Designed in
              Kolkata, loved across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { Icon: Instagram, c: "bg-pixel-pink" },
                { Icon: Linkedin, c: "bg-pixel-blue" },
                { Icon: Facebook, c: "bg-pixel-cyan" },
                { Icon: Twitter, c: "bg-pixel-purple" },
              ].map(({ Icon, c }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`h-11 w-11 rounded-xl bg-card border-2 border-ink flex items-center justify-center hover:${c} hover:text-white shadow-pixel hover:-translate-y-0.5 transition-all`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-background bg-foreground px-3 py-1 rounded-full">
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
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 hover:text-ink hover:translate-x-1 transition-transform"
                  >
                    <span>{s.e}</span> {s.t}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 hover:text-ink hover:translate-x-1 transition-transform font-semibold"
                >
                  <span>💛</span> Support Us
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-white bg-pixel-pink px-3 py-1 rounded-full border-2 border-ink">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-ink/85">
              <li>
                <a
                  href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20have%20a%20question."
                  className="flex items-center gap-3 rounded-2xl bg-card border-2 border-ink shadow-pixel px-4 py-3 hover:-translate-y-0.5 transition"
                >
                  <span className="h-9 w-9 rounded-lg bg-whatsapp border-2 border-ink flex items-center justify-center">
                    <WhatsAppIcon className="h-4 w-4 text-ink" />
                  </span>
                  <span className="font-semibold">+91 89278 40261</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pixorrastudio@gmail.com"
                  className="flex items-center gap-3 rounded-2xl bg-card border-2 border-ink shadow-pixel px-4 py-3 hover:-translate-y-0.5 transition break-all"
                >
                  <span className="h-9 w-9 rounded-lg bg-pixel-cyan border-2 border-ink flex items-center justify-center">
                    <Mail className="h-4 w-4 text-ink" />
                  </span>
                  <span className="font-semibold">pixorrastudio@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink/70 px-1">
                <MapPin className="h-4 w-4 text-pixel-pink" /> Kolkata, West Bengal, India
              </li>
              <li className="flex items-center gap-3 text-sm text-ink/70 px-1">
                <Clock className="h-4 w-4 text-pixel-purple" /> Mon–Sat · 10 AM – 8 PM IST
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t-2 border-dashed border-ink/20 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-ink/60">
          <div suppressHydrationWarning>© {year} Pixorra. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5 font-semibold text-ink/80">
            Made with <Heart className="h-3.5 w-3.5 fill-pixel-pink text-pixel-pink" /> in Kolkata
          </div>
        </div>
      </div>
    </footer>
  );
}
