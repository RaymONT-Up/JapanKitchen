import styles from "./Header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Япона Кухня</h1>
        </div>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Блюда японской кухни - Суши & Ролы" />
      </div>
    </Fragment>
  );
};
export default Header;
