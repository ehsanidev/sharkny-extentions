import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDashboardStats, getExtensions, type Extension } from '@/lib/api';

type DashboardStats = {
  totalExtensions: number;
  activeStores: number;
  avgRating: string;
  developers: number;
};

const fallbackStats: DashboardStats = {
  totalExtensions: 28,
  activeStores: 18420,
  avgRating: '4.9',
  developers: 10,
};

const fallbackExtensions: Extension[] = [
  {
    id: '1',
    name: 'SEO Optimization Pack',
    category: 'seo',
    price: 49,
    status: 'active',
    description: 'Meta control, schema blocks, and optimization workflows.',
  },
  {
    id: '2',
    name: 'WooCommerce Conversion Booster',
    category: 'ecommerce',
    price: 79,
    status: 'active',
    description: 'Smart cart flows and conversion-focused enhancements.',
  },
  {
    id: '3',
    name: 'AI Content Assistant',
    category: 'ai',
    price: 59,
    status: 'draft',
    description: 'Generate blog ideas and product copy from inside WordPress.',
  },
];

export default function DashboardPage() {
  const [extensions, setExtensions] = useState<Extension[]>(fallbackExtensions);
  const [stats, setStats] = useState<DashboardStats>(fallbackStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        const [nextExtensions, nextStats] = await Promise.all([
          getExtensions(),
          getDashboardStats(),
        ]);

        if (!active) return;
        setExtensions(nextExtensions);
        setStats(nextStats);
      } catch (error) {
        console.error('Failed to load dashboard data', error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="mb-8 flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3 backdrop-blur-sm">
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

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="inline-flex rounded-full bg-brand-500/10 px-2 py-1 text-xs font-medium text-brand-100">
              Total extensions
            </div>
            <div className="mt-4 text-3xl font-black text-white">
              {loading ? '...' : stats.totalExtensions}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
              Active stores
            </div>
            <div className="mt-4 text-3xl font-black text-white">
              {loading ? '...' : stats.activeStores.toLocaleString()}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="inline-flex rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-300">
              Avg. rating
            </div>
            <div className="mt-4 text-3xl font-black text-white">
              {loading ? '...' : `${stats.avgRating}/5`}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="inline-flex rounded-full bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-300">
              Developers
            </div>
            <div className="mt-4 text-3xl font-black text-white">
              {loading ? '...' : stats.developers}
            </div>
          </div>
        </div>

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
                  <th className="px-4 py-3 font-medium">Price</th>
                  <th className="px-4 py-3 font-medium">Description</th>
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
                          item.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-300'
                            : item.status === 'draft'
                              ? 'bg-slate-500/10 text-slate-300'
                              : 'bg-amber-500/10 text-amber-300'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white">${item.price}</td>
                    <td className="px-4 py-3 text-slate-300">
                      {item.description ?? 'Premium WordPress extension'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
