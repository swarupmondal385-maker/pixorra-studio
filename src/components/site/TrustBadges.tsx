import { Award, ShieldCheck, Users, Calendar } from "lucide-react";

const BADGES = [
  { icon: Award, title: "Google Partner", sub: "Certified Ads Expertise" },
  { icon: Calendar, title: "5+ Years", sub: "In Business" },
  { icon: Users, title: "150+ Projects", sub: "Delivered & Live" },
  { icon: ShieldCheck, title: "Trusted By", sub: "50+ Local Businesses" },
];

export function TrustBadges() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {BADGES.map(({ icon: Icon, title, sub }, i) => (
            <div key={title} className="reveal flex items-center gap-4 rounded-2xl bg-cream border border-black/5 p-5" style={{animationDelay:`${i*60}ms`}}>
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center border border-black/5">
                <Icon className="h-5 w-5 text-gold" />
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
