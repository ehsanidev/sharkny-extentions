<?php

namespace App\Http\Controllers;

use App\Models\Extension;
use Illuminate\Http\Request;

class ExtensionController extends Controller
{
    public function index()
    {
        $extensions = Extension::query()->orderBy('created_at', 'desc')->get();

        return response()->json([
            'data' => $extensions->map(function ($extension) {
                return [
                    'id' => (string) $extension->_id,
                    'name' => $extension->name,
                    'category' => $extension->category,
                    'price' => $extension->price,
                    'status' => $extension->status,
                    'description' => $extension->description,
                    'featured' => $extension->featured ?? false,
                    'rating' => $extension->rating ?? 4.8,
                    'downloads' => $extension->downloads ?? 0,
                ];
            })->values(),
        ]);
    }

    public function show(string $id)
    {
        $extension = Extension::findOrFail($id);

        return response()->json([
            'data' => [
                'id' => (string) $extension->_id,
                'name' => $extension->name,
                'category' => $extension->category,
                'price' => $extension->price,
                'status' => $extension->status,
                'description' => $extension->description,
                'featured' => $extension->featured ?? false,
                'rating' => $extension->rating ?? 4.8,
                'downloads' => $extension->downloads ?? 0,
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
            'featured' => 'nullable|boolean',
            'rating' => 'nullable|numeric|min:0|max:5',
            'downloads' => 'nullable|integer|min:0',
        ]);

        $validated['status'] = $validated['status'] ?? 'draft';
        $extension = Extension::create($validated);

        return response()->json([
            'message' => 'Extension created successfully.',
            'data' => [
                'id' => (string) $extension->_id,
                'name' => $extension->name,
                'category' => $extension->category,
                'price' => $extension->price,
                'status' => $extension->status,
                'description' => $extension->description,
                'featured' => $extension->featured ?? false,
                'rating' => $extension->rating ?? 4.8,
                'downloads' => $extension->downloads ?? 0,
            ],
        ], 201);
    }
}
