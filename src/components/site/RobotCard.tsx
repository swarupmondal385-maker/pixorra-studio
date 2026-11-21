import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

/** Interactive 3D robot (21st.dev Spline scene), recoloured white to suit the light theme.
 *  Only loads once it scrolls near the screen, so it never slows the first paint.
 *
 *  Desktop: the robot follows the mouse.
 *  Phones: Spline turns touches into camera moves (the robot tips over) and traps scrolling, so
 *  the canvas ignores touches. Instead a soft black dot sits on the card: drag it with your
 *  finger and the whole robot turns and leans toward it in 3D. Until you touch it, the dot
 *  drifts on its own so the robot looks alive. */
export function RobotCard({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [touch, setTouch] = useState(false);
  const [dot, setDot] = useState({ x: 0.5, y: 0.35 });
  const [dragging, setDragging] = useState(false);
  const userMoved = useRef(false);

  // Use the finger dot on touch devices and on any phone-size screen (some phones and
  // in-app browsers report a mouse, and a narrow desktop window should look the same).
  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 639px)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Idle drift until the visitor grabs the dot.
  useEffect(() => {
    if (!touch || !ready) return;
    const card = ref.current;
    if (!card) return;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(card);
    let raf = 0;
    let last = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (userMoved.current || !visible || now - last < 40) return;
      last = now;
      const s = now / 1000;
      const d = { x: 0.5 + 0.32 * Math.sin(s * 0.6), y: 0.3 + 0.18 * Math.sin(s * 0.9 + 1) };
      setDot(d);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [touch, ready]);

  const moveDot = (e: React.PointerEvent) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const fx = Math.min(0.94, Math.max(0.06, (e.clientX - r.left) / r.width));
    const fy = Math.min(0.92, Math.max(0.08, (e.clientY - r.top) / r.height));
    setDot({ x: fx, y: fy });
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[1.75rem] border-2 border-ink bg-[radial-gradient(80%_70%_at_50%_30%,#ffffff,#f3eee4)] shadow-[8px_8px_0_0_#111] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-pixel-pink/20 blur-3xl"
      />
      {/* The scene is a black robot; invert + hue-rotate turns it white without changing the scene.
          Desktop: drawn taller than the card so the Spline watermark sits outside the card.
          Phones: drawn shorter, which shrinks the robot so its hands fit the narrow card. */}
      <div
        className={`absolute inset-x-0 top-[7%] h-[86%] transition-opacity duration-700 [filter:invert(1)_hue-rotate(180deg)_contrast(0.92)] sm:top-0 sm:h-[calc(100%+64px)] ${
          ready ? "opacity-100" : "opacity-0"
        } ${touch ? "pointer-events-none" : ""}`}
        style={
          touch
            ? {
                transform: `perspective(900px) translateX(${(dot.x - 0.5) * 18}px) rotateY(${(dot.x - 0.5) * 34}deg) rotateX(${(0.4 - dot.y) * 22}deg)`,
                transition: dragging
                  ? "transform 0.12s ease-out, opacity 0.7s"
                  : "transform 0.5s ease-out, opacity 0.7s",
              }
            : undefined
        }
      >
        {show && (
          <SplineScene
            scene={SCENE}
            className="h-full w-full"
            onLoad={(app) => {
              // Phones: Spline listens to touches on the whole page by default, so ordinary
              // scrolling would swing the camera around. Keep its input to the canvas only.
              if (window.matchMedia("(hover: none)").matches) app.setGlobalEvents(false);
              setReady(true);
            }}
          />
        )}
      </div>
      {!ready && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-ink/60" />
        </div>
      )}

      {/* Phones: the finger-controlled dot */}
      {touch && ready && (
        <button
          type="button"
          aria-label="Drag me and the robot will follow"
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onPointerDown={(e) => {
            e.stopPropagation();
            userMoved.current = true;
            setDragging(true);
            e.currentTarget.setPointerCapture(e.pointerId);
            moveDot(e);
          }}
          onPointerMove={(e) => {
            e.stopPropagation();
            if (dragging) moveDot(e);
          }}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
          className="absolute z-10 -ml-7 -mt-7 grid h-14 w-14 place-items-center [touch-action:none]"
          style={{ left: `${dot.x * 100}%`, top: `${dot.y * 100}%` }}
        >
          <span
            className={`block rounded-full bg-ink/55 shadow-[0_0_18px_6px_rgba(17,17,17,0.22)] blur-[2px] transition-[width,height,background-color] duration-200 ${
              dragging ? "h-7 w-7 bg-ink/70" : "h-5 w-5 animate-pulse"
            }`}
          />
        </button>
      )}

      <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-ink/10 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-ink/60 backdrop-blur">
        {touch ? "Drag the dot, I’ll follow 👆" : "Move your cursor, say hi 👋"}
      </span>
    </div>
  );
}
