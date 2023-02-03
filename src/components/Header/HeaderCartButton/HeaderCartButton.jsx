import styles from "./HeaderCartButton.module.css";
import IconCart from "../../SvgIcons/IconCart/IconCart";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/CartContext/CartContext";

const HeaderCartButton = props => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonAnimatedClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;

    setIsButtonAnimated(true);

    const timer = setTimeout(() => setIsButtonAnimated(false), 300);
    return () => {
      clearTimeout(timer);
    };
    // Если мы добавляем сразу несколько элементов в корзину, то мы так удаляем пред. таймер и в случае если компонента будет удаленна, то так мы удалим все не нужные таймеры
  }, [cartContext.items]);

  return (
    <button className={buttonAnimatedClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <IconCart />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
