import { useState } from "react";
import Card from "./compo/Cart/Card";
import Header from "./compo/Layout/Header";
import Meals from "./compo/Meals/Meals";
import Cart_provider from "./compo/Store/Cart_provider";

function App() {
const[cartIsShown ,setCartIsShown]=useState(false)
const showCartHandler=()=>{
setCartIsShown(true)
}
const hideCartHandler=()=>{
setCartIsShown(false)}
  return (
    <Cart_provider>
{cartIsShown &&<Card onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Cart_provider>
  );
}

export default App;
