import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Camera, Leaf, MessageCircle, Soup, Sprout } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteShell } from "@/components/site/SiteShell";
import { FooterKree8 } from "@/components/site/FooterKree8";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { MarkerHighlight } from "@/components/site/MarkerHighlight";
import { calBookingUrl, calDataAttributes } from "@/lib/cal";

export const Route = createFileRoute("/donate")({
  component: CaresPage,
  head: () => ({
    meta: [
      { title: "Pixorra Cares | Trees and meals from our work" },
      {
        name: "description",
        content:
          "Part of what Pixorra Studio earns goes to planting trees and feeding children. Small things, done every month.",
      },
      { property: "og:title", content: "Pixorra Cares" },
      { property: "og:image", content: "https://pixorrastudio.com/donate/sapling.jpg" },
    ],
  }),
});

const Photo = ({
  src,
  alt,
  cap,
  className = "",
}: {
  src: string;
  alt: string;
  cap?: string;
  className?: string;
}) => (
  <figure
    className={`reveal group relative overflow-hidden rounded-[1.5rem] border-2 border-ink bg-white shadow-pixel ${className}`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {cap && (
      <figcaption className="absolute bottom-3 left-3 rounded-full border-2 border-ink bg-white/95 px-3 py-0.5 font-hand text-lg text-ink">
        {cap}
      </figcaption>
    )}
  </figure>
);

const Label = ({ children }: { children: string }) => (
  <div className="reveal mx-auto flex max-w-4xl items-center gap-3 px-5 md:px-8">
    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
      {children}
    </span>
    <span className="h-px flex-1 bg-ink/10" />
  </div>
);

const PILLARS = [
  {
    icon: Sprout,
    title: "We plant trees",
    text: "Saplings planted and cared for, so the city gets a little greener every month.",
    img: "/donate/canopy.jpg",
    alt: "Tall green trees seen from below",
    tint: "bg-[#effbe9]",
  },
  {
    icon: Soup,
    title: "We feed children",
    text: "Warm, simple meals for children who need them most.",
    img: "/donate/girl-meal.jpg",
    alt: "A little girl sitting on the ground eating food",
    tint: "bg-[#fffbe0]",
  },
];

const STEPS = [
  ["01", "You grow with Pixorra", "You get a website, WhatsApp AI and Google visibility."],
  ["02", "A part goes to good", "Some of what we earn funds trees and meals."],
  ["03", "We show you", "Photos and updates from the drives, shared with our clients."],
];

function CaresPage() {
  useReveal();
  return (
    <SiteShell>
      <main className="relative text-ink">
        <section className="bg-background">
          <div className="mx-auto max-w-5xl px-5 pt-10 sm:pt-14 md:px-10 md:pt-20">
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
              Pixorra Cares
            </p>
            <h1 className="reveal mt-5 font-display text-[2.35rem] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-6xl md:text-[4.2rem]">
              Every website we build <span className="text-ink/35">leaves a little</span> good
              behind.
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink/65 md:text-xl">
              A part of what we earn goes to planting trees and feeding children. No big speeches.
              Just small things, done every month.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 px-3 pb-20 sm:gap-4 md:h-[620px] md:grid-cols-4 md:grid-rows-2 md:px-10 md:pb-0">
            <Photo
              src="/donate/sapling.jpg"
              alt="Hands holding a small seedling in soil"
              cap="it starts small"
              className="col-span-2 aspect-square md:row-span-2 md:aspect-auto"
            />
            <Photo
              src="/donate/kids-smiling.jpg"
              alt="Five children smiling and making peace signs"
              className="aspect-[4/5] md:aspect-auto"
            />
            <Photo
              src="/donate/planting.jpg"
              alt="A woman and a child planting a young tree"
              className="aspect-[4/5] md:aspect-auto"
            />
            <Photo
              src="/donate/bowl.jpg"
              alt="A child eating from a bowl"
              cap="a warm meal"
              className="col-span-2 aspect-[16/9] md:aspect-auto"
            />
          </div>
          <div className="hidden h-28 md:block" />
        </section>

        <section className="bg-cream py-24 md:py-32">
          <div className="reveal mx-auto max-w-2xl px-5 text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">
            <p>We build websites for local businesses. That’s the job.</p>
            <p className="mt-6">
              But every time a new business goes live, we think about the people and the city around
              it....
            </p>
            <p className="mt-6">
              So we made a simple promise:{" "}
              <MarkerHighlight color="var(--pixel-green)">a tree lives</MarkerHighlight>, and{" "}
              <MarkerHighlight color="var(--pixel-yellow)">a child eats.</MarkerHighlight>
            </p>
          </div>

          <div className="mt-20">
            <Label>What we do</Label>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-10">
            {PILLARS.map(({ icon: Icon, title, text, img, alt, tint }) => (
              <article
                key={title}
                className={`reveal overflow-hidden rounded-[1.75rem] border-2 border-ink shadow-pixel ${tint}`}
              >
                <div className="aspect-[16/10] overflow-hidden border-b-2 border-ink">
                  <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold">{title}</h2>
                  <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <Label>How it works</Label>
          </div>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-4 px-5 md:grid-cols-3 md:px-10">
            {STEPS.map(([n, t, d]) => (
              <li
                key={n}
                className="reveal rounded-2xl border-2 border-ink bg-white p-5 shadow-pixel"
              >
                <span className="font-pixel text-[10px] text-pixel-pink">{n}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{t}</h3>
                <p className="mt-1.5 text-ink/65">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* For businesses: SDG green certificate in every package */}
        <section className="bg-background pt-24 md:pt-32">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2 md:px-10">
            <div className="reveal">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#15803d] ring-1 ring-[#15803d]/20">
                <Leaf className="h-3.5 w-3.5" /> For businesses
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Every package comes with an{" "}
                <MarkerHighlight color="var(--pixel-green)">SDG certificate.</MarkerHighlight>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/65">
                When you build with Pixorra, your business gets an SDG green certificate showing you
                stand for cleaner air and less pollution. Put it on your website, your shop counter
                and your socials. Customers notice the businesses that care.
              </p>
              <ul className="mt-6 space-y-2.5 text-[15px] font-semibold text-ink/80">
                {[
                  "Included free in every package",
                  "Aligned with the UN Sustainable Development Goals",
                  "A trust badge you can show on your site",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-[#15803d]" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate preview */}
            <div className="reveal">
              <div className="relative mx-auto max-w-md rotate-[-2deg] rounded-[1.5rem] border-2 border-ink bg-[#fffdf6] p-2 shadow-[8px_8px_0_0_#111] transition-transform duration-500 hover:rotate-0">
                <div className="rounded-[1.1rem] border-2 border-dashed border-[#15803d]/40 px-6 py-8 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#15803d] text-white shadow-[0_8px_20px_-8px_#15803d]">
                    <Leaf className="h-7 w-7" />
                  </span>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#15803d]">
                    Certificate of commitment
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-ink">
                    SDG Green Business
                  </div>
                  <div className="mx-auto mt-4 h-px w-24 bg-ink/15" />
                  <p className="mt-4 text-sm text-ink/55">Proudly presented to</p>
                  <p className="font-sign text-4xl leading-tight text-ink">Your Business</p>
                  <p className="mt-2 text-xs text-ink/50">
                    for supporting cleaner air and a pollution-free future
                  </p>
                  <div className="mt-6 flex items-center justify-between text-left text-[10px] font-semibold uppercase tracking-wider text-ink/40">
                    <span>Pixorra Cares</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#15803d]/50 text-[#15803d]">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <span>Kolkata, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 md:py-28">
          <div className="reveal mx-auto max-w-3xl px-5 text-center md:px-10">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-[#fff1f7]">
              <Camera className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Grow your business. <span className="text-ink/35">Do some good on the way.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink/65">
              Want to join a tree drive or help on a meal day? Message us. We’d love the company.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={calBookingUrl}
                {...calDataAttributes}
                className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-yellow-cta px-7 font-bold shadow-pixel"
              >
                Book free demo <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20would%20like%20to%20join%20a%20tree%20or%20meal%20drive."
                target="_blank"
                rel="noreferrer"
                className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-7 font-bold shadow-pixel"
              >
                <MessageCircle className="h-4 w-4 text-pixel-green" /> Join a drive
              </a>
            </div>
            <p className="mt-10 text-xs text-ink/40">
              Photos: Noah Buscher, Larm Rmah, Eyoel Kahssay, Wietse Jongsma, Casey Horner and
              Gayatri Malhotra on Unsplash.
            </p>
          </div>
        </section>

        <FooterKree8 />
        <FloatingWhatsApp />
      </main>
    </SiteShell>
  );
}
