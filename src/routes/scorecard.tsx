import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";

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
        content:
          "Free 2-minute audit. 12 questions. Instant results. No signup required.",
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

const CATEGORIES = [
  { key: "critical", label: "Critical Gap", range: [0, 39] as const, hue: "from-pink-400 to-rose-500", desc: "Big leaks. Massive upside if fixed." },
  { key: "plateau", label: "Growth Plateau", range: [40, 64] as const, hue: "from-fuchsia-400 to-pink-500", desc: "Stuck. Time to break through." },
  { key: "scaling", label: "Scaling Stage", range: [65, 84] as const, hue: "from-purple-400 to-fuchsia-500", desc: "You're winning. Let's compound it." },
  { key: "leader", label: "Market Leader", range: [85, 100] as const, hue: "from-pink-300 to-purple-400", desc: "Top tier. Defend & dominate." },
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

  // Animate score gauge
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
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BubbleField />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/5 backdrop-blur-md border border-pink-400/40 text-pink-200 text-xs font-semibold tracking-wide animate-float-soft" style={{ boxShadow: "0 0 30px rgba(255,79,163,0.35)" }}>
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 10,000+ Growing Businesses
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-center font-display font-bold text-5xl md:text-7xl tracking-tight text-balance">
            Discover Your Business{" "}
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Growth Score
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-center text-white/70 text-lg md:text-xl">
            Takes less than 2 minutes. See how you compare to top-performing businesses and
            uncover hidden revenue opportunities.
          </p>

          {/* Scoreboard card */}
          <div className="mt-12 relative">
            <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[3rem] pointer-events-none" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 transition-transform duration-500 hover:-translate-y-1" style={{ boxShadow: "0 30px 80px -20px rgba(255,79,163,0.35), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Gauge */}
                <div className="flex flex-col items-center">
                  <Gauge value={displayScore} />
                  <div className="mt-4 text-center">
                    <div className="text-xs uppercase tracking-[0.2em] text-pink-300/80 font-semibold">Your Score</div>
                    {done && activeCategory && (
                      <div className={`mt-2 text-sm font-bold bg-gradient-to-r ${activeCategory.hue} bg-clip-text text-transparent`}>
                        {activeCategory.label}
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
                        className={`relative rounded-2xl border px-5 py-4 transition-all duration-500 ${
                          isActive
                            ? "border-pink-300/60 bg-white/10"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                        style={isActive ? { boxShadow: "0 0 40px rgba(255,79,163,0.45)" } : undefined}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className={`font-bold ${isActive ? "text-white" : "text-white/80"}`}>
                              {c.label}
                            </div>
                            <div className="text-xs text-white/50 mt-0.5">{c.desc}</div>
                          </div>
                          <div className={`text-xs font-mono ${isActive ? "text-pink-200" : "text-white/40"}`}>
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
                <div className="flex items-center justify-between text-xs md:text-sm text-white/60 font-medium">
                  <span>12 Questions</span>
                  <span>•</span>
                  <span>2 Minutes</span>
                  <span>•</span>
                  <span>Instant Results</span>
                </div>
                <div className="mt-3 h-2.5 rounded-full bg-white/10 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-700 ease-out"
                    style={{
                      width: `${started ? progressPct : 8}%`,
                      boxShadow: "0 0 20px rgba(255,79,163,0.7)",
                    }}
                  />
                  {!started && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/20 to-transparent animate-shimmer" />
                  )}
                </div>
                <div className="mt-2 text-xs text-white/50 text-right">
                  {started ? `${answeredCount} of ${QUESTIONS.length} answered` : "Preview"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center gap-3 h-16 px-10 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold text-lg transition-transform duration-300 hover:scale-[1.04] active:scale-95 animate-pulse-soft"
              style={{ boxShadow: "0 20px 50px -10px rgba(255,79,163,0.7), inset 0 1px 0 rgba(255,255,255,0.4)" }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 opacity-0 blur-lg group-hover:opacity-80 transition-opacity" />
              <span className="relative">Start Free Audit</span>
              <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-xs text-white/50">No signup required</div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section ref={quizRef} className="relative px-5 md:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          {!done ? (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10" style={{ boxShadow: "0 30px 80px -20px rgba(168,85,247,0.3)" }}>
              <div className="flex items-center justify-between text-xs text-white/60 font-medium">
                <span>Question {current + 1} of {QUESTIONS.length}</span>
                <span className="text-pink-300">{Math.round(progressPct)}% complete</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-500"
                  style={{ width: `${progressPct}%`, boxShadow: "0 0 12px rgba(255,79,163,0.7)" }}
                />
              </div>

              <div className="mt-8">
                <div className="text-4xl">{QUESTIONS[current].emoji}</div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-balance">
                  {QUESTIONS[current].q}
                </h2>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {QUESTIONS[current].options.map((opt) => {
                  const selected = answers[current] === opt.value;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className={`group text-left rounded-2xl border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 ${
                        selected
                          ? "border-pink-300/70 bg-pink-500/10"
                          : "border-white/10 bg-white/[0.03] hover:border-pink-300/40 hover:bg-white/[0.06]"
                      }`}
                      style={selected ? { boxShadow: "0 0 30px rgba(255,79,163,0.4)" } : undefined}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-white/90">{opt.label}</span>
                        <span className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${selected ? "border-pink-300 bg-pink-400" : "border-white/20 group-hover:border-pink-300/60"}`}>
                          {selected && <Check className="h-3.5 w-3.5 text-black" />}
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
                  className="text-sm text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <div className="text-xs text-white/40">Live score: <span className="text-pink-300 font-bold">{displayScore}</span></div>
              </div>
            </div>
          ) : (
            <div id="results" className="rounded-[2rem] border border-pink-300/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12 text-center" style={{ boxShadow: "0 30px 80px -10px rgba(255,79,163,0.5)" }}>
              <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-pink-500/20 text-pink-200 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Your Result
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold">
                You scored{" "}
                <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {displayScore}/100
                </span>
              </h2>
              {activeCategory && (
                <>
                  <div className={`mt-3 text-2xl font-bold bg-gradient-to-r ${activeCategory.hue} bg-clip-text text-transparent`}>
                    {activeCategory.label}
                  </div>
                  <p className="mt-3 text-white/70 max-w-xl mx-auto">{activeCategory.desc}</p>
                </>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20just%20took%20the%20Growth%20Scorecard%20and%20want%20to%20discuss%20my%20results."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold transition-transform hover:scale-105"
                  style={{ boxShadow: "0 20px 50px -10px rgba(255,79,163,0.7)" }}
                >
                  Get My Custom Action Plan <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center h-14 px-6 rounded-full border border-white/20 text-white/80 font-semibold hover:bg-white/5 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
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
      <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-2xl" />
      <svg width={size} height={size} className="relative -rotate-90">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4FA3" />
            <stop offset="50%" stopColor="#FF8AC9" />
            <stop offset="100%" stopColor="#A855F7" />
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
          style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)", filter: "drop-shadow(0 0 12px rgba(255,79,163,0.7))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display font-bold text-6xl bg-gradient-to-br from-white to-pink-200 bg-clip-text text-transparent tabular-nums">
          {value}
        </div>
        <div className="text-xs text-white/50 mt-1">/ 100</div>
      </div>
    </div>
  );
}

/* ---------------- Floating bubbles ---------------- */

function BubbleField() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        size: 40 + Math.random() * 140,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 14,
        hue: Math.random() > 0.5 ? "rgba(255,79,163,0.18)" : "rgba(168,85,247,0.16)",
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-500/15 blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute rounded-full animate-bubble-float"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), ${b.hue} 60%, transparent 70%)`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
