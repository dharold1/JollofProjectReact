import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  let cartItemsNo = ctx.items.reduce((curNumber, item)=>{
    return curNumber+item.amount
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>
          {cartItemsNo}
      </span>
    </button>
  );
};
export default HeaderCartButton;
