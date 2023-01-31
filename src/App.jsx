import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Header/Header";
import MealsList from "./components/MealsList/MealsList";
import PromoText from "./components/PromoText/PromoText";

const App = props => {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <PromoText />
        <MealsList />
      </main>
    </Fragment>
  );
};

export default App;
