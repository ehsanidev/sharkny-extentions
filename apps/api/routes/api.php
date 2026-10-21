<?php

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;

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
            ['id' => 1, 'name' => 'SEO Optimization Pack', 'status' => 'active'],
            ['id' => 2, 'name' => 'WooCommerce Conversion Booster', 'status' => 'active'],
            ['id' => 3, 'name' => 'AI Content Assistant', 'status' => 'draft']
        ]
    ]);
});
