import WishlistProduct from "../components/WishlistProduct";
import "../style/wishlist.css";
import { useWishList } from "../context/wishlist-context";

function Wishlist() {
  const { wishlist } = useWishList();

  return (
    <div>
      <h1>My Wishlist</h1>
      <div className="wishlist_container">
        {wishlist.map((wishlistItem) => {
          return <WishlistProduct data={wishlistItem} />;
        })}
      </div>
    </div>
  );
}

export default Wishlist;
