/**
 * Fixed full-screen pixel-art parallax background using an animated gradient.
 */
export function PixelParallax() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffd9ec] via-[#ffe9b8] to-[#bff0ff] animate-gradient-shift dark:from-[#131c2f] dark:via-[#10182a] dark:to-[#0a1020]" />
      <div className="absolute inset-0 bg-background/60 dark:bg-background/72" />
    </div>
  );
}
