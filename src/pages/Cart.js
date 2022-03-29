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
              name={cartItem.name}
              img={cartItem.img}
              data={cartItem}
              price={cartItem.price}
              type={cartItem.type}
              key={cartItem._id}
              _id={cartItem._id}
              qty={cartItem.quantity}
            />

          ))}
        </div>

        <PriceDetails/>
        </div>
    </>
  );
}

export default Cart;
