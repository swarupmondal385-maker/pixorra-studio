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
        <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">The Final Question</p>
        <h2 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink tracking-tight text-balance leading-[1.02]">
          Your competitors already have a website.
          <br/>
          <span className="text-gradient-pixorra">Do you?</span>
        </h2>
        <p className="mt-7 text-lg md:text-xl text-ink/60 max-w-2xl mx-auto">
          Every day without a proper online presence is a customer walking into their shop instead of yours. Let's fix that — starting today.
        </p>
        <a href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
          target="_blank" rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 h-16 px-9 rounded-full bg-gradient-pixorra text-white font-semibold text-lg border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform group">
          <Rocket className="h-5 w-5"/>
          Get My Free Demo Website
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="mt-4 text-sm text-ink/50">No card needed · 48-hour turnaround · Zero obligation</p>
      </div>
    </section>
  );
}
