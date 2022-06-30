import React, { Fragment } from "react";
import classes from "./Contact.module.css";

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
                <i className={classes["fa fa-envelope-o"]}></i>{" "}
                aspetcatering@gmail.com
              </a>
            </li>
            <li>
              {" "}
              <a href="tel:+2348033032677">
                <i className={classes["fa fa-mobile"]} aria-hidden="true"></i>{" "}
                +234 80 3303 2677
              </a>
            </li>
            <li>
              <address>
                {" "}
                <a href="https://g.co/kgs/Po6617">
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Villa 17
                  Old aprofim, life camp, Abuja
                </a>
              </address>
            </li>
            <div className="social">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f d-block m-auto"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/aspet_catering_service_ng?igshid=YmMyMTA2M2Y=">
                  <i className="fab fa-instagram d-block m-auto"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2348033032677">
                  <i className="fab fa-whatsapp d-block m-auto"></i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
