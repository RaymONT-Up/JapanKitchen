import { useContext, useState } from "react";
import CartContext from "../../context/CartContext/CartContext";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import SubmitOrder from "./SubmitOrder/SubmitOrder";

const Cart = props => {
  const [orderSent, setOrderSent] = useState(false);

  const nextToSendOrderHandler = () => {
    setOrderSent(true);
  };
  const backToCartHandler = () => {
    setOrderSent(false);
  };

  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = id => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = item =>
    cartContext.addItem({ ...item, amount: 1 });

  const cartItems = cartContext.items.map(item => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));

  const submitOrderHandler = userData => {
    // Попозже нужно сделать обработку ошибок, если будет время.
    fetch(
      "https://default-todo-e3713-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );
    cartContext.clearCart();
  };

  if (orderSent) {
    return (
      <ModalWindow onClose={props.onHideCart}>
        <SubmitOrder
          backToCart={backToCartHandler}
          submitMeals={submitOrderHandler}
        />
      </ModalWindow>
    );
  }

  return (
    <ModalWindow onClose={props.onHideCart} id="Cart">
      {cartItems.length === 0 ? (
        <h2>Ваша корзина пуста</h2>
      ) : (
        <ul className={styles["cart-items"]}>{cartItems}</ul>
      )}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
        {hasItems && (
          <button className={styles.button} onClick={nextToSendOrderHandler}>
            Заказать
          </button>
        )}
      </div>
    </ModalWindow>
  );
};
export default Cart;
