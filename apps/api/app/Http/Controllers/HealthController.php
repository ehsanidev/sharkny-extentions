<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HealthController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'ok',
            'service' => 'sharkny-extensions-api',
            'timestamp' => now()->toISOString(),
            'environment' => env('APP_ENV', 'local'),
        ]);
    }
}
