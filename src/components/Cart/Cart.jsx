import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import styles from "./Cart.module.css";

const Cart = props => {
  const cartContext = useContext(CartContext);

  const totalAmount = cartContext.totalAmount.toFixed(2);

  const cartItems = cartContext.items.items.map(item => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <ModalWindow onClose={props.onHideCart} id="Cart">
      <ul>{cartItems}</ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </ModalWindow>
  );
};
export default Cart;
