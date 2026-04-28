import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
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
        scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-[0_1px_20px_-10px_rgba(17,17,17,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src={logoMark} alt="Pixorra" className="h-10 w-10 md:h-11 md:w-11 object-contain group-hover:rotate-6 transition-transform duration-300" />
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-ink">
            Pixorra
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-gradient-pixorra text-white font-semibold text-sm shadow-gold hover:-translate-y-0.5 transition-transform"
          >
            Get Free Demo
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="px-5 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-black/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-12 rounded-full bg-gradient-gold text-ink font-semibold"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
