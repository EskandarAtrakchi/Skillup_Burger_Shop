import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: 0, // Quantity for Cheese Burger
    2: 0, // Quantity for Veg Cheese Burger
    3: 0, // Quantity for Cheese Burger with French Fries
  });

  const itemPrices = {
    1: 200, // Price for Cheese Burger
    2: 180, // Price for Veg Cheese Burger
    3: 250, // Price for Cheese Burger with French Fries
  };

  const taxRate = 0.1; // 10%

  const shippingCharges = 0;//I will set this to zero for now, change it to 50 later, delete this later

  const subtotal = Object.keys(cartItems).reduce(
    (acc, itemId) => acc + cartItems[itemId] * itemPrices[itemId],
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCharges;

  const increment = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] + 1,
    }));
  };

  const decrement = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] - 1,
      }));
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cartItems[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={cartItems[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={cartItems[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Tax: ₹{tax.toFixed(2)}</p>
          <p>Shipping Charges: ₹{shippingCharges.toFixed(2)}</p>
          <p>Total: ₹{total.toFixed(2)}</p>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;