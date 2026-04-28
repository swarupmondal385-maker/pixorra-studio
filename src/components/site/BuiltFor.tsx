import { Dumbbell, Stethoscope, UtensilsCrossed, Calculator, Scissors, Building2, GraduationCap, FlaskConical, ShoppingBag, Sparkles } from "lucide-react";

const INDUSTRIES = [
  { icon: Dumbbell, label: "Gyms & Fitness" },
  { icon: Stethoscope, label: "Clinics & Hospitals" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafés" },
  { icon: Calculator, label: "CA & Legal Firms" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Coaching & Tuitions" },
  { icon: FlaskConical, label: "Diagnostic Labs" },
  { icon: ShoppingBag, label: "Retail & D2C Brands" },
  { icon: Sparkles, label: "Beauty & Wellness" },
];

export function BuiltFor() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Built For</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-ink tracking-tight text-balance">
            Local Indian businesses that want <span className="text-navy">more customers</span>.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink/60">
            We understand how Mumbai & Pune customers actually search, compare and book. Every site is built around that behaviour.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {INDUSTRIES.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="reveal inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-4 py-2.5 shadow-card hover:border-gold hover:-translate-y-0.5 transition-all"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <Icon className="h-4 w-4 text-navy" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
