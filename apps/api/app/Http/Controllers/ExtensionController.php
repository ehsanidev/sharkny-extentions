<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExtensionController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => [
                [
                    'id' => '1',
                    'name' => 'SEO Optimization Pack',
                    'category' => 'seo',
                    'price' => 49,
                    'status' => 'active',
                    'description' => 'Meta control, schema blocks, and optimization workflows.',
                ],
                [
                    'id' => '2',
                    'name' => 'WooCommerce Conversion Booster',
                    'category' => 'ecommerce',
                    'price' => 79,
                    'status' => 'active',
                    'description' => 'Smart cart flows and conversion-focused enhancements.',
                ],
                [
                    'id' => '3',
                    'name' => 'AI Content Assistant',
                    'category' => 'ai',
                    'price' => 59,
                    'status' => 'draft',
                    'description' => 'Generate blog ideas and product copy from inside WordPress.',
                ],
            ],
        ]);
    }

    public function show(string $id)
    {
        return response()->json([
            'data' => [
                'id' => $id,
                'name' => 'SEO Optimization Pack',
                'category' => 'seo',
                'price' => 49,
                'status' => 'active',
                'description' => 'Meta control, schema blocks, and optimization workflows.',
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:120',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'status' => 'nullable|string|in:draft,active,review',
        ]);

        $validated['id'] = (string) ((int) now()->format('U') + random_int(1000, 9999));
        $validated['status'] = $validated['status'] ?? 'draft';

        return response()->json([
            'message' => 'Extension created successfully.',
            'data' => $validated,
        ], 201);
    }
}
