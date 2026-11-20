import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteShell } from "@/components/site/SiteShell";
import { StoryPixorra } from "@/components/site/StoryPixorra";
import { WorkShowcase } from "@/components/site/WorkShowcase";
import { PricingKree8 } from "@/components/site/PricingKree8";
import { FinalNote } from "@/components/site/FinalNote";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";

import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
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
      {
        property: "og:title",
        content: "Pixorra — The Complete Growth System for Indian Businesses",
      },
      {
        property: "og:description",
        content:
          "AI automation, high-converting websites, funnels, WhatsApp systems & local SEO — all built to turn strangers into paying clients. Delivered in 7–10 days.",
      },
      { property: "og:image", content: "https://pixorrastudio.com/pixorra-mark.png" },
      { property: "og:image:alt", content: "Pixorra Studio logo mark" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Pixorra — The Complete Growth System for Indian Businesses",
      },
      {
        name: "twitter:description",
        content:
          "AI automation, high-converting websites, funnels, WhatsApp systems & local SEO — all built to turn strangers into paying clients. Delivered in 7–10 days.",
      },
      { name: "twitter:image", content: "https://pixorrastudio.com/pixorra-mark.png" },
      { name: "twitter:image:alt", content: "Pixorra Studio logo mark" },
    ],
    links: [{ rel: "canonical", href: "https://pixorrastudio.com" }],
  }),
});

function Index() {
  useReveal();
  return (
    <SiteShell>
      <main className="relative text-ink">
        <Hero />
        <Marquee />
        <StoryPixorra />
        <WorkShowcase />
        <Services />
        <Process />
        <PricingKree8 />
        <Reviews />
        <FAQ />
        <FinalNote />
        <Footer />
        <FloatingWhatsApp />
        <SummerSale />
      </main>
    </SiteShell>
  );
}
