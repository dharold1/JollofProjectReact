import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisisble, setcartVisisble] = useState(false);

  const showCartHandler = () => {
    setcartVisisble(true);
  };
  const hideCartHandler = () => {
    setcartVisisble(false);
  };

  return (
    <CartProvider>
      {" "}
      <Header onShowCart={showCartHandler} />
      {cartVisisble && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
