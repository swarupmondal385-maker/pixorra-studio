import logoMark from "@/assets/pixorra-mark.png";
import { MarkerHighlight } from "./MarkerHighlight";

const Label = ({ children }: { children: string }) => (
  <div className="reveal mx-auto mt-20 flex max-w-4xl items-center gap-3 px-5 md:mt-28 md:px-8">
    <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
      {children}
    </span>
    <span className="h-px flex-1 bg-ink/10" />
  </div>
);

const LETTERS = "SCATTERED".split("");
const BUBBLES = [
  "bg-pixel-pink/30",
  "bg-pixel-orange/30",
  "bg-pixel-yellow/50",
  "bg-pixel-green/30",
  "bg-pixel-cyan/30",
  "bg-pixel-blue/25",
  "bg-pixel-purple/25",
];

const PINS = [
  {
    img: "/mascot/pixor-wave-white.webp",
    cap: "Website that sells",
    rot: "-rotate-6",
    tint: "bg-[#fff1f7]",
    pin: "bg-pixel-pink",
  },
  {
    img: "/mascot/pixor-lilac.webp",
    cap: "WhatsApp AI, 24/7",
    rot: "rotate-3",
    tint: "bg-[#f3ecff]",
    pin: "bg-pixel-purple",
  },
  {
    img: "/mascot/pixor-peace-grey-hoodie.webp",
    cap: "Top of Google Maps",
    rot: "-rotate-2",
    tint: "bg-[#e6faff]",
    pin: "bg-pixel-cyan",
  },
  {
    img: "/mascot/pixor-sitting-cream.webp",
    cap: "Reels that get calls",
    rot: "rotate-6",
    tint: "bg-[#fffbe0]",
    pin: "bg-pixel-yellow",
  },
];

/** kree8-style storytelling block, told in Pixorra's voice. */
export function StoryPixorra() {
  return (
    <section id="story" className="relative bg-background pb-24 pt-4 md:pb-32">
      <div className="reveal mx-auto max-w-2xl px-5 pt-16 text-xl leading-relaxed text-ink/80 md:pt-24 md:text-2xl md:leading-relaxed">
        <p>
          You started your business with a dream.... Great service, happy customers, a name people
          trust 🙂
        </p>
        <p className="mt-6">
          But then came the hard part....{" "}
          <MarkerHighlight color="var(--pixel-yellow)">“Getting found.”</MarkerHighlight>
        </p>
        <p className="mt-6 text-ink/65">
          One guy for the website. Another for ads.
          <br />
          Someone else for WhatsApp. Instagram left to your nephew.
          <br />
          Paying, chasing, waiting…
        </p>
        <p className="mt-6">
          Somewhere along the way, the phone stops ringing. And trust us, it’s not you or your
          service.
        </p>
      </div>

      <Label>What's the real problem?</Label>
      <div className="reveal mx-auto mt-10 max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <span>It’s</span>
          <span className="flex flex-wrap gap-1.5">
            {LETTERS.map((l, i) => (
              <span
                key={i}
                className={`letter-bob grid h-9 w-9 place-items-center rounded-full border-2 border-ink font-pixel text-[10px] text-ink md:h-10 md:w-10 ${BUBBLES[i % BUBBLES.length]}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {l}
              </span>
            ))}
          </span>
        </div>
        <ul className="mt-8 space-y-1 text-ink/70">
          <li>- Too many vendors</li>
          <li>- Too many tools</li>
          <li>- Too many missed WhatsApps</li>
        </ul>
        <p className="mt-8">
          Growth isn’t meant to be stitched together. It’s meant to work as{" "}
          <MarkerHighlight color="var(--pixel-green)">ONE system.</MarkerHighlight>
        </p>
      </div>

      <Label>What's the solution?</Label>
      <div className="reveal mx-auto mt-10 max-w-2xl px-5 text-xl text-ink/80 md:text-2xl">
        <p className="flex flex-wrap items-center gap-2">
          That’s why we built
          <span className="inline-flex items-center gap-1.5 font-display font-bold text-ink">
            <img src={logoMark} alt="" className="h-8 w-8 object-contain" /> Pixorra
          </span>
        </p>
      </div>

      {/* Pinned collage */}
      <div className="reveal mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 px-5 sm:gap-8 md:grid-cols-4 md:px-8">
        {PINS.map((p, i) => (
          <figure
            key={p.cap}
            className={`card-wiggle relative rounded-2xl border-2 border-ink bg-white p-3 pb-4 shadow-pixel ${p.rot}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <span
              aria-hidden
              className={`absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-ink ${p.pin}`}
            />
            <div className={`grid aspect-square place-items-center rounded-xl ${p.tint}`}>
              <img
                src={p.img}
                alt=""
                loading="lazy"
                width={200}
                height={200}
                className="h-4/5 w-4/5 object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center font-display text-sm font-bold text-ink md:text-base">
              {p.cap}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="reveal mx-auto mt-14 max-w-2xl px-5 text-xl leading-relaxed md:text-2xl">
        <p className="text-ink/35">Not as another agency.</p>
        <p className="text-ink/35">Not as a freelancer who vanishes after payment…</p>
        <p className="mt-6 text-ink/80">
          But as one team that builds the{" "}
          <MarkerHighlight color="var(--pixel-pink)">whole machine:</MarkerHighlight> website,
          Google, WhatsApp AI and content, all wired together. One goal: make your business the only
          choice in your city.
        </p>
      </div>
    </section>
  );
}
