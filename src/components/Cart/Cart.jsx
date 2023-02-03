import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = props => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount.toFixed(2))}`;
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
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </ModalWindow>
  );
};
export default Cart;
