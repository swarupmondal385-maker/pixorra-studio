const ITEMS = [
  { label: "Gym Website", tag: "Fitness", color: "from-navy to-sky" },
  { label: "Dental Clinic", tag: "Healthcare", color: "from-[#C9A84C] to-[#E8CF85]" },
  { label: "Restaurant", tag: "F&B", color: "from-ink to-navy" },
  { label: "CA Firm", tag: "Services", color: "from-sky to-navy" },
  { label: "Jewellery Store", tag: "E-Commerce", color: "from-[#A8872E] to-[#C9A84C]" },
  { label: "Coaching Class", tag: "Education", color: "from-navy to-ink" },
];

export function Gallery() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Our Work</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            A glimpse of <span className="text-navy">what we've built.</span>
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it, i) => (
            <div key={it.label} className="reveal group relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1" style={{animationDelay:`${i*70}ms`}}>
              <div className={`aspect-[4/3] bg-gradient-to-br ${it.color} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-4 rounded-2xl bg-white/95 p-4">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/20"/>
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/20"/>
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/20"/>
                  </div>
                  <div className="mt-3 h-2 w-20 rounded bg-ink/80"/>
                  <div className="mt-2 h-2 w-28 rounded bg-ink/40"/>
                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    <div className="h-10 rounded bg-gold/40"/>
                    <div className="h-10 rounded bg-ink/10"/>
                    <div className="h-10 rounded bg-ink/10"/>
                  </div>
                  <div className="mt-3 h-6 w-20 rounded-full bg-gradient-gold"/>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-ink">{it.label}</div>
                  <div className="text-xs text-ink/50 uppercase tracking-wider">{it.tag}</div>
                </div>
                <span className="text-xs font-bold text-gold">VIEW →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
