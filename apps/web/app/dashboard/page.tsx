import Link from 'next/link';
import { getDashboardStats, getExtensions } from '@/lib/api';

export default async function HomePage() {
  const extensions = await getExtensions();
  const stats = await getDashboardStats();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-sm">
          <div className="text-xl font-bold text-brand-100">Sharkny</div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#marketplace" className="hover:text-white">Marketplace</a>
            <a href="#extensions" className="hover:text-white">Extensions</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          </div>
          <Link href="/dashboard" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700">
            Launch Studio
          </Link>
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
              WordPress extension marketplace
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Build, sell, and scale premium WordPress tools.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Sharkny Extensions is a full-stack development starter for creators, agencies, and SaaS teams building custom WordPress add-ons with a modern stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#extensions" className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-700">
                Explore market
              </a>
              <Link href="/dashboard" className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:border-slate-500">
                Create plugin
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Marketplace plugins', value: stats.totalExtensions },
                { label: 'Active stores', value: stats.activeStores.toLocaleString() },
                { label: 'Avg. rating', value: `${stats.avgRating}/5` },
                { label: 'Developer tools', value: stats.developers },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <div className="text-2xl font-black text-white">{String(stat.value)}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-brand-900/20">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Featured collection</p>
                <h2 className="text-xl font-bold text-white">Top extensions</h2>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                live
              </span>
            </div>

            <div className="space-y-4">
              {extensions.slice(0, 4).map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-white">{item.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">{item.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-brand-100">${item.price}</div>
                      <div className="text-xs text-amber-300">★ 4.9</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{item.description ?? 'A premium WordPress extension for growth and efficiency.'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="extensions" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Marketplace</p>
            <h2 className="mt-2 text-3xl font-black text-white">Featured extension ideas</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-brand-100 hover:text-white">See all</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {extensions.map((item) => (
            <article key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 h-28 rounded-2xl bg-gradient-to-br from-brand-500/20 via-slate-800 to-slate-900" />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-100">
                  {item.category}
                </span>
                <span className="text-sm text-amber-300">★ 4.9</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description ?? 'A premium WordPress add-on.'}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-black text-white">${item.price}</span>
                <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium hover:border-slate-500">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Design extension brief', 'Define target users, monetization strategy and plugin functionality.'],
            ['02', 'Build and test', 'Create the plugin structure and validate integration with WordPress standards.'],
            ['03', 'Launch and iterate', 'Publish in the marketplace and collect feedback for improvements.'],
          ].map(([step, title, copy]) => (
            <div key={step} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-100">{step}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
