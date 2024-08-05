<?php
/**
 * Plugin Name: Hostages Counter Plugin
 * Description: A hostages plugin to embed a date counter with a shortcode.
 * Version: 1.1
 * Author: Iron Swords
 */

function hostages_counter_shortcode() {
    return '<div id="bthn" lang="en"></div>';
}
add_shortcode('hostages_counter', 'hostages_counter_shortcode');

function hostages_counter_plugin_scripts() {
    wp_enqueue_script(
        'hostages-counter-script',
        'https://bringthemhomenow.net/1.1.0/hostages-ticker.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'hostages_counter_plugin_scripts');

function hostages_counter_plugin_styles() {
    wp_enqueue_style('hostages-counter-styles', plugin_dir_url(__FILE__) . 'styles.css');
}
add_action('wp_enqueue_scripts', 'hostages_counter_plugin_styles');
?>
