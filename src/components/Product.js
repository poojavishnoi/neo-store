import React from "react";
import Rating from "./Rating";
import "../style/product.css";

function Product(props) {
  return (
    <div className="product_item">
      <img className="img_responsive" src={props.img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{props.name}</h3>
        <p>{props.type}</p>
        <p>Rs: {props.price}</p>
      </div>

      <div className="rating">
        <Rating rating={props.rating} />
      </div>

      <div>
        <button className="btn wishlist_btn primary_solid_btn" type="submit">
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
