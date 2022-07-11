import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Menu from "./menu/Menu";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {

  const [cartVisisble, setcartVisisble] = useState(false);

  const showCartHandler = ()=>{
    setcartVisisble(true);
  }
  const hideCartHandler = ()=>{
    setcartVisisble(false)
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartVisisble && <Cart onHidecart={hideCartHandler} />}
      <main>
        <Home />
        <Menu />
      </main>
      <footer>
        <Contact/>
      </footer>
    </CartProvider>
  );
}

export default App;
