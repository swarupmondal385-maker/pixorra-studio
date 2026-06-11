import { ArrowRight, Play, TrendingUp, IndianRupee, MessageCircle, Zap, Heart, Rocket, Smile, Video } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 bg-gradient-hero overflow-hidden">
      {/* Big soft blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 bg-pixel-pink/25 blob" />
        <div className="absolute top-40 -right-24 h-96 w-96 bg-pixel-cyan/25 blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 bg-pixel-yellow/30 blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Pixel sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-24 left-8 h-3 w-3 bg-pixel-pink sparkle-pulse" />
        <div className="absolute top-40 right-16 h-2 w-2 bg-pixel-yellow sparkle-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-1/3 h-2.5 w-2.5 bg-pixel-cyan sparkle-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-80 right-1/4 h-2 w-2 bg-pixel-purple sparkle-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-32 right-10 h-2.5 w-2.5 bg-pixel-green sparkle-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[28rem] left-12 h-2 w-2 bg-pixel-orange sparkle-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[22rem] right-1/3 h-3 w-3 bg-pixel-blue sparkle-pulse" style={{ animationDelay: "1.3s" }} />
      </div>

      {/* Floating emoji stickers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute top-28 left-[8%] text-3xl drift">⚡</div>
        <div className="absolute top-44 right-[10%] text-3xl drift" style={{ animationDelay: "1.5s" }}>🚀</div>
        <div className="absolute top-[26rem] left-[6%] text-3xl drift" style={{ animationDelay: "3s" }}>💖</div>
        <div className="absolute top-[30rem] right-[8%] text-2xl drift" style={{ animationDelay: "2.2s" }}>✨</div>
      </div>

      {/* Phase 1: Cinematic */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />

        <div className="relative text-center max-w-5xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white border-2 border-ink text-xs font-bold tracking-wider uppercase shadow-pixel">
              <span className="text-gradient-pixorra">India's Business Growth OS</span>
            </div>

          {/* Mascot with orbit */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-32 w-32 md:h-36 md:w-36">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit" style={{ ["--orbit-r" as any]: "78px" }}>
                  <div className="h-9 w-9 rounded-full bg-pixel-yellow border-2 border-ink shadow-pixel flex items-center justify-center">
                    <Zap className="h-4 w-4 text-ink" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit" style={{ ["--orbit-r" as any]: "78px", animationDelay: "-3s" } as any}>
                  <div className="h-9 w-9 rounded-full bg-pixel-pink border-2 border-ink shadow-pixel flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit" style={{ ["--orbit-r" as any]: "78px", animationDelay: "-6s" } as any}>
                  <div className="h-9 w-9 rounded-full bg-pixel-cyan border-2 border-ink shadow-pixel flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-ink" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={logoMark} alt="Pixorra mascot" className="h-24 w-24 md:h-28 md:w-28 object-contain bounce-soft drop-shadow-xl" />
              </div>
            </div>
          </div>

          <h1 className="mt-4 font-display font-bold text-ink text-balance text-[2.4rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight">
            Built to be <span className="relative inline-block">
              <span className="relative z-10 text-gradient-pixorra">found.</span>
              <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-pixel-yellow/60 -z-0 rounded-sm" />
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink/65 max-w-3xl mx-auto">
            We build premium websites &amp; automated systems that turn strangers into customers — while you sleep.
          </p>

          {/* Video demo card */}
          <div className="mt-7 max-w-md mx-auto">
            <div className="relative rounded-2xl border-2 border-ink shadow-pixel overflow-hidden group cursor-pointer hover:-translate-y-1 hover:translate-x-0.5 transition-transform glass-card glass-shine">
              <div className="aspect-video bg-pixel-purple relative flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white border-2 border-ink shadow-pixel flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-pixel-pink ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 h-7 px-3 rounded-full bg-ink text-white text-[10px] font-bold flex items-center gap-1.5 border border-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink animate-pulse" />2 min watch
                </div>
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-pixel-yellow border-2 border-ink flex items-center justify-center shrink-0">
                  <Video className="h-5 w-5 text-ink" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-ink/50 font-bold">Watch Demo Video</div>
                  <div className="text-sm font-semibold text-ink truncate">See how Pixorra delivers in 7 days</div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink/40 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#demo" className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-yellow-cta text-ink font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform">
              Book My Free Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-white border-2 border-ink text-ink font-bold hover:bg-pixel-yellow transition-colors shadow-pixel">
              <Play className="h-4 w-4 text-pixel-pink" fill="currentColor" /> See Our Work
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-12 md:mt-16 flex items-center justify-center text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  { i: "A", bg: "bg-pixel-pink" },
                  { i: "R", bg: "bg-pixel-yellow" },
                  { i: "K", bg: "bg-pixel-cyan" },
                  { i: "S", bg: "bg-pixel-purple" },
                ].map(({ i, bg }) => (
                  <div key={i} className={`h-8 w-8 rounded-full ring-2 ring-white border border-ink flex items-center justify-center text-xs font-bold text-white ${bg}`}>{i}</div>
                ))}
              </div>
              <span className="text-ink/70"><b className="text-ink">150+</b> local businesses served</span>
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
                { t: "Launch-ready in 7-10 days, start to finish", c: "bg-pixel-pink", e: "🚀" },
                { t: "Built to rank on Google, not just look pretty", c: "bg-pixel-cyan", e: "📈" },
                { t: "Transparent pricing — no hidden fees, ever", c: "bg-pixel-yellow", e: "💎" },
                { t: "Free demo website before you pay a rupee", c: "bg-pixel-purple", e: "🎁" },
              ].map((b) => (
                <li key={b.t} className="flex items-center gap-3 bg-white border-2 border-ink rounded-2xl px-4 py-3 shadow-pixel">
                  <span className={`h-9 w-9 rounded-xl ${b.c} border-2 border-ink flex items-center justify-center text-lg`}>{b.e}</span>
                  <span className="text-ink font-medium">{b.t}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website." target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-pixel-green text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: mockup — hover motion sensor */}
          <div className="relative reveal group perspective-1200">

            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-rainbow opacity-20 blur-2xl spin-slower group-hover:opacity-35 group-hover:blur-xl transition-all duration-500" />

            <div className="relative rounded-3xl bg-white shadow-card-lg border-2 border-ink overflow-hidden group-hover:-translate-y-1 group-hover:translate-x-0.5 group-hover:shadow-pixel transition-all duration-300">
              <div className="h-1.5 bg-gradient-rainbow animate-shimmer" />
              <div className="h-9 flex items-center gap-1.5 px-4 border-b border-black/5 bg-cream">
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-pink animate-pulse group-hover:scale-125 transition-transform" />
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-yellow animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: "0.3s" }} />
                <span className="h-2.5 w-2.5 rounded-full bg-pixel-green animate-pulse group-hover:scale-125 transition-transform" style={{ animationDelay: "0.6s" }} />
                <div className="mx-auto text-[10px] text-ink/50 font-mono group-hover:text-ink/70 transition-colors">yourclinic.in</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-24 rounded-md bg-gradient-pixorra wiggle group-hover:scale-105 transition-transform" />
                  <div className="flex gap-2">
                    <div className="h-2 w-12 rounded bg-ink/10 group-hover:bg-ink/20 transition-colors" />
                    <div className="h-2 w-12 rounded bg-ink/10 group-hover:bg-ink/20 transition-colors" />
                    <div className="h-2 w-12 rounded bg-ink/10 group-hover:bg-ink/20 transition-colors" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-5 gap-4">
                  <div className="col-span-3">
                    <div className="h-3 w-16 rounded bg-pixel-yellow mb-3 group-hover:w-20 transition-all duration-300" />
                    <div className="h-6 w-full rounded bg-ink/90 group-hover:bg-gradient-pixorra transition-colors duration-300" />
                    <div className="mt-2 h-6 w-4/5 rounded bg-ink/90 group-hover:bg-gradient-pixorra transition-colors duration-300" />
                    <div className="mt-4 space-y-1.5">
                      <div className="h-2 w-full rounded bg-ink/10 group-hover:bg-pixel-pink/20 transition-colors duration-300" />
                      <div className="h-2 w-11/12 rounded bg-ink/10 group-hover:bg-pixel-cyan/20 transition-colors duration-300" />
                      <div className="h-2 w-3/4 rounded bg-ink/10 group-hover:bg-pixel-yellow/20 transition-colors duration-300" />
                    </div>
                    <div className="mt-5 flex gap-2">
                      <div className="h-9 w-28 rounded-full bg-gradient-pixorra border-2 border-ink float-soft group-hover:scale-105 transition-transform" />
                      <div className="h-9 w-24 rounded-full border-2 border-ink float-soft group-hover:bg-pixel-yellow group-hover:scale-105 transition-all" style={{ animationDelay: "0.5s" }} />
                    </div>
                  </div>
                  <div className="col-span-2 aspect-square rounded-2xl bg-gradient-pixorra relative overflow-hidden border-2 border-ink group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="absolute inset-0 grid-bg opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 h-14 rounded-xl bg-white/90 backdrop-blur flex items-center px-3 gap-2 border border-ink wiggle group-hover:-translate-y-1 transition-transform" style={{ animationDelay: "0.8s" }}>
                      <div className="h-8 w-8 rounded-lg bg-pixel-pink sparkle-pulse group-hover:rotate-12 transition-transform" />
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 w-20 rounded bg-ink/70 group-hover:w-24 transition-all duration-300" />
                        <div className="h-1.5 w-14 rounded bg-ink/30 group-hover:w-18 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["bg-pixel-pink/30","bg-pixel-cyan/30","bg-pixel-yellow/40"].map((c, i) => (
                    <div key={i} className="rounded-xl border-2 border-ink p-3 float-soft group-hover:-translate-y-1 group-hover:shadow-pixel transition-all duration-300" style={{ animationDelay: `${i * 0.4}s` }}>
                      <div className={`h-5 w-5 rounded ${c} border border-ink group-hover:scale-110 transition-transform duration-300`} />
                      <div className="mt-2 h-2 w-full rounded bg-ink/10 group-hover:bg-ink/20 transition-colors duration-300" />
                      <div className="mt-1 h-2 w-3/4 rounded bg-ink/10 group-hover:w-full transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -left-4 md:-left-10 rounded-2xl glass-card shadow-pixel border-2 border-ink p-4 float-soft wobble group-hover:-translate-y-3 group-hover:-rotate-3 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-pixel-cyan border-2 border-ink flex items-center justify-center sparkle-pulse group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-5 w-5 text-ink group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-bold">Organic Traffic</div>
                  <div className="font-display text-xl font-bold text-ink group-hover:text-gradient-pixorra transition-all">+320%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-10 rounded-2xl glass-card shadow-pixel border-2 border-ink p-4 float-soft wobble group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-pixel-pink border-2 border-ink flex items-center justify-center sparkle-pulse group-hover:scale-110 transition-transform" style={{ animationDelay: "0.6s" }}>
                  <IndianRupee className="h-5 w-5 text-white group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-ink/50 font-bold">Monthly Revenue</div>
                  <div className="font-display text-xl font-bold text-ink group-hover:text-gradient-pixorra transition-all">₹0 → ₹5L</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 h-16 w-16 rounded-full bg-pixel-yellow border-2 border-ink shadow-pixel flex items-center justify-center wobble group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" style={{ animationDelay: "0.4s" }}>
              <span className="font-display font-bold text-ink text-xs leading-tight text-center">FREE<br/>DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
