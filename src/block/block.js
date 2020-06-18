/**
 * BLOCK: will-work-for-ko-fi-cgb
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// import { __experimentalInputControl as InputControl } from '@wordpress/components';
// import { useState } from '@wordpress/compose';

import ServerSideRender from "@wordpress/server-side-render";

// const { withSelect } = wp.data; //import { withSelect } from "@wordpress/data";

const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;

const el = wp.element.createElement;

/**
 * Example of a custom SVG path taken from fontastic
*/
const iconEl = el('svg', { width: 24, height: 24 },
  el('path', { d: "M12,5h-2V3H2v4c0.0133,2.2091,1.8149,3.9891,4.024,3.9758C7.4345,10.9673,8.7362,10.2166,9.45,9H12c1.1046,0,2-0.8954,2-2&#xA;&#x9;S13.1046,5,12,5z M12,8H9.86C9.9487,7.6739,9.9958,7.3379,10,7V6h2c0.5523,0,1,0.4477,1,1S12.5523,8,12,8z M10,12.5&#xA;&#x9;c0,0.2761-0.2239,0.5-0.5,0.5h-7C2.2239,13,2,12.7761,2,12.5S2.2239,12,2.5,12h7C9.7761,12,10,12.2239,10,12.5z" } )
);

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-will-work-for-ko-fi-cgb", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Will Work for Ko-fi - CGB Block"), // Block title.
	icon: iconEl, //
	category: "widgets", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("Will Work for Ko-fi — CGB Block"),
		__("ko-fi"),
		__("donation"),
	],
	/* This breaks the server side rendering of posts. */
	attributes: {
		buttonText: {
			type: "string",
			default: "hit me!",
		},
		buttonColour: {
			type: "string",
			default: "#29abe0",
		},
		kofiID: {
			type: "string",
			default: "D1D7YARD",
		},
	},

	// Live render in editor.
	edit: function (props) {
		const {
			attributes: {
				buttonText,
				buttonColour,
				kofiID,
			},
			setAttributes,
		} = props;

		function setButtonText( event ) {
			const value = event.target.value;
			setAttributes( { buttonText: value } );
			event.preventDefault();
		}

		kofiwidget2.init(buttonText, buttonColour, kofiID);
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Ko-fi Button Settings') }>
						<PanelRow>
							<label>Button Text</label>
							<input type="text" id="button-text" value={ buttonText } onChange={ setButtonText }/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<section id="ko-fi-widget">
					<div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }} />
				</section>
			</Fragment>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				buttonText,
				buttonColour,
				kofiID,
			},
			setAttributes,
		} = props;

		kofiwidget2.init(buttonText, buttonColour, kofiID);
		return (
			<section id="ko-fi-widget">
				<div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }} />
			</section>
		);
	}
});
