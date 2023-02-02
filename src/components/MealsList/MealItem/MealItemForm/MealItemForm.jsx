import { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = props => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    } else setIsAmountValid(true);

    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
        }}
        label="Количество"
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
      {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
  );
};
export default MealItemForm;
