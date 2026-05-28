import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Gem, HeartHandshake, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Pixorra Studio" },
      {
        name: "description",
        content:
          "Pixorra is a Mumbai-based digital studio crafting premium websites, brands and growth systems for ambitious Indian businesses.",
      },
      { property: "og:title", content: "About — Pixorra Studio" },
      {
        property: "og:description",
        content: "Premium websites, branding and growth — built in Mumbai for ambitious Indian businesses.",
      },
    ],
  }),
});

const VALUES = [
  {
    icon: Gem,
    title: "Craft over speed-runs",
    body: "Every pixel, every word, every micro-interaction is intentional. No templates, no shortcuts.",
    accent: "bg-gold/15 text-gold",
  },
  {
    icon: Compass,
    title: "Strategy first, design second",
    body: "We design backwards from the business outcome — bookings, sales, qualified leads.",
    accent: "bg-pixel-cyan/30 text-ink",
  },
  {
    icon: Zap,
    title: "Ship in days, not quarters",
    body: "Most websites launch in 7–10 days. You move fast because we do.",
    accent: "bg-pixel-pink/25 text-ink",
  },
  {
    icon: HeartHandshake,
    title: "We answer the phone",
    body: "A real studio with a real team. No tickets, no offshore relays — just direct WhatsApp.",
    accent: "bg-pixel-purple/25 text-ink",
  },
];

function AboutPage() {
  useReveal();
  return (
    <main className="bg-background text-ink min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-hero overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 bg-gold/20 blob" />
          <div className="absolute top-40 -right-24 h-96 w-96 bg-pixel-cyan/20 blob" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold border border-ink/10">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> ABOUT PIXORRA
          </div>
          <h1 className="mt-5 font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tight font-medium text-balance">
            A small studio with a{" "}
            <span className="italic text-gradient-pixorra">big standard.</span>
          </h1>
          <p className="mt-6 text-ink/65 text-lg max-w-2xl mx-auto text-balance">
            Pixorra is a Mumbai-based digital studio building premium websites, brands and growth systems for
            ambitious Indian businesses. We work with founders who care about how their work looks — and how
            well it performs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PremiumButton href="/#demo" variant="gold">
              Work With Us <ArrowRight className="h-4 w-4" />
            </PremiumButton>
            <PremiumButton href="/portfolio" variant="ghost">
              See Our Work
            </PremiumButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="reveal">
              <div className="text-xs font-bold uppercase tracking-widest text-gold">Our story</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium text-ink text-balance">
                Born from a frustration with{" "}
                <span className="italic text-ink/80">cookie-cutter</span> websites.
              </h2>
            </div>
            <div className="reveal space-y-5 text-ink/70 text-lg leading-relaxed">
              <p>
                Pixorra started in a small Mumbai apartment with a single rule: <b className="text-ink">never
                ship a website we wouldn't be proud to put our name on.</b>
              </p>
              <p>
                Today we're a tight-knit team of designers, developers and growth specialists. We've shipped
                150+ websites for clinics, D2C brands, restaurants, studios and SaaS founders — all built
                with the same obsessive attention to craft.
              </p>
              <p>
                We don't take on every project. We take on the ones where we know we can move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream border-y-2 border-ink/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl reveal">
            <div className="text-xs font-bold uppercase tracking-widest text-gold">What we believe</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-medium text-ink">
              Four things we won't compromise on.
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal group relative rounded-3xl bg-card border-2 border-ink/10 p-7 shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${v.accent} border border-ink/10`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-ink/65">{v.body}</p>
                <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="relative rounded-[2rem] overflow-hidden border-2 border-ink shadow-card-lg bg-gradient-pixorra p-10 md:p-16 text-center">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-25" />
            <div className="relative reveal">
              <h2 className="font-display text-3xl md:text-5xl font-medium text-white text-balance">
                Let's build something{" "}
                <span className="italic">worth being proud of.</span>
              </h2>
              <p className="mt-5 text-white/80 text-lg max-w-xl mx-auto">
                Free demo. No pressure. We'll show you what's possible before we send a single invoice.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PremiumButton href="/#demo" variant="gold">
                  Book My Free Demo <ArrowRight className="h-4 w-4" />
                </PremiumButton>
                <PremiumButton
                  href="https://wa.me/918927840261?text=Hi%20Pixorra!"
                  variant="glass"
                  className="!text-white"
                >
                  Chat on WhatsApp
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
