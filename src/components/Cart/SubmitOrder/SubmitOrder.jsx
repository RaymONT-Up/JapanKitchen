import { useState } from "react";
import useInput from "../../../hooks/use-input";
import styles from "./SubmitOrder.module.css";
const inputValidationFunc = text => text.trim() !== "";

const SubmitOrder = props => {
  // В идеале надо получше валидировать саму форму и состояния отправки к http
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const {
    value: inputName,
    hasError: inputNameHasError,
    isValid: inputNameIsValid,
    inputChangeHandler: inputNameChangeHandler,
    inputLostFocusHandler: inputNameLostFocusHandler,
    resetValues: inputNameResetValues,
  } = useInput(inputValidationFunc);
  const {
    value: inputNumber,
    hasError: inputNumberHasError,
    isValid: inputNumberIsValid,
    inputChangeHandler: inputNumberChangeHandler,
    inputLostFocusHandler: inputNumberLostFocusHandler,
    resetValues: inputNumberResetValues,
  } = useInput(inputValidationFunc);
  let isFormValid = false;

  if (inputNameIsValid && inputNumberIsValid) {
    isFormValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }
    props.submitMeals({ name: inputName, number: inputNumber });
    setOrderSubmitted(true);
    inputNameResetValues();
    inputNumberResetValues();
  };

  const inputNameClasses = inputNameHasError
    ? `${styles.label} ${styles.invalid}`
    : styles.label;

  const inputNumberClasses = inputNumberHasError
    ? `${styles.label} ${styles.invalid}`
    : styles.label;
  if (orderSubmitted) {
    return <p>Заказ отправлен</p>;
  }
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <button className={styles["back-arrow"]} onClick={props.backToCart}>
        🔙
      </button>
      <label className={inputNameClasses}>
        Имя
        <input
          min={1}
          type="name"
          value={inputName}
          onChange={inputNameChangeHandler}
          onBlur={inputNameLostFocusHandler}
        />
        {inputNameHasError && (
          <p className={styles["error-text"]}>Пожалуйста, введите свое имя</p>
        )}
      </label>
      <label className={inputNumberClasses}>
        Номер телефона
        <input
          min={1}
          type="number"
          value={inputNumber}
          onChange={inputNumberChangeHandler}
          onBlur={inputNumberLostFocusHandler}
        />
        {inputNumberHasError && (
          <p className={styles["error-text"]}>
            Пожалуйста, введите свой номер телефона
          </p>
        )}
      </label>
      <button disabled={!isFormValid} className={styles.button} type="submit">
        Отправить заказ
      </button>
    </form>
  );
};
export default SubmitOrder;
