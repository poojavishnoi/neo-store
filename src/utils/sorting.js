import React from 'react'

function getSortedProduct(productList, sortBy) {
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return [...productList.sort((a, b) => b.price - a.price)];
    }
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return [...productList.sort((a, b) => a.price - b.price)];
    }
    return productList;

}

export default getSortedProduct