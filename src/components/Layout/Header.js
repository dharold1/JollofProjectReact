import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import houseIcon from "../../assets/icons/house.svg";
import phoneIcon from "../../assets/icons/phone.svg";

const Header = (props) => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.brand}>
        <h1 className={classes["navbar-brand"]}>Aspet</h1>
        <br />
        <p className={classes["navbrand-sub"]}>PARTY JOLLOF</p>{" "}
      </div>
      <ul className={classes["nav-options"]}>
        <li className={classes["nav-btns"]}>
            <a className={classes["nav-group"]} href=""><img
              src={houseIcon}
              alt="Home Icon"
              className={classes["nav-icon"]}
            /> <span className={classes["nav-text"]}>Home </span></a>{" "}
        </li>
        <li>
          {" "}
          <HeaderCartButton onClick={props.onShowCart} />{" "}
        </li>
        <li className={classes["nav-btns"]}>
          <a className={classes["nav-group"]} href="">
            <img
              src={phoneIcon}
              className={classes["nav-icon"]}
              alt="Phone Icon"
            />
           <span className={classes["nav-text"]}>Contact Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
