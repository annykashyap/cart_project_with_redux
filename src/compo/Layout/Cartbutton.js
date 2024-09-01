import React, { useContext } from "react";

import styles from "./Cartbutton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../Store/Cart_context";

const Cartbutton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberofcartitems = cartCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);
  return (
    <>
      <button className={styles.cartbtn} onClick={props.onClick}>
        <span className={styles.faicon}>
          <FaShoppingCart />
        </span>
        <span className={styles.cart}>Your Cart</span>
        <span className={styles.badge}>{numberofcartitems}</span>
      </button>
    </>
  );
};

export default Cartbutton;
