import { MessageCircle, ArrowRight } from "lucide-react";

export function DemoBanner() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-pixorra border-2 border-ink p-8 md:p-16 reveal" style={{boxShadow:"10px 10px 0 0 var(--ink)"}}>
          <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-pixel-yellow border-2 border-ink flex items-center justify-center spin-slow z-10">
            <div className="font-pixel text-[7px] text-ink text-center leading-tight">FREE<br/>DEMO</div>
          </div>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-navy/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-pixel-yellow border-2 border-ink text-ink text-xs font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" /> Limited Slots This Month
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-white tracking-tight text-balance">
                Get a free demo website<br/>built for <u className="decoration-pixel-yellow underline-offset-4">your</u> business.
              </h2>
              <p className="mt-5 text-white/90 text-lg max-w-2xl">
                Tell us your business name and industry. Within 48 hours we'll send you a real, working homepage preview — no commitment, no card details, zero risk.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between h-16 px-7 rounded-2xl bg-ink text-white font-semibold text-lg border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform"
              >
                <span className="flex items-center gap-3"><MessageCircle className="h-5 w-5"/> WhatsApp Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919932740091"
                className="inline-flex items-center justify-center h-14 px-6 rounded-2xl bg-white border-2 border-ink text-ink font-semibold shadow-pixel hover:-translate-y-0.5 transition-transform"
              >
                Call +91 99327 40091
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
