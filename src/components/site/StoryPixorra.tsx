import logoMark from "@/assets/pixorra-mark.png";
import { MarkerHighlight } from "./MarkerHighlight";
import { StoryCollage } from "./StoryCollage";

const Label = ({ children }: { children: string }) => (
  <div className="reveal mx-auto mt-20 flex max-w-4xl items-center gap-3 px-5 md:mt-28 md:px-8">
    <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
      {children}
    </span>
    <span className="h-px flex-1 bg-ink/10" />
  </div>
);

const LETTERS = "SCATTERED".split("");
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
                className={`letter-bob grid h-9 w-9 place-items-center rounded-full border-2 border-ink font-pixel text-[10px] text-ink md:h-10 md:w-10 bg-white`}
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

      <StoryCollage />

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
