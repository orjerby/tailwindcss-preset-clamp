<div align="center">
  <img src="https://raw.githubusercontent.com/maizzle/tailwindcss-preset-email/HEAD/.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Tailwind CSS Clamp Preset</h1>
</div>

## About

A Tailwind CSS preset for generating clamp functions.

## Installation

```bash
npm i tailwindcss-preset-clamp
```

## Usage

Provide `clampFontSizeList` to set the font sizes supported by the clamp.\
Provide `clampSpacingList` to set the spacing supported by the clamp.\
Provide `clampBorderRadiusList` to set the borderRadius supported by the clamp.\
Provide `clampGridTemplateColumnsList` to set the grid template columns supported by the clamp.\
Provide `clampGridTemplateRowsList` to set the grid template rows supported by the clamp.

### Option 1

Those classes will calculate and use the clamp and rem for you.

```js
// tailwind.config.js
module.exports = {
  presets: [require("tailwindcss-preset-clamp")],
  theme: {
    clampFontSizeList: ["16-32,640-1024", "14-22,640-1024"],
    clampSpacingList: ["5-10,640-1024", "10-15,640-1024"],
    clampBorderRadiusList: ["10-20,640-1024"],
    clampGridTemplateColumnsList: [
      "5-10,640-1024_10-15,640-1024_10-20,640-1024_20-40,640-1024",
    ],
    clampGridTemplateRowsList: ["10-20,640-1024_10-15,640-1024"],
  },
};
```

```html
<div
  class="tw-grid grid-cols-5-10,640-1024_10-15,640-1024_10-20,640-1024_20-40,640-1024 grid-rows-10-20,640-1024_10-15,640-1024 rounded-10-20,640-1024"
>
  <h1 class="text-16-32,640-1024 mt-10-15,640-1024">...</h1>
  <p class="text-14-22,640-1024 mt-5-10,640-1024">...</p>
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
