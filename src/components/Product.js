import React from "react";
import Rating from "./Rating";
import "../style/product.css";
import {useCart} from '../context/cart-context'
import {useWishList} from '../context/wishlist-context'

function Product({data}) {

  const { dispatch } = useCart();
  const { wishListDispatch } = useWishList();


  return (
    <div className="product_item">
      <img className="img_responsive" src={data.img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{data.name}</h3>
        <p>{data.product}</p>
        <p>Rs: {data.price}</p>
      </div>

      <div className="rating">
        <Rating rating={data.rating} />
      </div>

      <div>
        <button className="btn cart_btn primary_solid_btn" type="submit" 
        onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              totalPrice: data.price,
              payload: data,
            });
          }}>
          Add to cart
        </button>

        <button className="btn wishlist_btn secondary_solid_btn" type="submit"
        onClick={() => {
            wishListDispatch({ type: "ADD_TO_WISHLIST", payload: data });
          }}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Product;
