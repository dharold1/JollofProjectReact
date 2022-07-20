import { useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Delivery from "./Delivery";
import CartActionButton from "../UI/buttons/CartActionButton";


const Cart = (props) => {
  const [isDeliveryPage, setisDeliveryPage] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const cartHasItems = cartCtx.items.length > 0;
  
  
  const deliveryPageHandler = () =>{
    setisDeliveryPage(true)
  }

  const backButtonHandler = () => {
    setisDeliveryPage(false)
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemDeleteHandler = (id) => {
    cartCtx.deleteItem(id)
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
          key = {item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete={cartItemDeleteHandler.bind(null, item.id)}
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
          <CartActionButton onClick={deliveryPageHandler}>Proceed</CartActionButton>
        )}</div>
      </div>}
     {isDeliveryPage && <Delivery onHide={props.onHidecart} onClickBack={backButtonHandler} />}
    </Modal>
  );
};
export default Cart;
