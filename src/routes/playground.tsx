import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Gauge,
  MessageCircle,
  RotateCcw,
  Trophy,
  Zap,
  IndianRupee,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteShell } from "@/components/site/SiteShell";
import { FooterKree8 } from "@/components/site/FooterKree8";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

export const Route = createFileRoute("/playground")({
  component: PlaygroundPage,
  head: () => ({
    meta: [
      { title: "Playground | Pixorra Studio" },
      {
        name: "description",
        content:
          "Play 3 quick games and find out how easy your business is to find, how fast you reply, and how many customers you might be missing.",
      },
      { property: "og:title", content: "Pixorra Playground" },
    ],
  }),
});

type GameId = "score" | "race" | "missed";
const GAMES: { id: GameId; title: string; sub: string; icon: LucideIcon; tile: string }[] = [
  { id: "score", title: "Growth Score", sub: "6 quick taps", icon: Gauge, tile: "bg-[#ff4fa3]" },
  { id: "race", title: "Reply Race", sub: "Test your reflex", icon: Zap, tile: "bg-[#34c759]" },
  {
    id: "missed",
    title: "Missed Money",
    sub: "Do the maths",
    icon: IndianRupee,
    tile: "bg-[#007aff]",
  },
];
const XP_PER_GAME = 100;

/* ---------------- Game 1: Growth Score ---------------- */
const QUESTIONS: { q: string; tip: string; w: number }[] = [
  {
    q: "Do you have a website that works well on phones?",
    tip: "A fast mobile website is where most customers decide.",
    w: 20,
  },
  {
    q: "Does your business show up on Google Maps?",
    tip: "A complete Google Business Profile gets you found nearby.",
    w: 20,
  },
  {
    q: "Do you reply to WhatsApp enquiries within 5 minutes?",
    tip: "A 24/7 WhatsApp bot replies instantly, even at night.",
    w: 20,
  },
  {
    q: "Do you ask happy customers for Google reviews?",
    tip: "A simple review system builds trust before people call.",
    w: 15,
  },
  {
    q: "Do you post on Instagram at least once a week?",
    tip: "Consistent reels and posts keep you top of mind.",
    w: 15,
  },
  {
    q: "Do you save every enquiry in one place (CRM)?",
    tip: "A CRM makes sure no lead is forgotten.",
    w: 10,
  },
];

function ScoreGame({ onDone }: { onDone: (score: number) => void }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = answers.length === QUESTIONS.length;
  const score = answers.reduce((s, a, k) => s + a * QUESTIONS[k].w, 0);

  useEffect(() => {
    if (done) onDone(Math.round(score));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const answer = (v: number) => {
    setAnswers((a) => [...a, v]);
    setI((n) => n + 1);
  };

  if (done) {
    const tier =
      score >= 80
        ? ["Local hero", "You’re easy to find. Let’s turn that into more bookings."]
        : score >= 50
          ? ["Getting found", "You’re halfway there. A few fixes could bring a lot more calls."]
          : ["Hidden gem", "Great business, but customers can’t find you yet. That’s fixable."];
    const tips = QUESTIONS.filter((_, k) => answers[k] < 1).map((x) => x.tip);
    const C = 2 * Math.PI * 52;
    return (
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
        <div className="relative mx-auto grid h-48 w-48 place-items-center">
          <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(17,17,17,.08)"
              strokeWidth="12"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#ff4fa3"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C - (C * score) / 100}
              style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)" }}
            />
          </svg>
          <div className="text-center">
            <div className="font-display text-5xl font-bold tabular-nums">{Math.round(score)}</div>
            <div className="text-xs font-semibold text-ink/50">out of 100</div>
          </div>
        </div>
        <div>
          <span className="rounded-full bg-[#ff4fa3] px-3 py-1 text-xs font-bold text-white">
            {tier[0]}
          </span>
          <p className="mt-3 font-display text-2xl font-bold leading-tight">{tier[1]}</p>
          {tips.length > 0 && (
            <ul className="mt-4 space-y-2">
              {tips.map((t) => (
                <li key={t} className="flex gap-2 text-[15px] text-ink/75">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9500]" /> {t}
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => {
              setAnswers([]);
              setI(0);
            }}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink/60 hover:text-ink"
          >
            <RotateCcw className="h-4 w-4" /> Play again
          </button>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[i];
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-bold text-ink/50">
        <span>
          Question {i + 1} of {QUESTIONS.length}
        </span>
        <span>{Math.round((i / QUESTIONS.length) * 100)}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full rounded-full bg-[#ff4fa3] transition-all duration-500"
          style={{ width: `${(i / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <p
        key={i}
        className="step-swap mt-8 font-display text-2xl font-bold leading-tight md:text-3xl"
      >
        {q.q}
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["Yes 👍", 1],
          ["Sort of 🤏", 0.5],
          ["Not yet 🙈", 0],
        ].map(([label, v]) => (
          <button
            key={label as string}
            type="button"
            onClick={() => answer(v as number)}
            className="btn-lift h-14 rounded-2xl border-2 border-ink bg-white text-base font-bold shadow-pixel hover:bg-[#fff1f7]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Game 2: Reply Race ---------------- */
type RaceState = "idle" | "waiting" | "go" | "early" | "result";

function RaceGame({ onDone }: { onDone: (ms: number) => void }) {
  const [state, setState] = useState<RaceState>("idle");
  const [ms, setMs] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const t0 = useRef(0);
  const lastTap = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const start = () => {
    // ignore the click that follows the Reply tap on the same spot
    if (performance.now() - lastTap.current < 600) return;
    setState("waiting");
    timer.current = setTimeout(
      () => {
        t0.current = performance.now();
        setState("go");
        if ("vibrate" in navigator) navigator.vibrate?.(60);
      },
      1400 + Math.random() * 2600,
    );
  };

  const tap = () => {
    lastTap.current = performance.now();
    if (state === "waiting") {
      if (timer.current) clearTimeout(timer.current);
      setState("early");
    } else if (state === "go") {
      const t = Math.round(performance.now() - t0.current);
      setMs(t);
      setBest((b) => (b === null ? t : Math.min(b, t)));
      setState("result");
      onDone(t);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
      <div>
        <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
          A customer is about to message you.{" "}
          <span className="text-ink/35">How fast can you reply?</span>
        </p>
        <p className="mt-3 text-[15px] text-ink/65">
          Press start, wait for the message, then tap <b>Reply</b> as fast as you can.
        </p>
        {state === "result" && (
          <div className="step-swap mt-6 rounded-2xl border-2 border-ink bg-[#effbe9] p-5">
            <div className="font-display text-4xl font-bold tabular-nums">
              {(ms / 1000).toFixed(2)}s
            </div>
            <p className="mt-1 text-sm text-ink/70">
              Nice reflex! But in real life you’re serving customers, driving or asleep, and a reply
              can take minutes or hours. A Pixorra WhatsApp bot replies <b>instantly, 24/7</b>.
            </p>
            {best !== null && (
              <p className="mt-2 text-xs font-bold text-ink/50">
                Your best: {(best / 1000).toFixed(2)}s
              </p>
            )}
          </div>
        )}
        {state === "early" && (
          <p className="step-swap mt-6 rounded-2xl border-2 border-ink bg-[#fff4e8] p-4 font-semibold">
            Too early! 😄 Wait for the message, then reply.
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="mx-auto w-full max-w-[280px] rounded-[2.2rem] border-2 border-ink bg-ink p-2 shadow-pixel">
        <div className="flex h-[380px] flex-col overflow-hidden rounded-[1.8rem] bg-[#ece5dd]">
          <div className="flex items-center gap-2 bg-[#075e54] px-4 py-3 text-white">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-sm">
              🙂
            </span>
            <div className="leading-tight">
              <div className="text-sm font-bold">New customer</div>
              <div className="text-[11px] text-white/70">
                {state === "go" ? "typing…" : "online"}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 p-3 text-[13px]">
            {(state === "go" || state === "result") && (
              <div className="step-swap w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                Hi! Are you open today? 🙂
              </div>
            )}
            {state === "result" && (
              <div className="step-swap ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm">
                Yes! Come by anytime till 8 PM 🙌
              </div>
            )}
          </div>
          <div className="p-3">
            {state === "idle" || state === "early" || state === "result" ? (
              <button
                type="button"
                onClick={start}
                className="h-12 w-full rounded-full border-2 border-ink bg-yellow-cta font-bold"
              >
                {state === "idle" ? "Start" : "Try again"}
              </button>
            ) : (
              <button
                type="button"
                onPointerDown={tap}
                className={`h-12 w-full rounded-full border-2 border-ink font-bold transition-colors ${
                  state === "go" ? "bg-[#25d366] text-white" : "bg-white text-ink/50"
                }`}
              >
                {state === "go" ? "Reply!" : "Wait for it…"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Game 3: Missed Money ---------------- */
function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  fmt,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  fmt: (n: number) => string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ink/70">{label}</span>
        <span className="font-display text-lg font-bold tabular-nums">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="pg-range mt-2 w-full"
      />
    </label>
  );
}

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

function MissedGame({ onDone }: { onDone: (v: number) => void }) {
  const [enq, setEnq] = useState(60);
  const [miss, setMiss] = useState(30);
  const [value, setValue] = useState(2000);
  const [close, setClose] = useState(25);
  const touched = useRef(false);
  const missed = Math.round((enq * miss) / 100);
  const money = missed * (close / 100) * value;

  useEffect(() => {
    if (!touched.current) return;
    const id = setTimeout(() => onDone(Math.round(money)), 600);
    return () => clearTimeout(id);
  }, [money, onDone]);

  const wrap = (fn: (n: number) => void) => (n: number) => {
    touched.current = true;
    fn(n);
  };

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_300px] md:items-center">
      <div className="space-y-5">
        <Slider
          label="Enquiries you get each month"
          value={enq}
          set={wrap(setEnq)}
          min={5}
          max={500}
          step={5}
          fmt={(n) => `${n}`}
        />
        <Slider
          label="How many you miss or reply to late"
          value={miss}
          set={wrap(setMiss)}
          min={0}
          max={80}
          step={5}
          fmt={(n) => `${n}%`}
        />
        <Slider
          label="Average value of one customer"
          value={value}
          set={wrap(setValue)}
          min={200}
          max={50000}
          step={100}
          fmt={inr}
        />
        <Slider
          label="How many enquiries become customers"
          value={close}
          set={wrap(setClose)}
          min={5}
          max={80}
          step={5}
          fmt={(n) => `${n}%`}
        />
      </div>
      <div className="rounded-[1.5rem] border-2 border-ink bg-[#eaf6ff] p-6 text-center shadow-pixel">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink/50">
          You could be missing
        </div>
        <div className="mt-2 font-display text-5xl font-bold tabular-nums">{inr(money)}</div>
        <div className="text-sm font-semibold text-ink/55">every month</div>
        <div className="mt-4 rounded-xl bg-white/80 p-3 text-xs leading-relaxed text-ink/60">
          {missed} missed enquiries × {close}% become customers × {inr(value)}
        </div>
        <p className="mt-4 text-sm font-semibold text-ink/70">
          Your numbers, your maths. We just help you stop the leak.
        </p>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        dur: 1.6 + Math.random() * 1.4,
        color: ["#ff4fa3", "#ffcc00", "#34c759", "#007aff", "#af52de", "#ff9500"][i % 6],
        rot: Math.random() * 360,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((b, i) => (
        <span
          key={i}
          className="confetti-bit absolute top-0 h-3 w-2 rounded-sm"
          style={{
            left: `${b.left}%`,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            transform: `rotate(${b.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function PlaygroundPage() {
  useReveal();
  const [game, setGame] = useState<GameId>("score");
  const [results, setResults] = useState<Partial<Record<GameId, number>>>({});
  const doneCount = Object.keys(results).length;
  const xp = doneCount * XP_PER_GAME;
  const allDone = doneCount === GAMES.length;

  const finish = (id: GameId) => (v: number) => setResults((r) => ({ ...r, [id]: v }));
  // stable callbacks so child effects don't loop
  const onScore = useMemo(() => finish("score"), []);
  const onRace = useMemo(() => finish("race"), []);
  const onMissed = useMemo(() => finish("missed"), []);

  const summary = [
    results.score !== undefined ? `Growth score ${results.score}/100` : null,
    results.race !== undefined ? `reply time ${(results.race / 1000).toFixed(2)}s` : null,
    results.missed !== undefined ? `possibly missing ${inr(results.missed)}/month` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <SiteShell>
      <main className="relative text-ink">
        <section className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl px-5 pt-10 sm:pt-14 md:px-10 md:pt-20">
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
              Playground
            </p>
            <h1 className="reveal mt-5 font-display text-[2.35rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-6xl md:text-[4.2rem]">
              Play 3 quick games.{" "}
              <span className="text-ink/35">See how much your business can grow.</span>
            </h1>

            {/* XP bar */}
            <div className="reveal mt-8 flex items-center gap-4 rounded-[1.5rem] border-2 border-ink bg-white p-4 shadow-pixel">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ffcc00] text-xl shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)]">
                {allDone ? "🏆" : "⭐"}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span>{allDone ? "Playground champion!" : `Level ${doneCount + 1}`}</span>
                  <span className="tabular-nums text-ink/55">
                    {xp} / {GAMES.length * XP_PER_GAME} XP
                  </span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#ff4fa3,#ffcc00,#34c759)] transition-all duration-700"
                    style={{ width: `${(xp / (GAMES.length * XP_PER_GAME)) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Game tiles */}
            <div role="tablist" className="reveal mt-6 grid grid-cols-3 gap-3">
              {GAMES.map(({ id, title, sub, icon: Icon, tile }) => {
                const on = game === id;
                const won = results[id] !== undefined;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setGame(id)}
                    className={`relative rounded-[1.5rem] border-2 p-3 text-left transition-all md:p-4 ${
                      on
                        ? "border-ink bg-white shadow-pixel"
                        : "border-ink/10 bg-white/60 hover:border-ink/30"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl text-white ${tile}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-3 font-display text-sm font-bold md:text-lg">{title}</div>
                    <div className="hidden text-xs text-ink/50 sm:block">{sub}</div>
                    {won && (
                      <span className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-[#34c759] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active game */}
            <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white p-5 shadow-[8px_8px_0_0_#111] md:p-8">
              {allDone && <Confetti />}
              <div key={game} className="step-swap relative">
                {game === "score" && <ScoreGame onDone={onScore} />}
                {game === "race" && <RaceGame onDone={onRace} />}
                {game === "missed" && <MissedGame onDone={onMissed} />}
              </div>
              {results[game] !== undefined && !allDone && (
                <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ink/10 pt-5">
                  <span className="text-sm font-bold text-[#34c759]">
                    +{XP_PER_GAME} XP earned 🎉
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const next = GAMES.find((g) => results[g.id] === undefined && g.id !== game);
                      if (next) setGame(next.id);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-white"
                  >
                    Next game <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Reward / CTA */}
            <div
              className={`mt-6 rounded-[1.75rem] border-2 border-ink p-6 shadow-pixel transition-colors md:p-8 ${
                allDone ? "bg-[#fffbe0]" : "bg-cream"
              }`}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <Trophy className="h-10 w-10 shrink-0 text-[#ff9500]" />
                <div className="flex-1">
                  <p className="font-display text-2xl font-bold leading-tight">
                    {allDone
                      ? "You finished the Playground!"
                      : "Finish all 3 to unlock your growth plan."}
                  </p>
                  <p className="mt-1 text-ink/65">
                    {allDone
                      ? "Book a free 15-minute call and we’ll show you exactly how to fix each one, with a free demo website in 48 hours."
                      : "Or skip ahead and book a free demo right now."}
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row md:flex-col">
                  <a
                    href={calBookingUrl}
                    {...calDataAttributes}
                    className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-6 font-bold shadow-pixel"
                  >
                    Book free demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/918927840261?text=${encodeURIComponent(
                      `Hi Pixorra! I played the Playground${summary ? `: ${summary}` : ""}. Can you help me grow?`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 font-bold shadow-pixel"
                  >
                    <MessageCircle className="h-4 w-4 text-[#34c759]" /> Send my results
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-ink/50">
              Want the detailed version? Try the{" "}
              <a href="/scorecard" className="font-semibold underline underline-offset-2">
                full growth scorecard
              </a>
              .
            </p>
          </div>
        </section>
        <FooterKree8 />
        <FloatingWhatsApp />
      </main>
    </SiteShell>
  );
}
