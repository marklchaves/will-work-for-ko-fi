!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.components},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";var o=n(3),l=(n.n(o),n(4)),i=(n.n(l),n(0)),__=(n.n(i),wp.i18n.__),r=wp.blocks.registerBlockType,a=wp.blockEditor.InspectorControls,c=wp.components,u=c.PanelBody,m=c.PanelRow,p=wp.element.Fragment,d=wp.element.createElement,f=d("svg",{width:24,height:24},d("path",{d:"M12,5h-2V3H2v4c0.0133,2.2091,1.8149,3.9891,4.024,3.9758C7.4345,10.9673,8.7362,10.2166,9.45,9H12c1.1046,0,2-0.8954,2-2&#xA;&#x9;S13.1046,5,12,5z M12,8H9.86C9.9487,7.6739,9.9958,7.3379,10,7V6h2c0.5523,0,1,0.4477,1,1S12.5523,8,12,8z M10,12.5&#xA;&#x9;c0,0.2761-0.2239,0.5-0.5,0.5h-7C2.2239,13,2,12.7761,2,12.5S2.2239,12,2.5,12h7C9.7761,12,10,12.2239,10,12.5z"}));r("cgb/block-will-work-for-ko-fi-cgb",{title:__("Will Work for Ko-fi"),icon:f,category:"widgets",keywords:[__("Will Work for Ko-fi"),__("ko-fi"),__("donation")],attributes:{headingText:{type:"string",default:"Your Cool Heading"},descriptionText:{type:"string",default:"Your cool description goes here."},buttonText:{type:"string",default:"hit me!"},buttonColour:{type:"string",default:"#29abe0"},kofiCode:{type:"string",default:"D1D7YARD"}},edit:function(e){function t(e){return DOMPurify.sanitize(e)}function n(e){var n=t(e);k({headingText:n})}function o(e){var n=t(e);k({descriptionText:n})}function l(e){var n=t(e);k({buttonText:n})}function r(e){k({buttonColour:e.hex})}function c(e){var n=t(e);k({kofiCode:n})}var d=e.attributes,f=d.headingText,s=d.descriptionText,w=d.buttonText,g=d.buttonColour,b=d.kofiCode,k=e.setAttributes;return kofiwidget2.init(w,g,b),wp.element.createElement(p,null,wp.element.createElement(a,null,wp.element.createElement(u,{title:__("Ko-fi Button Settings")},wp.element.createElement(m,null,wp.element.createElement(i.TextControl,{label:"Button Text",id:"button-text",value:w,onChange:l})),wp.element.createElement(m,null,wp.element.createElement(i.ColorPicker,{color:g,onChangeComplete:r,disableAlpha:!0})),wp.element.createElement(m,null,wp.element.createElement(i.TextControl,{label:"Code/username",id:"kofi-code",value:b,onChange:c})))),wp.element.createElement("section",{id:"kofi-meta"},wp.element.createElement("div",{className:"kofi-meta kofi-meta__row"},wp.element.createElement(i.TextControl,{label:"Heading (h3)",id:"kofi-heading",value:f,onChange:n})),wp.element.createElement("div",{className:"kofi-meta kofi-meta__row"},wp.element.createElement(i.TextControl,{label:"Description (p)",id:"kofi-description",value:s,onChange:o}))),wp.element.createElement("section",{id:"ko-fi-widget"},wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:kofiwidget2.getHTML()}})))},save:function(e){var t=e.attributes,n=t.headingText,o=t.descriptionText,l=t.buttonText,i=t.buttonColour,r=t.kofiCode;return kofiwidget2.init(l,i,r),wp.element.createElement("article",null,wp.element.createElement("section",null,wp.element.createElement("h3",null,n)),wp.element.createElement("section",null,wp.element.createElement("p",null,o)),wp.element.createElement("section",{id:"ko-fi-widget"},wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:kofiwidget2.getHTML()}})))}})},function(e,t){},function(e,t){}]);