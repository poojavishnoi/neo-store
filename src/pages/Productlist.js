import {useState, useEffect} from 'react'
import '../style/productlist.css'
import Product from '../components/Product'
import { useFilter } from '../context/filter-context'
import Filter from '../components/Filter'
import getSortedProduct from '../utils/sorting';
import filteredByRating from '../utils/rating';
import priceSorting from '../utils/price'
import searchQuery from '../utils/searchQuery';
import {useParams} from 'react-router-dom'
import getByCategory from '../utils/category'

function Productlist() {
  const {filterState} = useFilter()
  const [productList ,setProductList] = useState([]);
  let params = useParams();

  const searcedData = searchQuery(productList, filterState.searchQuery)
  const categoryData = getByCategory(searcedData, filterState.product)
  const fileredByRating = filteredByRating(categoryData, filterState.rating);
  const priceSortedData = priceSorting(fileredByRating, filterState.price);
  const sortedData = getSortedProduct(priceSortedData, filterState.sortBy);

  const getProductList = async(name) => {

    const data = await fetch(`http://localhost:3000/api/products`);
    const products = await data.json();

      switch(name){
        case "all": 
          return setProductList(products.products);
        case "tshirt": 
          return setProductList(products.products.filter((item) => {
            return item.product.toLowerCase() === "tshirt"
          }));
        case "dress":
          return setProductList(products.products.filter((item) => {
            return item.product.toLowerCase() === "dress"
          }));
        case "shirt":
          return setProductList(products.products.filter((item) => {
            return item.product.toLowerCase() === "shirt"
          }));
        }
  }

  useEffect(()=>{
    getProductList(params.type)
  }, [params.type])

  return (
    <div className='productlist_container'>
    <Filter/>
      <div className='productlist_main_container'>
        <h2> Showing All products</h2>

        <div className="product_container">
          {sortedData.map((product)=>{
            return (
            <Product rating={product.rating} data={productList} name={product.name} key={product.id} img={product.img} id={product.id} price={product.price} type={product.product}/>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Productlist