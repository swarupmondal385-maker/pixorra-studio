export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-bold tracking-[0.2em] text-pixel-pink uppercase">About Pixorra</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
              We're not an agency. We're your <span className="text-gradient-pixorra">business's growth engine.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-lg md:text-xl text-ink/75 leading-relaxed">
              Most agencies sell you a pretty website and disappear. Pixorra builds the entire system — the website, the funnel, the AI chatbot, the WhatsApp follow-up, the CRM, the automation — all wired together with one goal: make your business the obvious choice in your city.
            </p>
            <p className="mt-6 text-lg text-ink/65 leading-relaxed">
              We work with gyms, clinics, restaurants, coaching institutes and local businesses across India who are tired of getting leads that go nowhere. We don't just get you online — we build the machine that converts strangers into clients, <span className="text-ink font-semibold">automatically.</span>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
              {[
                { k: "7–10", v: "Day Delivery", pop: "card-pop-pink" },
                { k: "4.9★", v: "Google Rated", pop: "card-pop-yellow" },
                { k: "150+", v: "Businesses Grown", pop: "card-pop-cyan" },
              ].map((x) => (
                <div key={x.v} className={`rounded-2xl glass-card p-5 md:p-6 ${x.pop}`}>
                  <div className="font-display text-2xl md:text-4xl font-bold text-ink">{x.k}</div>
                  <div className="mt-1 text-xs md:text-sm text-ink/60">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
