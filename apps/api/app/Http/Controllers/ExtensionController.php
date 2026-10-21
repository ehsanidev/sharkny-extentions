<?php

namespace App\Http\Controllers;

use App\Models\Extension;
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
                ],
                [
                    'id' => '2',
                    'name' => 'WooCommerce Conversion Booster',
                    'category' => 'ecommerce',
                    'price' => 79,
                    'status' => 'active',
                ],
                [
                    'id' => '3',
                    'name' => 'AI Content Assistant',
                    'category' => 'ai',
                    'price' => 59,
                    'status' => 'draft',
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
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:120',
            'price' => 'required|numeric',
        ]);

        $extension = Extension::create($validated);

        return response()->json([
            'message' => 'Extension created successfully.',
            'data' => $extension,
        ], 201);
    }
}
