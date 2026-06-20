import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-pixel-green animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 h-14 pl-4 pr-5 rounded-full bg-pixel-green text-white font-semibold shadow-card-lg hover:scale-105 transition-transform">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline">Free Demo on WhatsApp</span>
      </span>
    </a>
  );
}
