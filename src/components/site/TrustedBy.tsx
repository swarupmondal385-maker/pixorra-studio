import { ArrowUpRight, BadgeCheck, Landmark } from "lucide-react";

/** Goodwill: the government university project, on its own. */
export function TrustedBy() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="reveal mx-auto flex max-w-4xl items-center gap-3 px-5 md:px-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
          Trusted by
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <p className="reveal mx-auto mt-8 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        Trusted by a <span className="font-semibold text-ink">government university.</span>
      </p>

      <div className="mx-auto mt-10 max-w-4xl px-3 md:px-8">
        {/* Featured: MAKAUT */}
        <a
          href="https://www.mcamsv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group relative block overflow-hidden rounded-[1.75rem] border-2 border-ink bg-ink text-white shadow-[8px_8px_0_0_#ff4fa3]"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            <div className="relative z-10 p-6 md:p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-pixel-yellow ring-1 ring-white/15">
                <Landmark className="h-3.5 w-3.5" /> Government university
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                MAKAUT
              </h3>
              <p className="mt-1 text-sm font-semibold text-white/60">
                Maulana Abul Kalam Azad University of Technology, West Bengal
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                We designed and built the official site for TRINETRA 2026, the university’s autumn
                fest, including its sponsorship experience.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#7ee787]">
                  <BadgeCheck className="h-4 w-4" /> Live at mcamsv.com
                </span>
                <span className="inline-flex h-10 items-center gap-1.5 rounded-full border-2 border-white bg-white px-4 text-sm font-bold text-ink transition-transform group-hover:-translate-y-0.5">
                  Visit site <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
            {/* Mini live preview */}
            <div className="relative hidden min-h-[280px] overflow-hidden border-l-2 border-white/10 md:block">
              <iframe
                src="https://www.mcamsv.com/"
                title="TRINETRA 2026 site preview"
                loading="lazy"
                tabIndex={-1}
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
