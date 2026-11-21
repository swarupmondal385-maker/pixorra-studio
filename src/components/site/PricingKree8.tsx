import { useState } from "react";
import { Check, Clock, Crown, Gift, MessageCircle, Minus, Plus, ShieldCheck } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { MarkerHighlight } from "./MarkerHighlight";
import { useCountdown } from "./PriceCountdown";

const WA = "https://wa.me/918927840261?text=";
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** The two Growth tiers. Switch between them with the Growth / Max toggle. */
const GROWTH = {
  growth: {
    name: "Growth",
    days: "7–10 days",
    price: 19999,
    was: 24999,
    emi: 499,
    support: "3 years support",
    campaigns: 2,
    features: [
      "Up to 10 professionally designed pages",
      "Funnel generation + CRM",
      "Local SEO & Google visibility",
      "AI system + WhatsApp bot",
      "Google Maps integration",
      "Mobile-first responsive design",
    ],
  },
  max: {
    name: "Growth Max",
    days: "10–14 days",
    price: 29999,
    was: 34999,
    emi: 799,
    support: "5 years support",
    campaigns: 6,
    features: [
      "Up to 15 professionally designed pages",
      "Everything in Growth",
      "Advanced CRM + lead automations",
      "Premium 24/7 AI assistant",
      "Online booking & payments",
      "Google Business Profile setup",
    ],
  },
} as const;
type Tier = keyof typeof GROWTH;

const APP_FEATURES = [
  "Web apps, booking & sales tools",
  "Admin panel + customer login",
  "Payments, WhatsApp & CRM hooks",
  "Built around your exact workflow",
  "Hosting and launch support",
  "Free scoping call",
];

function Ticks({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2 text-[14px] leading-snug text-ink/80">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-pixel-green" strokeWidth={3} />
          {f}
        </li>
      ))}
    </ul>
  );
}

/** Primary booking button + round WhatsApp button, side by side to save height. */
function Actions({ wa, primary }: { wa: string; primary: string }) {
  return (
    <div className="mt-5 flex gap-2.5">
      <a
        href={calBookingUrl}
        {...calDataAttributes}
        className="btn-lift inline-flex h-12 flex-1 items-center justify-center rounded-full border-2 border-ink bg-yellow-cta text-[15px] font-bold text-ink shadow-pixel"
      >
        {primary}
      </a>
      <a
        href={`${WA}${encodeURIComponent(wa)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Send a WhatsApp message"
        className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-4 text-[15px] font-bold text-white shadow-pixel"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Message</span>
      </a>
    </div>
  );
}

/** iOS-style two-option switch. */
function Switch<T extends string>({
  value,
  set,
  options,
  label,
}: {
  value: T;
  set: (v: T) => void;
  options: readonly [T, string][];
  label: string;
}) {
  const i = options.findIndex(([v]) => v === value);
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="relative grid grid-cols-2 rounded-full border-2 border-ink bg-cream p-[3px]"
    >
      <span
        aria-hidden
        className="absolute inset-y-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(.3,1.4,.5,1)]"
        style={{ transform: `translateX(${i * 100}%)` }}
      />
      {options.map(([v, text]) => (
        <button
          key={v}
          type="button"
          role="radio"
          aria-checked={v === value}
          onClick={() => set(v)}
          className={`relative z-10 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-bold transition-colors duration-200 ${
            v === value ? "text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

/** Ticking countdown (days, hours, minutes, seconds). */
function OfferTimer() {
  const t = useCountdown();
  const cells: [string, number | undefined][] = [
    ["Days", t?.d],
    ["Hrs", t?.h],
    ["Min", t?.m],
    ["Sec", t?.s],
  ];
  return (
    <div className="flex items-center gap-1" aria-live="off">
      {cells.map(([label, v], i) => (
        <div key={label} className="flex items-center gap-1">
          <div className="w-[2.9rem] overflow-hidden rounded-lg border-2 border-ink bg-ink text-center shadow-[2px_2px_0_0_#ff4fa3]">
            <div
              key={v}
              className="tick-in pt-1.5 font-display text-lg font-bold tabular-nums leading-none text-white"
            >
              {v === undefined ? "--" : String(v).padStart(2, "0")}
            </div>
            <div className="pb-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white/55">
              {label}
            </div>
          </div>
          {i < 3 && <span className="font-display text-sm font-bold text-ink/30">:</span>}
        </div>
      ))}
    </div>
  );
}

/** Soft glow behind a pricing card (kree8-style). */
function Glow({ tone }: { tone: "pink" | "lime" }) {
  const bg =
    tone === "pink"
      ? "bg-[radial-gradient(60%_80%_at_20%_100%,rgba(255,79,163,0.45),transparent),radial-gradient(60%_80%_at_85%_100%,rgba(34,211,238,0.45),transparent)]"
      : "bg-[radial-gradient(60%_80%_at_20%_100%,rgba(163,230,53,0.55),transparent),radial-gradient(60%_80%_at_85%_100%,rgba(34,211,238,0.45),transparent)]";
  return (
    <div
      aria-hidden
      className={`glow-breathe pointer-events-none absolute -inset-x-3 -bottom-6 top-1/3 rounded-[2.5rem] blur-2xl ${bg}`}
    />
  );
}

/** One-line Apple-style headline for each card. */
function Headline({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 font-display text-[1.45rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2rem]">
      {children}
    </p>
  );
}

/** kree8-style pricing: Development package (Growth / Max, pay once or EMI) + monthly content. */
export function PricingKree8() {
  const [kind, setKind] = useState<"growth" | "app">("growth");
  const [tier, setTier] = useState<Tier>("growth");
  const [pay, setPay] = useState<"once" | "emi">("once");
  const [videos, setVideos] = useState(10);
  const g = GROWTH[tier];
  const isMax = tier === "max";
  // ₹1,000 per video (each comes with a campaign post + designed creative), shown as ...999.
  const monthly = videos * 1000 - 1;

  return (
    <section id="pricing" className="relative bg-background py-20 md:py-32">
      <div className="reveal mx-auto max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
        <p>Okay, so you’ve probably seen enough by now.</p>
        <p className="mt-6">
          The work makes sense. The process is simple. And you see the demo before you pay a
          rupee.
        </p>
        <p className="mt-6">
          The next step doesn’t need convincing, it just needs a{" "}
          <MarkerHighlight color="var(--pixel-green)">decision</MarkerHighlight>
        </p>
      </div>

      <div className="reveal mx-auto mt-14 flex max-w-4xl items-center gap-3 px-5 md:mt-20 md:px-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
          Pricing
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>

      {/* Launch offer strip */}
      <div className="reveal mx-auto mt-6 max-w-4xl px-3 md:px-8">
        <div className="flex flex-col items-center gap-2.5 rounded-[1.4rem] border-2 border-ink bg-[linear-gradient(120deg,#fff1f7,#fffbea_55%,#ecfeff)] px-4 py-3.5 shadow-[5px_5px_0_0_#111] sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pixel-pink">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pixel-pink" /> Launch
              offer · ends soon
            </div>
            <p className="font-display text-lg font-bold leading-tight text-ink">
              Save ₹5,000 + free campaigns
            </p>
          </div>
          <OfferTimer />
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl space-y-10 px-3 md:space-y-14 md:px-8">
        {/* Development package */}
        <div className="reveal relative">
          <Glow tone="pink" />
          <div className="relative rounded-[1.6rem] border-2 border-ink bg-white p-4 shadow-[6px_6px_0_0_#111] md:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="shrink-0 font-pixel text-[8px] tracking-[0.2em] text-pixel-pink md:text-[9px]">
                01<span className="hidden sm:inline"> · DEVELOPMENT</span>
              </span>
              <div className="w-full max-w-[220px]">
                <Switch
                  label="Package type"
                  value={kind}
                  set={setKind}
                  options={[
                    ["growth", "Websites"],
                    ["app", "Custom App"],
                  ]}
                />
              </div>
            </div>
            <Headline>
              Your entire growth team. <span className="text-pixel-pink">In one package.</span>
            </Headline>

            {kind === "growth" ? (
              <div className="md:mt-2 md:grid md:grid-cols-[1.1fr_1fr] md:gap-8">
                <div className="md:order-last">
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Switch
                      label="Growth tier"
                      value={tier}
                      set={setTier}
                      options={[
                        ["growth", "Growth"],
                        ["max", "Max ✦"],
                      ]}
                    />
                    <Switch
                      label="Payment"
                      value={pay}
                      set={setPay}
                      options={[
                        ["once", "Pay once"],
                        ["emi", "EMI"],
                      ]}
                    />
                  </div>

                  {/* Price + gift */}
                  <div
                    className={`relative mt-3 overflow-hidden rounded-2xl border-2 border-ink p-4 transition-colors duration-300 ${
                      isMax ? "bg-[#efe4ff]" : "bg-[#ffe9f4]"
                    }`}
                  >
                    <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                    <div className="relative">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wide text-ink/50">
                        <span className="inline-flex items-center gap-1">
                          {isMax && <Crown className="h-3.5 w-3.5 text-ink" />}
                          {g.name} · {pay === "once" ? "one-time" : "EMI"}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {g.days}
                        </span>
                      </div>
                      {pay === "once" ? (
                        <div key={`o${tier}`} className="step-swap mt-2 flex items-end gap-2">
                          <span className="font-display text-[2.3rem] font-bold leading-none tracking-tight text-ink">
                            {inr(g.price)}
                          </span>
                          <span className="pb-1 font-display text-sm font-bold text-ink/35 line-through">
                            {inr(g.was)}
                          </span>
                        </div>
                      ) : (
                        <div key={`e${tier}`} className="step-swap mt-2">
                          <div className="flex items-end gap-1.5">
                            <span className="font-display text-[2.3rem] font-bold leading-none tracking-tight text-ink">
                              {inr(g.emi)}
                            </span>
                            <span className="pb-1 text-sm font-semibold text-ink/50">/month</span>
                          </div>
                          <div className="mt-0.5 text-[12px] font-semibold text-ink/60">
                            after {inr(14999)} to start
                          </div>
                        </div>
                      )}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="gift-shine relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border-2 border-ink bg-pixel-pink px-2.5 py-1 text-[12px] font-bold text-white">
                          <Gift className="gift-wiggle h-3.5 w-3.5" />
                          <span key={tier} className="step-swap">
                            {g.campaigns} free campaigns
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-2.5 py-1 text-[12px] font-bold text-ink">
                          <ShieldCheck className="h-3.5 w-3.5 text-[#0369a1]" />
                          {g.support}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div key={tier} className="step-swap">
                  <Ticks items={g.features} />
                  <Actions
                    wa={
                      pay === "once"
                        ? `Hi Pixorra, I want the ${g.name} package (${inr(g.price)}).`
                        : `Hi Pixorra, I want the ${g.name} package on EMI (${inr(14999)} + ${inr(g.emi)}/month).`
                    }
                    primary="Book free demo"
                  />
                </div>
              </div>
            ) : (
              <div className="step-swap md:mt-2 md:grid md:grid-cols-[1.1fr_1fr] md:gap-8">
                <div className="mt-4 rounded-2xl border-2 border-ink bg-[#e0f2fe] p-4 md:order-last">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-ink/50">
                    Built to order · scoped together
                  </div>
                  <div className="mt-2 font-display text-[2rem] font-bold leading-none tracking-tight text-ink">
                    Custom quote
                  </div>
                </div>
                <div>
                  <Ticks items={APP_FEATURES} />
                  <Actions
                    wa="Hi Pixorra, I want a custom app. Here's my idea:"
                    primary="Book free scoping call"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social media content */}
        <div className="reveal relative">
          <Glow tone="lime" />
          <div className="relative rounded-[1.6rem] border-2 border-ink bg-white p-4 shadow-[6px_6px_0_0_#111] md:p-7">
            <span className="font-pixel text-[8px] tracking-[0.2em] text-[#4d7c0f] md:text-[9px]">
              02 · SOCIAL MEDIA CONTENT
            </span>
            <Headline>
              Content so good, <span className="text-[#4d7c0f]">they stop scrolling.</span>
            </Headline>

            <div className="md:mt-2 md:grid md:grid-cols-[1.1fr_1fr] md:gap-8">
              <div className="relative mt-4 overflow-hidden rounded-2xl border-2 border-ink bg-[#ecfccb] p-4 md:order-last">
                <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative">
                  <div className="text-[11px] font-bold uppercase tracking-wide text-ink/50">
                    Content retainer · per month
                  </div>
                  <div className="mt-2 flex items-end gap-1.5">
                    <span className="font-display text-[2.3rem] font-bold leading-none tracking-tight text-ink tabular-nums">
                      {inr(monthly)}
                    </span>
                    <span className="pb-1 text-sm font-semibold text-ink/45">/month</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <div className="inline-flex items-center overflow-hidden rounded-full border-2 border-ink bg-white">
                      <button
                        type="button"
                        aria-label="Fewer videos"
                        disabled={videos <= 5}
                        onClick={() => setVideos((v) => Math.max(5, v - 1))}
                        className="grid h-9 w-9 place-items-center hover:bg-[#d9f99d] disabled:opacity-30"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span
                        className="w-8 text-center font-display text-base font-bold tabular-nums"
                        aria-live="polite"
                      >
                        {videos}
                      </span>
                      <button
                        type="button"
                        aria-label="More videos"
                        disabled={videos >= 30}
                        onClick={() => setVideos((v) => Math.min(30, v + 1))}
                        className="grid h-9 w-9 place-items-center hover:bg-[#d9f99d] disabled:opacity-30"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-[13px] font-bold leading-tight text-ink">
                      Videos + campaigns
                      <span className="block text-[11px] font-semibold text-ink/50">
                        ₹1,000 each, creative included
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <Ticks
                  items={[
                    "UGC-style videos for your niche",
                    "A campaign post with every video",
                    "Shot in 4K at 60 fps",
                    "Posting handled for you",
                  ]}
                />
                <Actions
                  wa={`Hi Pixorra, I want the content plan: ${videos} videos + campaigns per month (${inr(monthly)}/month).`}
                  primary="Book a content call"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mx-auto mt-14 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        <p className="font-semibold text-ink">Still in doubt?</p>
        <p className="mt-2">Maybe our clients can help you decide.</p>
      </div>
    </section>
  );
}
