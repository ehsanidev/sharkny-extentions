export type Extension = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  description?: string;
};

export type DashboardStats = {
  totalExtensions: number;
  activeStores: number;
  avgRating: string;
  developers: number;
};

const defaultApiUrl = 'http://localhost:8000/api';

const extensionSeed: Extension[] = [
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
  {
    id: '4',
    name: 'Security Hardening Suite',
    category: 'security',
    price: 69,
    status: 'review',
    description: 'Protect login flows and lock down admin access.',
  },
];

export async function getExtensions(): Promise<Extension[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/extensions`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to fetch extensions');

    const data = await res.json();
    return Array.isArray(data?.data) ? data.data : extensionSeed;
  } catch (error) {
    console.error('Error fetching extensions:', error);
    return extensionSeed;
  }
}

export async function getExtensionById(id: string): Promise<Extension | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/extensions/${id}`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to fetch extension');

    const data = await res.json();
    return data?.data ?? extensionSeed.find((item) => item.id === id) ?? null;
  } catch (error) {
    console.error(`Error fetching extension ${id}:`, error);
    return extensionSeed.find((item) => item.id === id) ?? null;
  }
}

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/stats`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to fetch stats');

    const data = await res.json();
    return data?.data ?? {
      totalExtensions: 0,
      activeStores: 0,
      avgRating: '0.0',
      developers: 0,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      totalExtensions: 28,
      activeStores: 18420,
      avgRating: '4.9',
      developers: 10,
    };
  }
}

export async function createExtension(payload: {
  name: string;
  category: string;
  price: number;
  description?: string;
  status?: string;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/extensions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message ?? 'Failed to create extension');
  }

  return res.json();
}
