import { useState, useEffect, useRef } from "react";
import { X, Clock, Tag, ArrowRight, MessageCircle } from "lucide-react";
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
    return () => { clearTimeout(sidebarTimer); };
  }, []);

  if (!mounted || left.total <= 0) return null;

  const pads = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => setSidebarOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm glass-strong border-l-2 border-ink shadow-pixel transition-transform duration-500 ease-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 h-9 w-9 rounded-full bg-pixel-pink border-2 border-ink flex items-center justify-center hover:scale-110 transition-transform z-10" aria-label="Close sale">
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="h-full flex flex-col overflow-y-auto">
          <div className="relative bg-pixel-orange pt-16 pb-10 px-6 border-b-2 border-ink">
            <div className="absolute top-4 left-4 flex items-center gap-2 h-8 px-3 rounded-full bg-pixel-yellow border-2 border-ink text-ink text-[10px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink animate-pulse" />
              Limited Time
            </div>
            <div className="flex items-end justify-center gap-2 mt-4">
              <div className="relative">
                <img src={logoMark} alt="Pixorra mascot" className="h-20 w-20 object-contain drop-shadow-lg" />
              </div>
              <div className="relative -ml-3 mb-2 px-4 py-2 rounded-2xl rounded-bl-sm bg-white border-2 border-ink shadow-pixel wobble">
                <div className="text-lg md:text-xl font-display font-bold text-gradient-pixorra leading-tight">SUMMER<br />SALE!</div>
                <div className="absolute -left-2 bottom-3 w-3 h-3 bg-white border-l-2 border-b-2 border-ink rotate-45" />
              </div>
            </div>
            <h2 className="mt-3 text-center font-display text-2xl font-bold text-white tracking-tight">
              Elite Plan — <span className="underline decoration-pixel-yellow decoration-4 underline-offset-4">30% OFF</span>
            </h2>
            <p className="mt-2 text-white/85 text-sm text-center">Our flagship Elite package at a never-before price. Grab it before it melts away!</p>
          </div>

          <div className="px-6 py-5 border-b border-ink/10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-pixel-pink" />
              <span className="text-xs font-bold text-ink/50 uppercase tracking-wider">Offer ends in</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[{ val: pads(left.days), label: "Days" }, { val: pads(left.hours), label: "Hrs" }, { val: pads(left.minutes), label: "Mins" }, { val: pads(left.seconds), label: "Secs" }].map((u) => (
                <div key={u.label} className="text-center">
                  <div className="h-14 rounded-xl bg-ink text-white font-pixel text-lg flex items-center justify-center border-2 border-ink shadow-pixel">{u.val}</div>
                  <div className="mt-1 text-[10px] text-ink/50 font-bold uppercase tracking-wider">{u.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 px-6 py-5 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-4 w-4 text-pixel-yellow" />
              <span className="text-xs font-bold text-ink/50 uppercase tracking-wider">Summer deal</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl border-2 border-ink bg-cream hover:-translate-y-0.5 transition-transform">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-pixel-purple border-2 border-ink flex items-center justify-center text-sm">E</div>
                <div>
                  <span className="text-sm font-semibold text-ink">Elite Plan</span>
                  <span className="block text-[10px] text-ink/50 font-semibold">Complete AI-powered growth</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-ink/40 line-through">₹70,000</span>
                <div className="text-sm font-bold text-pixel-pink">₹49,999</div>
              </div>
            </div>
          </div>

          <div className="px-6 py-5 border-t border-ink/10 bg-cream">
            <a href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20to%20grab%20the%20Summer%20Sale%20deal!" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 h-14 w-full rounded-full bg-pixel-orange text-white font-bold border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform">
              <MessageCircle className="h-5 w-5" /> Grab This Deal on WhatsApp <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-3 text-center text-[11px] text-ink/40">No card needed. Just send a message and we'll get you started.</p>
          </div>
        </div>
      </div>

    </>
  );
}
