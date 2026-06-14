const ITEMS = [
  {
    label: "Gym Website",
    tag: "Fitness",
    color: "from-pixel-pink to-pixel-orange",
    pop: "card-pop-pink",
  },
  {
    label: "Dental Clinic",
    tag: "Healthcare",
    color: "from-pixel-cyan to-pixel-blue",
    pop: "card-pop-cyan",
  },
  {
    label: "Restaurant",
    tag: "F&B",
    color: "from-pixel-yellow to-pixel-orange",
    pop: "card-pop-yellow",
    url: "https://spice-garden-feast.vercel.app/",
  },
  {
    label: "CA Firm",
    tag: "Services",
    color: "from-pixel-purple to-pixel-blue",
    pop: "card-pop-purple",
  },
  {
    label: "Jewellery Store",
    tag: "E-Commerce",
    color: "from-pixel-pink to-pixel-purple",
    pop: "card-pop-orange",
    url: "https://bluestone-brilliance-project.vercel.app/",
  },
  {
    label: "Coaching Class",
    tag: "Education",
    color: "from-pixel-green to-pixel-cyan",
    pop: "card-pop-green",
  },
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
          {ITEMS.map((it, i) => {
            const card = (
              <>
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${it.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  {it.url ? (
                    <div className="absolute inset-0 flex flex-col">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm border-b border-black/5">
                        <span className="h-2 w-2 rounded-full bg-red-400/60" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                        <span className="h-2 w-2 rounded-full bg-green-400/60" />
                        <span className="ml-2 text-[9px] text-ink/40 truncate">{it.url}</span>
                      </div>
                      <iframe
                        src={it.url}
                        className="flex-1 w-full"
                        title={it.label}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-4 rounded-2xl bg-white/95 p-4">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                      </div>
                      <div className="mt-3 h-2 w-20 rounded bg-ink/80" />
                      <div className="mt-2 h-2 w-28 rounded bg-ink/40" />
                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        <div className="h-10 rounded bg-pixel-pink/50" />
                        <div className="h-10 rounded bg-pixel-cyan/40" />
                        <div className="h-10 rounded bg-pixel-yellow/60" />
                      </div>
                      <div className="mt-3 h-6 w-20 rounded-full bg-gradient-pixorra" />
                    </div>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-bold text-ink">{it.label}</div>
                    <div className="text-xs text-ink/50 uppercase tracking-wider">{it.tag}</div>
                  </div>
                  <span className="text-xs font-bold text-pixel-pink">VIEW →</span>
                </div>
              </>
            );

            if (it.url) {
              return (
                <a
                  key={it.label}
                  href={it.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1 block"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {card}
                </a>
              );
            }
            return (
              <div
                key={it.label}
                className="reveal group relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
