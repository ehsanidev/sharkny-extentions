<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Placeholder admin helper file for the first Sharkny extension.
 * You can expand this file with custom SEO settings, audits, and report widgets.
 */

function sharkny_seo_admin_notice() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $screen = get_current_screen();

    if ($screen && 'toplevel_page_sharkny-seo-pack' === $screen->id) {
        echo '<div class="notice notice-info"><p>Welcome to your SEO starter extension. This is the foundation for custom optimization features.</p></div>';
    }
}

add_action('admin_notices', 'sharkny_seo_admin_notice');
