import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import CartActionButton from "../UI/buttons/CartActionButton";
import classes from "./Delivery.module.css";
import CartContext from "../../store/cart-context";

const Delivery = (props) => {
  const deliveryForm = useRef();

  const cartCtx = useContext(CartContext);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jj8txpc', 'template_ktcupy3', deliveryForm.current, '_GF5ZlXbjiuVLCV13')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={deliveryForm} onSubmit={sendEmail}>
      <h3 className={classes["title"]}>DELIVERY INFORMATION</h3>
      <div className={classes["delivery-card"]}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone_number" required />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="user_city" />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="user_address" required />
        <label htmlFor="notable">Notable Bustop:</label>
        <input type="text" id="notable" name="notable_bustop" required />
        {/* <ul >
      {cartCtx.items.map((item) => (<div className={classes.itemview}>
        <input value={item.quantity} name="quantity"/>
        <input value={item.price} name="price" />
            </div>
      ))}
       {cartCtx.items.title.map((item) => (<div className={classes.itemview}>
        <input value={item.quantity} name="quantity"/>
            </div>
      ))}
     
    </ul> */}
        <ul className={classes.itemview}>
          {(() => {
            let titles = [];
            let quantity = [];
            let price = [];
            for (let i = 0; i < cartCtx.items.length; i++) {
              titles.push(
                <input value={cartCtx.items[i].title} name={`item${i}`} />
              );
              quantity.push(
                <input
                  value={cartCtx.items[i].quantity}
                  name={`quantity${i}`}
                />
              );
              price.push(
                <input value={cartCtx.items[i].price} name={`price${i}`} />
              );
            }
            return [titles, quantity, price];
          })()}
           <input value={cartCtx.totalAmount} name="total_amount"/>
        </ul>
        <div className={classes.actions}>
          <CartActionButton onClick={props.onClickBack}>
            Back to Cart
          </CartActionButton>
          <CartActionButton>Place Order</CartActionButton>
        </div>
      </div>
    </form>
  );
};

export default Delivery;
