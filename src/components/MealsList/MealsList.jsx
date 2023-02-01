import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./MealsList.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наоми"',
    description:
      "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченый, соус унаги, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке с лососем"',
    description:
      "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
    price: 7.99,
  },
];
const MealsList = () => {
  return (
    <Card className={styles.list}>
      <ul>
        {DUMMY_MEALS.map(item => (
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
