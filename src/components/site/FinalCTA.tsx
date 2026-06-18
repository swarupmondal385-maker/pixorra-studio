import { ArrowRight, Rocket } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-pixel-pink/15 blur-3xl blob" />
      <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-pixel-cyan/15 blur-3xl blob" style={{animationDelay:"3s"}} />
      <div className="absolute top-20 left-10 h-3 w-3 bg-pixel-yellow sparkle-pulse" />
      <div className="absolute top-40 right-16 h-2 w-2 bg-pixel-purple sparkle-pulse" style={{animationDelay:"1s"}} />
      <div className="absolute bottom-32 left-20 h-2.5 w-2.5 bg-pixel-green sparkle-pulse" style={{animationDelay:"2s"}} />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center reveal">
        <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">Stop Losing Leads</p>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-ink tracking-tight text-balance leading-[1.02]">
          Your competitors are already automating.
          <br/>
          <span className="text-gradient-pixorra">Are you still doing it manually?</span>
        </h2>
        <p className="mt-7 text-base sm:text-lg md:text-xl text-ink/60 max-w-2xl mx-auto">
          Every lead you don't follow up with goes to a competitor who does. Let's build the system that never lets that happen again.
        </p>
        <a href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20growth%20strategy%20call."
          target="_blank" rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 h-16 px-7 sm:px-9 rounded-full bg-pixel-pink text-white font-semibold text-base sm:text-lg border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform group">
          <Rocket className="h-5 w-5"/>
          Get My Free Growth Strategy Call
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="mt-4 text-sm text-ink/50">No card needed · Free strategy call · Zero obligation</p>
      </div>
    </section>
  );
}
