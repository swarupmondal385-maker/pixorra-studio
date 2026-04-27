import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8 text-center reveal">
        <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">The Final Question</p>
        <h2 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink tracking-tight text-balance leading-[1.02]">
          Your competitors already have a website.
          <br/>
          <span className="bg-gradient-gold bg-clip-text text-transparent">Do you?</span>
        </h2>
        <p className="mt-7 text-lg md:text-xl text-ink/60 max-w-2xl mx-auto">
          Every day without a proper online presence is a customer walking into their shop instead of yours. Let's fix that — starting today.
        </p>
        <a href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
          target="_blank" rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 h-16 px-9 rounded-full bg-ink text-white font-semibold text-lg hover:bg-navy transition-colors shadow-card-lg group">
          Get My Free Demo Website
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="mt-4 text-sm text-ink/50">No card needed · 48-hour turnaround · Zero obligation</p>
      </div>
    </section>
  );
}
