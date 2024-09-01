import React from "react";

import styles from "./Mealsummary.module.css";
const Mealsummary = () => {
  return (
    <section className={styles.summary}>
      <h2 style={{color:"black",textAlign:"center"}}>Delicious Food,Delivered To You</h2>
      <p>
        choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with hight quality grediants,just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
};

export default Mealsummary;
