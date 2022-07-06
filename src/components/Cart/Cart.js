import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isDeliveryPage, setisDeliveryPage] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const cartHasItems = cartCtx.items.length > 0;

  const deliveryPageHandler = () =>{
    setisDeliveryPage(true)
  }
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
     {!isDeliveryPage && <div>
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
        {!cartHasItems && <h3 className={classes.warning}>Your Cart is Empty</h3>}
        {cartHasItems && (
          <button onClick={deliveryPageHandler} className={classes.button}>Proceed to Delivery Info</button>
        )}</div>
      </div>}
      <div>
      {/* <div className={classes["cart-title"]}>DELIVERY INFORMATION</div>
            <div className={classes["delivery-card"]}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"/>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address"/>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
            <label htmlFor="notable">Notable Spot:</label>
            <input type="text" id="notable"/>  
            <a href="" class="btn btn--color2 payment">Proceed to Payment</a>
            <a href="" class="btn btn--color2 backtocart">Back to Cart</a>
        </div>     */}
      </div>
    </Modal>
  );
};
export default Cart;
