import { useState, useEffect, useRef } from "react";
import { X, Clock, ArrowRight, MessageCircle } from "lucide-react";
import logoMark from "@/assets/pixorra-mark.png";

function getTargetDate() {
  const now = new Date();
  const target = new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000);
  target.setHours(23, 59, 59, 999);
  return target;
}

function useCountdown(target: Date) {
  const [left, setLeft] = useState(() => calcLeft(target));
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const tick = () => {
      const remaining = calcLeft(target);
      setLeft(remaining);
      if (remaining.total <= 0 && intervalRef.current) clearInterval(intervalRef.current);
    };
    tick();
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, [target]);

  return left;
}

function calcLeft(target: Date) {
  const total = target.getTime() - Date.now();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function SummerSale() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const target = useRef(getTargetDate());
  const left = useCountdown(target.current);

  useEffect(() => {
    setMounted(true);
    const sidebarTimer = setTimeout(() => setSidebarOpen(true), 5000);
    return () => {
      clearTimeout(sidebarTimer);
    };
  }, []);

  return null; // hidden for now

  const pads = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-full sm:max-w-sm glass-strong border-l-2 border-ink shadow-pixel transition-transform duration-500 ease-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="relative bg-pixel-orange pt-12 pb-6 px-5 sm:px-6">
            <div className="absolute top-3 left-4 flex items-center gap-2 h-7 px-3 rounded-full bg-pixel-yellow border-2 border-ink text-ink text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink animate-pulse" />
              Limited Time
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-3 right-4 h-8 w-8 rounded-full bg-card border-2 border-ink flex items-center justify-center hover:scale-110 transition-transform z-10"
              aria-label="Close sale"
            >
              <X className="h-4 w-4 text-ink" />
            </button>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-card border-2 border-ink shadow-pixel wobble">
                <img src={logoMark} alt="Pixorra" className="h-8 w-8 object-contain" />
                <div className="font-display text-lg font-bold text-gradient-pixorra">
                  SUMMER SALE
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-6 py-4">
            <div className="-mt-6 relative z-10 rounded-2xl border-2 border-ink bg-card p-5 shadow-pixel">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-pixel-purple px-3 py-1 text-[10px] font-bold text-white border border-ink">
                    Save 30%
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">Elite Plan</h3>
                  <p className="text-xs text-ink/60">Complete AI-powered growth partner</p>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-ink/40 line-through">₹70,000</span>
                  <span className="font-display text-2xl font-bold text-pixel-pink">₹49,999</span>
                  <span className="block text-[10px] text-ink/50 font-semibold">one-time</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  "Custom website (up to 15 pages)",
                  "AI chatbot & WhatsApp automation",
                  "Full SEO + Local SEO",
                  "Dedicated account manager",
                ].map((f) => (
                  <div key={f} className="flex items-baseline gap-2 text-[11px] text-ink/70">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-pixel-green flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-6 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-pixel-pink" />
              <span className="text-[10px] font-bold text-ink/50 uppercase tracking-wider">
                Offer ends in
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { val: pads(left.days), label: "Days" },
                { val: pads(left.hours), label: "Hrs" },
                { val: pads(left.minutes), label: "Mins" },
                { val: pads(left.seconds), label: "Secs" },
              ].map((u) => (
                <div key={u.label} className="text-center">
                  <div className="h-11 rounded-xl bg-foreground text-background font-pixel text-base flex items-center justify-center border-2 border-ink">
                    {u.val}
                  </div>
                  <div className="mt-0.5 text-[9px] text-ink/50 font-bold uppercase tracking-wider">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 sm:px-6 py-3 border-t border-ink/10 bg-cream mt-auto">
            <a
              href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20to%20grab%20the%20Summer%20Sale%20deal!"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 h-12 w-full rounded-full bg-pixel-orange text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform text-sm animate-pulse-soft hover:animate-none"
            >
              <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" /> Claim
              Deal on WhatsApp{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
