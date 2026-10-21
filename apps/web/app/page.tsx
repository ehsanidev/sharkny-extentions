export type Extension = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  description?: string;
};

const defaultApiUrl = 'http://localhost:8000/api';

export async function getExtensions(): Promise<Extension[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/extensions`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch extensions');
    }

    const data = await res.json();
    return Array.isArray(data?.data) ? data.data : [];
  } catch (error) {
    console.error('Error fetching extensions:', error);
    return [
      {
        id: 'fallback-1',
        name: 'SEO Optimization Pack',
        category: 'seo',
        price: 49,
        status: 'active',
        description: 'Meta control, schema blocks, and optimization workflows.',
      },
      {
        id: 'fallback-2',
        name: 'WooCommerce Conversion Booster',
        category: 'ecommerce',
        price: 79,
        status: 'active',
        description: 'Smart cart flows and conversion-focused enhancements.',
      },
    ];
  }
}

export async function getDashboardStats() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl}/stats`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch stats');
    }

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
