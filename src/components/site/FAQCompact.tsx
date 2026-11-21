import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";

const FAQS: [string, string][] = [
  [
    "Growth or Growth Max?",
    "Growth (₹19,999): up to 10 pages, CRM, local SEO, AI + WhatsApp bot, 3 years of support. Max (₹29,999): up to 15 pages, automations, booking and payments, 5 years of support.",
  ],
  [
    "Can I pay in EMI?",
    "Yes. ₹14,999 to start, then ₹499 a month for Growth or ₹799 a month for Max.",
  ],
  [
    "Do I pay before I see anything?",
    "No. Free demo in 48 hours. Pay 20% only if you love it, 80% on delivery.",
  ],
  ["How fast will it be live?", "7–10 days after you approve the demo (10–14 days for Max)."],
  [
    "How does the content plan work?",
    "₹1,000 per video, campaign post and creative included. Starts at 5 a month; 10 is ₹9,999.",
  ],
  ["Who owns the website?", "You do. Domain, site and content are yours after the final payment."],
];

/** Compact FAQ: sticky heading on the left, short accordion on the right. */
export function FAQCompact() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:gap-10 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div className="md:sticky md:top-10 md:self-start">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/40">
              FAQ
            </span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
            Questions? <span className="text-ink/35">Quick answers.</span>
          </h2>
          <a
            href="https://wa.me/918927840261?text=Hi%20Pixorra!%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="btn-lift mt-4 hidden h-11 md:inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 text-sm font-bold shadow-pixel"
          >
            <MessageCircle className="h-4 w-4 text-[#34c759]" /> Ask on WhatsApp
          </a>
        </div>

        <ul className="divide-y-2 divide-ink/10 rounded-[1.5rem] border-2 border-ink bg-white px-4 shadow-pixel md:px-5">
          {FAQS.map(([q, a], i) => {
            const on = open === i;
            return (
              <li key={q}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                >
                  <span className="font-display text-[15px] font-semibold md:text-[17px] text-ink">
                    {q}
                  </span>
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
                  <p className="overflow-hidden pb-0 text-[14px] leading-relaxed text-ink/65 [&:not(:empty)]:pb-3 md:text-[15px]">
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
