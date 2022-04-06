import "../style/cartproduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";

function CartProduct({ data }) {
  const { dispatch } = useCart();
  const { wishListDispatch } = useWishList();
  return (
    <>
      <div className="cart_item">
        <Link to="/productlist">
          <img className="img_responsive" src={data.img} alt=""></img>
        </Link>
        <div className="item_desc">
          <h3 className="item_desc_heading">{data.name}</h3>
          <p>{data.type}</p>
          <p>
            Quantity:{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_DECREMENT",
                  payload: data,
                })
              }
            >
              -
            </button>{" "}
            {data.quantity}{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_INCREMENT",
                  payload: data,
                })
              }
            >
              +
            </button>
          </p>
          <p>Rs: {data.price}</p>

          <button
            className="btn primary_solid_btn"
            type="submit"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: data,
              })
            }
          >
            Remove from cart
          </button>
          <button
            className="btn cart_btn secondary_solid_btn"
            type="submit"
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: data });
              wishListDispatch({ type: "ADD_TO_WISHLIST", payload: data });
            }}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
