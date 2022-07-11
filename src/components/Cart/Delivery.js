import React, { useRef, useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import CartActionButton from "../UI/buttons/CartActionButton";
import classes from "./Delivery.module.css";
import CartContext from "../../store/cart-context";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-bootstrap/Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner';

const Delivery = (props) => {
  const deliveryForm = useRef();

  const MySwal = withReactContent(Swal)
  const cartCtx = useContext(CartContext);

  const [isSubmitting, setisSubmitting] = useState(false);
  const [hasSubmitted, sethasSubmitted] = useState(false);


  const  sendEmail = async (e) => {
    e.preventDefault();
    setisSubmitting(true)
    await emailjs.sendForm('service_jj8txpc', 'template_ktcupy3', deliveryForm.current, '_GF5ZlXbjiuVLCV13')
      .then(() => {
        sethasSubmitted(true)
         return MySwal.fire(
            'Your Order has been placed!',
            '',
            'success'
          ).then(()=>{
           props.onHide();
           cartCtx.clearCart();
          })
          
          
      }, () => {
         return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<p>Please check your internet connection and Try again</p>'
        }).then(()=>{
          sethasSubmitted(true);
         })
      });
      sethasSubmitted(false);
      setisSubmitting(false)
  };
  return (
    <>
    {!hasSubmitted && <form ref={deliveryForm} onSubmit={sendEmail} className={classes.form}>
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
        <label htmlFor="time">Delivery Time</label>
        <input type="time" id="time" name="delivery_time"  min="08:00" max="19:00" required/>
        <p className={classes.note}>***Please note deliveries time is from 8am to 7pm and <br/>deliveries will be made 30 minutes after order has been placed****</p>
        <p className={classes.note}>***Also note that you will be contacted to confirm delivery and be informed about delivery price ****</p>
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
        {isSubmitting && <Modal size="sm" show={true} centered>
          <Modal.Body>
        <TailSpin  height="50" width="50" ariaLabel='loading' color="black" />
        </Modal.Body>
        </Modal>}
        <div className={classes.actions}>
          <CartActionButton onClick={props.onClickBack}>
            Back to Cart
          </CartActionButton>
          <CartActionButton>Place Order</CartActionButton>
        </div>
      </div>
    </form>}
    </>
  );
};

export default Delivery;
