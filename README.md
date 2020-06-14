![Will Work for Ko-fi Hero Banner](https://ps.w.org/will-work-for-ko-fi/assets/banner-1544x500.png)

# Will Work for Ko-fi 

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

1. Upload the plugin zip file to the `/wp-content/plugins/will-work-for-ko-fi` directory, or install the plugin through the WordPress plugins page directly.
1. Activate the plugin through the 'Plugins' page.

Edit: <strike>Will Work for Ko-fi_ needs the Lazy Blocks plugin to run properly. Please install Lazy Blocks.</strike>

## Usage

1. Open a page or post in Gutenberg.
1. Click on the `+` to add a block.
1. Start typing "Will Work for Ko-fi" until you see the block appear, then select it.
1. Enter an optional heading or short description.
1. Enter the text you want on your button. This is important! Keep it short.
1. Use the colour picker for the button's background.
1. Don't forget to enter your Ko-fi _code_ or username.
1. Preview, Update, or Publish your page or post and enjoy ;-)

## Frequently Asked Questions

### Is the Ko-fi button the official button from ko-fi.com?

It sure is. The Ko-fi button widget code comes from https://ko-fi.com/manage/widgets and it looks like this.

```javascript
<script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script>
<script type='text/javascript'>
  kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'D1D7YARD');kofiwidget2.draw();
</script> 
```

### How can I change the alignment for the H2 heading and button?

The plan is to add alignment controls in the next release. For now, please use custom CSS. Here's how.

Use your fave dev tools inspector. Find the _Will Work for Ko-fi_ CSS classes. Write and [add your custom CSS](https://medium.com/@marklchaves/adding-custom-css-to-your-wordpress-website-how-to-guide-a50b474af36d) to your site.

#### This example will put the H2 heading in the center.

```css
.wp-block-lazyblock-will-work-for-ko-fi.lazyblock-will-work-for-ko-fi-Z1KuGlw h2 {
    text-align: center;
}
```

#### This example moves the button to the center.

```css
.wp-block-lazyblock-will-work-for-ko-fi.lazyblock-will-work-for-ko-fi-Z1KuGlw .btn-container {
    min-width: 160px;
    transform: translate(-50%,0);
    margin-left: 50%;
}
```

This example aligns the button to the right.

```css
.wp-block-lazyblock-will-work-for-ko-fi.lazyblock-will-work-for-ko-fi-Z1KuGlw .btn-container, .clearfix {
    float: right; 
}

/* Be sure to clear the float after. */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

---

## I'll Drink to That ;-)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D7YARD)
