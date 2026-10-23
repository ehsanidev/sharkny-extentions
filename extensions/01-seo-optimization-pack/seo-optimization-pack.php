<?php
/**
 * Plugin Name: Sharkny SEO Optimization Pack
 * Plugin URI: https://github.com/ehsanidev/sharkny-extentions
 * Description: A starter premium WordPress extension for SEO controls, schema support, and content optimization.
 * Version: 1.0.0
 * Author: Sharkny
 * Author URI: https://github.com/ehsanidev
 * Text Domain: sharkny-seo
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('Sharkny_SEO_Optimization_Pack')) {
    require_once __DIR__ . '/includes/class-sharkny-seo.php';
}

function sharkny_seo_optimization_pack_bootstrap() {
    return Sharkny_SEO_Optimization_Pack::instance();
}

sharkny_seo_optimization_pack_bootstrap();
