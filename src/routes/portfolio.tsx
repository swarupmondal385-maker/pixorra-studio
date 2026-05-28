import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp, Star } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Pixorra Studio" },
      {
        name: "description",
        content:
          "A curated look at websites Pixorra has shipped — clinics, D2C brands, studios and SaaS — designed to convert and built to rank.",
      },
      { property: "og:title", content: "Portfolio — Pixorra Studio" },
      {
        property: "og:description",
        content: "Selected case studies and recent launches from Pixorra Studio.",
      },
    ],
  }),
});

const PROJECTS = [
  {
    name: "Aarogya Clinic",
    cat: "Healthcare · Mumbai",
    tag: "+320% organic leads",
    grad: "from-[#0f1b3d] via-[#1e3a8a] to-[#3b82f6]",
    swatch: "bg-pixel-cyan",
  },
  {
    name: "Saanvi Jewels",
    cat: "D2C · Shopify",
    tag: "₹0 → ₹5L / month",
    grad: "from-[#3b1f1f] via-[#7a3a2a] to-[#D9B85C]",
    swatch: "bg-pixel-yellow",
  },
  {
    name: "Nimbus Studio",
    cat: "Agency · Branding",
    tag: "Awwwards-style site",
    grad: "from-[#101317] via-[#1e293b] to-[#475569]",
    swatch: "bg-pixel-pink",
  },
  {
    name: "Lotus Yoga",
    cat: "Wellness · Bookings",
    tag: "210% bookings lift",
    grad: "from-[#0f3a2f] via-[#1f6b55] to-[#a7e8c2]",
    swatch: "bg-pixel-green",
  },
  {
    name: "Maker Labs",
    cat: "SaaS · Marketing site",
    tag: "1.8s LCP, AAA",
    grad: "from-[#1a103d] via-[#3b1f7a] to-[#a78bfa]",
    swatch: "bg-pixel-purple",
  },
  {
    name: "Tandoor & Co.",
    cat: "Restaurant · Local SEO",
    tag: "#1 on Google Maps",
    grad: "from-[#3d1010] via-[#8a1f1f] to-[#f59e0b]",
    swatch: "bg-pixel-orange",
  },
];

function PortfolioPage() {
  useReveal();
  return (
    <main className="bg-background text-ink min-h-screen">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-hero overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 bg-pixel-cyan/20 blob" />
          <div className="absolute top-40 -right-24 h-96 w-96 bg-gold/20 blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-xs font-bold border border-ink/10">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> SELECTED WORK
            </div>
            <h1 className="mt-5 font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl text-ink tracking-tight font-medium text-balance">
              Work that <span className="italic text-gradient-pixorra">earns attention</span> —<br className="hidden md:block" />
              and revenue.
            </h1>
            <p className="mt-6 text-ink/65 text-lg max-w-2xl">
              A snapshot of recent launches across healthcare, D2C, hospitality, and SaaS. Each one built to
              load fast, rank well and convert better than what they had before.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PremiumButton href="/#demo" variant="gold">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </PremiumButton>
              <PremiumButton href="/" variant="ghost">
                ← Back Home
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => (
              <article
                key={p.name}
                className="reveal group relative rounded-3xl overflow-hidden border-2 border-ink shadow-card hover:shadow-card-lg transition-all duration-500 hover:-translate-y-1 bg-card"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.grad} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-25" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="w-full rounded-xl glass-strong border border-white/15 p-3">
                      <div className="flex items-center justify-between">
                        <div className={`h-2.5 w-2.5 rounded-full ${p.swatch} border border-ink`} />
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                          live preview
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 w-3/4 rounded bg-white/30" />
                      <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/20" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-ink/50">{p.cat}</div>
                  <h3 className="mt-1 font-display text-2xl font-medium text-ink">{p.name}</h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/80">
                    <TrendingUp className="h-4 w-4 text-gold" /> {p.tag}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream border-t-2 border-ink/10">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center reveal">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-ink text-balance">
            Your project could be the next one on this page.
          </h2>
          <p className="mt-5 text-ink/65 text-lg">
            We take on a small handful of projects each month. Book a free demo and we'll show you what
            your website could look like — before you pay a rupee.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PremiumButton href="/#demo" variant="gold">
              Book My Free Demo <ArrowRight className="h-4 w-4" />
            </PremiumButton>
            <Link
              to="/"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full border-2 border-ink bg-white text-ink font-bold shadow-pixel hover:bg-cream transition"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
