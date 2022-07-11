import classes from "./CartItem.module.css";
import trash from "../../assets/icons/trash-can.svg"
const CartItem = (props) => {
  return (
    <li key={props.id} className={classes["cart-item"]}>
      <img src={props.image} alt={props.title} /> 
       <div className={classes.text}>
      <h3 className={classes.title}>{props.title}</h3><span onClick={props.onDelete}><img className={classes["trash-icon"]} src={trash} alt={"trash"}/></span></div>
      <div className={classes.summary}>
        <span className={classes.price}>₦{props.price}</span>
        <span className={classes.quantity}>x{props.quantity}</span>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
