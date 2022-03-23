export default function filteredByRating(productList, rating) {
  return productList.filter((product) => product.rating >= rating)
}
