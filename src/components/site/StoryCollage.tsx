import { Check, MapPin, Play, Star } from "lucide-react";

const Tape = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`absolute h-6 w-20 bg-pixel-yellow/70 shadow-sm ring-1 ring-ink/10 ${className}`}
  />
);
const Pin = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`absolute grid h-6 w-6 place-items-center rounded-full border-2 border-ink bg-pixel-pink shadow-[2px_2px_0_0_#111] ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
  </span>
);
const Clip = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 48"
    className={`absolute h-12 w-6 text-ink/60 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <path d="M8 14v22a6 6 0 0 0 12 0V10a8 8 0 0 0-16 0v26" />
  </svg>
);

/** "Solution" collage: four different deliverables as pinned frames, plus Pixor peeking in. */
export function StoryCollage() {
  return (
    <div className="reveal relative mx-auto mt-12 max-w-4xl px-5 md:px-8">
      <div className="grid grid-flow-row-dense grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-6">
        {/* Website */}
        <figure className="collage-card relative -rotate-3 md:col-span-5">
          <Pin className="-top-3 right-6" />
          <div className="rounded-2xl border-2 border-ink bg-white p-2.5 shadow-pixel">
            <div className="overflow-hidden rounded-xl border-2 border-ink/80">
              <div className="flex items-center gap-1 bg-cream px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-pixel-pink" />
                <span className="h-1.5 w-1.5 rounded-full bg-pixel-yellow" />
                <span className="h-1.5 w-1.5 rounded-full bg-pixel-green" />
                <span className="ml-1.5 h-2 flex-1 rounded-full bg-white" />
              </div>
              <div className="space-y-2 bg-[#fff6fb] p-3 md:p-4">
                <div className="h-2 w-12 rounded-full bg-pixel-pink/60" />
                <div className="h-3.5 w-11/12 rounded bg-ink" />
                <div className="h-3.5 w-3/4 rounded bg-ink" />
                <div className="h-2 w-2/3 rounded-full bg-ink/15" />
                <div className="flex gap-1.5 pt-1">
                  <span className="h-5 w-16 rounded-full border border-ink bg-yellow-cta" />
                  <span className="h-5 w-12 rounded-full border border-ink bg-white" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <span className="h-8 rounded-md bg-pixel-cyan/30" />
                  <span className="h-8 rounded-md bg-pixel-yellow/40" />
                  <span className="h-8 rounded-md bg-pixel-purple/25" />
                </div>
              </div>
            </div>
            <figcaption className="mt-2.5 text-center font-hand text-lg text-ink">
              A website that sells
            </figcaption>
          </div>
        </figure>

        {/* WhatsApp */}
        <figure
          className="collage-card relative rotate-2 md:col-span-4 md:mt-6"
          style={{ animationDelay: "0.6s" }}
        >
          <Clip className="-top-6 left-5 rotate-[-12deg]" />
          <div className="rounded-2xl border-2 border-ink bg-[#e9fbe9] p-3 shadow-pixel">
            <div className="space-y-2 text-[11px] leading-snug md:text-xs">
              <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
                Hi! Are you open today? 🙂
              </div>
              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#d2f7c6] px-3 py-2 shadow-sm">
                Yes! 10am–8pm. Want me to book you a slot?
                <span className="ml-1 inline-flex translate-y-0.5 text-[#34b7f1]">
                  <Check className="h-3 w-3" />
                  <Check className="-ml-2 h-3 w-3" />
                </span>
              </div>
              <div className="w-fit rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
                5pm please 🙏
              </div>
            </div>
            <figcaption className="mt-2.5 text-center font-hand text-lg text-ink">
              WhatsApp AI, 24/7
            </figcaption>
          </div>
        </figure>

        {/* Pixor sticker */}
        <div className="relative order-last grid place-items-center md:order-none md:col-span-3 md:block">
          <img
            src="/mascot/pixor-lilac.webp"
            alt="Pixor, the Pixorra mascot"
            loading="lazy"
            width={180}
            height={180}
            className="pixor-float h-36 w-36 rotate-6 object-contain md:absolute md:-top-4 md:left-2 md:h-40 md:w-40 drop-shadow-[4px_6px_0_rgba(17,17,17,0.15)]"
          />
        </div>

        {/* Google Maps */}
        <figure
          className="collage-card relative -rotate-2 md:col-span-4 md:col-start-2"
          style={{ animationDelay: "1.1s" }}
        >
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
          <div className="rounded-2xl border-2 border-ink bg-white p-3 shadow-pixel">
            <div className="relative h-24 overflow-hidden rounded-xl bg-[#e8f4ff] md:h-28">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_47%,#fff_47%,#fff_53%,transparent_53%),linear-gradient(0deg,transparent_45%,#fff_45%,#fff_55%,transparent_55%)] bg-[length:60px_60px]" />
              <MapPin className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-full fill-pixel-pink text-ink" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-ink">Your Business</span>
              <span className="flex text-pixel-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
            </div>
            <figcaption className="mt-1.5 text-center font-hand text-lg text-ink">
              Found on Google Maps
            </figcaption>
          </div>
        </figure>

        {/* Sticky note */}
        <div
          className="collage-card relative col-span-1 self-center md:col-span-3 md:col-start-9 md:mt-10"
          style={{ animationDelay: "2s" }}
        >
          <Tape className="-top-3 left-6 w-14 rotate-[8deg] bg-pixel-cyan/60" />
          <div className="-rotate-3 rounded-sm border-2 border-ink bg-pixel-yellow p-4 shadow-pixel">
            <p className="font-hand text-2xl leading-tight text-ink">
              No more 5 vendors. Just 1 team :)
            </p>
            <p className="mt-2 font-hand text-lg text-ink/60">— Pixorra</p>
          </div>
        </div>

        {/* Reel */}
        <figure
          className="collage-card relative col-span-1 rotate-3 md:col-span-3 md:col-start-6 md:-mt-6"
          style={{ animationDelay: "1.6s" }}
        >
          <Pin className="-top-3 left-1/2 -translate-x-1/2 bg-pixel-cyan" />
          <div className="rounded-[1.6rem] border-2 border-ink bg-ink p-1.5 shadow-pixel">
            <div className="relative grid aspect-[9/13] place-items-center overflow-hidden rounded-[1.2rem] bg-[#fff1f7]">
              <img
                src="/mascot/pixor-peace-grey-hoodie.webp"
                alt=""
                loading="lazy"
                className="absolute bottom-0 h-4/5 object-contain"
              />
              <span className="relative grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white/90">
                <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
              </span>
              <span className="absolute left-2 top-2 rounded-full bg-ink px-2 py-0.5 font-pixel text-[7px] text-white">
                4K · 60FPS
              </span>
            </div>
          </div>
          <figcaption className="mt-2.5 text-center font-hand text-lg text-ink">
            Reels that get calls
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
