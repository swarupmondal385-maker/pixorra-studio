import { useEffect, useState } from "react";

/**
 * Fixed full-screen pixel-art parallax background.
 * Multiple layers move at different speeds on scroll for a retro depth effect.
 * Sits behind all content (z-[-1]) — pages keep their own backgrounds on top
 * where needed, and transparent sections will reveal the parallax.
 */
export function PixelParallax() {
  const [y, setY] = useState(0);

  useEffect(() => {
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
      {/* Sky gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffd9ec] via-[#ffe9b8] to-[#bff0ff]" />

      {/* Layer 1: distant pixel stars (slowest) */}
      <div
        className="absolute inset-x-0 top-0 h-[200vh] opacity-70"
        style={{
          transform: `translate3d(0, ${y * -0.05}px, 0)`,
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px, #fff, transparent), radial-gradient(2px 2px at 80px 120px, #fff, transparent), radial-gradient(1px 1px at 160px 60px, #ffe9b8, transparent), radial-gradient(2px 2px at 240px 200px, #fff, transparent), radial-gradient(1px 1px at 320px 90px, #ffd9ec, transparent)",
          backgroundSize: "400px 300px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 2: far mountains (slow) */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-64 md:h-80"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(${(-y * 0.1) % 800}px, ${y * -0.08}px, 0)` }}
      >
        <defs>
          <pattern id="m1" width="800" height="200" patternUnits="userSpaceOnUse">
            <polygon points="0,200 100,80 180,140 260,40 360,160 460,60 560,130 660,50 760,150 800,100 800,200" fill="#9b8bd9" />
          </pattern>
        </defs>
        <rect width="1600" height="200" fill="url(#m1)" />
      </svg>

      {/* Layer 3: mid hills (medium) */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-48 md:h-64"
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        style={{ transform: `translate3d(${(-y * 0.2) % 800}px, ${y * -0.15}px, 0)` }}
      >
        <defs>
          <pattern id="m2" width="800" height="160" patternUnits="userSpaceOnUse">
            <polygon points="0,160 80,90 160,130 240,70 340,140 440,80 540,120 640,60 740,130 800,100 800,160" fill="#7dd3c0" />
          </pattern>
        </defs>
        <rect width="1600" height="160" fill="url(#m2)" />
      </svg>

      {/* Layer 4: pixel clouds drifting (slow horizontal) */}
      <div
        className="absolute top-10 left-0 w-[200%] h-40 opacity-90"
        style={{
          transform: `translate3d(${(-y * 0.15) % 600}px, ${y * -0.1}px, 0)`,
          backgroundImage:
            "radial-gradient(40px 16px at 100px 50px, #fff, transparent), radial-gradient(60px 20px at 300px 90px, #fff, transparent), radial-gradient(50px 18px at 520px 40px, #fff, transparent), radial-gradient(45px 16px at 720px 110px, #fff, transparent)",
          backgroundSize: "900px 180px",
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* Layer 5: foreground pixel grass (fast) */}
      <div
        className="absolute bottom-0 left-0 w-[200%] h-24"
        style={{
          transform: `translate3d(${(-y * 0.35) % 64}px, ${y * 0.05}px, 0)`,
          backgroundImage:
            "repeating-linear-gradient(90deg, #4ea84a 0 8px, #3d8a3a 8px 16px, #4ea84a 16px 24px, #5cb858 24px 32px)",
        }}
      />

      {/* Soft white veil so content stays readable */}
      <div className="absolute inset-0 bg-white/55" />
    </div>
  );
}
