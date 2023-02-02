import styles from "./HeaderCartButton.module.css";
import IconCart from "../../SvgIcons/IconCart/IconCart";
import { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";

const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);
  console.log(cartContext);
  const cartItemsNumber = cartContext.items.items.reduce(
    (currentValue, item) => {
      return currentValue + item.amount;
    },
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <IconCart />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
