/**
 * BLOCK: will-work-for-ko-fi
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
const { Fragment } = wp.element;

import { TextControl } from '@wordpress/components';
import { ColorPicker } from '@wordpress/components';

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
	title: __("Will Work for Ko-fi"), // Block title.
	icon: iconEl, //
	category: "widgets", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("Will Work for Ko-fi"),
		__("ko-fi"),
		__("donation"),
	],
	attributes: {
		headingText: {
			type: "string",
			default: "Your Cool Heading",
		},
		descriptionText: {
			type: "string",
			default: "Your cool description goes here.",
		},
		buttonText: {
			type: "string",
			default: "hit me!",
		},
		buttonColour: {
			type: "string",
			default: "#29abe0",
		},
		kofiCode: {
			type: "string",
			default: "D1D7YARD",
		},
	},

	// Live render in editor.
	edit: function (props) {
		const {
			attributes: {
				headingText,
				descriptionText,
				buttonText,
				buttonColour,
				kofiCode,
			},
			setAttributes,
		} = props;

		function sanitize(dirty) {
			return DOMPurify.sanitize(dirty);
		}

		function setHeadingText( heading ) {
			const value = sanitize(heading);
			setAttributes( { headingText: value } );
		}
		
		function setDescriptionText( description ) {
			const value = sanitize(description);
			setAttributes( { descriptionText: value } );
		}

		function setButtonText( button ) {
			const value = sanitize(button);
			setAttributes( { buttonText: value } );
		}

		function setButtonColour( colour ) {
			setAttributes( { buttonColour: colour.hex } );
		}

		function setKofiCode( kofiCode ) {
			const value = sanitize(kofiCode);
			setAttributes( { kofiCode: value } );
		}

		kofiwidget2.init(buttonText, buttonColour, kofiCode);
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __('Ko-fi Button Settings') }>
						<PanelRow>
							<TextControl
								label="Button Text"
								id="button-text"
        						value={ buttonText }
        						onChange={ setButtonText }
    						/>
						</PanelRow>
						<PanelRow>
							<ColorPicker
            					color={ buttonColour }
            					onChangeComplete={ setButtonColour }
            					disableAlpha
        					/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Code/username"
								id="kofi-code"
        						value={ kofiCode }
        						onChange={ setKofiCode }
    						/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<section id="kofi-meta">
					<div className="kofi-meta kofi-meta__row">
						<TextControl
								label="Heading (h3)"
								id="kofi-heading"
        						value={ headingText }
        						onChange={ setHeadingText }
    						/>
					</div>
					<div className="kofi-meta kofi-meta__row">
						<TextControl
								label="Description (p)"
								id="kofi-description"
        						value={ descriptionText }
        						onChange={ setDescriptionText }
    						/>						
					</div>
				</section>
				<section id="ko-fi-widget">
					<div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }} />
				</section>
			</Fragment>
		);
	},

	save: function( props ) {
		const {
			attributes: {
				headingText,
				descriptionText,
				buttonText,
				buttonColour,
				kofiCode,
			},
		} = props;

		kofiwidget2.init(buttonText, buttonColour, kofiCode);
		return (
			<article>
				<section>
					<h3>{ headingText }</h3>
				</section>
				<section>
					<p>{ descriptionText }</p>
				</section>
				<section id="ko-fi-widget">
					<div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }} />
				</section>
			</article>
		);
	}
});
