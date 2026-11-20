import { Star, BadgeCheck } from "lucide-react";
import SocialCards, { type CardItem } from "@/components/ui/card-fan-carousel";

// Same client reviews as the original Pixorra site.
const REVIEWS = [
  {
    name: "Aman Kapoor",
    biz: "2 weeks ago",
    text: "Got my restaurant website done in 9 days. Looks premium, loads fast, and my online orders have already doubled. 10/10 recommend.",
    tint: "bg-[#fff1f7]",
    dot: "bg-pixel-pink",
  },
  {
    name: "Neha Ramesh",
    biz: "1 month ago",
    text: "The team is patient and extremely professional. They actually explain everything in simple language. Loved the final result.",
    tint: "bg-[#eafaff]",
    dot: "bg-pixel-cyan",
  },
  {
    name: "Rohit Jadhav",
    biz: "1 month ago",
    text: "Ran Google Ads with Pixorra for my coaching class — ₹8 lead cost down from ₹40 with my old agency. Proof is in the numbers.",
    tint: "bg-[#fffbe0]",
    dot: "bg-pixel-yellow",
  },
  {
    name: "Sanya Mehta",
    biz: "2 months ago",
    text: "Shopify store came out beautiful. Mobile experience especially is top class. Customer support over WhatsApp is instant.",
    tint: "bg-[#f3ecff]",
    dot: "bg-pixel-purple",
  },
  {
    name: "Vikram Iyer",
    biz: "3 months ago",
    text: "Honest agency. No unnecessary upselling. They told me what I needed and what I didn't. Rare to find in this industry.",
    tint: "bg-[#effbe9]",
    dot: "bg-pixel-green",
  },
  {
    name: "Divya Sharma",
    biz: "3 months ago",
    text: "Branding + website package was worth every rupee. My clients keep complimenting the new look. Thank you Pixorra!",
    tint: "bg-[#fff4e8]",
    dot: "bg-pixel-orange",
  },
];

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  const initials = r.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div
      className={`flex h-full w-full flex-col rounded-[1.5rem] border-2 border-ink p-5 md:p-6 ${r.tint}`}
    >
      <div className="flex text-ink" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-pixel-yellow text-ink" strokeWidth={1.5} />
        ))}
      </div>
      <p className="mt-4 flex-1 font-display text-[1.05rem] font-semibold leading-snug text-ink md:text-lg">
        “{r.text}”
      </p>
      <div className="mt-5 flex items-center gap-3 border-t-2 border-dashed border-ink/15 pt-4">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink font-display text-sm font-bold text-ink ${r.dot}`}
        >
          {initials}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-sm font-bold text-ink">
            {r.name} <BadgeCheck className="h-3.5 w-3.5 text-pixel-blue" />
          </div>
          <div className="text-xs text-ink/55">{r.biz}</div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsFan() {
  const cards: CardItem[] = REVIEWS.map((r) => ({ content: <ReviewCard r={r} /> }));
  return (
    <section id="reviews" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
            Reviews
          </span>
          <span className="h-px flex-1 bg-ink/10" />
        </div>
        <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
          Good people. <span className="text-ink/35">Great work.</span>
        </h2>
        <p className="mt-3 text-sm font-semibold text-ink/50">Swipe, drag or use ← → keys</p>
      </div>
      <div className="mt-6 md:mt-10">
        <SocialCards cards={cards} />
      </div>
    </section>
  );
}
