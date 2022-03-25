import {useEffect, useState} from 'react'
import '../style/productlist.css'
import Product from '../components/Product'
import Filter from '../components/Filter'
import {useParams} from 'react-router-dom'
import GetFinalProducts from "../utils/finalProducts";

function Productlist() {
  const [productList ,setProductList] = useState([]);
  const finalProductList = GetFinalProducts(productList);
  let params = useParams();

  const getProductList = async(name) => {

    try{
    const data = await fetch("/api/products");
    const result = await data.json();

      switch(name){
        case "all": 
          return setProductList(result.products);
        case "tshirt": 
          return setProductList(result.products.filter((item) => item.product.toLowerCase() === "tshirt"));
        case "dress":
          return setProductList(result.products.filter((item) => item.product.toLowerCase() === "dress"));
        case "shirt":
          return setProductList(result.products.filter((item) => item.product.toLowerCase() === "shirt"));
        default:
          return setProductList(result.products)
        }
      }catch(e){
        console.log(e.message);
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
          {finalProductList.map((product)=>{
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