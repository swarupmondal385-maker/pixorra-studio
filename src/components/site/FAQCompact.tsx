import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";

const FAQS: [string, string][] = [
  [
    "What do I get for ₹14,999?",
    "The Growth Package: a full-stack website, a funnel and CRM, local SEO and Google visibility, and a 24/7 AI system with a WhatsApp bot. One-time payment.",
  ],
  [
    "Do I pay before I see anything?",
    "No. We build a free demo in 48 hours. You pay a 20% advance only if you love it, and the remaining 80% on delivery.",
  ],
  [
    "How fast will my website be live?",
    "7–10 days after you approve the demo. Custom apps are scoped together and get their own timeline.",
  ],
  [
    "How does the content plan work?",
    "It starts at 5 videos + 5 posts a month. Every video + designed post pair is ₹1,000, so 10 videos + 10 posts is ₹9,999 a month. Videos are shot and edited in 4K at 60 fps.",
  ],
  [
    "Who owns the website?",
    "You do. The domain, website and content belong to your business once the final payment is made.",
  ],
  [
    "Can I edit it myself later?",
    "Yes. You get a simple dashboard to change text, photos and offers without touching code.",
  ],
  [
    "What happens after launch?",
    "You get 30 days of free support on WhatsApp. After that, monthly maintenance is optional.",
  ],
  [
    "Do you only work in Kolkata?",
    "Our studio is in Kolkata, and we work with businesses across India over WhatsApp and Google Meet.",
  ],
];

/** Compact FAQ: sticky heading on the left, short accordion on the right. */
export function FAQCompact() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div className="md:sticky md:top-10 md:self-start">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
              FAQ
            </span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Questions? <span className="text-ink/35">Quick answers.</span>
          </h2>
          <a
            href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="btn-lift mt-6 inline-flex h-11 items-center gap-2 rounded-full border-2 border-ink bg-white px-5 text-sm font-bold shadow-pixel"
          >
            <MessageCircle className="h-4 w-4 text-[#34c759]" /> Ask on WhatsApp
          </a>
        </div>

        <ul className="divide-y-2 divide-ink/10 rounded-[1.5rem] border-2 border-ink bg-white px-5 shadow-pixel">
          {FAQS.map(([q, a], i) => {
            const on = open === i;
            return (
              <li key={q}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-display text-[17px] font-semibold text-ink">{q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink transition-all duration-300 ${
                      on ? "rotate-45 bg-yellow-cta" : "bg-white"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pb-0 text-[15px] leading-relaxed text-ink/65 [&:not(:empty)]:pb-4">
                    {a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
