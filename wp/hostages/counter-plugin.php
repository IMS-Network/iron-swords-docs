<?php
/**
 * Plugin Name: hostages Counter Plugin
 * Description: A hostages plugin to embed a date counter with a shortcode.
 * Version: 1.0
 * Author: Iron Swords
 */

function hostages_counter_shortcode() {
    ob_start();
    ?>
    <div id="bthn" lang="en"></div>
    <script>
        (function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://bringthemhomenow.net/1.1.0/hostages-ticker.js";
            script.setAttribute(
                "integrity",
                "sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne"
            );
            script.setAttribute("crossorigin", "anonymous");
            document.getElementsByTagName("head")[0].appendChild(script);
        })();
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('hostages_counter', 'hostages_counter_shortcode');

function hostages_counter_plugin_styles() {
    wp_enqueue_style('hostages-counter-styles', plugin_dir_url(__FILE__) . 'styles.css');
}
add_action('wp_enqueue_scripts', 'hostages_counter_plugin_styles');
