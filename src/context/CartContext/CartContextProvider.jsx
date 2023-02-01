import React from "react";
import CartContext from "./CartContext";
const CartContextProvider = props => {
  const addItemHandler = item => {
    cartContext.items.push(item);
  };
  const removeItemHandler = itemId => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
