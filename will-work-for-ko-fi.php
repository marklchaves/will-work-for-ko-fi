<?php 

/**
 * The main plugin file
 *
 * @link              https://github.com/marklchaves/will-work-for-ko-fi
 * @since             1.0.0
 * @package           will_work_for_ko_fi
 *
 * @wordpress-plugin
 * Plugin Name:       Will Work for Ko-fi
 * Plugin URI:        https://github.com/marklchaves/will-work-for-ko-fi
 * Description:       Custom Gutenberg Block (CGB) for the Ko-fi donation button.
 * Version:           1.2.0
 * Author:            caught my eye
 * Author URI:        https://www.caughtmyeye.cc
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       will-work-for-ko-fi
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'WILL_WORK_FOR_KO_FI_SLIDER_PLUGIN_NAME', 'will-work-for-ko-fi-plugin' );
define( 'WILL_WORK_FOR_KO_FI_SLIDER_PLUGIN_VERSION', '1.2.0' );

// Define path and URL to the LZB plugin.
define( 'WW4KOFI_LZB_PATH', plugin_dir_path( __FILE__ ) . '/inc/lzb/' );
define( 'WW4KOFI_LZB_URL', plugin_dir_url( __FILE__ ) . 'inc/lzb/' );

// Include the LZB plugin.
require_once WW4KOFI_LZB_PATH . 'lazy-blocks.php';

// Customize the url setting to fix incorrect asset URLs.
function ww4kofi_lzb_url( $url ) {
    return WW4KOFI_LZB_URL;
}
add_filter( 'lzb/plugin_url', 'ww4kofi_lzb_url' );

function enqueue_kofi_javascript()
{	
	// Add to footer section.
    wp_register_script( 'ko-fi-widget', 'https://ko-fi.com/widgets/widget_2.js', array(), '2', true );
 
    wp_enqueue_script( 'ko-fi-widget' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_kofi_javascript' );

if ( function_exists( 'lazyblocks' ) ) :

    lazyblocks()->add_block( array(
        'id' => 110,
        'title' => 'Will Work for Ko-fi',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" /></svg>',
        'keywords' => array(
            0 => 'donation',
            1 => 'mug',
            2 => 'ko-fi',
        ),
        'slug' => 'lazyblock/will-work-for-ko-fi',
        'description' => 'CGB for the Ko-fi donation button.',
        'category' => 'widgets',
        'category_label' => 'widgets',
        'supports' => array(
            'customClassName' => true,
            'anchor' => true,
            'align' => array(
                1 => 'center',
            ),
            'html' => false,
            'multiple' => true,
            'inserter' => true,
        ),
        'ghostkit' => array(
            'supports' => array(
                'spacings' => false,
                'display' => false,
                'scrollReveal' => false,
            ),
        ),
        'controls' => array(
            'control_682827462e' => array(
                'type' => 'text',
                'name' => 'heading',
                'default' => '',
                'label' => 'Heading',
                'help' => 'Optional',
                'child_of' => '',
                'placement' => 'content',
                'width' => '50',
                'hide_if_not_selected' => 'false',
                'save_in_meta' => 'false',
                'save_in_meta_name' => '',
                'required' => 'false',
                'placeholder' => 'Heading for your Ko-fi Button',
                'characters_limit' => '80',
            ),
            'control_385bcf435c' => array(
                'type' => 'text',
                'name' => 'description',
                'default' => '',
                'label' => 'Description',
                'help' => 'Nice place for a tag line or a CTA.',
                'child_of' => '',
                'placement' => 'content',
                'width' => '50',
                'hide_if_not_selected' => 'false',
                'save_in_meta' => 'false',
                'save_in_meta_name' => '',
                'required' => 'false',
                'placeholder' => '',
                'characters_limit' => '',
            ),
            'control_0519cd4413' => array(
                'type' => 'text',
                'name' => 'button-text',
                'default' => 'Support Me on Ko-fi',
                'label' => 'Button Text',
                'help' => 'The text on the button.',
                'child_of' => '',
                'placement' => 'content',
                'width' => '25',
                'hide_if_not_selected' => 'false',
                'save_in_meta' => 'false',
                'save_in_meta_name' => '',
                'required' => 'false',
                'placeholder' => '',
                'characters_limit' => '25',
            ),
            'control_c259b64158' => array(
                'type' => 'color',
                'name' => 'button-color',
                'default' => '#29abe0',
                'label' => 'Button Color',
                'help' => '',
                'child_of' => '',
                'placement' => 'content',
                'width' => '75',
                'hide_if_not_selected' => 'false',
                'save_in_meta' => 'false',
                'save_in_meta_name' => '',
                'required' => 'false',
                'placeholder' => '',
                'characters_limit' => '',
            ),
            'control_09abb346f9' => array(
                'type' => 'text',
                'name' => 'ko-fi-code-or-username',
                'default' => '',
                'label' => 'Ko-fi Code or Username',
                'help' => 'Ko-fi.com/',
                'child_of' => '',
                'placement' => 'content',
                'width' => '25',
                'hide_if_not_selected' => 'false',
                'save_in_meta' => 'false',
                'save_in_meta_name' => '',
                'required' => 'false',
                'placeholder' => '',
                'characters_limit' => '',
            ),
        ),
        'code' => array(
            'editor_html' => '',
            'editor_callback' => '',
            'editor_css' => '',
            'frontend_html' => '{{#if heading}}
    <h2>{{ heading }}</h2>
    {{/if}}
    
    {{#if description}}
    <p>{{ description }}</p>
    {{/if}}
    
    <script type=\'text/javascript\'>
        kofiwidget2.init(\'{{ button-text }}\', \'{{ button-color }}\', \'{{ ko-fi-code-or-username }}\');kofiwidget2.draw();
    </script> ',
            'frontend_callback' => '',
            'frontend_css' => '',
            'show_preview' => 'always',
            'single_output' => false,
            'use_php' => false,
        ),
        'condition' => array(
        ),
    ) );
    
endif;