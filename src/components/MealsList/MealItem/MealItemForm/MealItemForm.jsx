import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = props => {
  return (
    <form className={styles.form}>
      <Input
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
        }}
        label="Количество"
      />
      <button className={styles.button}>Добавить</button>
    </form>
  );
};
export default MealItemForm;
