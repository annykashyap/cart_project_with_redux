import React from "react";
import CartContext from "./Cart_context";
import { useReducer } from "react";
const defalutCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = state.items.concat(action.item);
  const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;
    //  const existingCartitemIndex = state.items.findIndex((item) => item.id === action.item.id);
    // const existingCartItem = state.item[existingCartitemIndex];

    // if (existingCartItem) {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     amount: existingCartItem.amount + action.item.amount,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[existingCartitemIndex] = updatedItem;
    // } else {
    //   updatedItems = state.items.concat(action.item);
    // }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }








  return defalutCartState;
};

const Cart_provider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defalutCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cart_provider;
