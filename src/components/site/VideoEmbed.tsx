import { Play } from "lucide-react";

type Props = {
  /** YouTube/Vimeo embed URL or direct MP4 */
  src?: string;
  title?: string;
  poster?: string;
  eyebrow?: string;
  caption?: string;
  className?: string;
};

// Replace REPLACE_WITH_YOUR_VIDEO_ID with the real YouTube video ID.
const DEFAULT_SRC = "https://www.youtube.com/embed/REPLACE_WITH_YOUR_VIDEO_ID";

export function VideoEmbed({
  src = DEFAULT_SRC,
  title = "Pixorra video",
  eyebrow,
  caption,
  className = "",
}: Props) {
  const isPlaceholder = src.includes("REPLACE_WITH_YOUR_VIDEO_ID");

  return (
    <div className={`reveal ${className}`}>
      {eyebrow && (
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 backdrop-blur px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink/70">
            <Play className="h-3 w-3 fill-sky text-sky" /> {eyebrow}
          </span>
        </div>
      )}
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-pixorra opacity-20 blur-2xl" aria-hidden />
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink shadow-card-lg">
          {isPlaceholder ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-navy text-white/80">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <Play className="h-7 w-7 fill-white text-white" />
              </div>
              <div className="text-sm font-medium tracking-wide">Video coming soon</div>
              <div className="text-[11px] text-white/50">Add your video URL to display it here</div>
            </div>
          ) : (
            <iframe
              src={src}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </div>
      {caption && (
        <p className="mt-4 text-center text-sm text-ink/55">{caption}</p>
      )}
    </div>
  );
}
