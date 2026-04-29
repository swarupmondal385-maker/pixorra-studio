import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Sparkles, Check, Star, Zap, Heart, Rocket, Trophy } from "lucide-react";

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
          "Discover your Business Growth Score in under 2 minutes. See how you compare to top-performing businesses and uncover hidden revenue opportunities.",
      },
      { property: "og:title", content: "Discover Your Business Growth Score — Pixorra" },
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
  {
    q: "How would you describe your current online presence?",
    emoji: "🌐",
    options: [
      { label: "No website yet", value: 0 },
      { label: "Basic website / social only", value: 4 },
      { label: "Modern site, decent traffic", value: 7 },
      { label: "Strong site + ranking + ads", value: 10 },
    ],
  },
  {
    q: "How do most new customers find you today?",
    emoji: "🔍",
    options: [
      { label: "Word of mouth only", value: 2 },
      { label: "Social media occasionally", value: 5 },
      { label: "Google search & ads", value: 8 },
      { label: "Multi-channel + referrals", value: 10 },
    ],
  },
  {
    q: "How fast does your website load on mobile?",
    emoji: "⚡",
    options: [
      { label: "Don't have one", value: 0 },
      { label: "Slow (5+ sec)", value: 3 },
      { label: "Decent (2–4 sec)", value: 7 },
      { label: "Lightning fast (<2s)", value: 10 },
    ],
  },
  {
    q: "Do you rank on Google for your main service?",
    emoji: "📈",
    options: [
      { label: "Not at all", value: 1 },
      { label: "Page 3+", value: 4 },
      { label: "Page 2", value: 7 },
      { label: "Top 3 results", value: 10 },
    ],
  },
  {
    q: "How consistent is your branding (logo, colors, voice)?",
    emoji: "🎨",
    options: [
      { label: "Inconsistent / DIY", value: 2 },
      { label: "Mostly consistent", value: 6 },
      { label: "Professionally designed", value: 9 },
      { label: "Premium identity system", value: 10 },
    ],
  },
  {
    q: "Are you running paid ads (Google / Meta)?",
    emoji: "🎯",
    options: [
      { label: "No", value: 2 },
      { label: "Tried, didn't work", value: 4 },
      { label: "Yes, breaking even", value: 7 },
      { label: "Yes, profitable", value: 10 },
    ],
  },
  {
    q: "How do you collect customer reviews?",
    emoji: "⭐",
    options: [
      { label: "We don't", value: 1 },
      { label: "Sometimes manually", value: 5 },
      { label: "Automated requests", value: 8 },
      { label: "100+ Google reviews", value: 10 },
    ],
  },
  {
    q: "Do you track website analytics & conversions?",
    emoji: "📊",
    options: [
      { label: "No tracking", value: 1 },
      { label: "Basic Google Analytics", value: 5 },
      { label: "Full tracking + pixels", value: 8 },
      { label: "Dashboards + attribution", value: 10 },
    ],
  },
  {
    q: "How often do you publish new content?",
    emoji: "✍️",
    options: [
      { label: "Never", value: 1 },
      { label: "Once in a while", value: 4 },
      { label: "Weekly", value: 8 },
      { label: "Multi-channel daily", value: 10 },
    ],
  },
  {
    q: "How automated is your lead capture & follow-up?",
    emoji: "🤖",
    options: [
      { label: "All manual", value: 2 },
      { label: "Email replies only", value: 5 },
      { label: "Forms + WhatsApp auto", value: 8 },
      { label: "Full CRM + AI follow-up", value: 10 },
    ],
  },
  {
    q: "What's your average monthly marketing spend?",
    emoji: "💰",
    options: [
      { label: "₹0", value: 2 },
      { label: "Under ₹10k", value: 5 },
      { label: "₹10k – ₹50k", value: 8 },
      { label: "₹50k+", value: 10 },
    ],
  },
  {
    q: "How clear is your unique value proposition?",
    emoji: "💎",
    options: [
      { label: "Not really defined", value: 2 },
      { label: "We have one, kinda", value: 5 },
      { label: "Clear & on every page", value: 8 },
      { label: "Iconic positioning", value: 10 },
    ],
  },
];

type Category = {
  key: string;
  label: string;
  emoji: string;
  range: readonly [number, number];
  bg: string;
  desc: string;
};

const CATEGORIES: Category[] = [
  { key: "critical", label: "Critical Gap", emoji: "🚨", range: [0, 39], bg: "bg-pixel-pink", desc: "Big leaks. Massive upside if fixed." },
  { key: "plateau", label: "Growth Plateau", emoji: "📈", range: [40, 64], bg: "bg-pixel-orange", desc: "Stuck. Time to break through." },
  { key: "scaling", label: "Scaling Stage", emoji: "🚀", range: [65, 84], bg: "bg-pixel-cyan", desc: "You're winning. Let's compound it." },
  { key: "leader", label: "Market Leader", emoji: "👑", range: [85, 100], bg: "bg-pixel-yellow", desc: "Top tier. Defend & dominate." },
];

function getCategory(score: number) {
  return CATEGORIES.find((c) => score >= c.range[0] && score <= c.range[1]) ?? CATEGORIES[0];
}

/* ---------------- Page ---------------- */

function ScorecardPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(QUESTIONS.length).fill(null));
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
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

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
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
    setStarted(true);
    setDisplayScore(0);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <main className="relative min-h-screen bg-gradient-hero text-ink overflow-hidden">
      <PlayfulBackdrop />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center reveal is-visible">
            <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white border-2 border-ink text-xs font-bold tracking-wider uppercase shadow-pixel">
              <Sparkles className="h-3.5 w-3.5 text-pixel-pink" fill="currentColor" />
              <span className="text-gradient-pixorra">Free Growth Scorecard</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-center font-display font-bold text-5xl md:text-7xl tracking-tight text-balance text-ink">
            Discover Your Business{" "}
            <span className="text-gradient-pixorra">Growth Score</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-center text-ink/70 text-lg md:text-xl">
            Takes less than 2 minutes. See how you stack up against top-performing
            businesses and uncover hidden revenue opportunities. ✨
          </p>

          {/* Scoreboard card */}
          <div className="mt-12 relative">
            {/* Decorative stickers */}
            <div aria-hidden className="pointer-events-none absolute -top-6 -left-3 md:-top-8 md:-left-8 h-14 w-14 rounded-2xl bg-pixel-yellow border-2 border-ink shadow-pixel flex items-center justify-center text-2xl wobble z-10">
              ⚡
            </div>
            <div aria-hidden className="pointer-events-none absolute -top-5 -right-3 md:-top-8 md:-right-8 h-14 w-14 rounded-full bg-pixel-pink border-2 border-ink shadow-pixel flex items-center justify-center text-2xl bounce-soft z-10">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>

            <div className="relative rounded-[2rem] border-2 border-ink bg-white shadow-pixel p-6 md:p-10 transition-transform duration-500 hover:-translate-y-1">
              {/* Rainbow top stripe */}
              <div className="absolute inset-x-0 -top-px h-1.5 rounded-t-[2rem] bg-gradient-rainbow" />

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Gauge */}
                <div className="flex flex-col items-center">
                  <Gauge value={displayScore} />
                  <div className="mt-4 text-center">
                    <div className="text-xs uppercase tracking-[0.2em] text-ink/60 font-bold">Your Score</div>
                    {done && activeCategory && (
                      <div className={`mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${activeCategory.bg} border-2 border-ink shadow-pixel text-sm font-bold text-ink`}>
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
                        className={`relative rounded-2xl border-2 border-ink px-4 py-3 transition-all duration-300 ${
                          isActive ? `${c.bg} shadow-pixel -translate-y-0.5` : "bg-cream"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-xl border-2 border-ink flex items-center justify-center text-lg ${isActive ? "bg-white" : c.bg}`}>
                              {c.emoji}
                            </div>
                            <div>
                              <div className="font-bold text-ink">{c.label}</div>
                              <div className="text-xs text-ink/70 mt-0.5">{c.desc}</div>
                            </div>
                          </div>
                          <div className="text-xs font-bold font-mono text-ink/70 bg-white border-2 border-ink rounded-md px-2 py-0.5">
                            {c.range[0]}–{c.range[1]}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress preview */}
              <div className="mt-10 pt-8 border-t-2 border-dashed border-ink/20">
                <div className="flex items-center justify-between text-xs md:text-sm text-ink/70 font-bold">
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pixel-pink" />12 Questions</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pixel-yellow" />2 Minutes</span>
                  <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pixel-cyan" />Instant Results</span>
                </div>
                <div className="mt-3 h-3 rounded-full bg-cream border-2 border-ink overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-rainbow transition-all duration-700 ease-out"
                    style={{ width: `${started ? progressPct : 8}%` }}
                  />
                  {!started && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                  )}
                </div>
                <div className="mt-2 text-xs text-ink/60 text-right font-semibold">
                  {started ? `${answeredCount} of ${QUESTIONS.length} answered` : "Preview"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center gap-3 h-14 md:h-16 px-8 md:px-10 rounded-full bg-ink text-white font-bold text-base md:text-lg border-2 border-ink shadow-pixel transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-y-0 active:translate-x-0"
            >
              <span className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-pixel-yellow border-2 border-ink wobble" />
              <span className="relative">Start Free Audit</span>
              <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-ink/60 font-semibold inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-pixel-green" /> No signup required
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
          {!done ? (
            <div className="relative rounded-[2rem] border-2 border-ink bg-white shadow-pixel p-6 md:p-10">
              <div className="absolute inset-x-0 -top-px h-1.5 rounded-t-[2rem] bg-gradient-rainbow" />

              <div className="flex items-center justify-between text-xs text-ink/70 font-bold">
                <span>
                  Question <span className="text-pixel-pink">{current + 1}</span> of {QUESTIONS.length}
                </span>
                <span className="text-pixel-purple">{Math.round(progressPct)}% complete</span>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-cream border-2 border-ink overflow-hidden">
                <div
                  className="h-full bg-gradient-rainbow transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <div className="mt-8">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-pixel-yellow border-2 border-ink shadow-pixel text-3xl wobble">
                  {QUESTIONS[current].emoji}
                </div>
                <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-balance text-ink">
                  {QUESTIONS[current].q}
                </h2>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {QUESTIONS[current].options.map((opt, idx) => {
                  const selected = answers[current] === opt.value;
                  const accents = ["bg-pixel-pink", "bg-pixel-yellow", "bg-pixel-cyan", "bg-pixel-purple"];
                  const accent = accents[idx % accents.length];
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className={`group relative text-left rounded-2xl border-2 border-ink px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 ${
                        selected ? `${accent} shadow-pixel` : "bg-white shadow-pixel hover:bg-cream"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-bold text-ink">{opt.label}</span>
                        <span className={`h-7 w-7 rounded-full border-2 border-ink flex items-center justify-center transition-all ${selected ? "bg-white" : accent}`}>
                          {selected && <Check className="h-4 w-4 text-ink" strokeWidth={3} />}
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
                  className="text-sm font-bold text-ink/70 hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <div className="text-xs font-bold text-ink/60">
                  Live score:{" "}
                  <span className="inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-md bg-pixel-yellow border-2 border-ink text-ink">
                    {displayScore}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="results"
              className="relative rounded-[2rem] border-2 border-ink bg-white shadow-pixel p-8 md:p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-1.5 rounded-t-[2rem] bg-gradient-rainbow" />
              {/* Confetti dots */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <span className="absolute top-6 left-6 h-3 w-3 bg-pixel-pink sparkle-pulse" />
                <span className="absolute top-10 right-10 h-2 w-2 bg-pixel-yellow sparkle-pulse" style={{ animationDelay: "0.4s" }} />
                <span className="absolute bottom-12 left-12 h-2.5 w-2.5 bg-pixel-cyan sparkle-pulse" style={{ animationDelay: "0.8s" }} />
                <span className="absolute bottom-8 right-8 h-2 w-2 bg-pixel-purple sparkle-pulse" style={{ animationDelay: "1.1s" }} />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-pixel-yellow border-2 border-ink text-ink text-xs font-bold uppercase tracking-wider shadow-pixel">
                  <Trophy className="h-3.5 w-3.5" /> Your Result
                </div>
                <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold text-ink">
                  You scored{" "}
                  <span className="text-gradient-pixorra">{displayScore}/100</span>
                </h2>
                {activeCategory && (
                  <>
                    <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeCategory.bg} border-2 border-ink shadow-pixel text-base md:text-lg font-bold text-ink`}>
                      <span className="text-xl">{activeCategory.emoji}</span> {activeCategory.label}
                    </div>
                    <p className="mt-4 text-ink/70 max-w-xl mx-auto text-base md:text-lg">{activeCategory.desc}</p>
                  </>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-pixel-green text-ink font-bold border-2 border-ink shadow-pixel transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
                  >
                    Get My Custom Action Plan <ArrowRight className="h-5 w-5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center h-14 px-6 rounded-full bg-white text-ink font-bold border-2 border-ink shadow-pixel transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
                  >
                    Retake Quiz
                  </button>
                </div>

                <div className="mt-6 text-xs text-ink/60 font-semibold inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-pixel-yellow" fill="currentColor" /> Free</span>
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
    <div className="inline-flex items-center gap-2 h-9 px-3 rounded-full bg-white border-2 border-ink shadow-pixel text-xs font-bold text-ink">
      <span>{emoji}</span> {text}
    </div>
  );
}

/* ---------------- Gauge ---------------- */

function Gauge({ value }: { value: number }) {
  const size = 220;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(Math.max(value, 0), 100) / 100) * c;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* soft halo */}
      <div className="absolute inset-2 rounded-full bg-pixel-yellow/40 blur-2xl" />
      <svg width={size} height={size} className="relative -rotate-90">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4fa3" />
            <stop offset="33%" stopColor="#ffd93d" />
            <stop offset="66%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        {/* track */}
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#FAFAF7" strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#111111" strokeWidth={stroke + 4} fill="none" opacity="0.08" />
        {/* progress */}
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
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)" }}
        />
        {/* ink outline */}
        <circle cx={size / 2} cy={size / 2} r={r + stroke / 2 + 1} stroke="#111111" strokeWidth={2} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r - stroke / 2 - 1} stroke="#111111" strokeWidth={2} fill="none" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display font-bold text-6xl text-ink tabular-nums">{value}</div>
        <div className="text-xs text-ink/60 mt-1 font-bold">/ 100</div>
      </div>
    </div>
  );
}

/* ---------------- Playful backdrop ---------------- */

function PlayfulBackdrop() {
  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 6 + Math.random() * 8,
        color: ["bg-pixel-pink", "bg-pixel-yellow", "bg-pixel-cyan", "bg-pixel-purple", "bg-pixel-green", "bg-pixel-orange"][i % 6],
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Big soft blobs */}
      <div className="absolute -top-24 -left-24 h-80 w-80 bg-pixel-pink/25 blob" />
      <div className="absolute top-40 -right-24 h-96 w-96 bg-pixel-cyan/25 blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 bg-pixel-yellow/30 blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 bg-pixel-purple/20 blob" style={{ animationDelay: "1s" }} />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Pixel sparkles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className={`absolute ${s.color} sparkle-pulse`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Floating emoji stickers */}
      <div className="hidden md:block">
        <div className="absolute top-28 left-[6%] text-3xl drift">⚡</div>
        <div className="absolute top-44 right-[8%] text-3xl drift" style={{ animationDelay: "1.5s" }}>🚀</div>
        <div className="absolute top-[28rem] left-[5%] text-3xl drift" style={{ animationDelay: "3s" }}>💖</div>
        <div className="absolute top-[34rem] right-[6%] text-2xl drift" style={{ animationDelay: "2.2s" }}>✨</div>
        <div className="absolute top-[20rem] left-[48%] text-2xl drift" style={{ animationDelay: "4s" }}>🎯</div>
      </div>
    </div>
  );
}
