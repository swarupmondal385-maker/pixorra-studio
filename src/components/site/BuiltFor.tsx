import { Dumbbell, Stethoscope, UtensilsCrossed, Calculator, Scissors, Building2, GraduationCap, FlaskConical, ShoppingBag, Sparkles } from "lucide-react";

const COLORS = ["bg-pixel-pink","bg-pixel-yellow","bg-pixel-cyan","bg-pixel-purple","bg-pixel-green","bg-pixel-orange","bg-pixel-blue","bg-pixel-pink","bg-pixel-cyan","bg-pixel-yellow"];

const INDUSTRIES = [
  { icon: Dumbbell, label: "Gyms & Fitness", emoji: "💪" },
  { icon: Stethoscope, label: "Clinics & Hospitals", emoji: "🩺" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafés", emoji: "🍽️" },
  { icon: Calculator, label: "CA & Legal Firms", emoji: "📊" },
  { icon: Scissors, label: "Salons & Spas", emoji: "💇" },
  { icon: Building2, label: "Real Estate", emoji: "🏢" },
  { icon: GraduationCap, label: "Coaching & Tuitions", emoji: "🎓" },
  { icon: FlaskConical, label: "Diagnostic Labs", emoji: "🧪" },
  { icon: ShoppingBag, label: "Retail & D2C Brands", emoji: "🛍️" },
  { icon: Sparkles, label: "Beauty & Wellness", emoji: "✨" },
];

export function BuiltFor() {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-pixel-pink/10 blur-3xl blob" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-pixel-cyan/15 blur-3xl blob" style={{animationDelay:"3s"}} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-pixel-purple uppercase">Built For</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-ink tracking-tight text-balance">
            Local Indian businesses that want <span className="text-gradient-pixorra">more customers</span>.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink/60">
            We understand how Mumbai & Pune customers actually search, compare and book. Every site is built around that behaviour.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map(({ label, emoji }, i) => (
            <div
              key={label}
              className="reveal card-pop bg-white rounded-2xl p-5 text-center"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className={`mx-auto h-12 w-12 rounded-xl border-2 border-ink ${COLORS[i % COLORS.length]} flex items-center justify-center text-2xl`}>
                {emoji}
              </div>
              <div className="mt-3 text-sm font-bold text-ink">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
