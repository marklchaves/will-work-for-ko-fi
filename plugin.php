<?php
/**
 * Plugin Name: Will Work For Ko-fi — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: will-work-for-ko-fi-cgb — is a Gutenberg plugin created via create-guten-block.
 * Author: caught my eye
 * Author URI: https://www.caughtmyeye.cc/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
