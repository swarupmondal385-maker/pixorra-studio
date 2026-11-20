import { useEffect, useState, type ReactNode } from "react";
import {
  Home,
  LayoutGrid,
  Sparkles,
  IndianRupee,
  Star,
  HelpCircle,
  Gamepad2,
  Heart,
  Rocket,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

const NAV = [
  { id: "top", label: "Home", icon: Home, tile: "bg-[#ff4fa3]" },
  { id: "work", label: "Our Work", icon: LayoutGrid, tile: "bg-[#ff9500]" },
  { id: "services", label: "Services", icon: Sparkles, tile: "bg-[#34c759]" },
  { id: "pricing", label: "Pricing", icon: IndianRupee, tile: "bg-[#007aff]" },
  { id: "reviews", label: "Reviews", icon: Star, tile: "bg-[#ffcc00]" },
  { id: "faq", label: "FAQ", icon: HelpCircle, tile: "bg-[#af52de]" },
];
const PAGES = [
  { href: "/playground", label: "Playground", icon: Gamepad2, badge: "Play", tile: "bg-[#ff2d55]" },
  { href: "/donate", label: "Pixorra Cares", icon: Heart, tile: "bg-[#30b0c7]" },
];
const WA = "https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20to%20grow%20my%20business.";

type LenisLike = { scrollTo: (t: HTMLElement | number, o?: { offset?: number }) => void };

/** kree8-style layout: fixed left sidebar on desktop, top bar + drawer on mobile,
 *  content inside a big rounded bubblegum panel. Also adds buttery smooth scrolling. */
export function SiteShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("top");
  const [path, setPath] = useState("/");
  useEffect(() => setPath(window.location.pathname), []);
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
      if (!document.getElementById(NAV[1].id)) {
        setActive("");
        return;
      }
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

  const Tile = ({ icon: Icon, tile }: { icon: typeof Home; tile: string }) => (
    <span
      className={`grid h-7 w-7 shrink-0 place-items-center rounded-[9px] text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.12)] ${tile}`}
    >
      <Icon className="h-[15px] w-[15px]" strokeWidth={2.4} />
    </span>
  );

  const item =
    "group flex h-11 items-center gap-3 rounded-2xl px-2.5 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200";

  const menu = (
    <>
      <nav className="flex flex-col gap-0.5">
        {NAV.map(({ id, label, icon, tile }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`/#${id}`}
              onClick={go(id)}
              aria-current={on ? "true" : undefined}
              className={`${item} ${
                on
                  ? "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06),0_6px_16px_-6px_rgba(0,0,0,0.18)]"
                  : "text-ink/65 hover:bg-white/60 hover:text-ink"
              }`}
            >
              <Tile icon={icon} tile={tile} />
              {label}
              {on && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-ink" />}
            </a>
          );
        })}
      </nav>

      <div className="mx-2.5 my-3 h-px bg-ink/10" />
      <nav className="flex flex-col gap-0.5">
        {PAGES.map(({ href, label, icon, badge, tile }) => (
          <a
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            className={`${item} ${
              path === href
                ? "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06),0_6px_16px_-6px_rgba(0,0,0,0.18)]"
                : "text-ink/65 hover:bg-white/60 hover:text-ink"
            }`}
          >
            <Tile icon={icon} tile={tile} />
            {label}
            {badge && (
              <span className="ml-auto rounded-full bg-[#ff2d55] px-2 py-0.5 text-[10px] font-bold text-white">
                {badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <p className="mt-6 px-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">
        Start a project
      </p>
      <div className="mt-2 flex flex-col gap-2 px-1">
        <a
          href={calBookingUrl}
          {...calDataAttributes}
          className="btn-lift flex h-11 items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-yellow-cta text-sm font-bold text-ink shadow-pixel"
        >
          <Rocket className="h-4 w-4" /> Book free demo
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-white/70 text-sm font-semibold text-ink ring-1 ring-ink/10 hover:bg-white"
        >
          <MessageCircle className="h-4 w-4 text-[#34c759]" /> WhatsApp us
        </a>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#ffe4f1_0%,#fff7d6_35%,#dff9ff_70%,#efe4ff_100%)]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] p-3 lg:flex">
        <div className="flex w-full flex-col rounded-[1.75rem] border border-white/70 bg-white/45 p-3 shadow-[0_10px_40px_-18px_rgba(17,17,17,0.35)] backdrop-blur-xl">
          <div className="flex-1 overflow-y-auto pt-1">{menu}</div>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white/70 p-3 ring-1 ring-ink/5">
            <img
              src="/mascot/pixor-wave-white.webp"
              alt=""
              className="pixor-float h-10 w-10 shrink-0 object-contain"
            />
            <p className="text-[12px] font-semibold leading-snug text-ink/70">
              Free demo in 48 hours.
              <br />
              <span className="text-ink/45">Made in Kolkata.</span>
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-[90] px-3 pt-3 lg:hidden">
        <div className="flex h-14 items-center justify-between rounded-full border-2 border-ink bg-card/90 px-3 shadow-pixel backdrop-blur-md">
          <a href="/#top" onClick={go("top")} className="flex items-center gap-2">
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
          className={`absolute bottom-3 left-3 top-20 w-[min(300px,85vw)] overflow-y-auto rounded-[1.75rem] border border-white/70 bg-white/80 p-3 shadow-[0_20px_50px_-20px_rgba(17,17,17,0.45)] backdrop-blur-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-[110%]"
          }`}
        >
          {menu}
        </div>
      </div>

      {/* Content panel */}
      <div className="lg:pl-[248px]">
        <div className="px-2 pb-2 pt-[76px] sm:px-3 lg:py-3 lg:pr-3 lg:pl-0">
          <div className="relative overflow-clip rounded-[1.75rem] border-2 border-ink bg-background shadow-[0_20px_60px_-25px_rgba(17,17,17,0.35)] lg:rounded-[2rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
