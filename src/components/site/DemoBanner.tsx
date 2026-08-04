import { CalendarClock, ArrowRight } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function DemoBanner() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-pixorra border-2 border-ink p-6 sm:p-8 md:p-16 reveal"
          style={{ boxShadow: "10px 10px 0 0 var(--ink)" }}
        >
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex h-20 w-20 rounded-full bg-pixel-yellow border-2 border-ink items-center justify-center spin-slow z-10">
            <div className="font-pixel text-[7px] text-ink text-center leading-tight">
              FREE
              <br />
              DEMO
            </div>
          </div>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-background/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-navy/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-pixel-yellow border-2 border-ink text-ink text-xs font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" /> Limited Slots
                This Month
              </div>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight text-balance">
                Get a free demo website
                <br />
                built for <u className="decoration-pixel-yellow underline-offset-4">your</u>{" "}
                business.
              </h2>
              <p className="mt-5 text-white/90 text-base sm:text-lg max-w-2xl">
                Tell us your business name and industry. Within 48 hours we'll send you a real,
                working homepage preview — no commitment, no card details, zero risk.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={calBookingUrl}
                {...calDataAttributes}
                className="group inline-flex items-center justify-between h-16 px-7 rounded-2xl bg-navy text-white font-semibold text-base sm:text-lg border-2 border-ink shadow-pixel hover:-translate-y-0.5 transition-transform w-full"
              >
                <span className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5" /> Book Free Demo Meeting
                </span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20want%20a%20free%20demo%20website%20for%20my%20business."
                className="inline-flex items-center justify-center h-14 px-6 rounded-2xl bg-whatsapp border-2 border-ink text-ink font-semibold shadow-pixel hover:-translate-y-0.5 transition-transform w-full"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5" /> +91 89278 40261
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
