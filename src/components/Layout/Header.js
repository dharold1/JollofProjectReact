import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import houseIcon from "../../assets/icons/house.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import { HashLink as Link } from "react-router-hash-link";
const Header = (props) => {
  return (
    <nav className={classes.navigation}>
      <div className={classes.brand}>
        <Link to="#home">
        <h1 className={classes["navbar-brand"]}>Aspet</h1>
        <br />
        <p className={classes["navbrand-sub"]}>PARTY JOLLOF</p>{" "}
        </Link>
      </div>
      
      <ul className={classes["nav-options"]}>
        <li className={classes["nav-btns"]}>
          <Link to="#home">
            <span className={classes["nav-group"]}><img
              src={houseIcon}
              alt="Home Icon"
              className={classes["nav-icon"]}
            /> <span className={classes["nav-text"]}>Home </span></span>{" "}
            </Link>
        </li>
        <li>
          {" "}
          <HeaderCartButton onClick={props.onShowCart} />{" "}
        </li>
        <li className={classes["nav-btns"]}>
          <Link to="#contact">
          <span className={classes["nav-group"]} href="">
            <img
              src={phoneIcon}
              className={classes["nav-icon"]}
              alt="Phone Icon"
            />
           <span className={classes["nav-text"]}>Contact Us</span>
          </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
