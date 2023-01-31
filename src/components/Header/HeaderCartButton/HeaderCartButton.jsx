import styles from "./HeaderCartButton.module.css";
import IconCart from "../../SvgIcons/IconCart/IconCart";
const HeaderCartButton = props => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <IconCart />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
