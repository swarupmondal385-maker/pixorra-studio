import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const KOLKATA: [number, number] = [22.5726, 88.3639];
// Rotation that brings Kolkata to the front of the globe.
const START_PHI = -((KOLKATA[1] * Math.PI) / 180) - Math.PI / 2;

/** Light WebGL globe (cobe) with a pin on Kolkata. Loads only when visible. */
export function KolkataGlobe({ size = 260 }: { size?: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    let globe: { update: (s: { phi: number }) => void; destroy: () => void } | undefined;
    let raf = 0;
    let dead = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      try {
        if (dead) return;
        let phi = START_PHI;
        globe = createGlobe(el, {
          devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
          width: size * 2,
          height: size * 2,
          phi,
          theta: 0.32,
          dark: 0,
          diffuse: 1.15,
          mapSamples: 14000,
          mapBrightness: 7,
          mapBaseBrightness: 0.05,
          baseColor: [1, 0.9, 0.95],
          markerColor: [1, 0.31, 0.64],
          glowColor: [1, 0.86, 0.93],
          markers: [{ location: KOLKATA, size: 0.12 }],
        });
        const loop = () => {
          if (!reduce) phi += 0.003;
          globe?.update({ phi });
          raf = requestAnimationFrame(loop);
        };
        loop();
        el.style.opacity = "1";
      } catch (err) {
        // WebGL unavailable: the card still shows the clock and address
        console.warn("[globe]", err);
      }
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          start();
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el.closest("footer") ?? el);
    return () => {
      dead = true;
      io.disconnect();
      cancelAnimationFrame(raf);
      globe?.destroy();
    };
  }, [size]);

  return (
    <canvas
      ref={canvas}
      aria-label="Globe showing Pixorra Studio in Kolkata, India"
      role="img"
      style={{
        width: size,
        height: size,
        maxWidth: "100%",
        aspectRatio: "1",
        opacity: 0,
        transition: "opacity 1s",
      }}
    />
  );
}
