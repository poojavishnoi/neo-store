import React from "react";
import Rating from "./Rating";
import "../style/product.css";
import {useCart} from '../context/cart-context'

function Product({img, name, type, rating, price, data}) {

  const { dispatch } = useCart();

  return (
    <div className="product_item">
      <img className="img_responsive" src={img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{name}</h3>
        <p>{type}</p>
        <p>Rs: {price}</p>
      </div>

      <div className="rating">
        <Rating rating={rating} />
      </div>

      <div>
        <button className="btn wishlist_btn primary_solid_btn" type="submit" 
        onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              totalPrice: price,
              payload: data,
            });
          }}>
          Add to cart
        </button>

        <button className="btn wishlist_btn secondary_solid_btn" type="submit">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Product;
