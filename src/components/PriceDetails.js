import { useCart } from "../context/cart-context"

function PriceDetails() {

  const totalProductPrice = (cartItems) => {
    return cartItems.reduce((price, item) => price = price + Number(item.price) * item.quantity, 0);
  }

  const finalPrice = (productPrice, discount, delivery) => {
    return productPrice - discount + delivery;
  }

  const {state: {cart}} = useCart();
  return (
    <div className="price_details_container">
          <h2>PRICE DETAILS</h2>
          <div className="inline_details">
            <p>Price ({cart.length} items)</p>
            <p>Rs: {totalProductPrice(cart)}</p>
            
          </div>

          <div className="inline_details">
            <p>Delivery Charge</p>
            <p>Rs: 50</p>
          </div>

          <div className="inline_details">
            <p>Discount</p>
            <p>- Rs: 50</p>
          </div>

          <hr />

          <div className="inline_details">
            <h3>Total Amount</h3>
            <h3>Rs: {finalPrice(totalProductPrice(cart), 50, 50)} </h3>
          </div>

          <hr />

          <p>You will save $10 on this order</p>
          <button className="btn primary_solid_btn">Place order</button>
        </div>
  )
}

export default PriceDetails