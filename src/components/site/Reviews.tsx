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
    <section id="reviews" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Bubble gum background blobs */}
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-pixel-yellow/25 blur-3xl blob" aria-hidden />
      <div className="absolute top-1/3 -left-24 h-96 w-96 rounded-full bg-pixel-pink/20 blur-3xl blob" style={{animationDelay:"3s"}} aria-hidden />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-pixel-purple/20 blur-3xl blob" style={{animationDelay:"5s"}} aria-hidden />
      <div className="absolute top-20 left-12 h-3 w-3 bg-pixel-cyan sparkle-pulse" aria-hidden />
      <div className="absolute top-40 right-20 h-2.5 w-2.5 bg-pixel-pink sparkle-pulse" style={{animationDelay:"1s"}} aria-hidden />
      <div className="absolute bottom-32 left-24 h-3 w-3 bg-pixel-yellow sparkle-pulse" style={{animationDelay:"2s"}} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-ink px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-ink uppercase shadow-pixel">
              <span className="h-2 w-2 rounded-full bg-pixel-pink" /> Google Reviews
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance leading-[1.05]">
              Loved by founders <span className="text-gradient-pixorra">across India.</span>
            </h2>
          </div>
          <div className="rounded-3xl bg-white border-2 border-ink shadow-pixel px-6 py-5 flex items-center gap-5">
            <div>
              <div className="font-display text-4xl font-bold text-ink leading-none">4.9</div>
              <div className="flex gap-0.5 mt-1">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-3.5 w-3.5 fill-pixel-yellow text-pixel-yellow"/>))}</div>
              <div className="text-[11px] text-ink/50 mt-1">120+ Google reviews</div>
            </div>
            <a href="https://maps.app.goo.gl/sTNgPTT55oj3Fpv89?g_st=iw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full bg-gradient-pixorra text-white text-sm font-semibold border-2 border-ink hover:-translate-y-0.5 transition-transform">
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
