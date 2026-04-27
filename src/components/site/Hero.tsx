import { ArrowRight, Play, Star, CheckCircle2, TrendingUp, IndianRupee, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 bg-gradient-hero overflow-hidden">
      {/* Phase 1: Cinematic */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />

        <div className="relative text-center max-w-5xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white border border-gold/30 text-xs font-semibold tracking-wider uppercase text-ink/80 shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Mumbai's Premium Digital Agency
          </div>

          <h1 className="mt-7 font-display font-bold text-ink text-balance text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
            Websites that make
            <br />
            your business the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">obvious choice</span>
              <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-gold/35 -z-0 rounded-sm" />
            </span>
            .
          </h1>

          <p className="mt-7 text-base md:text-xl text-ink/60 max-w-2xl mx-auto text-balance">
            We design high-converting websites, run Google Ads & SEO, and build brands for ambitious Indian businesses — delivered in 7–10 days from our studio in Mumbai.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-ink text-white font-semibold shadow-card-lg hover:bg-navy transition-colors"
            >
              Book My Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-white border border-black/10 text-ink font-semibold hover:border-gold transition-colors"
            >
              <Play className="h-4 w-4 text-gold" fill="currentColor" />
              See Our Work
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["A", "R", "K", "S"].map((i, idx) => (
                  <div key={i} className={`h-8 w-8 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-bold text-white ${["bg-navy","bg-gold text-ink","bg-ink","bg-sky"][idx]}`}>
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-ink/70"><b className="text-ink">150+</b> local businesses served</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-ink/70"><b className="text-ink">4.9/5</b> on Google</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-navy" />
              <span className="text-ink/70"><b className="text-ink">98%</b> client satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 2: Split credibility */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-20 md:mt-28 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Why Pixorra</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-ink tracking-tight text-balance">
              Not just pretty design.<br />
              <span className="text-navy">Design that pays for itself.</span>
            </h2>
            <p className="mt-5 text-ink/60 text-lg">
              Your website should be your hardest-working salesperson — open 24/7, closing leads while you sleep.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "Launch-ready in 7–10 days, start to finish",
                "Built to rank on Google, not just look pretty",
                "Transparent pricing — no hidden fees, ever",
                "Free demo website before you pay a rupee",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-ink/85">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[oklch(0.72_0.18_145)] text-white font-semibold hover:brightness-95 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: mockup */}
          <div className="relative reveal">
            <div className="relative rounded-3xl bg-white shadow-card-lg border border-black/5 overflow-hidden">
              {/* browser chrome */}
              <div className="h-9 flex items-center gap-1.5 px-4 border-b border-black/5 bg-cream">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <div className="mx-auto text-[10px] text-ink/50 font-mono">yourclinic.in</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 rounded-md bg-navy" />
                  <div className="flex gap-2">
                    <div className="h-2 w-12 rounded bg-ink/10" />
                    <div className="h-2 w-12 rounded bg-ink/10" />
                    <div className="h-2 w-12 rounded bg-ink/10" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-5 gap-4">
                  <div className="col-span-3">
                    <div className="h-3 w-16 rounded bg-gold/40 mb-3" />
                    <div className="h-6 w-full rounded bg-ink/90" />
                    <div className="mt-2 h-6 w-4/5 rounded bg-ink/90" />
                    <div className="mt-4 space-y-1.5">
                      <div className="h-2 w-full rounded bg-ink/10" />
                      <div className="h-2 w-11/12 rounded bg-ink/10" />
                      <div className="h-2 w-3/4 rounded bg-ink/10" />
                    </div>
                    <div className="mt-5 flex gap-2">
                      <div className="h-9 w-28 rounded-full bg-gradient-gold" />
                      <div className="h-9 w-24 rounded-full border border-ink/20" />
                    </div>
                  </div>
                  <div className="col-span-2 aspect-square rounded-2xl bg-gradient-to-br from-navy to-sky relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute bottom-3 left-3 right-3 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center px-3 gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gold" />
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 w-20 rounded bg-ink/70" />
                        <div className="h-1.5 w-14 rounded bg-ink/30" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[0,1,2].map((i) => (
                    <div key={i} className="rounded-xl border border-black/5 p-3">
                      <div className="h-5 w-5 rounded bg-gold/30" />
                      <div className="mt-2 h-2 w-full rounded bg-ink/10" />
                      <div className="mt-1 h-2 w-3/4 rounded bg-ink/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat cards */}
            <div className="absolute -top-5 -left-4 md:-left-10 rounded-2xl bg-white shadow-card-lg border border-black/5 p-4 float-soft">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-navy/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-semibold">Organic Traffic</div>
                  <div className="font-display text-xl font-bold text-ink">+320%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-10 rounded-2xl bg-white shadow-card-lg border border-black/5 p-4 float-soft" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-semibold">Monthly Revenue</div>
                  <div className="font-display text-xl font-bold text-ink">₹0 → ₹5L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
