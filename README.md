![Will Work for Ko-fi Hero Banner](https://ps.w.org/will-work-for-ko-fi/assets/banner-1544x500.png)

# Will Work for Ko-fi 

![Will Work for Ko-fi logo by walkerstudio13 on the Noun Project](https://ps.w.org/will-work-for-ko-fi/assets/icon-256x256.png?rev=2330722)

Custom Gutenberg Block (CGB) for the Ko-fi donation button.
 
## Description

Add your customised official Ko-fi button to your posts and pages.

This custom Gutenberg Block (CGB) for the Ko-fi donation button allows you to:

1. Create an optional heading
1. Add a short call-to-action prompt
1. Insert your custom button text
1. Choose a background colour using a built-in colour picker 
1. And of course, add your Ko-fi _code_ or username

## Installation

1. Upload the **contents** of plugin zip file to the `/wp-content/plugins/will-work-for-ko-fi` directory, or install the plugin through the WordPress plugins page directly.
1. Activate the plugin through the 'Plugins' page.

Edit: <strike>Will Work for Ko-fi_ needs the Lazy Blocks plugin to run properly. Please install Lazy Blocks.</strike>

## Usage

1. Open a page or post in Gutenberg.
1. Click on the `+` to add a block.
1. Start typing "Will Work for Ko-fi" until you see the block appear, then select it.
1. Inside the block, enter an optional heading or short description into the respective input fields.
1. In the settings sidebar, enter the text you want on your button. This is important! Keep it short.
1. In the settings sidebar, use the colour picker for the button's background.
1. Remember to enter your Ko-fi _code_ or username. This is also in the settings sidebar.
1. Preview, Update, or Publish your page or post and enjoy ;-)

#### NEW

Live button preview in the block editor.

![New live button preview in the block editor](https://ps.w.org/will-work-for-ko-fi/assets/screenshot-4.png)

Check out the [video of the new live button preview in the block editor](https://i.imgur.com/5NebuF9.mp4).

## Frequently Asked Questions

### Is WW4KOFI v2 lightweight?

Yes. It's only 47 KB zipped. And, it uses its' own local copy of the official Ko-fi widget JavaScript library.

### Is the Ko-fi button the official button from ko-fi.com?

It sure is. The Ko-fi button widget code comes from https://ko-fi.com/manage/widgets and it looks like this.

```javascript
<script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script>
<script type='text/javascript'>
  kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'D1D7YARD');kofiwidget2.getHTML();
</script> 
```

### How can I change the alignment for the Will Work for Ko-fi block?

You can change the content alignment by using [additional CSS](https://medium.com/@marklchaves/adding-custom-css-to-your-wordpress-website-how-to-guide-a50b474af36d). The additional CSS below will centre justify the WW4KOFI block contents.

```css
.centre-this-block {
	text-align: center;
	width: 50%;
	margin: 0 auto;
}
```

### How can I change the style of the Will Work for Ko-fi block?

You can change the content alignment by using [additional CSS](https://medium.com/@marklchaves/adding-custom-css-to-your-wordpress-website-how-to-guide-a50b474af36d). The additional CSS below will add slight padding to the contents and create a drop shadow effect.

```css
.style-this-block {
	padding: 1.5%;
	border-radius: 10px;
	box-shadow: 5px 20px 12px rgba(0,0,0,.2);
}
```

### Do I need to install the Lazy Blocks plugin too?

No. Version 2.0.0 does not rely on any third-party plugins. Lazy Blocks is deprecated in v2.0.0.

---

## Credits

Built with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

_Will Work for Ko-fi_ coffee logo by walkerstudio13 from the [Noun Project](https://thenounproject.com/search/?q=coffee&i=2491285).

---

### I'll Drink to That ;-)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D7YARD)
