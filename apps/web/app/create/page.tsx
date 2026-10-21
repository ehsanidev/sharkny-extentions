'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createExtension } from '@/lib/api';

export default function CreateExtensionPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '49',
    description: '',
    status: 'draft',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await createExtension({
        name: form.name,
        category: form.category,
        price: Number(form.price),
        description: form.description,
        status: form.status,
      });

      setMessage('Extension created successfully.');
      setForm({
        name: '',
        category: '',
        price: '49',
        description: '',
        status: 'draft',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Builder</p>
            <h1 className="mt-2 text-4xl font-black text-white">Create extension</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:border-slate-500">
            Back to dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Extension name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-brand-500"
                placeholder="SEO Optimization Pack"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Category</span>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-500"
                placeholder="seo"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Price</span>
              <input
                name="price"
                type="number"
                min="0"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-brand-500"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-slate-300">Status</span>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-brand-500"
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="review">In review</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block space-y-2">
            <span className="text-sm text-slate-300">Description</span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-500"
              placeholder="Describe the extension value, target users, and core functionality."
            />
          </label>

          {message ? <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</div> : null}
          {error ? <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div> : null}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-brand-700"
            >
              {loading ? 'Creating...' : 'Create extension'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
