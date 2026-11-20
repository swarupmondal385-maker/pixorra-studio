import { useState } from "react";
import { Check, Clock, MessageCircle, Minus, Plus, Rocket } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { MarkerHighlight } from "./MarkerHighlight";
import { useCountdown } from "./PriceCountdown";

const WA = "https://wa.me/918927840261?text=";

const DEV_TABS = {
  growth: {
    label: "Growth Package",
    title: "Growth Package",
    days: "7–10 days",
    features: [
      "Full-stack website development",
      "Funnel generation + CRM",
      "Local SEO & Google visibility",
      "24/7 AI system + WhatsApp bot",
      "Free demo before you pay",
      "20% advance, 80% on delivery",
    ],
  },
  app: {
    label: "Custom App",
    title: "Custom App",
    days: "Scoped together",
    features: [
      "Web apps, booking & sales tools",
      "Admin panel + customer login",
      "Payments, WhatsApp & CRM hooks",
      "Built around your exact workflow",
      "Free scoping call",
      "Hosting and launch support",
    ],
  },
} as const;
type DevTab = keyof typeof DEV_TABS;

function Ticks({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink/80">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-pixel-green" strokeWidth={3} />
          {f}
        </li>
      ))}
    </ul>
  );
}

function Actions({ wa, primary }: { wa: string; primary: string }) {
  return (
    <div className="mt-3 flex flex-col gap-2.5">
      <a
        href={calBookingUrl}
        {...calDataAttributes}
        className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white font-bold text-ink shadow-pixel"
      >
        <Rocket className="h-4 w-4 text-pixel-pink" /> {primary}
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

function Counter({
  value,
  set,
  min,
  max,
  label,
}: {
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex items-center overflow-hidden rounded-full border-2 border-ink bg-[#d9f99d]">
        <button
          type="button"
          aria-label={`Fewer ${label}`}
          disabled={value <= min}
          onClick={() => set(Math.max(min, value - 1))}
          className="grid h-9 w-9 place-items-center hover:bg-white/60 disabled:opacity-30"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span
          className="w-9 text-center font-display text-base font-bold tabular-nums"
          aria-live="polite"
        >
          {value}
        </span>
        <button
          type="button"
          aria-label={`More ${label}`}
          disabled={value >= max}
          onClick={() => set(Math.min(max, value + 1))}
          className="grid h-9 w-9 place-items-center hover:bg-white/60 disabled:opacity-30"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <span className="text-[15px] font-semibold text-ink">{label} / month</span>
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

/** kree8-style pricing: one-time Development package + monthly Social Content plan. */
export function PricingKree8() {
  const [tab, setTab] = useState<DevTab>("growth");
  const [videos, setVideos] = useState(10);
  const [posts, setPosts] = useState(10);
  const t = useCountdown();
  const dev = DEV_TABS[tab];
  // ₹1,000 for every video + designed post pair (₹500 each), shown as a ...999 price.
  const monthly = (videos + posts) * 500 - 1;
  const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <section id="pricing" className="relative bg-background py-24 md:py-32">
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
        Choose a one-time Development package, or a fixed monthly Social Content plan. Whatever
        works best for you.
      </p>

      <div className="mx-auto mt-12 max-w-4xl space-y-14 px-3 md:px-8">
        {/* Development package */}
        <div className="reveal relative">
          <Glow tone="pink" />
          <div className="relative rounded-[1.75rem] border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_#111] md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-pixel text-[9px] tracking-[0.2em] text-pixel-pink">
                01 · DEVELOPMENT PACKAGE
              </span>
              <div
                role="tablist"
                className="flex gap-1 rounded-full border-2 border-ink bg-cream p-1"
              >
                {(Object.keys(DEV_TABS) as DevTab[]).map((k) => (
                  <button
                    key={k}
                    role="tab"
                    aria-selected={tab === k}
                    onClick={() => setTab(k)}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition-all ${
                      tab === k
                        ? "bg-yellow-cta shadow-[2px_2px_0_0_#111]"
                        : "text-ink/55 hover:text-ink"
                    }`}
                  >
                    {DEV_TABS[k].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                    {dev.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-2 py-0.5 text-[11px] font-semibold text-ink/60">
                    <Clock className="h-3 w-3" /> {dev.days}
                  </span>
                </div>
                <Ticks items={dev.features} />
              </div>

              <div className="order-first flex flex-col md:order-none">
                <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-[#ffe9f4] p-5 shadow-pixel">
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-ink/45">
                        {tab === "growth" ? "One-time" : "Built to order"}
                      </span>
                      {tab === "growth" && (
                        <span className="rounded-full border-2 border-ink bg-white px-2 py-0.5 text-[10px] font-bold">
                          Save ₹5,000
                        </span>
                      )}
                    </div>
                    {tab === "growth" ? (
                      <div className="mt-7 flex items-end gap-2">
                        <span className="font-display text-[2.6rem] font-bold leading-none tracking-tight text-ink">
                          ₹14,999
                        </span>
                        <span className="pb-1 font-display text-base font-bold text-ink/35 line-through">
                          ₹19,999
                        </span>
                      </div>
                    ) : (
                      <div className="mt-7 font-display text-[2.2rem] font-bold leading-none tracking-tight text-ink">
                        Custom quote
                      </div>
                    )}
                  </div>
                </div>
                {tab === "growth" && (
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-ink/55">
                    Launch offer ends in
                    <span className="rounded-md bg-ink px-1.5 py-0.5 font-pixel text-[9px] text-white tabular-nums">
                      {t
                        ? `${t.d}D ${String(t.h).padStart(2, "0")}H ${String(t.m).padStart(2, "0")}M`
                        : "--"}
                    </span>
                  </div>
                )}
                <Actions
                  wa={
                    tab === "growth"
                      ? "Hi Pixorra, I want the ₹14,999 Growth Package."
                      : "Hi Pixorra, I want a custom app. Here's my idea:"
                  }
                  primary={tab === "growth" ? "Book free demo" : "Book free scoping call"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social media content */}
        <div className="reveal relative">
          <Glow tone="lime" />
          <div className="relative rounded-[1.75rem] border-2 border-ink bg-white p-4 shadow-[8px_8px_0_0_#111] md:p-6">
            <span className="font-pixel text-[9px] tracking-[0.2em] text-[#4d7c0f]">
              02 · SOCIAL MEDIA CONTENT
            </span>
            <div className="mt-5 grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  Content Retainer
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  Starts at 5 videos + 5 posts. Every post comes with a designed creative.
                </p>
                <div className="mt-5 space-y-3">
                  <Counter value={videos} set={setVideos} min={5} max={30} label="Videos" />
                  <Counter value={posts} set={setPosts} min={5} max={30} label="Posts" />
                </div>
                <Ticks
                  items={[
                    "UGC-style videos, shot & edited for your niche",
                    "Every video in 4K at 60 fps",
                    "Custom ads and reels",
                    "Posting schedule handled for you",
                  ]}
                />
              </div>

              <div className="order-first flex flex-col md:order-none">
                <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-[#ecfccb] p-5 shadow-pixel">
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-ink/45">
                        Per month
                      </span>
                      <span className="rounded-full border-2 border-ink bg-white px-2 py-0.5 text-[10px] font-bold">
                        {videos} videos · {posts} posts
                      </span>
                    </div>
                    <div className="mt-7 flex items-end gap-1.5">
                      <span className="font-display text-[2.6rem] font-bold leading-none tracking-tight text-ink tabular-nums">
                        {inr(monthly)}
                      </span>
                      <span className="pb-1 text-sm font-semibold text-ink/45">/month</span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-ink/55">
                      ₹1,000 for every video + designed post pair
                    </div>
                  </div>
                </div>
                <Actions
                  wa={`Hi Pixorra, I want the content plan: ${videos} videos + ${posts} posts per month (${inr(monthly)}/month).`}
                  primary="Book a content call"
                />
              </div>
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
