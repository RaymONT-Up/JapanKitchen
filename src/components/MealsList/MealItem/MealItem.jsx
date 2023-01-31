import styles from "./MealItem.module.css";

const MealItem = props => {
  return (
    <li className={styles.item}>
      <div className={styles["item-info"]}>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.price}>${props.price}</div>
      </div>
    </li>
  );
};
export default MealItem;
