<?php

if (!defined('ABSPATH')) {
    exit;
}

final class Sharkny_SEO_Optimization_Pack {
    private static $instance = null;

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    private function __construct() {
        add_action('admin_menu', [$this, 'register_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
        add_filter('the_content', [$this, 'inject_schema_markup'], 20);
    }

    public function register_admin_menu() {
        add_menu_page(
            __('SEO Optimization Pack', 'sharkny-seo'),
            __('SEO Pack', 'sharkny-seo'),
            'manage_options',
            'sharkny-seo-pack',
            [$this, 'render_admin_page'],
            'dashicons-chart-area',
            26
        );
    }

    public function enqueue_admin_assets($hook) {
        if ('toplevel_page_sharkny-seo-pack' !== $hook) {
            return;
        }

        wp_enqueue_style(
            'sharkny-seo-admin',
            plugin_dir_url(__FILE__) . '../assets/admin.css',
            [],
            '1.0.0'
        );
    }

    public function render_admin_page() {
        $settings = get_option('sharkny_seo_pack_settings', [
            'meta_title' => get_bloginfo('name'),
            'meta_description' => '',
            'schema_enabled' => '1',
            'focus_keyword' => '',
        ]);

        if (isset($_POST['sharkny_seo_pack_nonce']) && wp_verify_nonce($_POST['sharkny_seo_pack_nonce'], 'sharkny_save_seo_settings')) {
            $settings['meta_title'] = sanitize_text_field($_POST['meta_title'] ?? '');
            $settings['meta_description'] = sanitize_textarea_field($_POST['meta_description'] ?? '');
            $settings['schema_enabled'] = !empty($_POST['schema_enabled']) ? '1' : '0';
            $settings['focus_keyword'] = sanitize_text_field($_POST['focus_keyword'] ?? '');
            update_option('sharkny_seo_pack_settings', $settings);

            echo '<div class="notice notice-success"><p>SEO settings saved.</p></div>';
        }

        ?>
        <div class="wrap sharkny-seo-wrap">
            <h1><?php echo esc_html__('SEO Optimization Pack', 'sharkny-seo'); ?></h1>
            <form method="post" action="">
                <?php wp_nonce_field('sharkny_save_seo_settings', 'sharkny_seo_pack_nonce'); ?>

                <div class="card">
                    <h2>General SEO</h2>
                    <table class="form-table" role="presentation">
                        <tbody>
                            <tr>
                                <th scope="row"><label for="meta_title">Default meta title</label></th>
                                <td>
                                    <input id="meta_title" name="meta_title" type="text" class="regular-text" value="<?php echo esc_attr($settings['meta_title']); ?>" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="meta_description">Default meta description</label></th>
                                <td>
                                    <textarea id="meta_description" name="meta_description" rows="4" class="large-text"><?php echo esc_textarea($settings['meta_description']); ?></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="focus_keyword">Focus keyword</label></th>
                                <td>
                                    <input id="focus_keyword" name="focus_keyword" type="text" class="regular-text" value="<?php echo esc_attr($settings['focus_keyword']); ?>" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"><label for="schema_enabled">Enable schema</label></th>
                                <td>
                                    <label>
                                        <input type="checkbox" id="schema_enabled" name="schema_enabled" value="1" <?php checked('1', $settings['schema_enabled']); ?> />
                                        Enable Organization schema markup
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <?php submit_button('Save SEO Settings'); ?>
            </form>
        </div>
        <?php
    }

    public function inject_schema_markup($content) {
        $settings = get_option('sharkny_seo_pack_settings', []);

        if (empty($settings['schema_enabled']) || '1' !== $settings['schema_enabled']) {
            return $content;
        }

        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => get_bloginfo('name'),
            'url' => home_url('/'),
            'description' => $settings['meta_description'] ?? get_bloginfo('description'),
        ];

        $markup = '<script type="application/ld+json">' . wp_json_encode($schema) . '</script>';

        return $content . $markup;
    }
}
