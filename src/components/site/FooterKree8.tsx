import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, Gauge, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";
import { KolkataGlobe } from "./KolkataGlobe";

const WA = "https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20to%20grow%20my%20business.";

/** Live time in Kolkata + whether the studio is open (Mon–Sat, 10am–8pm IST). */
function useKolkataTime() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);
  if (!now) return null;
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    weekday: "short",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const hour24 = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      hour12: false,
    }).format(now),
  );
  const day = get("weekday");
  const open = day !== "Sun" && hour24 >= 10 && hour24 < 20;
  return { time: `${get("hour")}:${get("minute")}`, ampm: get("dayPeriod").toUpperCase(), open };
}

const LETTER_TINTS = ["#ff4fa3", "#ff9a3d", "#ffd23f", "#4ade80", "#22d3ee", "#60a5fa", "#a855f7"];

/** Giant "pixorra" wordmark: letters tilt toward the cursor and pop with colour (outlay-style). */
function Wordmark() {
  const wrap = useRef<HTMLDivElement>(null);
  const [hot, setHot] = useState<number | null>(null);
  const [tilt, setTilt] = useState<number[]>(() => Array(7).fill(0));
  const letters = "pixorra".split("");

  const onMove = (e: React.PointerEvent) => {
    const el = wrap.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-l]"));
    setTilt(
      spans.map((s) => {
        const r = s.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dist = Math.abs(dx);
        if (dist > 260) return 0;
        return Math.max(-14, Math.min(14, dx / 12)) * (1 - dist / 260);
      }),
    );
  };

  return (
    <div
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={() => {
        setTilt(Array(7).fill(0));
        setHot(null);
      }}
      className="relative mx-auto flex max-w-6xl select-none items-end justify-center px-3"
      aria-label="Pixorra Studio"
      role="img"
    >
      {letters.map((l, i) => (
        <span
          key={i}
          data-l
          onPointerEnter={() => setHot(i)}
          onClick={() => setHot(i)}
          className="inline-block cursor-default font-display text-[23vw] font-bold leading-[0.8] tracking-[-0.06em] transition-[transform,color] duration-300 ease-out lg:text-[13.5rem]"
          style={{
            transform: `translateY(${hot === i ? -18 : 0}px) rotate(${tilt[i]}deg)`,
            color: hot === i ? LETTER_TINTS[i] : "#111",
            WebkitTextStroke: hot === i ? "3px #111" : undefined,
          }}
        >
          {l}
        </span>
      ))}
      <span className="mb-[2vw] ml-2 hidden rounded-xl border-2 border-ink bg-yellow-cta px-3 py-1 font-display text-xl font-bold shadow-pixel sm:inline-block lg:mb-6 lg:text-3xl">
        .studio
      </span>
    </div>
  );
}

export function FooterKree8() {
  const k = useKolkataTime();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-[linear-gradient(180deg,#1ea7ef_0%,#45b9f3_45%,#8ad3f7_80%,#b7e3f8_100%)] md:bg-[#4fb8f0]">
      {/* Sky + grass hill */}
      <img
        src="/footer/hill.webp"
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute bottom-0 left-1/2 w-[240%] max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent,black_30%)] sm:w-[140%] md:[mask-image:none] md:inset-0 md:left-0 md:h-full md:w-full md:translate-x-0 md:object-cover md:object-bottom"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent"
      />
      <div className="relative">
        {/* Closer */}
        <div className="mx-auto max-w-6xl px-5 pt-20 md:px-10 md:pt-28">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <h2 className="reveal font-display text-[3rem] font-bold leading-[0.95] tracking-[-0.04em] text-ink md:text-[5.5rem]">
              Let’s get you
              <br />
              <span className="text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.12)]">found.</span>
            </h2>
            <div className="reveal">
              <p className="text-lg text-ink/70">
                Tell us about your business. One short call, and in 48 hours you’ll see your free
                demo website.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={calBookingUrl}
                  {...calDataAttributes}
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-6 font-bold shadow-pixel"
                >
                  Book free demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lift inline-flex h-12 items-center gap-2 rounded-full border-2 border-ink bg-white px-5 font-bold shadow-pixel"
                >
                  <MessageCircle className="h-4 w-4 text-pixel-green" /> WhatsApp
                </a>
              </div>
              <a
                href="mailto:pixorrastudio@gmail.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink/55 hover:text-ink"
              >
                <Mail className="h-4 w-4" /> pixorrastudio@gmail.com
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            <a
              href="https://tms-studio-sage.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex w-[82%] shrink-0 snap-center flex-col rounded-[1.75rem] md:w-auto border border-white/70 bg-white/45 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(17,17,17,0.35)] p-5 transition-transform hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
                Latest work
              </span>
              <div className="mt-4 flex-1 overflow-hidden rounded-xl border-2 border-ink bg-[#f4f1ec] p-3">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink" />
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-yellow" />
                  <span className="h-1.5 w-1.5 rounded-full bg-pixel-green" />
                </div>
                <p className="mt-3 font-display text-lg font-bold leading-tight text-ink">
                  Study less. Know more. <span className="text-ink/40">Get hired.</span>
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="h-5 w-20 rounded-full bg-white shadow-sm" />
                  <span className="h-5 w-24 rounded-full bg-white shadow-sm" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-ink">TMS – The Management Studio</div>
                  <div className="text-xs text-ink/55">Coaching website + web app, Kolkata</div>
                </div>
                <ExternalLink className="h-4 w-4 text-ink/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>

            <a
              href="/playground"
              className="reveal group flex w-[82%] shrink-0 snap-center flex-col rounded-[1.75rem] md:w-auto border border-white/70 bg-white/45 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(17,17,17,0.35)] p-5 transition-transform hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
                Free tool
              </span>
              <div className="mt-4 grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-white">
                <Gauge className="h-6 w-6 text-pixel-pink" />
              </div>
              <p className="mt-4 font-display text-2xl font-bold leading-tight text-ink">
                Play 3 games. Get your growth score.
              </p>
              <p className="mt-2 flex-1 text-sm text-ink/65">
                How easy are you to find? How fast do you reply? Find out in 2 minutes.
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold">
                Open Playground{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <div className="reveal relative flex min-h-[300px] w-[82%] shrink-0 snap-center flex-col md:w-auto overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/45 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(17,17,17,0.35)] p-5">
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45">
                  Studio time
                </span>
                <span className="text-xs font-semibold text-ink/55">Kolkata, India</span>
              </div>
              <div className="mt-3 font-display text-5xl font-bold tracking-tight text-ink tabular-nums">
                {k ? k.time : "--:--"}
                <span className="ml-1 text-lg text-ink/40">{k?.ampm}</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink/70">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${k?.open ? "live-dot-on bg-pixel-green" : "bg-ink/30"}`}
                />
                {k?.open ? "We’re in the studio right now" : "Studio closed · opens 10 AM, Mon–Sat"}
              </div>
              <div className="pointer-events-none absolute -bottom-20 -right-12">
                <KolkataGlobe size={250} />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-10 grid grid-cols-2 gap-8 rounded-[1.75rem] border border-white/70 bg-white/45 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(17,17,17,0.35)] p-6 text-sm md:grid-cols-4">
            {[
              {
                h: "Studio",
                l: [
                  ["Our work", "/#work"],
                  ["Services", "/#services"],
                  ["Pricing", "/#pricing"],
                  ["Reviews", "/#reviews"],
                ],
              },
              {
                h: "Free",
                l: [
                  ["Playground", "/playground"],
                  ["Growth scorecard", "/scorecard"],
                  ["Free demo website", calBookingUrl],
                  ["FAQ", "/#faq"],
                ],
              },
              {
                h: "Company",
                l: [
                  ["Pixorra Cares", "/donate"],
                  ["How it works", "/#process"],
                ],
              },
              {
                h: "Contact",
                l: [
                  ["WhatsApp +91 89278 40261", WA],
                  ["pixorrastudio@gmail.com", "mailto:pixorrastudio@gmail.com"],
                  [
                    "Kolkata, West Bengal",
                    "https://www.google.com/maps/search/?api=1&query=Kolkata",
                  ],
                ],
              },
            ].map((col) => (
              <div
                key={col.h}
                className={col.h === "Contact" ? "col-span-2 md:col-span-1" : undefined}
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  {col.h}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.l.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="break-words font-semibold text-ink/75 hover:text-ink"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive wordmark */}
        <div className="mt-28 md:mt-20">
          <Wordmark />
        </div>

        <div className="mx-3 mb-4 flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[1.5rem] sm:mx-auto sm:rounded-full border border-white/70 bg-white/55 px-5 py-3 text-sm text-ink/70 backdrop-blur-xl sm:flex-row md:mx-10 lg:mx-auto">
          <span suppressHydrationWarning>© {year} Pixorra Studio</span>
          <span className="hidden sm:inline">Made with ♥ in Kolkata</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-4 py-1.5 font-bold text-ink shadow-[2px_2px_0_0_#111]"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
