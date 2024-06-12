<div align="center">
  <img src="https://raw.githubusercontent.com/maizzle/tailwindcss-preset-email/HEAD/.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Tailwind CSS Clamp Preset</h1>
</div>

## About

A Tailwind CSS preset for generating clamp-based font sizes and spacing.

## Installation

```bash
npm i tailwindcss-preset-clamp
```

## Usage

Provide `clampScreensList` to set the screen widths supported by the clamp.
Provide `clampFontSizeList` to set the font sizes supported by the clamp.
Provide `clampSpacingList` to set the spacing supported by the clamp.

Those are key value objects:

- The key will determine how it will be used in the html template.
- The value is the px size.

As an example, the classes applied below become available right away.
Those classes will calculate and use the clamp and rem for you.

### Option 1

```js
// tailwind.config.js
module.exports = {
  presets: [require("tailwindcss-preset-clamp")],
  theme: {
    clampScreensList: {
      640: 640,
      1024: 1024,
    },
    clampFontSizeList: {
      12: 12,
      16: 16,
      20: 20,
    },
    clampSpacingList: {
      5: 5,
      10: 10,
      15: 15,
    },
  },
};
```

```html
<div class="p-5-15,640-1024">
  <h1 class="text-16-20,640-1024">...</h1>
  <p class="text-12-16,640-1024">...</p>
</div>
```

### Option 2

```js
// tailwind.config.js
module.exports = {
  presets: [require("tailwindcss-preset-clamp")],
  theme: {
    clampScreensList: {
      sm: 640,
      lg: 1024,
    },
    clampFontSizeList: {
      sm: 12,
      md: 16,
      lg: 20,
    },
    clampSpacingList: {
      sm: 5,
      md: 10,
      lg: 15,
    },
  },
};
```

```html
<div class="p-sm-lg,sm-lg">
  <h1 class="text-md-lg,sm-lg">...</h1>
  <p class="text-sm-lg,sm-lg">...</p>
</div>
```

## Configuration

The default rem divider is 16.
you can easily change it by using `remDivider` in `theme` like so:

```js
// tailwind.config.js
theme: {
  remDivider: "20";
}
```
