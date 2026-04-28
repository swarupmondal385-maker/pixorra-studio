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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pixorra — Mumbai's Premium Digital Agency | Websites, Ads & Branding" },
      { name: "description", content: "High-converting websites, Google Ads, SEO, Shopify stores and branding for ambitious Indian businesses. Delivered in 7–10 days. Free demo website for every new lead." },
      { property: "og:title", content: "Pixorra — Websites that make your business the obvious choice" },
      { property: "og:description", content: "Premium digital agency in Mumbai. Websites, Google Ads, SEO and branding delivered in 7–10 days. Free demo for every new lead." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="bg-white text-ink min-h-screen">
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
