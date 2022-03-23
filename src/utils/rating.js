export default function filteredByRating(productList, rating) {
  console.log(productList);
  return productList.filter((product) => product.rating >= rating)
}
