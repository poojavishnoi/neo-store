export default function getByCategory(productList, product) {
  if (product.length > 0) {
    // sorted data should only contain matching value
    return productList.filter((item) => {
      return product.indexOf(item.product) > -1;
    })
  } else {
    return productList;
  }
}

