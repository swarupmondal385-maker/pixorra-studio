import { MapPin, Clock } from "lucide-react";

const AREAS = ["Mumbai", "Pune", "Delhi NCR", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Surat", "Ahmedabad", "Jaipur", "Lucknow", "All India (Remote)"];

export function Location() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Visit / Call Us</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance">
            Based in Mumbai.<br/><span className="text-navy">Serving India.</span>
          </h2>
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-gold"/>
              </div>
              <div>
                <div className="font-semibold text-ink">Pixorra Studio</div>
                <a href="https://maps.app.goo.gl/sTNgPTT55oj3Fpv89?g_st=iw" target="_blank" rel="noreferrer" className="text-ink/65 hover:text-ink">
                  Mumbai, Maharashtra, India — <span className="underline underline-offset-2">Get Directions</span>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-white border border-black/5 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-gold"/>
              </div>
              <div>
                <div className="font-semibold text-ink">Working Hours</div>
                <div className="text-ink/65">Monday – Saturday · 10:00 AM – 8:00 PM IST</div>
                <div className="text-sm text-ink/50">WhatsApp support available 24/7</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Areas Served</p>
          <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-ink">We build websites across India.</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {AREAS.map((a) => (
              <span key={a} className="inline-flex items-center h-10 px-4 rounded-full bg-white border border-black/5 text-sm font-medium text-ink/80 hover:border-gold hover:text-ink transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
