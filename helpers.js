export const getExcerpt = text => text.substring(0, 30) + "...";

export const getStockStatus = inStock => {
  if (inStock) {
    return {
      text: "På lager",
      class: "in-stock",
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock",
    };
  }
}
