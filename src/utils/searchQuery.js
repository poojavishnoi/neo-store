export default function searchQueryFunction(productList, query) {

  if(!query){
    return productList
  }
  return productList.filter((product) => {
   return product.product.toLowerCase() === query.toLowerCase()
  })

}

