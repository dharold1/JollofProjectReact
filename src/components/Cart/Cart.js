import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const cartHasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      quantity: 1
    })
  };

  const cartList = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHidecart}>
      {cartList}
      <div className={classes.total}>
        {" "}
        <span>Total Amount: </span>
        <span>₦{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHidecart} className={classes["button-alt"]}>
          Close
        </button>
        {!cartHasItems && <h3>Your Cart is Empty</h3>}
        {cartHasItems && (
          <button className={classes.button}>Proceed to checkout</button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
