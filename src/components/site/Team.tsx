const TEAM = [
  { name: "Arjun Patel", role: "Founder & Creative Director", bio: "10+ years designing brands and digital experiences for Indian SMBs.", color: "bg-navy" },
  { name: "Riya Shah", role: "Head of Growth (Ads & SEO)", bio: "Ex-Google Premier Partner. Obsessed with ROI and cost-per-lead.", color: "bg-gradient-gold text-ink" },
  { name: "Karan Mehta", role: "Lead Developer", bio: "Builds blazing-fast websites that Google loves and customers trust.", color: "bg-ink" },
  { name: "Sneha Rao", role: "Brand & Content Lead", bio: "Turns boring business copy into words that actually convert.", color: "bg-sky" },
];

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Meet The Team</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Small team. <span className="text-navy">Big output.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m, i) => (
            <div key={m.name} className="reveal rounded-3xl bg-white p-6 border border-black/5 shadow-card" style={{animationDelay:`${i*80}ms`}}>
              <div className={`h-20 w-20 rounded-2xl ${m.color} text-white flex items-center justify-center font-display text-2xl font-bold`}>
                {m.name.split(" ").map(x=>x[0]).join("")}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{m.name}</h3>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">{m.role}</p>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
