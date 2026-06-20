import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    label: "Gym Website",
    tag: "Fitness",
    color: "from-pixel-pink to-pixel-orange",
    pop: "card-pop-pink",
    url: "https://iron-fitness-launchpad.vercel.app/",
  },
  {
    label: "Clinic",
    tag: "Healthcare",
    color: "from-pixel-cyan to-pixel-blue",
    pop: "card-pop-cyan",
    url: "https://trusted-roots-web.vercel.app/",
  },
  {
    label: "Restaurant",
    tag: "F&B",
    color: "from-pixel-yellow to-pixel-orange",
    pop: "card-pop-yellow",
    url: "https://spice-garden-feast.vercel.app/",
  },
  {
    label: "E-commerce",
    tag: "E-Commerce",
    color: "from-pixel-purple to-pixel-blue",
    pop: "card-pop-purple",
    url: "https://ilens-vision-studio.vercel.app/",
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
    url: "https://shelar-academy-brilliance.vercel.app/",
  },
];

const MOBILE_COLUMNS = Array.from({ length: Math.ceil(ITEMS.length / 2) }, (_, i) =>
  ITEMS.slice(i * 2, i * 2 + 2),
);

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) {
            setActiveIndex(index);
          }
        }
      },
      {
        root: el,
        threshold: 0.6,
      },
    );

    Array.from(el.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const renderCard = (it: (typeof ITEMS)[number], i: number) => {
    const card = (
      <>
        <div
          className={`md:aspect-[4/3] aspect-[4/5] bg-gradient-to-br ${it.color} relative overflow-hidden`}
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          {it.url ? (
            <div className="absolute inset-0 flex flex-col">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm border-b border-border/40">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-green-400/60" />
                <span className="ml-2 text-[9px] text-ink/40 truncate">{it.url}</span>
              </div>
              <iframe
                src={it.url}
                className="flex-1 w-full pointer-events-none md:pointer-events-auto"
                title={it.label}
                loading="lazy"
              />
            </div>
          ) : (
            <div className="absolute inset-4 rounded-2xl bg-card/95 p-4">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
              </div>
              <div className="mt-3 h-2 w-20 rounded bg-foreground/80" />
              <div className="mt-2 h-2 w-28 rounded bg-foreground/40" />
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
          className="group relative rounded-3xl overflow-hidden bg-card border border-border/40 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1 block"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          {card}
        </a>
      );
    }

    return (
      <div
        key={it.label}
        className="group relative rounded-3xl overflow-hidden bg-card border border-border/40 shadow-card hover:shadow-card-lg transition-all hover:-translate-y-1"
        style={{ animationDelay: `${i * 70}ms` }}
      >
        {card}
      </div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Our Work</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            A glimpse of <span className="text-navy">what we've built.</span>
          </h2>
        </div>

        <div
          ref={sliderRef}
          className="mt-14 md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-6 px-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {MOBILE_COLUMNS.map((column, columnIndex) => (
            <div
              key={columnIndex}
              data-index={columnIndex}
              className="reveal shrink-0 w-[90vw] max-w-[440px] snap-center flex flex-col gap-5"
              style={{ animationDelay: `${columnIndex * 90}ms` }}
            >
              {column.map((it, i) => renderCard(it, columnIndex * 2 + i))}
            </div>
          ))}
        </div>

        <div className="mt-14 hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it, i) => renderCard(it, i))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-3">
          {MOBILE_COLUMNS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                sliderRef.current?.children[i]?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                });
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-7 bg-pixel-purple" : "w-2.5 bg-foreground/20"
              }`}
              aria-label={`Go to work slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
