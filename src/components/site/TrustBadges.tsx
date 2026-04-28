import { Award, ShieldCheck, Users, Calendar } from "lucide-react";

const BADGES = [
  { icon: Award, title: "Google Partner", sub: "Certified Ads Expertise", bg: "bg-pixel-pink", pop: "card-pop-pink" },
  { icon: Calendar, title: "5+ Years", sub: "In Business", bg: "bg-pixel-yellow", pop: "card-pop-yellow" },
  { icon: Users, title: "150+ Projects", sub: "Delivered & Live", bg: "bg-pixel-cyan", pop: "card-pop-cyan" },
  { icon: ShieldCheck, title: "Trusted By", sub: "50+ Local Businesses", bg: "bg-pixel-purple", pop: "card-pop-purple" },
];

export function TrustBadges() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {BADGES.map(({ icon: Icon, title, sub, bg, pop }, i) => (
            <div key={title} className={`reveal flex items-center gap-4 rounded-2xl bg-white p-5 ${pop}`} style={{animationDelay:`${i*60}ms`}}>
              <div className={`h-12 w-12 rounded-xl ${bg} border-2 border-ink flex items-center justify-center`}>
                <Icon className="h-5 w-5 text-ink" strokeWidth={2.4} />
              </div>
              <div>
                <div className="font-display font-bold text-ink">{title}</div>
                <div className="text-xs text-ink/55">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
