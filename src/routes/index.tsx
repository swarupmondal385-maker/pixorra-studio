import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteShell } from "@/components/site/SiteShell";
import { StoryPixorra } from "@/components/site/StoryPixorra";
import { WorkShowcase } from "@/components/site/WorkShowcase";
import { PricingKree8 } from "@/components/site/PricingKree8";
import { FinalNote } from "@/components/site/FinalNote";
import { HeroKree8 } from "@/components/site/HeroKree8";
import { ServicesScroll } from "@/components/site/ServicesScroll";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { ReviewsFan } from "@/components/site/ReviewsFan";
import { Marquee } from "@/components/site/Marquee";

import { FAQCompact } from "@/components/site/FAQCompact";
import { TrustedBy } from "@/components/site/TrustedBy";
import { FooterKree8 } from "@/components/site/FooterKree8";
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
        <HeroKree8 />
        <Marquee />
        <StoryPixorra />
        <WorkShowcase />
        <ServicesScroll />
        <ProcessFlow />
        <PricingKree8 />
        <ReviewsFan />
        <FAQCompact />
        <TrustedBy />
        <FinalNote />
        <FooterKree8 />
        <FloatingWhatsApp />
        <SummerSale />
      </main>
    </SiteShell>
  );
}
