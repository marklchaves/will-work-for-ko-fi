<?php
/**
 * Plugin Name: Will Work For Ko-fi
 * Plugin URI: https://github.com/marklchaves/will-work-for-ko-fi
 * Description: A custom Gutenberg block for the Ko-fi donation button.
 * Author: caught my eye
 * Author URI: https://www.caughtmyeye.cc/
 * Version: 2.1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package WILL_WORK_FOR_KO_FI
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
