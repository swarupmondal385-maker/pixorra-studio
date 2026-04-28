import { Star, BadgeCheck, ArrowUpRight } from "lucide-react";

const REVIEWS = [
  { name: "Aman Kapoor", when: "2 weeks ago", text: "Got my restaurant website done in 9 days. Looks premium, loads fast, and my online orders have already doubled. 10/10 recommend.", rating: 5 },
  { name: "Neha Ramesh", when: "1 month ago", text: "The team is patient and extremely professional. They actually explain everything in simple language. Loved the final result.", rating: 5 },
  { name: "Rohit Jadhav", when: "1 month ago", text: "Ran Google Ads with Pixorra for my coaching class — ₹8 lead cost down from ₹40 with my old agency. Proof is in the numbers.", rating: 5 },
  { name: "Sanya Mehta", when: "2 months ago", text: "Shopify store came out beautiful. Mobile experience especially is top class. Customer support over WhatsApp is instant.", rating: 5 },
  { name: "Vikram Iyer", when: "3 months ago", text: "Honest agency. No unnecessary upselling. They told me what I needed and what I didn't. Rare to find in this industry.", rating: 5 },
  { name: "Divya Sharma", when: "3 months ago", text: "Branding + website package was worth every rupee. My clients keep complimenting the new look. Thank you Pixorra!", rating: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Google Reviews</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
              Loved by founders <span className="text-navy">across India.</span>
            </h2>
          </div>
          <div className="rounded-3xl bg-cream border border-black/5 px-6 py-5 flex items-center gap-5">
            <div>
              <div className="font-display text-4xl font-bold text-ink leading-none">4.9</div>
              <div className="flex gap-0.5 mt-1">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-3.5 w-3.5 fill-gold text-gold"/>))}</div>
              <div className="text-[11px] text-ink/50 mt-1">120+ Google reviews</div>
            </div>
            <a href="https://maps.app.goo.gl/sTNgPTT55oj3Fpv89?g_st=iw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-ink text-white text-sm font-semibold">
              See on Google <ArrowUpRight className="h-4 w-4"/>
            </a>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => {
            const pops = ["card-pop-pink","card-pop-yellow","card-pop-cyan","card-pop-purple","card-pop-green","card-pop-orange"];
            const bgs = ["bg-pixel-pink","bg-pixel-yellow","bg-pixel-cyan","bg-pixel-purple","bg-pixel-green","bg-pixel-orange"];
            return (
            <div key={r.name} className={`reveal rounded-3xl bg-white p-7 ${pops[i % pops.length]}`} style={{animationDelay:`${i*60}ms`}}>
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-full border-2 border-ink ${bgs[i % bgs.length]} text-ink flex items-center justify-center font-bold`}>
                  {r.name.split(" ").map(x=>x[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-ink">{r.name}</span>
                    <BadgeCheck className="h-4 w-4 text-sky" />
                  </div>
                  <div className="text-xs text-ink/50">{r.when}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5">
                {Array.from({length:r.rating}).map((_,i)=>(<Star key={i} className="h-4 w-4 fill-gold text-gold"/>))}
              </div>
              <p className="mt-3 text-ink/75 leading-relaxed text-[15px]">"{r.text}"</p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
