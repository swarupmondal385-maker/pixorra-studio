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
  Hand,
  Drama,
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
          "Play 5 quick games: your growth score, a reply race, missed money, a customer-catching arcade and a silly business personality quiz.",
      },
      { property: "og:title", content: "Pixorra Playground" },
    ],
  }),
});

type GameId = "score" | "race" | "missed" | "catch" | "persona";
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
  {
    id: "catch",
    title: "Customer Catch",
    sub: "20-second arcade",
    icon: Hand,
    tile: "bg-[#ff9500]",
  },
  {
    id: "persona",
    title: "Biz Personality",
    sub: "Silly but true",
    icon: Drama,
    tile: "bg-[#af52de]",
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

/* ---------------- Game 4: Customer Catch (arcade) ---------------- */
const CUSTOMERS = ["🧑‍🍳", "👩‍💼", "🧔", "👵", "🧑‍🎓", "👨‍👩‍👧", "💃", "🧑‍🔧"];
const TROLLS = ["🤖", "😈"];
const ROUND = 20;
type Hole = { id: number; emoji: string; troll: boolean } | null;

function CatchGame({ onDone }: { onDone: (caught: number) => void }) {
  const [state, setState] = useState<"idle" | "play" | "done">("idle");
  const [holes, setHoles] = useState<Hole[]>(Array(9).fill(null));
  const [left, setLeft] = useState(ROUND);
  const [caught, setCaught] = useState(0);
  const [missed, setMissed] = useState(0);
  const [pop, setPop] = useState<{ i: number; t: string } | null>(null);
  const timers = useRef<number[]>([]);
  const uid = useRef(0);
  const holesRef = useRef<Hole[]>(holes);
  holesRef.current = holes;

  const clearAll = () => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  };
  useEffect(() => clearAll, []);

  const start = () => {
    clearAll();
    setHoles(Array(9).fill(null));
    setCaught(0);
    setMissed(0);
    setLeft(ROUND);
    setState("play");
  };

  // Countdown
  useEffect(() => {
    if (state !== "play") return;
    if (left <= 0) {
      clearAll();
      setHoles(Array(9).fill(null));
      setState("done");
      return;
    }
    const t = window.setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [state, left]);

  // Spawner: gets faster as time runs out
  useEffect(() => {
    if (state !== "play") return;
    const speed = 380 + (left / ROUND) * 420;
    const t = window.setTimeout(() => {
      const free = holesRef.current.map((h, i) => (h ? -1 : i)).filter((i) => i >= 0);
      if (!free.length) return;
      const i = free[Math.floor(Math.random() * free.length)];
      const troll = Math.random() < 0.22;
      const id = ++uid.current;
      const emoji = troll
        ? TROLLS[id % TROLLS.length]
        : CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)];
      setHoles((hs) => hs.map((h, k) => (k === i ? { id, emoji, troll } : h)));
      const life = window.setTimeout(
        () => {
          const h = holesRef.current[i];
          if (h?.id !== id) return;
          if (!h.troll) setMissed((m) => m + 1);
          setHoles((hs) => hs.map((x, k) => (k === i && x?.id === id ? null : x)));
        },
        700 + (left / ROUND) * 600,
      );
      timers.current.push(life);
    }, speed);
    return () => clearTimeout(t);
  }, [state, left, holes]);

  useEffect(() => {
    if (state === "done") onDone(caught);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const tap = (i: number) => {
    const h = holes[i];
    if (!h || state !== "play") return;
    if (h.troll) {
      setCaught((c) => Math.max(0, c - 2));
      setPop({ i, t: "-2" });
    } else {
      setCaught((c) => c + 1);
      setPop({ i, t: "+1" });
    }
    setHoles((hs) => hs.map((x, k) => (k === i ? null : x)));
    window.setTimeout(() => setPop(null), 450);
  };

  if (state === "idle")
    return (
      <div className="text-center">
        <div className="text-5xl">🧺</div>
        <p className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
          Customers are popping up. Catch them before they walk away!
        </p>
        <p className="mx-auto mt-2 max-w-md text-ink/60">
          Tap every customer. Don’t tap the spam bots 🤖 or rivals 😈, they cost you 2 points. You
          have {ROUND} seconds.
        </p>
        <button
          type="button"
          onClick={start}
          className="btn-lift mt-6 inline-flex h-14 items-center gap-2 rounded-full border-2 border-ink bg-[#ff9500] px-8 text-lg font-bold text-white shadow-pixel"
        >
          Start catching <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    );

  if (state === "done") {
    const total = caught + missed;
    const rate = total ? Math.round((caught / total) * 100) : 0;
    return (
      <div className="text-center">
        <div className="persona-bounce text-5xl">
          {rate >= 70 ? "🏆" : rate >= 40 ? "😅" : "🫠"}
        </div>
        <p className="mt-3 font-display text-3xl font-bold tabular-nums md:text-4xl">
          {caught} caught <span className="text-ink/30">·</span>{" "}
          <span className="text-[#ff3b30]">{missed} missed</span>
        </p>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-ink/70">
          Your thumbs caught {rate}% of customers. In real life they message at midnight, during
          lunch and while you sleep. A website + WhatsApp bot catches{" "}
          <span className="font-bold text-ink">100% of them, 24/7.</span>
        </p>
        <button
          type="button"
          onClick={start}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink/60 hover:text-ink"
        >
          <RotateCcw className="h-4 w-4" /> Play again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="rounded-full bg-[#34c759]/15 px-3 py-1 text-[#1f7a35]">
          Caught {caught}
        </span>
        <span className="rounded-full bg-ink px-3 py-1 tabular-nums text-white">⏱ {left}s</span>
        <span className="rounded-full bg-[#ff3b30]/10 px-3 py-1 text-[#c2261c]">
          Missed {missed}
        </span>
      </div>
      <div className="mx-auto mt-5 grid max-w-sm select-none grid-cols-3 gap-3">
        {holes.map((h, i) => (
          <button
            key={i}
            type="button"
            onPointerDown={() => tap(i)}
            aria-label={h ? (h.troll ? "Spam, do not tap" : "Customer, tap!") : "Empty spot"}
            className="relative aspect-square overflow-hidden rounded-[1.4rem] border-2 border-ink bg-[radial-gradient(ellipse_at_50%_85%,#3a2a1e_0_34%,#fdf3e1_35%)] [touch-action:manipulation]"
          >
            {h && (
              <span
                key={h.id}
                className="catch-pop absolute inset-0 grid place-items-center text-[2.6rem] md:text-5xl"
              >
                {h.emoji}
              </span>
            )}
            {pop?.i === i && (
              <span
                className={`catch-score absolute inset-x-0 top-1 text-center font-display text-lg font-bold ${
                  pop.t === "+1" ? "text-[#1f7a35]" : "text-[#c2261c]"
                }`}
              >
                {pop.t}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Game 5: Business Personality (silly quiz) ---------------- */
type Persona = "legend" | "hype" | "king" | "rocket";
const PERSONA_Q: { q: string; a: [string, string, Persona][] }[] = [
  {
    q: "It’s 11 PM. A customer texts “price?” You…",
    a: [
      ["😴", "Reply tomorrow. I’m human.", "legend"],
      ["🎤", "Send a voice note. With a song.", "hype"],
      ["📞", "Call them. Old school.", "king"],
      ["🤖", "My bot already replied.", "rocket"],
    ],
  },
  {
    q: "If your business were a movie, it would be…",
    a: [
      ["🕵️", "A hidden gem nobody has watched", "legend"],
      ["💥", "A blockbuster with a viral trailer", "hype"],
      ["🏡", "A family drama. Everyone knows everyone.", "king"],
      ["🚀", "A sci-fi saga. Part 2 is coming.", "rocket"],
    ],
  },
  {
    q: "Your Instagram right now is…",
    a: [
      ["👻", "What Instagram?", "legend"],
      ["🔥", "Reels every day, baby", "hype"],
      ["🧓", "My nephew handles it", "king"],
      ["📅", "Scheduled for the next 30 days", "rocket"],
    ],
  },
  {
    q: "A rival opens right next door. You…",
    a: [
      ["🙏", "Pray my customers stay loyal", "legend"],
      ["📸", "Post a classy-but-savage reel", "hype"],
      ["☕", "Give every regular a free chai", "king"],
      ["⚡", "Launch an offer before they open", "rocket"],
    ],
  },
  {
    q: "Pick a superpower for your business.",
    a: [
      ["🫥", "Invisibility (already have it 😅)", "legend"],
      ["📣", "Mind control, aka going viral", "hype"],
      ["🧲", "A magnet for regulars", "king"],
      ["🌀", "Being in 10 places at once", "rocket"],
    ],
  },
  {
    q: "Your dream Google review says…",
    a: [
      ["💎", "“How did I not know this place existed?!”", "legend"],
      ["🤩", "“Saw the reel, had to come!”", "hype"],
      ["❤️", "“Been coming here for 10 years.”", "king"],
      ["⏱️", "“Booked in 30 seconds. Wow.”", "rocket"],
    ],
  },
];
const PERSONAS: Record<
  Persona,
  { emoji: string; name: string; line: string; fix: string; bg: string }
> = {
  legend: {
    emoji: "🕵️",
    name: "The Hidden Legend",
    line: "Amazing business. Best-kept secret in town. People would love you, if only they could find you.",
    fix: "Your fix: a website + Google Maps that put you on the map. (Growth package)",
    bg: "bg-[#efe4ff]",
  },
  hype: {
    emoji: "🔥",
    name: "The Hype Machine",
    line: "You’ve got the energy and the views. Now let’s turn those views into bookings.",
    fix: "Your fix: a funnel + WhatsApp bot that catches every lead. (Growth + Content)",
    bg: "bg-[#ffe9f4]",
  },
  king: {
    emoji: "👑",
    name: "The Neighbourhood King",
    line: "Everyone nearby knows your name. Time to own the whole city, not just the street.",
    fix: "Your fix: local SEO + Google reviews on autopilot. (Growth package)",
    bg: "bg-[#fff7d6]",
  },
  rocket: {
    emoji: "🚀",
    name: "The Rocket",
    line: "Built for scale. You don’t need more hustle, you need systems that never sleep.",
    fix: "Your fix: automations, booking and a 24/7 AI assistant. (Growth Max)",
    bg: "bg-[#dff9ff]",
  },
};
const PERSONA_KEYS: Persona[] = ["legend", "hype", "king", "rocket"];

function PersonaGame({ onDone }: { onDone: (persona: number) => void }) {
  const [picks, setPicks] = useState<Persona[]>([]);
  const done = picks.length === PERSONA_Q.length;
  const winner = useMemo(() => {
    const c: Record<Persona, number> = { legend: 0, hype: 0, king: 0, rocket: 0 };
    picks.forEach((p) => c[p]++);
    return PERSONA_KEYS.reduce<Persona>((a, b) => (c[b] > c[a] ? b : a), "legend");
  }, [picks]);

  useEffect(() => {
    if (done) onDone(PERSONA_KEYS.indexOf(winner));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (done) {
    const p = PERSONAS[winner];
    return (
      <div className={`rounded-[1.5rem] border-2 border-ink p-6 text-center ${p.bg}`}>
        <div className="persona-bounce text-6xl">{p.emoji}</div>
        <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/50">
          Your business is
        </div>
        <p className="font-display text-3xl font-bold leading-tight md:text-4xl">{p.name}</p>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-ink/75">{p.line}</p>
        <p className="mx-auto mt-3 max-w-md text-[15px] font-bold text-ink">{p.fix}</p>
        <button
          type="button"
          onClick={() => setPicks([])}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink/60 hover:text-ink"
        >
          <RotateCcw className="h-4 w-4" /> Take it again
        </button>
      </div>
    );
  }

  const i = picks.length;
  const q = PERSONA_Q[i];
  return (
    <div>
      <div className="flex gap-1.5">
        {PERSONA_Q.map((_, k) => (
          <span
            key={k}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              k < i ? "bg-[#af52de]" : k === i ? "bg-[#af52de]/40" : "bg-ink/10"
            }`}
          />
        ))}
      </div>
      <p
        key={i}
        className="step-swap mt-6 font-display text-2xl font-bold leading-tight md:text-3xl"
      >
        {q.q}
      </p>
      <div key={`a${i}`} className="step-swap mt-6 grid gap-2.5 sm:grid-cols-2">
        {q.a.map(([emoji, text, persona]) => (
          <button
            key={text}
            type="button"
            onClick={() => setPicks((p) => [...p, persona])}
            className="btn-lift flex items-center gap-3 rounded-2xl border-2 border-ink bg-white p-3 text-left text-[15px] font-semibold shadow-pixel hover:bg-[#f6efff]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f3eee4] text-2xl">
              {emoji}
            </span>
            {text}
          </button>
        ))}
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
  const onCatch = useMemo(() => finish("catch"), []);
  const onPersona = useMemo(() => finish("persona"), []);

  const summary = [
    results.score !== undefined ? `Growth score ${results.score}/100` : null,
    results.race !== undefined ? `reply time ${(results.race / 1000).toFixed(2)}s` : null,
    results.missed !== undefined ? `possibly missing ${inr(results.missed)}/month` : null,
    results.catch !== undefined ? `caught ${results.catch} customers` : null,
    results.persona !== undefined
      ? `my business is ${PERSONAS[PERSONA_KEYS[results.persona]].name}`
      : null,
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
              Play 5 quick games.{" "}
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
            <div role="tablist" className="reveal mt-6 grid grid-cols-5 gap-2 md:gap-3">
              {GAMES.map(({ id, title, sub, icon: Icon, tile }) => {
                const on = game === id;
                const won = results[id] !== undefined;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setGame(id)}
                    className={`relative flex flex-col items-center rounded-[1.2rem] border-2 p-2 text-center transition-all md:items-start md:rounded-[1.5rem] md:p-4 md:text-left ${
                      on
                        ? "border-ink bg-white shadow-pixel"
                        : "border-ink/10 bg-white/60 hover:border-ink/30"
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl text-white md:h-10 md:w-10 ${tile}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-1.5 font-display text-[10.5px] font-bold leading-tight md:mt-3 md:text-lg">
                      {title}
                    </div>
                    <div className="hidden text-xs text-ink/50 md:block">{sub}</div>
                    {won && (
                      <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#34c759] text-white md:right-2.5 md:top-2.5 md:h-6 md:w-6">
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
                {game === "catch" && <CatchGame onDone={onCatch} />}
                {game === "persona" && <PersonaGame onDone={onPersona} />}
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
                      : "Finish all 5 to unlock your growth plan."}
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
