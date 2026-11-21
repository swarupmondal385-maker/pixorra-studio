import { useState } from "react";
import {
  GraduationCap,
  Coffee,
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

type Demo = { name: string; niche: string; url: string };
type Cat = { id: string; label: string; icon: LucideIcon; tint: string };

const CATS: Cat[] = [
  { id: "coaching", label: "Coaching", icon: GraduationCap, tint: "bg-pixel-purple/25" },
  { id: "cafe", label: "Café", icon: Coffee, tint: "bg-pixel-orange/25" },
  { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed, tint: "bg-pixel-yellow/50" },
  { id: "health", label: "Clinic", icon: Stethoscope, tint: "bg-pixel-cyan/30" },
  { id: "fitness", label: "Gym", icon: Dumbbell, tint: "bg-pixel-pink/30" },
  { id: "shop", label: "E-commerce", icon: ShoppingBag, tint: "bg-pixel-green/30" },
];

// Live sites from Pixorra's GitHub (deployed on Vercel)
const DEMOS: Record<string, Demo[]> = {
  coaching: [
    {
      name: "TMS – The Management Studio",
      niche: "BBA / MBA coaching, Kolkata",
      url: "https://tms-studio-sage.vercel.app/",
    },
  ],
  cafe: [
    {
      name: "Kafeno Café & Bistro",
      niche: "Café, Kalyani",
      url: "https://kafeno-elevate.vercel.app/",
    },
    {
      name: "Chapter 1 Cafe",
      niche: "Café, Kalyani",
      url: "https://chapter-one-delivery.vercel.app/",
    },
  ],
  restaurant: [
    { name: "Spice Garden", niche: "Restaurant", url: "https://spice-garden-feast.vercel.app/" },
    {
      name: "Trèsind",
      niche: "Fine dining concept",
      url: "https://tresind-mumbai-elevate.vercel.app/",
    },
  ],
  health: [
    {
      name: "Dr. N.B. Auti Clinic",
      niche: "General physician, Navi Mumbai",
      url: "https://trusted-roots-web.vercel.app/",
    },
  ],
  fitness: [
    {
      name: "Iron Fitness",
      niche: "Gym, Kanchrapara",
      url: "https://iron-fitness-launchpad.vercel.app/",
    },
  ],
  shop: [
    { name: "iLens", niche: "Optical e-commerce", url: "https://ilens-vision-studio.vercel.app/" },
    {
      name: "Nectrine",
      niche: "Real-fruit drinks & pickles store",
      url: "https://nectrine-delight-50.vercel.app/",
    },
    {
      name: "Bluestone",
      niche: "Jewellery store",
      url: "https://bluestone-brilliance-project.vercel.app/",
    },
  ],
};

/** kree8 "See it yourself" showcase: category tabs + one big live preview. */
export function WorkShowcase() {
  const [cat, setCat] = useState(CATS[0].id);
  const [idx, setIdx] = useState(0);
  const [live, setLive] = useState(false);
  const list = DEMOS[cat];
  const demo = list[idx % list.length];
  const host = demo.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="reveal mx-auto max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        <p>
          Every business is different. A café doesn’t sell like a clinic, a coaching centre doesn’t
          sell like a jewellery store.
        </p>
        <p className="mt-6">
          Different customers. Different energy. Same level of care.{" "}
          <span className="font-semibold text-ink">See it yourself :)</span>
        </p>
      </div>

      <div className="reveal mx-auto mt-12 max-w-5xl px-3 md:px-8">
        <div className="rounded-[1.75rem] border-2 border-ink bg-[linear-gradient(135deg,#ffe4f1,#fff7d6_40%,#dff9ff)] p-3 shadow-pixel md:p-6">
          {/* Browser frame */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white">
            <div className="flex items-center gap-1.5 border-b-2 border-ink bg-[#f7f2e8] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-yellow" />
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-green" />
              <span className="ml-2 truncate rounded-md bg-white px-2.5 py-0.5 text-[11px] text-ink/50">
                {host}
              </span>
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 rounded-full border-2 border-ink bg-yellow-cta px-2.5 py-0.5 text-[11px] font-bold"
              >
                Open <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="relative aspect-[4/5] sm:aspect-[16/10]">
              <iframe
                key={demo.url}
                src={demo.url}
                title={`${demo.name} website built by Pixorra`}
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
              {!live && (
                <button
                  type="button"
                  onClick={() => setLive(true)}
                  aria-label={`Explore the ${demo.name} website`}
                  className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/25 via-transparent to-transparent pb-5"
                >
                  <span className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold text-ink shadow-pixel transition-transform group-hover:-translate-y-1">
                    Click to explore the live site
                  </span>
                </button>
              )}
            </div>
            {list.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => {
                    setIdx((i) => (i - 1 + list.length) % list.length);
                    setLive(false);
                  }}
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white/90 shadow-pixel"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => {
                    setIdx((i) => (i + 1) % list.length);
                    setLive(false);
                  }}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white/90 shadow-pixel"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1">
            <div>
              <div className="font-display text-lg font-bold text-ink">{demo.name}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                {demo.niche}
              </div>
            </div>
            {list.length > 1 && (
              <div className="flex gap-1.5">
                {list.map((d, i) => (
                  <button
                    key={d.url}
                    type="button"
                    aria-label={`Show ${d.name}`}
                    onClick={() => {
                      setIdx(i);
                      setLive(false);
                    }}
                    className={`h-2.5 rounded-full border border-ink transition-all ${
                      i === idx % list.length ? "w-7 bg-ink" : "w-2.5 bg-white"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category tabs (kree8 icon row) */}
        <div role="tablist" className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5">
          {CATS.map(({ id, label, icon: Icon, tint }) => {
            const on = id === cat;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setCat(id);
                  setIdx(0);
                  setLive(false);
                }}
                className="group flex w-20 flex-col items-center gap-2 md:w-24"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink transition-all ${tint} ${
                    on ? "-translate-y-1 shadow-pixel" : "group-hover:-translate-y-0.5"
                  }`}
                >
                  <Icon className="h-6 w-6 text-ink" />
                </span>
                <span className={`text-xs font-semibold ${on ? "text-ink" : "text-ink/55"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
