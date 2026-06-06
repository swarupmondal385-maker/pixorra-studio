import { useEffect, useState } from "react";
import videoAsset from "@/assets/pixel-bg.mp4.asset.json";

/**
 * Fixed full-screen pixel-art parallax background using an uploaded video.
 * The video is fixed behind all content, with a subtle parallax translate on scroll
 * and a soft white veil so foreground text stays readable.
 */
export function PixelParallax() {
  const [y, setY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Fallback gradient while video loads */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffd9ec] via-[#ffe9b8] to-[#bff0ff]" />

      {mounted && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoAsset.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            transform: `translate3d(0, ${y * -0.15}px, 0) scale(1.1)`,
            imageRendering: "pixelated",
          }}
        />
      )}

      {/* Soft white veil so content stays readable */}
      <div className="absolute inset-0 bg-white/60" />
    </div>
  );
}
