import getSortedProduct from './sorting';
import filteredByRating from './rating';
import priceSorting from './price'
import searchQueryFunction from './searchQuery';
import getByCategory from './category'
import { useFilter } from '../context/filter-context';

export default function GetFinalProducts(productList) {

  const {filterState: {searchQuery, price, product, rating, sortBy}} = useFilter();

  const searcedData = searchQueryFunction(productList, searchQuery)
  const categoryData = getByCategory(searcedData, product)
  const fileredByRating = filteredByRating(categoryData, rating);
  const priceSortedData = priceSorting(fileredByRating, price);
  const sortedData = getSortedProduct(priceSortedData, sortBy);

  return sortedData;

}
