import React from "react";
import classes from "./CartActionButton.module.css"

const CartActionButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.children}
    </button>
  );
};

export default CartActionButton;
