<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', [\App\Http\Controllers\HealthController::class, 'index']);
Route::get('/extensions', [\App\Http\Controllers\ExtensionController::class, 'index']);
Route::get('/extensions/{id}', [\App\Http\Controllers\ExtensionController::class, 'show']);
Route::post('/extensions', [\App\Http\Controllers\ExtensionController::class, 'store']);
