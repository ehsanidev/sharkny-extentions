export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-100">Sharkny</div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#marketplace">Marketplace</a>
            <a href="#extensions">Extensions</a>
            <a href="#about">About</a>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-100">
              premium wordpress tools
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white">
              Build, discover, and grow with WordPress extensions.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Sharkny Extensions is a marketplace and builder platform for plugin ideas, premium add-ons, and WordPress growth solutions.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-700">
                Explore market
              </button>
              <button className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-100 hover:border-slate-500">
                Create plugin
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-brand-500/10">
            <div className="grid gap-4">
              {[
                'SEO Optimization Pack',
                'WooCommerce Conversion Booster',
                'AI Content Assistant',
                'Data Security Shield'
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{item}</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
