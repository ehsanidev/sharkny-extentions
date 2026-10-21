<?php

namespace Database\Seeders;

use App\Models\Extension;
use Illuminate\Database\Seeder;

class ExtensionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Extension::query()->delete();

        $extensions = [
            [
                'name' => 'SEO Optimization Pack',
                'category' => 'seo',
                'price' => 49,
                'status' => 'active',
                'description' => 'Meta control, schema blocks, and AI-assisted optimization workflows for content teams.',
                'featured' => true,
                'rating' => 4.9,
                'downloads' => 1480,
                'tags' => ['seo', 'schema', 'content'],
            ],
            [
                'name' => 'WooCommerce Conversion Booster',
                'category' => 'ecommerce',
                'price' => 79,
                'status' => 'active',
                'description' => 'Smart cart flows, urgency triggers, and conversion-focused store enhancements.',
                'featured' => true,
                'rating' => 4.8,
                'downloads' => 920,
                'tags' => ['woocommerce', 'sales', 'conversion'],
            ],
            [
                'name' => 'AI Content Assistant',
                'category' => 'ai',
                'price' => 59,
                'status' => 'active',
                'description' => 'Generate product descriptions, blog ideas, and publishing summaries directly in WordPress.',
                'featured' => true,
                'rating' => 4.9,
                'downloads' => 1370,
                'tags' => ['ai', 'content', 'automation'],
            ],
            [
                'name' => 'Security Hardening Suite',
                'category' => 'security',
                'price' => 69,
                'status' => 'active',
                'description' => 'Protect login flows, lock down admin access, and monitor suspicious activity.',
                'featured' => false,
                'rating' => 4.7,
                'downloads' => 860,
                'tags' => ['security', 'hardening', 'protection'],
            ],
            [
                'name' => 'Form Builder Pro',
                'category' => 'forms',
                'price' => 64,
                'status' => 'draft',
                'description' => 'Advanced conditional forms, file uploads, CRM integrations, and automated follow-ups.',
                'featured' => false,
                'rating' => 4.6,
                'downloads' => 540,
                'tags' => ['forms', 'crm', 'lead-gen'],
            ],
            [
                'name' => 'Booking & Reservations',
                'category' => 'booking',
                'price' => 89,
                'status' => 'active',
                'description' => 'Manage appointments, service slots, and customer bookings from a streamlined admin panel.',
                'featured' => false,
                'rating' => 4.8,
                'downloads' => 730,
                'tags' => ['booking', 'appointments', 'scheduling'],
            ],
            [
                'name' => 'Multilingual Content Pack',
                'category' => 'translation',
                'price' => 54,
                'status' => 'active',
                'description' => 'Localize content quickly with language switching, translation management, and SEO-friendly routing.',
                'featured' => false,
                'rating' => 4.7,
                'downloads' => 610,
                'tags' => ['translation', 'multilingual', 'seo'],
            ],
            [
                'name' => 'Analytics Dashboard',
                'category' => 'analytics',
                'price' => 72,
                'status' => 'active',
                'description' => 'Visualize traffic, performance, plugin activity, and user engagement in one dashboard.',
                'featured' => true,
                'rating' => 4.9,
                'downloads' => 990,
                'tags' => ['analytics', 'reports', 'dashboard'],
            ],
            [
                'name' => 'Social Share & Growth Toolkit',
                'category' => 'marketing',
                'price' => 58,
                'status' => 'review',
                'description' => 'Share buttons, CTA popups, social proof blocks, and growth automation widgets.',
                'featured' => false,
                'rating' => 4.6,
                'downloads' => 430,
                'tags' => ['marketing', 'social', 'growth'],
            ],
            [
                'name' => 'Performance & Cache Manager',
                'category' => 'performance',
                'price' => 75,
                'status' => 'active',
                'description' => 'Optimize caching, image handling, and speed tests with production-ready performance rules.',
                'featured' => true,
                'rating' => 4.9,
                'downloads' => 1110,
                'tags' => ['performance', 'cache', 'speed'],
            ],
        ];

        foreach ($extensions as $extension) {
            Extension::query()->create($extension);
        }
    }
}
