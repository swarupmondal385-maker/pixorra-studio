import { CalendarClock } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

export function FloatingWhatsApp() {
  return (
    <a
      href={calBookingUrl}
      {...calDataAttributes}
      aria-label="Book a free demo"
      className="fixed bottom-24 md:bottom-6 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-pixel-green animate-ping opacity-30" />
      <span className="relative flex items-center justify-center md:justify-start gap-3 h-14 w-14 md:w-auto md:pl-4 md:pr-5 rounded-full bg-pixel-green text-white font-semibold shadow-card-lg hover:scale-105 transition-transform">
        <CalendarClock className="h-8 w-8 md:h-6 md:w-6" />
        <span className="hidden md:inline">Book Free Demo</span>
      </span>
    </a>
  );
}
