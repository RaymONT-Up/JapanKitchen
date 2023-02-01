import ModalWindow from "../UI/ModalWindow/ModalWindow";
import styles from "./Cart.module.css";

const Cart = props => {
  const cartItems = [{ id: "m1", name: "Sushi", amount: 2, price: 0.99 }].map(
    item => <li key={item.id}>{item.name}</li>
  );

  return (
    <ModalWindow onClose={props.onHideCart} id="Cart">
      <ul>{cartItems}</ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
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
