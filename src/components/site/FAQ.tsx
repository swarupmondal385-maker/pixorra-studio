import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";

const FAQS = [
  { q: "How long does it take to build my website?", a: "Most projects go live in 7–10 working days once we have your content and brand inputs. Complex e-commerce or custom builds may take 2–3 weeks." },
  { q: "What does it cost?", a: "Our starter websites begin at ₹14,999, with Shopify and custom builds scaling based on scope. Every quote is fixed upfront — no surprises later." },
  { q: "Do I need to provide all the content and images?", a: "No. We write your copy, source visuals and structure your pages. Just share your business details on the intro call — we take care of the rest." },
  { q: "Will my website actually rank on Google?", a: "Every site we build is SEO-ready from day one — clean code, fast loading, structured data and proper keyword targeting. Many of our clients rank in the top 3 locally within 60–90 days." },
  { q: "Can I update the website myself later?", a: "Yes. We hand over a simple dashboard so you can edit text, swap images, add offers, and post blogs without touching code." },
  { q: "What if I don't like the design?", a: "You see a free demo before paying. We also include two rounds of revisions on every package — your complete satisfaction is the deal." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes 30 days of post-launch support, and we offer affordable monthly maintenance plans from ₹1,999/month." },
  { q: "Do you work with clients outside Mumbai?", a: "Absolutely. We serve clients across India — Pune, Delhi, Bangalore, Kolkata, Chennai, Hyderabad, Surat and beyond. Everything runs smoothly over WhatsApp and Google Meet." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center reveal">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Questions? Answered.</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
            Everything you want to know<br className="hidden md:block"/> before you say yes.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="reveal rounded-2xl border border-black/10 bg-white overflow-hidden" style={{animationDelay:`${i*40}ms`}}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left p-5 md:p-6 hover:bg-cream transition-colors"
              >
                <span className="font-display text-lg md:text-xl font-semibold text-ink">{f.q}</span>
                <Plus className={`h-5 w-5 text-gold shrink-0 transition-transform ${open===i?"rotate-45":""}`} />
              </button>
              <div className={`grid transition-all duration-500 ease-out ${open===i?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-6 text-ink/70 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-ink/60">Still have questions?</p>
          <a
            href="https://wa.me/919932740091?text=Hi%20Pixorra!%20I%20have%20a%20question."
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[oklch(0.72_0.18_145)] text-white font-semibold"
          >
            <MessageCircle className="h-4 w-4" /> Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
