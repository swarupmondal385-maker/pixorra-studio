import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";

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
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { PixelParallax } from "@/components/site/PixelParallax";
import { SummerSale } from "@/components/site/SummerSale";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pixorra — The Complete Growth System for Indian Businesses" },
      {
        name: "description",
        content:
          "AI automation, high-converting websites, funnels, WhatsApp systems & local SEO — all built to turn strangers into paying clients. Delivered in 7–10 days.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixorrastudio.com" },
      { property: "og:title", content: "Pixorra — The Complete Growth System for Indian Businesses" },
      {
        property: "og:description",
        content:
          "AI automation, high-converting websites, funnels, WhatsApp systems & local SEO — all built to turn strangers into paying clients. Delivered in 7–10 days.",
      },
      { property: "og:image", content: "https://pixorrastudio.com/pixorra-mark.png" },
      { property: "og:image:alt", content: "Pixorra Studio logo mark" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pixorra — The Complete Growth System for Indian Businesses" },
      {
        name: "twitter:description",
        content:
          "AI automation, high-converting websites, funnels, WhatsApp systems & local SEO — all built to turn strangers into paying clients. Delivered in 7–10 days.",
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
      <Process />
      <Gallery />
      <Pricing />


      <Services />
      <Stats />
      <WhyUs />
      <Results />
      <Reviews />
      <Team />
      <TrustBadges />
      <DemoBanner />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <SummerSale />
    </main>
  );
}
