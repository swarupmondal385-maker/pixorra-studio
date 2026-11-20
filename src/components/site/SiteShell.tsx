import { useEffect, useState, type ReactNode } from "react";
import {
  Home,
  LayoutGrid,
  Sparkles,
  IndianRupee,
  Star,
  HelpCircle,
  Gauge,
  Heart,
  Rocket,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

const NAV = [
  { id: "top", label: "Home", icon: Home, dot: "bg-pixel-pink" },
  { id: "work", label: "Our Work", icon: LayoutGrid, dot: "bg-pixel-yellow" },
  { id: "services", label: "Services", icon: Sparkles, dot: "bg-pixel-cyan" },
  { id: "pricing", label: "Pricing", icon: IndianRupee, dot: "bg-pixel-green" },
  { id: "reviews", label: "Reviews", icon: Star, dot: "bg-pixel-orange" },
  { id: "faq", label: "FAQ", icon: HelpCircle, dot: "bg-pixel-purple" },
];
const PAGES = [
  { href: "/scorecard", label: "Free Scorecard", icon: Gauge, badge: "2 min" },
  { href: "/donate", label: "Pixorra Cares", icon: Heart },
];
const WA = "https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20to%20grow%20my%20business.";

type LenisLike = { scrollTo: (t: HTMLElement | number, o?: { offset?: number }) => void };

/** kree8-style layout: fixed left sidebar on desktop, top bar + drawer on mobile,
 *  content inside a big rounded bubblegum panel. Also adds buttery smooth scrolling. */
export function SiteShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [lenis, setLenis] = useState<LenisLike | null>(null);

  // Smooth scroll (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let inst: { raf: (t: number) => void; destroy: () => void } & LenisLike;
    let dead = false;
    void import("lenis").then(({ default: Lenis }) => {
      if (dead) return;
      inst = new Lenis({ lerp: 0.09, smoothWheel: true }) as typeof inst;
      setLenis(inst);
      const loop = (t: number) => {
        inst.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      inst?.destroy();
    };
  }, []);

  // Scroll-spy: the last nav section whose top has passed 40% of the screen
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.4;
      let current = NAV[0].id;
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= line) current = n.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    if (lenis) lenis.scrollTo(el, { offset: -12 });
    else el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  const menu = (
    <>
      <nav className="flex flex-col gap-1">
        {NAV.map(({ id, label, icon: Icon, dot }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              className={`group flex h-11 items-center gap-3 rounded-2xl px-3.5 text-sm font-semibold transition-all ${
                on
                  ? "border-2 border-ink bg-card text-ink shadow-pixel"
                  : "border-2 border-transparent text-ink/60 hover:bg-card/70 hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              <span
                className={`ml-auto h-2.5 w-2.5 rounded-full border border-ink ${dot} transition-transform ${
                  on ? "scale-100" : "scale-0 group-hover:scale-100"
                }`}
              />
            </a>
          );
        })}
        <div className="my-2 h-px bg-ink/10" />
        {PAGES.map(({ href, label, icon: Icon, badge }) => (
          <a
            key={href}
            href={href}
            className="flex h-11 items-center gap-3 rounded-2xl border-2 border-transparent px-3.5 text-sm font-semibold text-ink/60 hover:bg-card/70 hover:text-ink"
          >
            <Icon className="h-4 w-4" />
            {label}
            {badge && (
              <span className="ml-auto rounded-full bg-pixel-yellow/60 px-2 py-0.5 text-[10px] font-bold text-ink">
                {badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <p className="mt-7 px-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
        Start project
      </p>
      <div className="mt-2 flex flex-col gap-1">
        <a
          href={calBookingUrl}
          {...calDataAttributes}
          className="flex h-11 items-center gap-3 rounded-2xl px-3.5 text-sm font-semibold text-ink hover:bg-card/70"
        >
          <Rocket className="h-4 w-4 text-pixel-pink" /> Book free demo
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center gap-3 rounded-2xl px-3.5 text-sm font-semibold text-ink hover:bg-card/70"
        >
          <MessageCircle className="h-4 w-4 text-pixel-green" /> WhatsApp us
        </a>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#ffe4f1_0%,#fff7d6_35%,#dff9ff_70%,#efe4ff_100%)]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col px-4 py-5 lg:flex">
        <a href="#top" onClick={go("top")} className="flex items-center gap-2.5 px-2">
          <img src={logoMark} alt="Pixorra" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold tracking-tight text-ink">Pixorra</span>
          <span className="ml-auto rounded-full border border-ink/15 bg-card/70 px-2 py-0.5 text-[10px] font-bold text-ink/60">
            Studio
          </span>
        </a>
        <div className="mt-6 flex-1 overflow-y-auto">{menu}</div>
        <div className="rounded-2xl border-2 border-ink bg-card p-3.5 shadow-pixel">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/45">
            Made in Kolkata
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-ink">
            Free demo in 48 hours. Live in 7–10 days.
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-[90] px-3 pt-3 lg:hidden">
        <div className="flex h-14 items-center justify-between rounded-full border-2 border-ink bg-card/90 px-3 shadow-pixel backdrop-blur-md">
          <a href="#top" onClick={go("top")} className="flex items-center gap-2">
            <img src={logoMark} alt="Pixorra" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold text-ink">Pixorra</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-pixel-yellow"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>
      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[85] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-3 left-3 top-20 w-[min(300px,85vw)] overflow-y-auto rounded-3xl border-2 border-ink bg-cream p-4 shadow-pixel transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-[110%]"
          }`}
        >
          {menu}
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:pl-[248px]">
        <div className="px-2 pb-2 pt-[76px] sm:px-3 lg:py-3 lg:pr-3 lg:pl-0">
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-ink bg-background shadow-[0_20px_60px_-25px_rgba(17,17,17,0.35)] lg:rounded-[2rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
