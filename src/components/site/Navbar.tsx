import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

const LINKS = [
  { href: "#services", label: "Services", c: "bg-pixel-pink" },
  { href: "#work", label: "Work", c: "bg-pixel-yellow" },
  { href: "#process", label: "Process", c: "bg-pixel-cyan" },
  { href: "/scorecard", label: "Scorecard", c: "bg-pixel-purple" },
  { href: "#reviews", label: "Reviews", c: "bg-pixel-green" },
  { href: "#faq", label: "FAQ", c: "bg-pixel-orange" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-full border-2 border-ink bg-white px-3 md:px-4 h-14 md:h-16 transition-all ${
            scrolled ? "shadow-pixel" : "shadow-card"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group pl-1">
            <img
              src={logoMark}
              alt="Pixorra"
              className="h-9 w-9 md:h-10 md:w-10 object-contain group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="font-display text-lg md:text-xl font-bold tracking-tight text-ink">
              Pixorra
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-3.5 py-2 text-sm font-semibold text-ink/75 hover:text-ink transition-colors rounded-full"
              >
                <span className="relative z-10">{l.label}</span>
                <span
                  className={`absolute inset-0 rounded-full ${l.c} opacity-0 group-hover:opacity-100 transition-opacity -z-0`}
                  style={{ opacity: 0 }}
                />
                <span
                  className={`absolute left-3.5 right-3.5 -bottom-0.5 h-1 rounded-full ${l.c} scale-x-0 group-hover:scale-x-100 origin-left transition-transform`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-gradient-pixorra text-white font-bold text-sm border-2 border-ink shadow-pixel hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform"
            >
              Get Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-pixel-yellow shadow-pixel"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-4">
          <div className="rounded-3xl border-2 border-ink bg-white shadow-pixel p-3">
            <div className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-cream transition-colors"
                >
                  <span className={`h-3 w-3 rounded-full ${l.c} border border-ink`} />
                  <span className="text-base font-bold text-ink">{l.label}</span>
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-pixorra text-white font-bold border-2 border-ink shadow-pixel"
              >
                Get Free Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
