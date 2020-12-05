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
 * coffee icon by walkerstudio13 on the Noun Project.
*/
const iconEl = el('svg', { width: 24, height: 24 },
  el('path', { d: "M9.69,29.48V15.47c-3.58,0.32-6.39,3.34-6.39,7S6.11,29.15,9.69,29.48z" } ),
  el('polygon', { points: "32.7,12.89 10.97,12.89 10.97,14.8 10.97,30.15 10.97,32.06 32.7,32.06" } ),
  el('path', { d: "M14.16,9.05c0.35,0,0.64-0.29,0.64-0.64V4.58c0-0.35-0.29-0.64-0.64-0.64s-0.64,0.29-0.64,0.64v3.84   C13.53,8.76,13.81,9.05,14.16,9.05z" } ),
  el('path', { d: "M21.84,9.05c0.35,0,0.64-0.29,0.64-0.64V4.58c0-0.35-0.29-0.64-0.64-0.64S21.2,4.22,21.2,4.58v3.84   C21.2,8.76,21.48,9.05,21.84,9.05z" } ),
  el('path', { d: "M29.51,9.05c0.35,0,0.64-0.29,0.64-0.64V4.58c0-0.35-0.29-0.64-0.64-0.64c-0.35,0-0.64,0.29-0.64,0.64v3.84   C28.87,8.76,29.15,9.05,29.51,9.05z" } )
);

const sectionStyles = {
	paddingTop: ".45rem",
	paddingBottom: "0"
};
  
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
			default: "",
		},
		descriptionText: {
			type: "string",
			default: "",
		},
		buttonText: {
			type: "string",
			default: "Support me on Ko-fi",
		},
		buttonColour: {
			type: "string",
			default: "#29abe0",
		},
		kofiCode: {
			type: "string",
			default: "",
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
								placeholder="Make a Statement"
        						onChange={ setHeadingText }
    						/>
					</div>
					<div className="kofi-meta kofi-meta__row">
						<TextControl
								label="Description (p)"
								id="kofi-description"
								value={ descriptionText }
								placeholder="Nice place for a tag line or a CTA."
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
				<section className="section__kofi">
					<h3>{ headingText }</h3>
				</section>
				<section className="section__kofi">
					<p>{ descriptionText }</p>
				</section>
				<section id="ko-fi-widget" className="section__kofi">
					<div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }} />
				</section>
			</article>
		);
	}
});
