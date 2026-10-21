<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => [
                'totalExtensions' => 28,
                'activeStores' => 18420,
                'avgRating' => '4.9',
                'developers' => 10,
            ],
        ]);
    }
}
