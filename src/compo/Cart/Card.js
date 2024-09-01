import React, { useContext } from "react";
import Model from "../UI/Model";
import CartContext from "../Store/Cart_context";
import Cartitem from "./Cartitem";

const Card = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.item.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartitem = (
    <ul>
      {cartCtx.item.map((items) => (
        <Cartitem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );
  return (
    <>
      <Model>
        <div>
          {cartitem}
          <div>
            <span>total amount</span>
            <span>{totalAmount}</span>
          </div>
          <div>
            <button onClick={props.onClose}>close</button>
            {hasItem && <button>order</button>}
          </div>
        </div>
      </Model>
    </>
  );
};

export default Card;
