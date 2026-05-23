import { Sparkles, Rocket, Trophy, Quote } from "lucide-react";

// Replace src/assets/founder.jpg with the founder photo to display it here.
// The component falls back to a stylish monogram if the image is missing.

const HIGHLIGHTS = [
  { icon: Rocket, label: "8+ years building digital products" },
  { icon: Trophy, label: "150+ businesses scaled across India" },
  { icon: Sparkles, label: "Personal attention on every project" },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Portrait */}
        <div className="lg:col-span-5 reveal">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-pixorra opacity-25 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-navy shadow-card-lg">
              {/* If you add src/assets/founder.jpg, swap the monogram below for an <img>. */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[8rem] font-bold text-white/90 tracking-tight">SM</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">Founder</div>
                <div className="font-display text-2xl font-bold text-white">Swarup Mondal</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-card">
              <div className="text-[10px] uppercase tracking-wider text-ink/50 font-semibold">Experience</div>
              <div className="font-display text-2xl font-bold text-ink">8+ years</div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-7 reveal">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky uppercase">About the Founder</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance leading-[1.1]">
            Built by a founder who has{" "}
            <span className="text-gradient-pixorra">shipped, scaled and shown up</span>{" "}
            for Indian businesses.
          </h2>

          <div className="relative mt-6 pl-5 border-l-2 border-sky/40">
            <Quote className="absolute -left-2 -top-2 h-4 w-4 text-sky bg-cream" />
            <p className="text-lg text-ink/75 leading-relaxed">
              I'm <span className="font-semibold text-ink">Swarup Mondal</span> — a young founder with over
              <span className="font-semibold text-ink"> 8 years of hands-on experience</span> designing,
              building and growing brands online. I started Pixorra with one simple belief:
              every ambitious business in India deserves a website and a digital partner that
              actually moves the needle — not just invoices and excuses.
            </p>
            <p className="mt-4 text-base text-ink/65 leading-relaxed">
              From early-stage clinics and restaurants to fast-growing D2C brands, I've spent the
              last decade obsessing over what truly converts: fast sites, honest pricing, and
              design that earns trust at first glance. With Pixorra, you don't get handed off to
              a junior — you get a founder who genuinely cares whether your phone rings tomorrow.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky/12 text-sky">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-ink/80 leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/918927840261?text=Hi%20Swarup%2C%20I%27d%20like%20to%20chat%20about%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-pixorra text-white font-semibold shadow-card hover:-translate-y-0.5 transition-transform"
            >
              Talk to Swarup directly
            </a>
            <span className="text-sm text-ink/50">Replies personally within a few hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
