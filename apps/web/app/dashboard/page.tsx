import Link from 'next/link';

const stats = [
  { label: 'Total extensions', value: '28', tone: 'bg-brand-500/10 text-brand-100' },
  { label: 'Active stores', value: '18,420', tone: 'bg-emerald-500/10 text-emerald-300' },
  { label: 'Avg. rating', value: '4.9/5', tone: 'bg-amber-500/10 text-amber-300' },
  { label: 'Monthly revenue', value: '$12.4K', tone: 'bg-cyan-500/10 text-cyan-300' },
];

const extensions = [
  { id: 1, name: 'SEO Optimization Pack', category: 'SEO', status: 'Published', price: '$49', sales: '1,240', updated: '2h ago' },
  { id: 2, name: 'WooCommerce Conversion Booster', category: 'Ecommerce', status: 'Published', price: '$79', sales: '980', updated: '4h ago' },
  { id: 3, name: 'AI Content Assistant', category: 'AI', status: 'Draft', price: '$59', sales: '420', updated: '1d ago' },
  { id: 4, name: 'Security Hardening Suite', category: 'Security', status: 'Review', price: '$69', sales: '310', updated: '3d ago' },
  { id: 5, name: 'Form Builder Pro', category: 'Forms', status: 'Published', price: '$64', sales: '540', updated: '5h ago' },
];

const categoryBreakdown = [
  { name: 'SEO', count: 8 },
  { name: 'Analytics', count: 5 },
  { name: 'Commerce', count: 6 },
  { name: 'AI', count: 4 },
  { name: 'Security', count: 3 },
];

const activity = [
  'New review added for WooCommerce Conversion Booster',
  'SEO Optimization Pack reached 1,240 sales',
  'Security Hardening Suite moved to review',
  'Form Builder Pro was updated by product team',
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="mb-10 flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="text-xl font-black text-brand-100">Sharkny</div>
            <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
              Admin
            </span>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/" className="hover:text-white">Overview</Link>
            <Link href="/dashboard" className="font-medium text-white">Dashboard</Link>
            <Link href="/create" className="hover:text-white">Create</Link>
            <a href="#" className="hover:text-white">Analytics</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 px-3 py-2 text-sm hover:border-slate-500">
              Filters
            </button>
            <Link href="/create" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700">
              New extension
            </Link>
          </div>
        </nav>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${stat.tone}`}>
                {stat.label}
              </div>
              <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.8fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Marketplace</p>
                <h2 className="mt-1 text-2xl font-black text-white">Extensions</h2>
              </div>
              <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:border-slate-500">
                Export CSV
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
                <thead className="bg-slate-950/60 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Sales</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900">
                  {extensions.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/60">
                      <td className="px-4 py-3 font-medium text-white">{item.name}</td>
                      <td className="px-4 py-3 text-slate-300">{item.category}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            item.status === 'Published'
                              ? 'bg-emerald-500/10 text-emerald-300'
                              : item.status === 'Draft'
                                ? 'bg-slate-500/10 text-slate-300'
                                : 'bg-amber-500/10 text-amber-300'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-300">{item.sales}</td>
                      <td className="px-4 py-3 text-white">{item.price}</td>
                      <td className="px-4 py-3 text-slate-400">{item.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">Category split</h3>
              <div className="mt-5 space-y-4">
                {categoryBreakdown.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                      <span>{item.name}</span>
                      <span>{item.count}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                        style={{ width: `${(item.count / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">Recent activity</h3>
              <ul className="mt-4 space-y-3">
                {activity.map((item) => (
                  <li key={item} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-300">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
