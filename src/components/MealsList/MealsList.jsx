import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealsList.module.css";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpErrorMessage, setHttpErrorMessage] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://default-todo-e3713-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(err => {
      setIsLoading(false);
      setHttpErrorMessage(err.message);
    });
  }, []);
  if (isLoading) {
    return <div className={styles.loading}>Загрузка</div>;
  }
  if (httpErrorMessage) {
    return <div className={styles.error}>Ошибка - {httpErrorMessage}</div>;
  }
  return (
    <Card className={styles.list}>
      <ul>
        {meals.map(item => (
          <MealItem
            name={item.name}
            description={item.description}
            key={item.id}
            id={item.id}
            price={item.price}
          />
        ))}
      </ul>
    </Card>
  );
};
export default MealsList;
