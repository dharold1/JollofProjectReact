// import Input from "../../components/UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const QuantityInputRef = useRef();
  const [QuantityValid, setQuantityValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = QuantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1) {
      setQuantityValid(false);
      return;
    }
    props.onAddtoCart(enteredQuantityNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label
        className={classes.label}
        htmlFor={"Quantity" + props.enteredQuantityNumber}
      >
        Qty:
      </label>
      <input
        ref={QuantityInputRef}
        className={classes.input}
        id={"Quantity" + props.id}
        type="number"
        min="1"
        step="1"
        defaultValue="1"
      />
      <div className={classes["add-to-cart"]}>
      <button className={classes["card-btn"]}>Add to Cart</button>
      {!QuantityValid && <p>Please enter a valid Quantity</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
