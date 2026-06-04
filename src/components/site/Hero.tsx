import { ArrowRight, Play, Star, CheckCircle2, TrendingUp, IndianRupee, MessageCircle, Smile } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { VideoEmbed } from "./VideoEmbed";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 bg-gradient-hero overflow-hidden">
      {/* Subtle premium glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--sky) 22%, transparent), transparent)" }}
        />
        <div
          className="absolute top-40 -right-24 h-96 w-96 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 25%, transparent), transparent)" }}
        />
      </div>

      {/* Phase 1: Cinematic */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />

        <div className="relative text-center max-w-5xl mx-auto reveal">
          {/* Clean logo mark — no orbiting objects */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-70"
                style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 40%, transparent), transparent)" }}
              />
              <img
                src={logoMark}
                alt="Pixorra"
                className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Small eyebrow */}
          <div className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Pixorra Studio · Mumbai
            </span>
          </div>

          <h1 className="mt-5 font-display text-ink text-balance text-[2.2rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-medium">
            The complete system to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic" style={{ fontVariationSettings: '"opsz" 144' }}>grow online</span>
              <span className="absolute left-0 right-0 bottom-1 h-2.5 md:h-3 bg-gold/35 -z-0 rounded-sm" />
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            websites, ads &amp; SEO — done right.
          </h1>

          <p className="mt-5 md:mt-6 text-[15px] md:text-xl text-ink/65 max-w-2xl mx-auto text-balance px-2">
            One studio. One plan. Custom websites, Google Ads and SEO that turn visitors into paying customers — launched in 7–10 days.
          </p>

          {/* Limited-time countdown */}
          <div className="mt-9 md:mt-10">
            <Countdown />
          </div>

          {/* Hero video with gold glow */}
          <div className="mt-10 md:mt-12 relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 md:-inset-10 -z-10 rounded-[2.5rem] blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--gold) 32%, transparent), transparent 70%)",
              }}
            />
            <VideoEmbed eyebrow="Watch the 60-second intro" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-gradient-pixorra text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
            >
              Book My Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-white border-2 border-ink text-ink font-bold hover:bg-pixel-yellow transition-colors shadow-pixel"
            >
              <Play className="h-4 w-4 text-gold" fill="currentColor" />
              See Our Work
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  { i: "A", bg: "bg-navy" },
                  { i: "R", bg: "bg-gold" },
                  { i: "K", bg: "bg-sky" },
                  { i: "S", bg: "bg-pixel-purple" },
                ].map(({ i, bg }) => (
                  <div key={i} className={`h-8 w-8 rounded-full ring-2 ring-white border border-ink flex items-center justify-center text-xs font-bold text-white ${bg}`}>
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
              <CheckCircle2 className="h-4 w-4 text-pixel-green" />
              <span className="text-ink/70"><b className="text-ink">98%</b> client satisfaction</span>
            </div>
          </div>
        </div>
      </div>


      {/* Phase 2: Split credibility */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-20 md:mt-28 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pixel-pink text-white text-xs font-bold border-2 border-ink shadow-pixel">
              <Smile className="h-3.5 w-3.5" /> WHY PIXORRA
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink tracking-tight text-balance">
              Not just pretty design.<br />
              <span className="text-gradient-pixorra">Design that pays for itself.</span>
            </h2>
            <p className="mt-5 text-ink/65 text-lg">
              Your website should be your hardest-working salesperson — open 24/7, closing leads while you sleep.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                { t: "Launch-ready in 7–10 days, start to finish", c: "bg-pixel-pink", e: "🚀" },
                { t: "Built to rank on Google, not just look pretty", c: "bg-pixel-cyan", e: "📈" },
                { t: "Transparent pricing — no hidden fees, ever", c: "bg-pixel-yellow", e: "💎" },
                { t: "Free demo website before you pay a rupee", c: "bg-pixel-purple", e: "🎁" },
              ].map((b) => (
                <li key={b.t} className="flex items-center gap-3 bg-white border-2 border-ink rounded-2xl px-4 py-3 shadow-pixel">
                  <span className={`h-9 w-9 rounded-xl ${b.c} border-2 border-ink flex items-center justify-center text-lg`}>
                    {b.e}
                  </span>
                  <span className="text-ink font-medium">{b.t}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[oklch(0.72_0.18_145)] text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: mockup */}
          <div className="relative reveal">
            {/* spinning rainbow ring behind */}
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-rainbow opacity-20 blur-2xl spin-slower" />

            <div className="relative rounded-3xl bg-white shadow-card-lg border-2 border-ink overflow-hidden">
              <div className="h-1.5 bg-gradient-rainbow" />
              <div className="h-9 flex items-center gap-1.5 px-4 border-b border-black/5 bg-cream">
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-yellow" />
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-green" />
                <div className="mx-auto text-[10px] text-ink/50 font-mono">yourclinic.in</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 rounded-md bg-gradient-pixorra" />
                  <div className="flex gap-2">
                    <div className="h-2 w-12 rounded bg-ink/10" />
                    <div className="h-2 w-12 rounded bg-ink/10" />
                    <div className="h-2 w-12 rounded bg-ink/10" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-5 gap-4">
                  <div className="col-span-3">
                    <div className="h-3 w-16 rounded bg-pixel-yellow mb-3" />
                    <div className="h-6 w-full rounded bg-ink/90" />
                    <div className="mt-2 h-6 w-4/5 rounded bg-ink/90" />
                    <div className="mt-4 space-y-1.5">
                      <div className="h-2 w-full rounded bg-ink/10" />
                      <div className="h-2 w-11/12 rounded bg-ink/10" />
                      <div className="h-2 w-3/4 rounded bg-ink/10" />
                    </div>
                    <div className="mt-5 flex gap-2">
                      <div className="h-9 w-28 rounded-full bg-gradient-pixorra border-2 border-ink" />
                      <div className="h-9 w-24 rounded-full border-2 border-ink" />
                    </div>
                  </div>
                  <div className="col-span-2 aspect-square rounded-2xl bg-gradient-pixorra relative overflow-hidden border-2 border-ink">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute bottom-3 left-3 right-3 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center px-3 gap-2 border border-ink">
                      <div className="h-8 w-8 rounded-lg bg-pixel-pink" />
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 w-20 rounded bg-ink/70" />
                        <div className="h-1.5 w-14 rounded bg-ink/30" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    "bg-pixel-pink/30",
                    "bg-pixel-cyan/30",
                    "bg-pixel-yellow/40",
                  ].map((c, i) => (
                    <div key={i} className="rounded-xl border-2 border-ink p-3">
                      <div className={`h-5 w-5 rounded ${c} border border-ink`} />
                      <div className="mt-2 h-2 w-full rounded bg-ink/10" />
                      <div className="mt-1 h-2 w-3/4 rounded bg-ink/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating stat cards */}
            <div className="absolute -top-5 -left-4 md:-left-10 rounded-2xl bg-white shadow-pixel border-2 border-ink p-4 float-soft wobble">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-pixel-cyan border-2 border-ink flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-bold">Organic Traffic</div>
                  <div className="font-display text-xl font-bold text-ink">+320%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-10 rounded-2xl bg-white shadow-pixel border-2 border-ink p-4 float-soft" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-pixel-pink border-2 border-ink flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-bold">Monthly Revenue</div>
                  <div className="font-display text-xl font-bold text-ink">₹0 → ₹5L</div>
                </div>
              </div>
            </div>
            {/* corner sticker */}
            <div className="absolute -top-6 -right-4 h-16 w-16 rounded-full bg-pixel-yellow border-2 border-ink shadow-pixel flex items-center justify-center wobble">
              <span className="font-display font-bold text-ink text-xs leading-tight text-center">FREE<br/>DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
