import { MessageCircle, Phone } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_145)] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 h-14 pl-4 pr-5 rounded-full bg-[oklch(0.72_0.18_145)] text-white font-semibold shadow-card-lg hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline">Free Demo on WhatsApp</span>
      </span>
    </a>
  );
}

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="grid grid-cols-3">
        <a href="tel:+919932740091" className="flex flex-col items-center justify-center py-3 text-ink border-r border-black/10">
          <Phone className="h-5 w-5 text-navy"/>
          <span className="text-[11px] font-semibold mt-1">Call</span>
        </a>
        <a
          href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
          target="_blank" rel="noreferrer"
          className="flex flex-col items-center justify-center py-3 text-ink border-r border-black/10"
        >
          <MessageCircle className="h-5 w-5 text-[oklch(0.68_0.18_145)]"/>
          <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
        </a>
        <a href="#demo" className="flex flex-col items-center justify-center py-3 bg-gradient-gold text-ink">
          <span className="text-xs font-bold">Free Demo</span>
          <span className="text-[10px] opacity-80">Get Yours Today</span>
        </a>
      </div>
    </div>
  );
}
