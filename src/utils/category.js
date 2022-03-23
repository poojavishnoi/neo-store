export default function getByCategory(productList, product) {
  let toRender = [];
  if (product.length > 0) {
    // sorted data should only contain matching value
    return toRender = productList.filter((item) => {
      return product.indexOf(item.product) > -1;
    })
  } else {
    return toRender = productList;
  }
}

