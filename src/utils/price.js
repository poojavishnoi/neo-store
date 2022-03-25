function priceSorting(productList, price) {
  return productList.filter((product) => product.price <= price)
}

export default priceSorting