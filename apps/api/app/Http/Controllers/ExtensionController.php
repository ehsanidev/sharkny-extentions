<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExtensionController;
use App\Http\Controllers\HealthController;
use Illuminate\Support\Facades\Route;

Route::get('/health', [HealthController::class, 'index']);
Route::get('/stats', [DashboardController::class, 'index']);
Route::get('/extensions', [ExtensionController::class, 'index']);
Route::get('/extensions/{id}', [ExtensionController::class, 'show']);
Route::post('/extensions', [ExtensionController::class, 'store']);

Route::fallback(function () {
    return response()->json([
        'message' => 'Route not found',
    ], 404);
});
