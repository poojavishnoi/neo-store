import CartProduct from "../components/CartProduct";
import "../style/cart.css";
import { useCart } from "../context/cart-context";
import PriceDetails from "../components/PriceDetails";

function Cart() {
  const {
    cart
  } = useCart();
  return (
    <>
      <h1>Cart</h1>

      <div className="cart_container">
        <div className="cart_main_container">

          {cart.map((cartItem) => (            
            <CartProduct
              data={cartItem}
            />

          ))}
        </div>

        <PriceDetails/>
        </div>
    </>
  );
}

export default Cart;
