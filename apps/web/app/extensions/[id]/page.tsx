import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExtensionById } from '@/lib/api';

export default async function ExtensionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const extension = await getExtensionById(id);

  if (!extension) {
    notFound();
  }

  const statusTone =
    extension.status === 'active'
      ? 'bg-emerald-500/10 text-emerald-300'
      : extension.status === 'draft'
        ? 'bg-slate-500/10 text-slate-300'
        : 'bg-amber-500/10 text-amber-300';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">
            ← Back to dashboard
          </Link>

          <Link
            href="/create"
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700"
          >
            Create similar extension
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-brand-500/5">
          <div className="border-b border-slate-800 bg-slate-950/50 px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Extension</p>
                <h1 className="mt-2 text-3xl font-black text-white">{extension.name}</h1>
              </div>

              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusTone}`}>
                {extension.status}
              </span>
            </div>
          </div>

          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Description</p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {extension.description ?? 'No description provided for this extension yet.'}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</div>
                  <div className="mt-2 text-lg font-bold text-white">{extension.category}</div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</div>
                  <div className="mt-2 text-lg font-bold text-white">${extension.price}</div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">ID</div>
                  <div className="mt-2 text-lg font-bold text-white">#{extension.id}</div>
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Summary</div>
                <p className="mt-4 text-4xl font-black text-white">${extension.price}</p>
                <p className="mt-2 text-sm text-slate-400">Premium marketplace listing</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick actions</div>
                <div className="mt-4 space-y-3">
                  <button className="w-full rounded-lg bg-brand-500 px-4 py-2.5 font-semibold text-white hover:bg-brand-700">
                    Publish listing
                  </button>
                  <button className="w-full rounded-lg border border-slate-700 px-4 py-2.5 font-semibold text-slate-100 hover:border-slate-500">
                    Edit extension
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
