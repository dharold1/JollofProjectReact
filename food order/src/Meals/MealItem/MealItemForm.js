import Input from "../../components/UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
        label="amount"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
