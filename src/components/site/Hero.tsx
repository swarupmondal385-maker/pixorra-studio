import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { VideoEmbed } from "./VideoEmbed";
import { Countdown } from "./Countdown";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-hero overflow-hidden">
      {/* Soft, premium ambient background — no floating objects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute top-32 -right-20 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Logo — clean, no orbit */}
          <div className="flex justify-center">
            <img
              src={logoMark}
              alt="Pixorra"
              className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-xl"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Premium Digital Studio · Mumbai
          </div>

          {/* New, clearer tagline */}
          <h1 className="mt-5 font-display text-ink text-balance text-[2.2rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-medium">
            The complete system to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient-pixorra italic">grow your business</span>
              <span className="absolute left-0 right-0 bottom-0.5 md:bottom-1 h-2.5 md:h-3 bg-gold/35 -z-0 rounded-sm" />
            </span>{" "}
            online.
          </h1>

          <p className="mt-5 md:mt-6 text-[15px] md:text-lg text-ink/65 max-w-2xl mx-auto text-balance px-2">
            High-converting websites, Google Ads &amp; SEO, and Shopify stores —
            engineered to bring you real customers. Delivered in 7–10 days.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full bg-gradient-pixorra text-white font-bold border border-ink/20 shadow-pixel hover:-translate-y-0.5 transition-transform w-full sm:w-auto justify-center"
            >
              Book My Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full bg-white/80 backdrop-blur border border-ink/15 text-ink font-bold hover:bg-white transition w-full sm:w-auto justify-center"
            >
              <Play className="h-4 w-4 text-navy" fill="currentColor" />
              See Our Work
            </a>
          </div>

          {/* Trust mini-bar */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-ink/70"><b className="text-ink">4.9/5</b> on Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[oklch(0.66_0.14_160)]" />
              <span className="text-ink/70"><b className="text-ink">150+</b> brands served</span>
            </div>
          </div>

          {/* Glass stat cards — Awwwards-style counter row */}
          <div className="mt-12 md:mt-14">
            <HeroStats />
          </div>

          {/* Limited-time offer countdown */}
          <div className="mt-12 md:mt-16">
            <Countdown />
          </div>

          {/* Hero video — with gold glow ring */}
          <div className="mt-12 md:mt-16 relative">
            <div aria-hidden className="pointer-events-none absolute -inset-4 md:-inset-6 rounded-[2rem] bg-gold/25 blur-3xl opacity-70" />
            <div className="relative">
              <VideoEmbed eyebrow="Watch the 60-second intro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
