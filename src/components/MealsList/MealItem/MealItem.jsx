import { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = props => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.item}>
      <div className={styles["item-info"]}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.price}>${props.price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
    </li>
  );
};
export default MealItem;
