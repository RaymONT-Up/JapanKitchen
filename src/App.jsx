import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MealsList from "./components/MealsList/MealsList";
import PromoText from "./components/PromoText/PromoText";
import CartContextProvider from "./context/CartContext/CartContextProvider";

const App = props => {
  const [cartIsvisible, setCartIsvisible] = useState(false);

  const showCartHandler = () => {
    setCartIsvisible(true);
  };
  const hideCartHandler = () => {
    setCartIsvisible(false);
  };
  return (
    <CartContextProvider>
      {cartIsvisible && <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main className="container">
        <PromoText />
        <MealsList />
      </main>
    </CartContextProvider>
  );
};

export default App;
