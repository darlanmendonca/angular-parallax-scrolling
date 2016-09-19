# angular-parallax-scrolling

An angular directive to [parallax-scrolling](https://github.com/darlanmendonca/parallax-scrolling)

### Install

With bower

```sh
bower install --save angular-parallax-scrolling
```

Or just download the main files ```dist/parallax-scrolling.css, dist/parallax-scrolling.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/parallax-scrolling.css">
<script src="path/to/parallax-scrolling.css"></script>
```

### Usage

And then, in your html, you can use the tag:

```html
<div class="parallax-scrolling">
  <div class="layer-background home"></div>
  <div class="layer-base"></div>
  <div class="layer-background about"></div>
  <div class="layer-base"></div>
</div>
```

```js
angular.module('app', [
  'parallax-scrolling'
]);
```

For more details check docs [parallax-scrolling docs](https://github.com/darlanmendonca/parallax-scrolling).

