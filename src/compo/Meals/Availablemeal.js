import React from "react";

import Card from "../UI/Card";
import Mealitem from "./Mealitem";

const Dummy_meals = [
  {
    id: "z1",
    name: "vanila",
    description: "testy vanila choco icecream",
    price: 200,
  },
  {
    id: "z2",
    name: "pineapple",
    description: "testy pineapple icecream",
    price: 300,
  },
  {
    id: "z3",
    name: "fruty",
    description: "fruty cherry icecream",
    price: 320,
  },
];

const Availablemeal = () => {
  const mealsList = Dummy_meals.map((meal) => (
    <Mealitem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
    // <li className={styles.listyle}>{meal.name}</li>
  ));
  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Availablemeal;
