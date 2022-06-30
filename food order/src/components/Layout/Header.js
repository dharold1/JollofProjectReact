import React from "react";
import classes from "./Header.module.css";
import mealpic from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';


function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
          <img src={mealpic} alt='Header-picture' />
        </div>
      
    </React.Fragment>
  );
}

export default Header;
