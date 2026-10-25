<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'service' => 'sharkny-extensions-api',
        'timestamp' => now()->toISOString(),
    ]);
});

Route::get('/extensions', function () {
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
});

Route::get('/extensions/{id}', function (string $id) {
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
});

Route::post('/extensions', function (\Illuminate\Http\Request $request) {
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
});

Route::get('/stats', function () {
    return response()->json([
        'data' => [
            'totalExtensions' => 28,
            'activeStores' => 18420,
            'avgRating' => '4.9',
            'developers' => 10,
        ],
    ]);
});
