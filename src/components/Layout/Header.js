import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.brand}>
          <h1 className={classes["navbar-brand"]}>
            Aspet 
          </h1>
          <br/>
          <p className={classes["navbrand-sub"]}>PARTY JOLLOF</p>{" "}
        </div>
        <ul className={classes["nav-options"]}>
          <li className={classes['nav-btns']}><a href='' >Home </a></li>
          <li>
            {" "}
            <HeaderCartButton onClick={props.onShowCart} />{" "}
          </li>
          <li className={classes['nav-btns']}><a href="">Contact Us</a></li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
