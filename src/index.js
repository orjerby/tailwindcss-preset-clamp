function clamp(
  viewportMinParam,
  viewportMaxParam,
  sizeMinParam,
  sizeMaxParam,
  remDivider
) {
  const sizeMin = `${sizeMinParam / remDivider}rem`;
  const sizeMax = `${sizeMaxParam / remDivider}rem`;
  const change =
    (sizeMaxParam - sizeMinParam) / (viewportMaxParam - viewportMinParam);
  const a = `${100 * change}vw`;
  const b = `${(sizeMaxParam - viewportMaxParam * change) / remDivider}rem`;
  return `clamp(${sizeMin}, ${a} + ${b}, ${sizeMax})`;
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    remDivider: 16,
    clampScreensList: {},
    clampFontSizeList: {},
    clampSpacingList: {},
    clampFontSize: ({ theme }) => {
      const screens = theme("clampScreensList");
      const clampFontSizeList = theme("clampFontSizeList");
      const remDivider = theme("remDivider");
      const clampObjects = {};
      Object.keys(screens).forEach((minScreen) => {
        const minWidth = parseInt(screens[minScreen]);
        Object.keys(screens).forEach((maxScreen) => {
          const maxWidth = parseInt(screens[maxScreen]);
          if (minWidth < maxWidth) {
            Object.keys(clampFontSizeList).forEach((minSize) => {
              const minSizeNum = parseInt(clampFontSizeList[minSize]);
              Object.keys(clampFontSizeList).forEach((maxSize) => {
                const maxSizeNum = parseInt(clampFontSizeList[maxSize]);
                if (minSizeNum < maxSizeNum) {
                  clampObjects[
                    `${minSize}-${maxSize},${minWidth}-${maxWidth}`
                  ] = clamp(
                    minWidth,
                    maxWidth,
                    minSizeNum,
                    maxSizeNum,
                    remDivider
                  );
                }
              });
            });
          }
        });
      });
      return clampObjects;
    },
    clampSpacing: ({ theme }) => {
      const screens = theme("clampScreensList");
      const clampSpacingList = theme("clampSpacingList");
      const remDivider = theme("remDivider");
      const clampObjects = {};
      Object.keys(screens).forEach((minScreen) => {
        const minWidth = parseInt(screens[minScreen]);
        Object.keys(screens).forEach((maxScreen) => {
          const maxWidth = parseInt(screens[maxScreen]);
          if (minWidth < maxWidth) {
            Object.keys(clampSpacingList).forEach((minSize) => {
              const minSizeNum = parseInt(clampSpacingList[minSize]);
              Object.keys(clampSpacingList).forEach((maxSize) => {
                const maxSizeNum = parseInt(clampSpacingList[maxSize]);
                if (minSizeNum < maxSizeNum) {
                  clampObjects[
                    `${minSize}-${maxSize},${minWidth}-${maxWidth}`
                  ] = clamp(
                    minWidth,
                    maxWidth,
                    minSizeNum,
                    maxSizeNum,
                    remDivider
                  );
                }
              });
            });
          }
        });
      });
      return clampObjects;
    },
    extend: {
      spacing: ({ theme }) => ({
        ...theme("clampSpacing"),
      }),
      fontSize: ({ theme }) => ({
        ...theme("clampFontSize"),
      }),
    },
  },
};
