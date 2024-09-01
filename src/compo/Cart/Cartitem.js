import React from "react";

const Cartitem = (props) => {
   const prices = `$${props.price.toFixed()}`;
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{prices}</span>
          <span>{props.amount}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default Cartitem;
