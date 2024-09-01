import React, { useRef, useState } from "react";
import Input from "../UI/Input";

const Mealitemform = (props) => {
  const [amountisValid, setamountisValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumbers = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumbers < 1 ||
      enteredAmountNumbers > 5
    ) {
      setamountisValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumbers);
  };
  return (
    <div>
      
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultvalue: 0,
          }}
        />
        <button>+Add</button>
        {!amountisValid && <p>please enter a valid amount(1-5)</p>}
      </form>
    </div>
  );
};

export default Mealitemform;
