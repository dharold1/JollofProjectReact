import classes from "./Cart.module.css";
import {useContext} from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const CartItems =
  <ul >
      { [
    {
      id: "sushi",
      name: "sushi",
      description: "best",
      price: 29.99,
    },
  ].map((cart) => (
    <li>{cart.name}</li>
  ))};
  </ul>
  
  ;
  const ctx = useContext(CartContext);

  return (
    <Modal>
      <ul className={classes['cart-items']}>{CartItems}</ul>
      <div className={classes.total}>
        <span>Total: </span>
        <span>30.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Proceed</button>
      </div>
    </Modal>
  );
};

export default Cart;
