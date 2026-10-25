import Link from 'next/link';

const extensions = [
  {
    id: '1',
    name: 'SEO Optimization Pack',
    category: 'seo',
    price: 49,
    status: 'active',
  },
  {
    id: '2',
    name: 'WooCommerce Conversion Booster',
    category: 'ecommerce',
    price: 79,
    status: 'active',
  },
  {
    id: '3',
    name: 'AI Content Assistant',
    category: 'ai',
    price: 59,
    status: 'draft',
  },
  {
    id: '4',
    name: 'Security Hardening Suite',
    category: 'security',
    price: 69,
    status: 'review',
  },
];

const stats = [
  ['Total extensions', '28'],
  ['Drafts', '3'],
  ['Published', '8'],
  ['Revenue', '$12.4k'],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Studio</p>
            <h1 className="mt-2 text-4xl font-black text-white">Extension dashboard</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-slate-500">
            Back to home
          </Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <div className="text-sm text-slate-400">{label}</div>
              <div className="mt-3 text-3xl font-black text-white">{value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Recent extension entries</h2>
            <a href="/create" className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
              New extension
            </a>
          </div>

          <div className="space-y-4">
            {extensions.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.category} • {item.status}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-brand-100">${item.price}</span>
                  <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:border-slate-500">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
