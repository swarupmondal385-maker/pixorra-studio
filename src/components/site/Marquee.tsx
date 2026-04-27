const ITEMS = [
  "High-Converting Websites",
  "Google Ads",
  "SEO That Ranks",
  "Shopify Stores",
  "AI Video & Creative",
  "Branding & Identity",
  "Mumbai's Best Agency",
  "Free Demo Website",
  "7-Day Delivery",
];

export function Marquee() {
  return (
    <section className="relative py-8 md:py-10 border-y border-black/10 bg-white overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-6 shrink-0">
            <span className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-ink">
              {t}
            </span>
            <span className="h-2 w-2 rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </section>
  );
}
