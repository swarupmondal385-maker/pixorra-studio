import { useEffect, useRef, useState } from "react";
import { ArrowRight, Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

/** kree8-style hero: one confident hook, two CTAs, a big video right under it. */
export function HeroKree8() {
  const video = useRef<HTMLVideoElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Autoplay (muted) only while the video is on screen, like kree8.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };
  const toggleMute = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) void v.play();
  };
  const fullscreen = () => {
    const v = video.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) void v.requestFullscreen();
    else v.webkitEnterFullscreen?.();
  };

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-5 pt-10 sm:pt-14 md:px-10 md:pt-20">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
          Built in Kolkata <span className="mx-1.5 text-ink/25">·</span> Demo in 48 hours
        </p>

        <h1 className="reveal mt-5 font-display text-[2.35rem] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-6xl md:text-[4.4rem]">
          The{" "}
          <span className="relative mx-[0.06em] inline-block h-[0.92em] w-[0.92em] overflow-hidden rounded-[0.24em] border-2 border-ink bg-pixel-yellow align-[-0.1em] shadow-[3px_3px_0_0_#111]">
            <img
              src="/mascot/pixor-wave-white.webp"
              alt=""
              className="absolute inset-0 m-auto h-[86%] w-[86%] object-contain"
            />
          </span>{" "}
          studio <span className="text-ink/35">for local businesses who simply</span> can’t afford
          to be ignored.
        </h1>

        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink/65 md:text-xl">
          Websites, WhatsApp AI and Google visibility that turn local searches into paying
          customers. Live in 7–10 days.
        </p>

        <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={calBookingUrl}
            {...calDataAttributes}
            className="btn-lift group inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-7 text-base font-bold text-ink shadow-pixel"
          >
            Book free demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-7 text-base font-bold text-ink shadow-pixel"
          >
            See our work
          </a>
        </div>
      </div>

      {/* Big video with a soft glow behind it */}
      <div className="reveal relative mx-auto mt-12 max-w-6xl px-3 pb-20 sm:px-5 md:mt-16 md:px-10 md:pb-28">
        <div
          aria-hidden
          className="glow-breathe pointer-events-none absolute inset-x-[8%] top-[10%] bottom-[18%] rounded-[3rem] bg-[radial-gradient(closest-side,rgba(255,79,163,0.35),transparent),radial-gradient(closest-side,rgba(34,211,238,0.35),transparent)] bg-[length:60%_100%,60%_100%] bg-[position:0%_50%,100%_50%] bg-no-repeat blur-3xl"
        />
        <div
          ref={wrap}
          className="relative overflow-hidden rounded-[1.5rem] border-2 border-ink bg-ink shadow-[8px_8px_0_0_#111] md:rounded-[2rem]"
        >
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="group relative block w-full"
          >
            <video
              ref={video}
              src="/videos/pixorra-promo.mp4"
              poster="/videos/pixorra-promo-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="aspect-video w-full object-cover"
            />
            {!playing && (
              <span className="absolute inset-0 grid place-items-center bg-ink/10">
                <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-white shadow-pixel transition-transform group-hover:scale-110 md:h-20 md:w-20">
                  <Play className="ml-1 h-7 w-7 text-ink" fill="currentColor" />
                </span>
              </span>
            )}
          </button>
          <div className="flex items-center gap-2 border-t-2 border-ink bg-white px-3 py-2.5 md:px-4">
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-cream"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 text-sm font-bold"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              {muted ? "Tap for sound" : "Mute"}
            </button>
            <span className="ml-auto hidden text-sm font-semibold text-ink/50 sm:block">
              The Pixorra story · 1:45
            </span>
            <button
              type="button"
              onClick={fullscreen}
              aria-label="Full screen"
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-cream sm:ml-2"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
