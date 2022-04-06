import { useCart } from "../context/cart-context";
import { useWishList } from "../context/wishlist-context";
import "../style/wishlistproduct.css";

function WishlistProduct({ data }) {
  const { dispatch } = useCart();
  const { wishListDispatch } = useWishList();

  return (
    <div className="item">
      <div className="like_icon">
        <i
          className="fa-solid fa fa-heart like_solid"
          onClick={() =>
            wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data })
          }
        ></i>
      </div>
      <img className="img_responsive" src={data.img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{data.name}</h3>
        <p>{data.product}</p>
        <p>Rs: {data.price}</p>
      </div>

      <div>
        <button
          className="btn wishlist_btn primary_solid_btn"
          type="submit"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: data });
            wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data });
          }}
        >
          Move to cart
        </button>
      </div>
    </div>
  );
}

export default WishlistProduct;
