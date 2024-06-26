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

function generateClasses(classDefinitions, remDivider) {
  const sizes = {};

  classDefinitions.forEach((cds) => {
    cds.split("_").forEach((cd) => {
      const [sizePart, viewportPart] = cd.split(",");
      const [minSize, maxSize] = sizePart.split("-").map(Number);
      const [minWidth, maxWidth] = viewportPart.split("-").map(Number);

      if (sizes[cds]) {
        sizes[cds] +=
          " " + clamp(minWidth, maxWidth, minSize, maxSize, remDivider);
      } else {
        sizes[cds] = clamp(minWidth, maxWidth, minSize, maxSize, remDivider);
      }
    });
  });

  return sizes;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    remDivider: 16,
    clampFontSizeList: [],
    clampSpacingList: [],
    clampBorderRadiusList: [],
    clampGridTemplateColumnsList: [],
    clampGridTemplateRowsList: [],
    extend: {
      fontSize: (theme) => {
        const remDivider = theme("remDivider");
        const classDefinitions = theme("clampFontSizeList");
        return generateClasses(classDefinitions, remDivider);
      },
      spacing: ({ theme }) => {
        const remDivider = theme("remDivider");
        const classDefinitions = theme("clampSpacingList");
        return generateClasses(classDefinitions, remDivider);
      },
      borderRadius: ({ theme }) => {
        const remDivider = theme("remDivider");
        const classDefinitions = theme("clampBorderRadiusList");
        return generateClasses(classDefinitions, remDivider);
      },
      gridTemplateColumns: ({ theme }) => {
        const remDivider = theme("remDivider");
        const classDefinitions = theme("clampGridTemplateColumnsList");
        return generateClasses(classDefinitions, remDivider);
      },
      gridTemplateRows: ({ theme }) => {
        const remDivider = theme("remDivider");
        const classDefinitions = theme("clampGridTemplateRowsList");
        return generateClasses(classDefinitions, remDivider);
      },
    },
  },
};
