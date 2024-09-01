import React from "react";
import styles from "./Header.module.css";
import Cartbutton from "./Cartbutton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Choco</h1>
        <Cartbutton onClick={props.onShowCart} />
      </header>
      <div className={styles.mainImg}></div>
    </>
  );
};

export default Header;
