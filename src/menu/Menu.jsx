import React, { Fragment } from "react";
import Card from "../components/UI/Card";
import classes from "./Menu.module.css";
import { foodData } from "./MenuData";

const Menu = () => {
  const foodlist = foodData.map((food) => (
    <Card key={food.id} id={food.id} title={food.title} imagesrc={food.img} price={food.price} />
  ));
  return (
    <Fragment>
      <div className={classes.menu}>
        <h2 className={classes['menu_heading']}>MENU</h2>
        <div className={classes['heading--underline']}></div>
        <div className={classes["menu__container"]}>
          {foodlist}
          {/* <Card title="Jollof Rice & Fish" imagesrc={image} price={1500}/> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
