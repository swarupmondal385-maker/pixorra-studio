import { useState } from "react";
import { Check, Clock, MessageCircle, Rocket } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { MarkerHighlight } from "./MarkerHighlight";
import { useCountdown } from "./PriceCountdown";

const WA = "https://wa.me/918927840261?text=";

// The one bundle Pixorra sells (from the homepage brief).
const INCLUDED = [
  "Full-stack website development",
  "Funnel generation + CRM",
  "Local SEO & Google visibility",
  "24/7 AI system + WhatsApp bot",
  "Free demo before you pay",
  "Live in 7–10 days",
];

const ADDONS = [
  {
    id: "app",
    label: "Custom App",
    note: "Web apps, booking & sales tools",
    price: "Custom quote",
  },
  {
    id: "social",
    label: "Social Media Content",
    note: "10 videos + 3 posts / month, 4K 60fps",
    price: "Monthly",
  },
] as const;

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-ink transition-colors ${
        on ? "bg-pixel-green" : "bg-white"
      }`}
    >
      <span
        className={`absolute h-4 w-4 rounded-full border-2 border-ink bg-white transition-transform ${
          on ? "translate-x-[22px]" : "translate-x-[2px]"
        }`}
      />
    </span>
  );
}

/** kree8-style pricing, Pixorra edition: one bundle + optional add-ons. */
export function PricingKree8() {
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const t = useCountdown();
  const chosen = ADDONS.filter((a) => addons[a.id]).map((a) => a.label);
  const waText = `Hi Pixorra, I want the ₹14,999 Basic Package${
    chosen.length ? ` + ${chosen.join(" + ")}` : ""
  }.`;

  return (
    <section id="pricing" className="relative bg-background py-24 md:py-32">
      {/* Decision lines */}
      <div className="reveal mx-auto max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
        <p>Okay, so you’ve probably seen enough by now.</p>
        <p className="mt-6">
          The work makes sense.
          <br />
          The process is simple.
          <br />
          And you see the demo before you pay a rupee.
        </p>
        <p className="mt-6">
          The next step doesn’t need convincing, it just needs a{" "}
          <MarkerHighlight color="var(--pixel-green)">decision</MarkerHighlight>
        </p>
      </div>

      <div className="reveal mx-auto mt-20 flex max-w-4xl items-center gap-3 px-5 md:px-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
          Pricing
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <p className="reveal mx-auto mt-8 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        One bundle. Everything your business needs to get found. Add extras only if you want them.
      </p>

      <div className="reveal mx-auto mt-10 max-w-4xl px-3 md:px-8">
        <div className="relative rounded-[1.75rem] border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_#111] md:p-6">
          <div className="grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-8">
            {/* Left: what you get */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  Basic Package
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-2 py-0.5 text-[11px] font-semibold text-ink/60">
                  <Clock className="h-3 w-3" /> 7–10 days
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {ADDONS.map((a) => {
                  const on = !!addons[a.id];
                  return (
                    <button
                      key={a.id}
                      type="button"
                      role="switch"
                      aria-checked={on}
                      onClick={() => setAddons((s) => ({ ...s, [a.id]: !s[a.id] }))}
                      className={`flex w-full items-center gap-3 rounded-2xl border-2 px-3.5 py-3 text-left transition-colors ${
                        on
                          ? "border-ink bg-[#effbe9]"
                          : "border-ink/10 bg-cream hover:border-ink/30"
                      }`}
                    >
                      <span className="flex-1">
                        <span className="block text-sm font-bold text-ink">Add {a.label}</span>
                        <span className="block text-xs text-ink/55">{a.note}</span>
                      </span>
                      <span className="text-xs font-bold text-ink/70">{a.price}</span>
                      <Toggle on={on} />
                    </button>
                  );
                })}
              </div>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 md:grid-cols-1">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pixel-green" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: compact price card + actions */}
            <div className="order-first flex flex-col md:order-none">
              <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-[#ffe9f4] p-5 shadow-pixel">
                <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                <img
                  src={logoMark}
                  alt=""
                  aria-hidden
                  className="absolute -bottom-5 -right-4 h-28 w-28 rotate-12 object-contain opacity-20"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-bold tracking-tight text-ink/35">
                      PIXORRA
                    </span>
                    <span className="rounded-full border-2 border-ink bg-white px-2 py-0.5 text-[10px] font-bold">
                      Save ₹5,000
                    </span>
                  </div>
                  <div className="mt-8 font-pixel text-[9px] tracking-[0.2em] text-pixel-pink">
                    BASIC PACKAGE · ONE-TIME
                  </div>
                  <div className="mt-1.5 flex items-end gap-2">
                    <span className="font-display text-[2.6rem] font-bold leading-none tracking-tight text-ink">
                      ₹14,999
                    </span>
                    <span className="pb-1 font-display text-base font-bold text-ink/35 line-through">
                      ₹19,999
                    </span>
                  </div>
                  {chosen.length > 0 && (
                    <div className="mt-1.5 text-xs font-semibold text-ink/60">
                      + {chosen.join(" + ")} (quoted separately)
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-ink/55">
                Launch offer ends in
                <span className="rounded-md bg-ink px-1.5 py-0.5 font-pixel text-[9px] text-white tabular-nums">
                  {t
                    ? `${t.d}D ${String(t.h).padStart(2, "0")}H ${String(t.m).padStart(2, "0")}M`
                    : "--"}
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2.5">
                <a
                  href={calBookingUrl}
                  {...calDataAttributes}
                  className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow-cta font-bold text-ink shadow-pixel"
                >
                  <Rocket className="h-4 w-4" /> Book free demo
                </a>
                <a
                  href={`${WA}${encodeURIComponent(waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink font-bold text-white shadow-pixel"
                >
                  <MessageCircle className="h-4 w-4" /> Send a message
                </a>
              </div>
              <p className="mt-3 text-center text-xs text-ink/50">
                20% advance · 80% on delivery · No card needed for the demo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mx-auto mt-16 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        <p>
          A few clicks and a decision today, and in 48 hours you’ll see your new website, finally
          starting to become real....
        </p>
        <p className="mt-6 font-semibold text-ink">Still in doubt?</p>
        <p className="mt-2">Maybe our clients can help you decide.</p>
      </div>
    </section>
  );
}
