import { ArrowRight, Play } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { MarkerHighlight } from "./MarkerHighlight";

/** kree8-style final note with founder sign-off. */
export function FinalNote() {
  return (
    <section className="relative overflow-hidden bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-pixel-pink/15 blur-3xl"
      />
      <div className="reveal mx-auto flex max-w-4xl items-center gap-3 px-5 md:px-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
          Final note
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>

      <div className="reveal relative mx-auto mt-10 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
        <p>Thanks for reading this far. One last thing...</p>
        <p className="mt-6">
          Pixorra is for owners who care about how people see their business, and who know that the
          business that replies first, wins.
        </p>
        <p className="mt-6">
          If that’s you, we’ll make sure you never have to worry about websites, Google or WhatsApp
          again. That’s our promise.
        </p>
        <p className="mt-6">Someday, you’ll look back at today. And you’ll remember two things:</p>
        <p className="mt-6 text-ink">
          The moment your phone started ringing. And the team that helped you get there.
        </p>

        <div className="mt-12 space-y-1 text-ink/45">
          <p>You don’t need ten vendors.</p>
          <p>You don’t need an agency that disappears.</p>
        </div>
        <p className="mt-8 flex flex-wrap items-center gap-2 font-display text-3xl font-bold text-ink md:text-5xl">
          You just need
          <MarkerHighlight color="var(--pixel-yellow)">
            <span className="inline-flex items-center gap-2">Pixorra</span>
          </MarkerHighlight>
        </p>

        <div className="mt-12 flex items-center gap-4">
          <img
            src="/mascot/pixor-peace-grey-hoodie.webp"
            alt="Pixor, the Pixorra mascot"
            loading="lazy"
            width={64}
            height={64}
            className="pixor-float h-16 w-16 rounded-2xl border-2 border-ink bg-white object-contain p-1 shadow-pixel"
          />
          <div className="text-base">
            <div className="font-display font-bold text-ink">Sam</div>
            <div className="text-ink/55">Founder, Pixorra Studio</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={calBookingUrl}
            {...calDataAttributes}
            className="btn-lift group inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-7 text-base font-bold text-ink shadow-pixel"
          >
            Book free demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-7 text-base font-bold text-ink shadow-pixel"
          >
            <Play className="h-4 w-4 text-pixel-pink" fill="currentColor" /> See our work
          </a>
        </div>
      </div>
    </section>
  );
}
