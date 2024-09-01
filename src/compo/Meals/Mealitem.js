import React, { useContext } from "react";
import styles from "./Mealitem.module.css";
import Mealitemform from "./Mealitemform";
import CartContext from "../Store/Cart_context";

const Mealitem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.listbox}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <Mealitemform onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Mealitem;
