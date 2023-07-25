import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemLists);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(({ id, price, name, totalPrice, quantity }) => (
          <li key={id}>
            <CartItem
              id={id}
              price={price}
              name={name}
              total={totalPrice}
              quantity={quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
