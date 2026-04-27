export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">About Pixorra</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold text-ink tracking-tight text-balance">
              A Mumbai studio built for <span className="text-navy">ambitious founders.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="text-lg md:text-xl text-ink/75 leading-relaxed">
              Pixorra is a new kind of digital agency — part design studio, part growth partner. We work with clinics, restaurants, gyms, D2C brands and service businesses across India who are tired of overpaying bloated agencies for slow, generic websites.
            </p>
            <p className="mt-6 text-lg text-ink/65 leading-relaxed">
              Our playbook is simple: ship fast, measure everything, and obsess over the one thing most agencies forget — <span className="text-ink font-semibold gold-underline">actual customers in your inbox.</span>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
              {[
                { k: "7–10", v: "Day Delivery" },
                { k: "4.9★", v: "Google Rated" },
                { k: "150+", v: "Businesses Grown" },
              ].map((x) => (
                <div key={x.v} className="rounded-2xl bg-white p-5 md:p-6 border border-black/5 shadow-card">
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
