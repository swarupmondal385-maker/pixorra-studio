import { useState } from "react";
import { Check, Clock, Lock, Minus, Plus, Rocket, MessageCircle } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { MarkerHighlight } from "./MarkerHighlight";

const WA = "https://wa.me/918927840261?text=";

type Plan = {
  id: string;
  name: string;
  price: string;
  was?: string;
  days: string;
  tagline: string;
  features: string[];
  card: string;
  ink: string;
  badge?: string;
};

// Same packages and features as the original Pixorra pricing.
const PLANS: Plan[] = [
  {
    id: "ignite",
    name: "Ignite",
    price: "₹14,999",
    was: "₹17,999",
    days: "7–10 days",
    tagline: "For businesses just starting to grow online",
    features: [
      "Custom website (up to 3 pages)",
      "Mobile optimized",
      "Basic SEO setup",
      "WhatsApp chatbot",
      "Lead capture form",
      "1 month support",
      "Monthly performance report",
    ],
    card: "from-[#ffd6ea] via-[#ffc2de] to-[#ff9fcb]",
    ink: "text-[#b0216a]",
  },
  {
    id: "growth",
    name: "Growth Engine",
    price: "₹24,999",
    was: "₹29,999",
    days: "7–10 days",
    tagline: "Our most chosen package for serious growth",
    features: [
      "Custom website (up to 8 pages)",
      "Mobile-first smart design",
      "AI WhatsApp chatbot & automation",
      "Full SEO setup",
      "Google Maps optimization",
      "Lead capture & CRM",
      "Social media integration",
      "2 years priority support",
      "Monthly strategy review",
    ],
    card: "from-[#d6f7ff] via-[#b5ecff] to-[#8fdcff]",
    ink: "text-[#0b6b8f]",
    badge: "Most chosen",
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹49,999",
    days: "10–15 days",
    tagline: "Complete AI-powered growth partner for market leaders",
    features: [
      "Custom website (up to 15 pages)",
      "Mobile-first smart design",
      "AI chatbot & WhatsApp automation",
      "Full funnel setup (landing → close)",
      "CRM & workflow automation",
      "Full SEO + Local SEO",
      "Google Ads setup & management",
      "5 years white glove support",
    ],
    card: "from-[#eadcff] via-[#d9c4ff] to-[#c2a5ff]",
    ink: "text-[#5b2bb5]",
    badge: "Flagship",
  },
];

function PriceCard({
  label,
  price,
  was,
  gradient,
  ink,
}: {
  label: string;
  price: string;
  was?: string;
  gradient: string;
  ink: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-ink bg-gradient-to-br ${gradient} p-5 shadow-pixel`}
    >
      {/* pixel pattern + mascot watermark */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-25" />
      <img
        src={logoMark}
        alt=""
        aria-hidden
        className="absolute -bottom-6 -right-6 h-36 w-36 rotate-12 object-contain opacity-25"
      />
      <div className="relative">
        <div className="font-display text-lg font-bold tracking-tight text-ink/40">PIXORRA</div>
        <div className="mt-16 md:mt-20">
          <div className={`font-pixel text-[9px] tracking-[0.2em] ${ink}`}>{label}</div>
          <div className="mt-2 flex items-end gap-2">
            <span className="select-none font-display text-4xl font-bold text-ink blur-[6px] md:text-5xl">
              {price}
            </span>
            {was && (
              <span className="select-none pb-1 font-display text-base font-bold text-ink/40 line-through blur-[3px]">
                {was}
              </span>
            )}
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-bold text-ink">
            <Lock className="h-3 w-3" /> Unlocked on your free demo call
          </div>
        </div>
      </div>
    </div>
  );
}

function Ctas({ wa }: { wa: string }) {
  return (
    <div className="mt-3 flex flex-col gap-2.5">
      <a
        href={calBookingUrl}
        {...calDataAttributes}
        className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white font-bold text-ink shadow-pixel"
      >
        <Rocket className="h-4 w-4 text-pixel-pink" /> Start project
      </a>
      <a
        href={`${WA}${encodeURIComponent(wa)}`}
        target="_blank"
        rel="noreferrer"
        className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink font-bold text-white shadow-pixel"
      >
        <MessageCircle className="h-4 w-4" /> Send a message
      </a>
    </div>
  );
}

/** kree8-style pricing: one-time plans in tabs + a monthly content retainer with a counter. */
export function PricingKree8() {
  const [tab, setTab] = useState("growth");
  const [videos, setVideos] = useState(10);
  const plan = PLANS.find((p) => p.id === tab) ?? PLANS[1];

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
      <p className="reveal mx-auto mt-10 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        Pick a one-time growth package, or a monthly content plan. Whatever works best for you.
      </p>

      <div className="reveal mx-auto mt-12 max-w-5xl px-3 md:px-8">
        <div className="relative rounded-[1.75rem] border-2 border-ink bg-[linear-gradient(135deg,#fff1f7,#fffbe8_45%,#eafaff)] p-3 shadow-pixel md:p-6">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-1/4 h-40 w-1/2 rounded-full bg-pixel-cyan/30 blur-3xl"
          />

          {/* Tabs */}
          <div
            role="tablist"
            className="relative mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border-2 border-ink bg-white p-1"
          >
            {PLANS.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={tab === p.id}
                onClick={() => setTab(p.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all md:px-5 ${
                  tab === p.id
                    ? "bg-yellow-cta text-ink shadow-[2px_2px_0_0_#111]"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* One-time plan */}
          <div className="relative mt-5 grid gap-5 rounded-2xl border-2 border-ink/10 bg-white/90 p-4 md:grid-cols-[1.1fr_1fr] md:p-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  {plan.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-2 py-0.5 text-[11px] font-semibold text-ink/60">
                  <Clock className="h-3 w-3" /> {plan.days}
                </span>
                {plan.badge && (
                  <span className="rounded-full border-2 border-ink bg-pixel-green/40 px-2 py-0.5 text-[11px] font-bold">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-ink/60">{plan.tagline}</p>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pixel-green" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Free demo first", "20% advance", "80% on delivery"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/15 bg-cream px-3 py-1 text-xs font-semibold text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <PriceCard
                label={`${plan.name.toUpperCase()} PACKAGE`}
                price={plan.price}
                was={plan.was}
                gradient={plan.card}
                ink={plan.ink}
              />
              <Ctas wa={`Hi Pixorra, I'm interested in the ${plan.name} package.`} />
            </div>
          </div>

          {/* Retainer */}
          <div className="relative mt-5 grid gap-5 rounded-2xl border-2 border-ink/10 bg-white/90 p-4 md:grid-cols-[1.1fr_1fr] md:p-6">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                Pixorra Content Retainer
              </h3>
              <p className="mt-1 text-sm text-ink/60">Monthly social media content, fixed plan.</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex items-center overflow-hidden rounded-full border-2 border-ink bg-pixel-green/40">
                  <button
                    type="button"
                    aria-label="Fewer videos"
                    onClick={() => setVideos((v) => Math.max(4, v - 2))}
                    className="grid h-9 w-9 place-items-center hover:bg-white/60"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span
                    className="w-9 text-center font-pixel text-xs tabular-nums"
                    aria-live="polite"
                  >
                    {videos}
                  </span>
                  <button
                    type="button"
                    aria-label="More videos"
                    onClick={() => setVideos((v) => Math.min(30, v + 2))}
                    className="grid h-9 w-9 place-items-center hover:bg-white/60"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-[15px] font-semibold text-ink">UGC-style videos / month</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {[
                  "3 designed posts every month",
                  "Shot and edited in 4K at 60 fps",
                  "Custom ads and reels for your niche",
                  "Posting schedule handled for you",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pixel-green" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Reels", "UGC videos", "Ad creatives", "Posts", "Captions"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/15 bg-cream px-3 py-1 text-xs font-semibold text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-gradient-to-br from-[#fff3b0] via-[#ffe066] to-[#ffd23f] p-5 shadow-pixel">
                <div aria-hidden className="absolute inset-0 grid-bg opacity-25" />
                <img
                  src={logoMark}
                  alt=""
                  aria-hidden
                  className="absolute -bottom-6 -right-6 h-36 w-36 rotate-12 object-contain opacity-25"
                />
                <div className="relative">
                  <div className="font-display text-lg font-bold tracking-tight text-ink/40">
                    PIXORRA
                  </div>
                  <div className="mt-16 md:mt-20">
                    <div className="font-pixel text-[9px] tracking-[0.2em] text-[#8a6100]">
                      CONTENT RETAINER
                    </div>
                    <div className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
                      {videos} videos
                    </div>
                    <div className="mt-2 inline-flex rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-bold text-ink">
                      Monthly price on WhatsApp
                    </div>
                  </div>
                </div>
              </div>
              <Ctas
                wa={`Hi Pixorra, I want the content retainer with ${videos} videos per month. What's the price?`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mx-auto mt-16 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        <p>
          Just a few clicks and a decision today, and in 48 hours you’ll see a free demo of your new
          website, finally starting to become real....
        </p>
        <p className="mt-6 font-semibold text-ink">Still in doubt?</p>
        <p className="mt-2">Maybe our clients can help you decide.</p>
      </div>
    </section>
  );
}
