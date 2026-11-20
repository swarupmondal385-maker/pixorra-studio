import { useEffect, useRef, useState } from "react";
import {
  Globe,
  MessageCircle,
  Filter,
  MapPin,
  Star,
  Bot,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Svc = { icon: LucideIcon; title: string; line: string; points: string[]; tint: string };

const SERVICES: Svc[] = [
  {
    icon: Globe,
    title: "Smart Business Websites",
    line: "Built to turn visitors into booked leads, not just look good.",
    points: ["Custom design", "Loads fast on every phone", "WhatsApp + call buttons"],
    tint: "bg-pixel-pink/25",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot & WhatsApp",
    line: "Your business replies, follows up and books clients, even at 2 AM.",
    points: ["24/7 instant replies", "Auto follow-ups", "Appointment booking"],
    tint: "bg-[#d2f7c6]",
  },
  {
    icon: Filter,
    title: "Funnels & CRM",
    line: "A clear path from stranger to paying customer. Every lead saved.",
    points: ["Landing page + offer", "Lead pipeline", "Nothing slips through"],
    tint: "bg-pixel-yellow/40",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google",
    line: "Show up when people near you search for what you sell.",
    points: ["Google Business Profile", "Maps visibility", "Search-ready website"],
    tint: "bg-pixel-cyan/25",
  },
  {
    icon: Star,
    title: "Social Media & Reputation",
    line: "Reels, posts and reviews that make you impossible to ignore.",
    points: ["UGC videos & reels", "Review collection", "Consistent posting"],
    tint: "bg-pixel-orange/25",
  },
  {
    icon: Bot,
    title: "Full AI Growth System",
    line: "Capture, nurture, close and retain, all running on autopilot.",
    points: ["Everything connected", "Monthly report", "One team, one number"],
    tint: "bg-pixel-purple/20",
  },
];

function Card({ s, i }: { s: Svc; i: number }) {
  const Icon = s.icon;
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border-2 border-ink bg-white p-6 shadow-pixel md:p-8">
      <div className="flex items-start justify-between">
        <span
          className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink ${s.tint}`}
        >
          <Icon className="h-6 w-6 text-ink" strokeWidth={2.2} />
        </span>
        <span className="font-display text-5xl font-bold leading-none text-ink/10">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">
        {s.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/65 md:text-base">{s.line}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-7">
        {s.points.map((p) => (
          <li
            key={p}
            className="rounded-full border border-ink/15 bg-cream px-3 py-1 text-xs font-semibold text-ink/75"
          >
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Desktop: vertical scroll drives a horizontal track (pinned). Phone: native swipe. */
export function ServicesScroll() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sec = section.current;
    const tr = track.current;
    if (!sec || !tr) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!desktop.matches) {
        tr.style.transform = "";
        return;
      }
      const rect = sec.getBoundingClientRect();
      const total = sec.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
      const maxX = tr.scrollWidth - tr.parentElement!.clientWidth;
      tr.style.transform = `translate3d(${-p * maxX}px,0,0)`;
      setProgress(p);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Phone: which card is centred in the swipe rail
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const onScroll = () => {
      const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
      setActive(Math.round(el.scrollLeft / (w + 16)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const header = (
    <div className="mx-auto max-w-5xl px-5 md:px-10">
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
          What we do
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <h2 className="mt-6 max-w-2xl font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
        Everything you need to get found. <span className="text-ink/35">Nothing you don’t.</span>
      </h2>
    </div>
  );

  return (
    <section id="services" ref={section} className="relative bg-background lg:h-[210vh]">
      {/* Desktop pinned stage */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        {header}
        <div className="mt-12 overflow-hidden">
          <div
            ref={track}
            className="flex gap-6 pl-[max(2.5rem,calc((100%-64rem)/2+2.5rem))] pr-10 will-change-transform"
          >
            {SERVICES.map((s, i) => (
              <div key={s.title} className="w-[24rem] shrink-0">
                <Card s={s} i={i} />
              </div>
            ))}
            <div className="flex w-[20rem] shrink-0 flex-col justify-center pl-4">
              <p className="font-display text-3xl font-bold leading-tight text-ink">
                All six, built and connected by one team.
              </p>
              <a
                href="#pricing"
                className="btn-lift mt-6 inline-flex h-12 w-fit items-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-6 font-bold shadow-pixel"
              >
                See the bundle <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 h-1.5 w-56 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-ink"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Phone / tablet swipe */}
      <div className="py-20 md:py-28 lg:hidden">
        {header}
        <div
          ref={rail}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((s, i) => (
            <div key={s.title} className="w-[82%] shrink-0 snap-center sm:w-[60%] md:w-[45%]">
              <Card s={s} i={i} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-1.5">
          {SERVICES.map((s, i) => (
            <span
              key={s.title}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-ink" : "w-2 bg-ink/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
