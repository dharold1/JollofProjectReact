import React, { Fragment } from "react";
import classes from "./Contact.module.css";
import facebook from '../assets/icons/facebook-f.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import instagram from '../assets/icons/instagram-square.svg'
import envelope from '../assets/icons/envelope.svg'
import phone from '../assets/icons/mobile-screen.svg'
import location from '../assets/icons/location-dot.svg'
export default function Contact() {
  return (
    <Fragment>
      <div className={classes.contact}>
        <div className={classes["col-1-of-3"]}>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#"> About Us </a>
            </li>
            <li>
              {" "}
              <a href="#"> Contact Us </a>
            </li>
          </ul>
        </div>
        <div className={classes["col-1-of-3"]}>
          <h5>Features</h5>
          <ul>
            <li>
              <a href="#"> Place Order </a>
            </li>
          </ul>
        </div>
        <div className={classes["col-1-of-3"]}>
          <h5>Contact Us</h5>
          <ul>
            <li>
              <a href="mailto:aspetcatering@gmail.com">
                <img className={classes["small-icons"]} src={envelope} alt={"envelop"}/>
                aspetcatering@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:+2348033032677">
               <img className={classes["small-icons"]} src={phone} alt={"phone"}/>
                +234 80 3303 2677
              </a>
            </li>
            <li>
              <address>
                {" "}
                <a href="https://g.co/kgs/Po6617">
                 <img className={classes["small-icons"]} src={location} alt={"location"}/> Villa 17
                  Old aprofim, life camp, Abuja
                </a>
              </address>
            </li>
            <div className={classes["social"]}>
              <li>
                <a href="facebook.com">
                 <img className={classes["social-icons"]}  src={facebook} alt={"facebook logo"}/>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/aspet_catering_service_ng?igshid=YmMyMTA2M2Y=">
                  <img className={classes["social-icons"]}  src={instagram} alt={"instagram logo"}/>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2348033032677">
                  <img className={classes["social-icons"]}  src={whatsapp} alt={"whatsapp logo"}/>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
