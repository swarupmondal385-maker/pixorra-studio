import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Sparkles, Check, Star, Trophy } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

const WHATSAPP_URL =
  "https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20just%20took%20the%20Growth%20Scorecard%20and%20want%20my%20custom%20action%20plan.";

export const Route = createFileRoute("/scorecard")({
  component: ScorecardPage,
  head: () => ({
    meta: [
      { title: "Business Growth Scorecard — Pixorra" },
      {
        name: "description",
        content:
          "Step into the Pixorra Growth Universe. Discover your Business Growth Score in under 2 minutes and unlock hidden revenue opportunities.",
      },
      { property: "og:title", content: "Enter the Pixorra Growth Universe — Free Scorecard" },
      {
        property: "og:description",
        content: "Free 2-minute audit. 12 questions. Instant results. No signup required.",
      },
    ],
  }),
});

/* ---------------- Quiz data ---------------- */

type Option = { label: string; value: number };
type Question = { q: string; emoji: string; options: Option[] };

const QUESTIONS: Question[] = [
  { q: "How would you describe your current online presence?", emoji: "🌐",
    options: [
      { label: "No website yet", value: 0 },
      { label: "Basic website / social only", value: 4 },
      { label: "Modern site, decent traffic", value: 7 },
      { label: "Strong site + ranking + ads", value: 10 },
    ] },
  { q: "How do most new customers find you today?", emoji: "🔍",
    options: [
      { label: "Word of mouth only", value: 2 },
      { label: "Social media occasionally", value: 5 },
      { label: "Google search & ads", value: 8 },
      { label: "Multi-channel + referrals", value: 10 },
    ] },
  { q: "How fast does your website load on mobile?", emoji: "⚡",
    options: [
      { label: "Don't have one", value: 0 },
      { label: "Slow (5+ sec)", value: 3 },
      { label: "Decent (2–4 sec)", value: 7 },
      { label: "Lightning fast (<2s)", value: 10 },
    ] },
  { q: "Do you rank on Google for your main service?", emoji: "📈",
    options: [
      { label: "Not at all", value: 1 },
      { label: "Page 3+", value: 4 },
      { label: "Page 2", value: 7 },
      { label: "Top 3 results", value: 10 },
    ] },
  { q: "How consistent is your branding (logo, colors, voice)?", emoji: "🎨",
    options: [
      { label: "Inconsistent / DIY", value: 2 },
      { label: "Mostly consistent", value: 6 },
      { label: "Professionally designed", value: 9 },
      { label: "Premium identity system", value: 10 },
    ] },
  { q: "Are you running paid ads (Google / Meta)?", emoji: "🎯",
    options: [
      { label: "No", value: 2 },
      { label: "Tried, didn't work", value: 4 },
      { label: "Yes, breaking even", value: 7 },
      { label: "Yes, profitable", value: 10 },
    ] },
  { q: "How do you collect customer reviews?", emoji: "⭐",
    options: [
      { label: "We don't", value: 1 },
      { label: "Sometimes manually", value: 5 },
      { label: "Automated requests", value: 8 },
      { label: "100+ Google reviews", value: 10 },
    ] },
  { q: "Do you track website analytics & conversions?", emoji: "📊",
    options: [
      { label: "No tracking", value: 1 },
      { label: "Basic Google Analytics", value: 5 },
      { label: "Full tracking + pixels", value: 8 },
      { label: "Dashboards + attribution", value: 10 },
    ] },
  { q: "How often do you publish new content?", emoji: "✍️",
    options: [
      { label: "Never", value: 1 },
      { label: "Once in a while", value: 4 },
      { label: "Weekly", value: 8 },
      { label: "Multi-channel daily", value: 10 },
    ] },
  { q: "How automated is your lead capture & follow-up?", emoji: "🤖",
    options: [
      { label: "All manual", value: 2 },
      { label: "Email replies only", value: 5 },
      { label: "Forms + WhatsApp auto", value: 8 },
      { label: "Full CRM + AI follow-up", value: 10 },
    ] },
  { q: "What's your average monthly marketing spend?", emoji: "💰",
    options: [
      { label: "₹0", value: 2 },
      { label: "Under ₹10k", value: 5 },
      { label: "₹10k – ₹50k", value: 8 },
      { label: "₹50k+", value: 10 },
    ] },
  { q: "How clear is your unique value proposition?", emoji: "💎",
    options: [
      { label: "Not really defined", value: 2 },
      { label: "We have one, kinda", value: 5 },
      { label: "Clear & on every page", value: 8 },
      { label: "Iconic positioning", value: 10 },
    ] },
];

type Category = {
  key: string;
  label: string;
  emoji: string;
  range: readonly [number, number];
  hue: string;
  desc: string;
};

const CATEGORIES: Category[] = [
  { key: "critical", label: "Critical Gap",   emoji: "🚨", range: [0, 39],   hue: "from-pink-400 to-rose-500",       desc: "Big leaks. Massive upside if fixed." },
  { key: "plateau",  label: "Growth Plateau", emoji: "📈", range: [40, 64],  hue: "from-fuchsia-400 to-pink-500",    desc: "Stuck. Time to break through." },
  { key: "scaling",  label: "Scaling Stage",  emoji: "🚀", range: [65, 84],  hue: "from-cyan-300 to-purple-500",     desc: "You're winning. Let's compound it." },
  { key: "leader",   label: "Market Leader",  emoji: "👑", range: [85, 100], hue: "from-yellow-300 to-fuchsia-400",  desc: "Top tier. Defend & dominate." },
];

function getCategory(score: number) {
  return CATEGORIES.find((c) => score >= c.range[0] && score <= c.range[1]) ?? CATEGORIES[0];
}

/* ---------------- Page ---------------- */

function ScorecardPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(QUESTIONS.length).fill(null));
  const [current, setCurrent] = useState(0);
  const [warping, setWarping] = useState(false);
  const [entered, setEntered] = useState(false);
  const [done, setDone] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  const answeredCount = answers.filter((a) => a !== null).length;
  const rawScore = answers.reduce<number>((sum, v) => sum + (v ?? 0), 0);
  const maxScore = QUESTIONS.length * 10;
  const liveScore = Math.round((rawScore / maxScore) * 100);
  const progressPct = (answeredCount / QUESTIONS.length) * 100;

  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const target = done ? liveScore : Math.round((rawScore / maxScore) * 100);
    const start = displayScore;
    const diff = target - start;
    if (diff === 0) return;
    const duration = done ? 1400 : 500;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayScore(Math.round(start + diff * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveScore, done]);

  const activeCategory = done ? getCategory(liveScore) : null;

  const handleEnterPortal = () => {
    if (entered) {
      quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setWarping(true);
    setTimeout(() => {
      setWarping(false);
      setEntered(true);
      setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }, 1100);
  };

  const handleAnswer = (value: number) => {
    const next = [...answers];
    next[current] = value;
    setAnswers(next);
    if (current < QUESTIONS.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 250);
    } else {
      setTimeout(() => {
        setDone(true);
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    }
  };

  const handleReset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrent(0);
    setDone(false);
    setDisplayScore(0);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <UniverseBackdrop />

      {/* Warp overlay */}
      {warping && <WarpOverlay />}

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto perspective-1200">
          {/* Badge */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-xs font-bold tracking-wider uppercase"
              style={{ boxShadow: "0 0 30px rgba(168,85,247,0.35)" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-pink-300" fill="currentColor" />
              <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Enter the Growth Universe
              </span>
            </div>
          </div>

          {/* Mascot inside spinning portal */}
          <div className="mt-8 flex justify-center">
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/60 via-fuchsia-500/50 to-cyan-400/60 blur-2xl portal-pulse" />
              {/* spinning rainbow ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full portal-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, #ff4fa3, #ffd93d, #22d3ee, #a855f7, #ff4fa3)",
                  WebkitMask: "radial-gradient(circle, transparent 62%, black 64%)",
                  mask: "radial-gradient(circle, transparent 62%, black 64%)",
                }}
              />
              {/* counter ring */}
              <div
                aria-hidden
                className="absolute inset-2 rounded-full portal-spin-rev opacity-80"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent, #22d3ee, transparent, #ff4fa3, transparent)",
                  WebkitMask: "radial-gradient(circle, transparent 70%, black 72%)",
                  mask: "radial-gradient(circle, transparent 70%, black 72%)",
                }}
              />
              {/* mascot */}
              <div className="absolute inset-0 flex items-center justify-center float-3d">
                <img
                  src={logoMark}
                  alt="Pixorra mascot"
                  className="h-24 w-24 md:h-28 md:w-28 object-contain drop-shadow-[0_0_30px_rgba(255,79,163,0.6)]"
                />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-center font-display font-bold text-5xl md:text-7xl tracking-tight text-balance text-glow-pink">
            Discover Your Business{" "}
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Growth Score
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-center text-white/70 text-lg md:text-xl">
            Step through the portal. 12 questions, 2 minutes — and you'll see exactly
            where the hidden revenue is hiding. ✨
          </p>

          {/* Scoreboard PORTAL card */}
          <div className="mt-14 relative float-3d">
            {/* Portal halo rings */}
            <div aria-hidden className="absolute inset-0 -m-8 pointer-events-none">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-pink-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl portal-pulse" />
            </div>
            <div aria-hidden className="absolute -inset-4 rounded-[3rem] pointer-events-none">
              <div
                className="absolute inset-0 rounded-[3rem] portal-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(255,79,163,0.0), rgba(255,79,163,0.6), rgba(168,85,247,0.6), rgba(34,211,238,0.6), rgba(255,217,61,0.6), rgba(255,79,163,0.0))",
                  WebkitMask: "radial-gradient(circle, transparent 65%, black 67%)",
                  mask: "radial-gradient(circle, transparent 65%, black 67%)",
                }}
              />
              <div
                className="absolute inset-2 rounded-[3rem] portal-spin-rev opacity-70"
                style={{
                  background:
                    "conic-gradient(from 180deg, rgba(34,211,238,0.0), rgba(34,211,238,0.5), rgba(168,85,247,0.5), rgba(255,79,163,0.5), rgba(34,211,238,0.0))",
                  WebkitMask: "radial-gradient(circle, transparent 70%, black 72%)",
                  mask: "radial-gradient(circle, transparent 70%, black 72%)",
                }}
              />
            </div>

            {/* Floating stickers */}
            <div aria-hidden className="absolute -top-6 -left-3 md:-top-8 md:-left-8 z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-pink-400 border border-white/20 flex items-center justify-center text-2xl wobble" style={{ boxShadow: "0 10px 30px -5px rgba(255,217,61,0.6)" }}>
                ⚡
              </div>
            </div>
            <div aria-hidden className="absolute -top-5 -right-3 md:-top-8 md:-right-8 z-10">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-600 border border-white/20 flex items-center justify-center text-2xl bounce-soft" style={{ boxShadow: "0 10px 30px -5px rgba(168,85,247,0.7)" }}>
                🚀
              </div>
            </div>

            <div
              className="relative rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-xl p-6 md:p-10 shadow-portal transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Top rainbow seam */}
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent" />

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Gauge */}
                <div className="flex flex-col items-center">
                  <Gauge value={displayScore} />
                  <div className="mt-4 text-center">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/60 font-bold">Your Score</div>
                    {done && activeCategory && (
                      <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${activeCategory.hue} border border-white/20 text-sm font-bold text-black`}>
                        <span>{activeCategory.emoji}</span> {activeCategory.label}
                      </div>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  {CATEGORIES.map((c) => {
                    const isActive = activeCategory?.key === c.key;
                    return (
                      <div
                        key={c.key}
                        className={`relative rounded-2xl border px-4 py-3 transition-all duration-500 ${
                          isActive
                            ? "border-white/30 bg-white/10 -translate-y-0.5"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                        style={isActive ? { boxShadow: "0 0 40px rgba(255,79,163,0.45)" } : undefined}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-xl border border-white/15 flex items-center justify-center text-lg bg-gradient-to-br ${c.hue}`}>
                              <span className="drop-shadow">{c.emoji}</span>
                            </div>
                            <div>
                              <div className="font-bold text-white">{c.label}</div>
                              <div className="text-xs text-white/60 mt-0.5">{c.desc}</div>
                            </div>
                          </div>
                          <div className="text-xs font-mono font-bold text-white/70 bg-white/10 border border-white/15 rounded-md px-2 py-0.5">
                            {c.range[0]}–{c.range[1]}
                          </div>
                        </div>
                        {isActive && (
                          <div className={`absolute inset-x-4 -bottom-px h-px bg-gradient-to-r ${c.hue}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress preview */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between text-xs md:text-sm text-white/70 font-bold">
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(255,79,163,0.9)]" />12 Questions</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_8px_rgba(255,217,61,0.9)]" />2 Minutes</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />Instant Results</span>
                </div>
                <div className="mt-3 h-3 rounded-full bg-white/10 border border-white/10 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 transition-all duration-700 ease-out"
                    style={{
                      width: `${entered ? progressPct : 8}%`,
                      boxShadow: "0 0 20px rgba(255,79,163,0.7)",
                    }}
                  />
                  {!entered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  )}
                </div>
                <div className="mt-2 text-xs text-white/60 text-right font-semibold">
                  {entered ? `${answeredCount} of ${QUESTIONS.length} answered` : "Preview"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              onClick={handleEnterPortal}
              className="group relative inline-flex items-center gap-3 h-16 px-10 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-bold text-lg border border-white/20 transition-transform duration-300 hover:scale-[1.04] active:scale-95 animate-pulse-soft"
              style={{ boxShadow: "0 20px 50px -10px rgba(255,79,163,0.7), inset 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 opacity-0 blur-xl group-hover:opacity-80 transition-opacity" />
              <span className="relative">{entered ? "Continue Audit" : "Enter the Portal"}</span>
              <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-white/60 font-semibold inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-cyan-300" /> No signup required
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <TrustChip emoji="⭐" text="Trusted by 10,000+ businesses" />
            <TrustChip emoji="🇮🇳" text="Made in Mumbai" />
            <TrustChip emoji="⚡" text="Results in 2 mins" />
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section ref={quizRef} className="relative px-5 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          {!entered ? (
            <div className="text-center text-white/40 text-sm font-semibold py-10">
              ✦ Enter the portal above to begin ✦
            </div>
          ) : !done ? (
            <div
              key={current}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-10 warp-in shadow-portal"
            >
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

              <div className="flex items-center justify-between text-xs text-white/70 font-bold">
                <span>
                  Question <span className="text-pink-300">{current + 1}</span> of {QUESTIONS.length}
                </span>
                <span className="text-cyan-300">{Math.round(progressPct)}% complete</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 border border-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 transition-all duration-500"
                  style={{ width: `${progressPct}%`, boxShadow: "0 0 12px rgba(255,79,163,0.7)" }}
                />
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 border border-white/20 text-3xl wobble" style={{ boxShadow: "0 10px 30px -5px rgba(168,85,247,0.7)" }}>
                  {QUESTIONS[current].emoji}
                </div>
                <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-balance text-white">
                  {QUESTIONS[current].q}
                </h2>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {QUESTIONS[current].options.map((opt, idx) => {
                  const selected = answers[current] === opt.value;
                  const accents = [
                    "from-pink-500/30 to-rose-500/20",
                    "from-yellow-400/30 to-orange-500/20",
                    "from-cyan-400/30 to-blue-500/20",
                    "from-fuchsia-500/30 to-purple-600/20",
                  ];
                  const dot = ["bg-pink-400", "bg-yellow-300", "bg-cyan-300", "bg-fuchsia-400"];
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className={`group relative text-left rounded-2xl border px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 ${
                        selected
                          ? `border-white/30 bg-gradient-to-br ${accents[idx % 4]}`
                          : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                      }`}
                      style={selected ? { boxShadow: "0 0 30px rgba(255,79,163,0.4)" } : undefined}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-bold text-white/90">{opt.label}</span>
                        <span className={`h-7 w-7 rounded-full border border-white/30 flex items-center justify-center transition-all ${selected ? "bg-white" : dot[idx % 4] + "/30"}`}>
                          {selected && <Check className="h-4 w-4 text-black" strokeWidth={3} />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  className="text-sm font-bold text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <div className="text-xs font-bold text-white/60">
                  Live score:{" "}
                  <span className="inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-md bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white" style={{ boxShadow: "0 0 12px rgba(255,79,163,0.6)" }}>
                    {displayScore}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="results"
              className="relative rounded-[2rem] border border-white/15 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 text-center overflow-hidden warp-in shadow-portal"
            >
              <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
              {/* Confetti dots */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <span className="absolute top-6 left-6 h-3 w-3 rounded-full bg-pink-400 star-twinkle" />
                <span className="absolute top-10 right-10 h-2 w-2 rounded-full bg-yellow-300 star-twinkle" style={{ animationDelay: "0.4s" }} />
                <span className="absolute bottom-12 left-12 h-2.5 w-2.5 rounded-full bg-cyan-300 star-twinkle" style={{ animationDelay: "0.8s" }} />
                <span className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-fuchsia-400 star-twinkle" style={{ animationDelay: "1.1s" }} />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400 border border-white/20 text-black text-xs font-bold uppercase tracking-wider">
                  <Trophy className="h-3.5 w-3.5" /> Your Result
                </div>
                <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold text-white text-glow-pink">
                  You scored{" "}
                  <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                    {displayScore}/100
                  </span>
                </h2>
                {activeCategory && (
                  <>
                    <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${activeCategory.hue} border border-white/20 text-base md:text-lg font-bold text-black`}>
                      <span className="text-xl">{activeCategory.emoji}</span> {activeCategory.label}
                    </div>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto text-base md:text-lg">{activeCategory.desc}</p>
                  </>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold border border-white/20 transition-transform hover:scale-105"
                    style={{ boxShadow: "0 20px 50px -10px rgba(34,197,94,0.7)" }}
                  >
                    Get My Custom Action Plan <ArrowRight className="h-5 w-5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-white/5 text-white/90 font-bold border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>

                <div className="mt-6 text-xs text-white/60 font-semibold inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-300" fill="currentColor" /> Free</span>
                  <span>•</span>
                  <span>Personalised in WhatsApp</span>
                  <span>•</span>
                  <span>Reply in &lt; 1 hour</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* ---------------- Trust chip ---------------- */

function TrustChip({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-xs font-bold text-white/80">
      <span>{emoji}</span> {text}
    </div>
  );
}

/* ---------------- Gauge (3D ring) ---------------- */

function Gauge({ value }: { value: number }) {
  const size = 240;
  const stroke = 18;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(Math.max(value, 0), 100) / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* glow halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/40 via-fuchsia-500/30 to-cyan-400/40 blur-2xl portal-pulse" />
      {/* slow rotating outer ring */}
      <div aria-hidden
        className="absolute inset-0 rounded-full portal-spin"
        style={{
          background: "conic-gradient(from 0deg, rgba(255,79,163,0.0), rgba(255,79,163,0.7), rgba(168,85,247,0.7), rgba(34,211,238,0.7), rgba(255,217,61,0.7), rgba(255,79,163,0.0))",
          WebkitMask: "radial-gradient(circle, transparent 70%, black 72%)",
          mask: "radial-gradient(circle, transparent 70%, black 72%)",
        }}
      />
      <svg width={size} height={size} className="relative -rotate-90">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4fa3" />
            <stop offset="40%" stopColor="#a855f7" />
            <stop offset="80%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#ffd93d" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#gaugeGrad)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)", filter: "drop-shadow(0 0 14px rgba(255,79,163,0.85))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display font-bold text-6xl bg-gradient-to-br from-white to-pink-200 bg-clip-text text-transparent tabular-nums text-glow-pink">
          {value}
        </div>
        <div className="text-xs text-white/60 mt-1 font-bold">/ 100</div>
      </div>
    </div>
  );
}

/* ---------------- Universe backdrop ---------------- */

function UniverseBackdrop() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
      })),
    []
  );

  const planets = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
        size: 30 + Math.random() * 50,
        delay: Math.random() * 6,
        hue: ["bg-pink-400", "bg-cyan-300", "bg-yellow-300", "bg-fuchsia-400"][i % 4],
      })),
    []
  );

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_60%),radial-gradient(circle_at_30%_40%,rgba(255,79,163,0.18),transparent_55%)]" />

      {/* Big nebula blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-3xl portal-pulse" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl portal-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-3xl portal-pulse" style={{ animationDelay: "1s" }} />

      {/* Stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
        />
      ))}

      {/* Floating glowing orbs (planets) */}
      {planets.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.hue} float-3d`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            opacity: 0.18,
            filter: "blur(2px)",
            boxShadow: "0 0 60px currentColor",
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- Warp overlay ---------------- */

function WarpOverlay() {
  const lines = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 800 + Math.random() * 600;
        return {
          id: i,
          left: 50,
          top: 50,
          hx: `${Math.cos(angle) * dist}px`,
          hy: `${Math.sin(angle) * dist}px`,
          delay: Math.random() * 0.8,
          color: ["#ff4fa3", "#ffd93d", "#22d3ee", "#a855f7", "#ffffff"][i % 5],
          len: 60 + Math.random() * 120,
        };
      }),
    []
  );
  return (
    <div className="fixed inset-0 z-50 pointer-events-none bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden">
        {lines.map((l) => (
          <span
            key={l.id}
            className="absolute hyperdash"
            style={{
              left: `${l.left}%`,
              top: `${l.top}%`,
              width: l.len,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${l.color}, transparent)`,
              boxShadow: `0 0 8px ${l.color}`,
              transform: `rotate(${(Math.atan2(parseFloat(l.hy), parseFloat(l.hx)) * 180) / Math.PI}deg)`,
              transformOrigin: "left center",
              ["--hx" as any]: l.hx,
              ["--hy" as any]: l.hy,
              animationDelay: `${l.delay}s`,
              animationIterationCount: 1,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img
              src={logoMark}
              alt="Pixorra"
              className="mx-auto h-28 w-28 md:h-36 md:w-36 object-contain bounce-soft drop-shadow-[0_0_40px_rgba(255,79,163,0.9)]"
            />
            <div className="mt-4 font-display font-bold text-4xl md:text-6xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent text-glow-pink">
              Entering the Universe…
            </div>
            <div className="mt-3 text-white/60 text-sm font-bold tracking-widest uppercase">Warp speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
