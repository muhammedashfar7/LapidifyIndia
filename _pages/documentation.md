---
layout: page
title: Documentation
permalink: /documentation
---
# Introduction
Welcome to `Lap Icons`😊. We have almost 4000+ free icons for your project generated via `.oet` & `.ttf`. Follow these steps to add our icons to your web project. Icons for mobile development is on the way!🔥
# Adding some codes
First we need to add a css file before closing `<head>` tag. For this add the following code.👇
```html
<link rel="stylesheet" href="https://lapidify.github.io/cdn/icons/style.css">
```
# Adding Icons
Its very simple to add icons to webpage. Just create a `<i>` tag. Then the copy the icon shortcode from our site (eg: `icon-abstract`). Paste this shortcode in a `class`. See the example below👇.
I wanted to add `Adobe` icon. First I copies the shortcode `icon-adobe`, then is pasted it ina `<i>` tag's class.
```html
<i class="icon-adobe"></i>
```
Hurry👏! Adobe icon is added.
# Adding Gradient Icon & Text
Adding gradient to text is quite simple. Paste the following `css` to your css file.
```css
.gradient-text-love {
    background: rgb(252,11,133);
    background: linear-gradient(324deg, rgba(252,11,133,1) 0%, rgba(255,1,1,1) 100%);
        background-size: auto;
        background-clip: border-box;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
```