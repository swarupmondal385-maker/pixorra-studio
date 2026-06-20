const ITEMS = [
  "AI Chatbots",
  "WhatsApp Automation",
  "Business Funnels",
  "High-Converting Websites",
  "Local SEO",
  "CRM & Workflow Systems",
  "Google Ads",
  "Social Media",
  "Reputation Management",
  "AI Autonomous Systems",
];

const DOT_COLORS = [
  "bg-pixel-pink",
  "bg-pixel-yellow",
  "bg-pixel-cyan",
  "bg-pixel-purple",
  "bg-pixel-green",
  "bg-pixel-orange",
  "bg-pixel-blue",
];

export function Marquee() {
  return (
    <section className="relative py-8 md:py-10 border-y-2 border-ink bg-pixel-yellow overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-6 shrink-0">
            <span className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-ink">
              {t}
            </span>
            <span
              className={`h-3 w-3 rounded-full border-2 border-ink ${DOT_COLORS[i % DOT_COLORS.length]}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
