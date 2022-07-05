import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import cartIcon from '../../assets/icons/cart-shopping.svg'
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
      <span className={classes.badge}>{numberOfCartItems}</span>
        <img src={cartIcon} alt="cartIcon" className={classes["nav-icon"]}/>
      </span>
      <span className={classes.cartText}>Cart</span>
     
    </button>
  );
};
export default HeaderCartButton;
