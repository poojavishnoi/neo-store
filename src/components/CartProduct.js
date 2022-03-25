import "../style/cartproduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";

function CartProduct({img, name, type, data, price, qty}) {
  const { dispatch } = useCart();
  return (
    <>
      <div className="cart_item">
        <Link to="/productlist">
          <img className="img_responsive" src={img} alt=""></img>
        </Link>
        <div className="item_desc">
          <h3 className="item_desc_heading">{name}</h3>
          <p>{type}</p>
          <p>
            Quantity:{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_DECREMENT",
                  payload: data
                })
              }
            >
              -
            </button>{" "}
            {qty}{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_INCREMENT",
                  payload: data
                })
              }
            >
              +
            </button>
          </p>
          <p>Rs: {price}</p>

          <button
            className="btn primary_solid_btn"
            type="submit"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: data
              })
            }
          >
            Remove from cart
          </button>
          <button
            className="btn cart_btn secondary_solid_btn"
            type="submit" 
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
