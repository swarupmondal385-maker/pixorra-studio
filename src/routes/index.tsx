import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { BuiltFor } from "@/components/site/BuiltFor";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { WhyUs } from "@/components/site/WhyUs";
import { Results } from "@/components/site/Results";
import { Reviews } from "@/components/site/Reviews";
import { Team } from "@/components/site/Team";
import { TrustBadges } from "@/components/site/TrustBadges";
import { DemoBanner } from "@/components/site/DemoBanner";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Location } from "@/components/site/Location";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp, MobileStickyBar } from "@/components/site/FloatingWhatsApp";
import { PixelParallax } from "@/components/site/PixelParallax";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      // ─── Page-owned tags ──────────────────────────────────────────────────
      // This route owns 100% of all page-content tags.
      // Root (__root.tsx) deliberately defines NONE of these.

      // Title & description
      { title: "Pixorra Studio" },
      {
        name: "description",
        content:
          "High-converting websites, Google Ads, SEO, Shopify stores and branding for ambitious Indian businesses. Delivered in 7–10 days. Free demo website for every new lead.",
      },

      // Open Graph — page-specific
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixorrastudio.com" },
      { property: "og:title", content: "Pixorra Studio — Websites that make your business the obvious choice" },
      {
        property: "og:description",
        content:
          "Premium digital agency in Mumbai. High-converting websites, Google Ads, SEO & branding delivered in 7–10 days. Free demo for every new lead.",
      },
      { property: "og:image", content: "https://pixorrastudio.com/pixorra-mark.png" },
      { property: "og:image:alt", content: "Pixorra Studio logo mark" },
      // og:image:width / og:image:height live in root (supplementary, no conflict)

      // Twitter / X — page-specific
      // twitter:site / twitter:creator live in root (account-level, no conflict)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pixorra Studio — Premium Digital Agency, Mumbai" },
      {
        name: "twitter:description",
        content:
          "Websites, Google Ads, SEO & branding for ambitious Indian businesses. Delivered in 7–10 days.",
      },
      { name: "twitter:image", content: "https://pixorrastudio.com/pixorra-mark.png" },
      { name: "twitter:image:alt", content: "Pixorra Studio logo mark" },
    ],
    links: [
      { rel: "canonical", href: "https://pixorrastudio.com" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="text-ink min-h-screen relative">
      <PixelParallax />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Pricing />
      <BuiltFor />
      <Process />
      <Stats />
      <WhyUs />
      <Results />
      <Reviews />
      <Team />
      <TrustBadges />
      <DemoBanner />
      <Gallery />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
      <div className="md:hidden h-16" aria-hidden />
    </main>
  );
}
