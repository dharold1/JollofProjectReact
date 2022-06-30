import { Fragment } from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.top}>
        <div className={classes['header-text']}>
        <h1>ENJOY JOLLOF RICE AT ITS BEST</h1>
        <p>Get your party jollof rice delivered to you from the comfort of your home</p>
        </div>
      
      </section>
    </Fragment>
  );
};
export default Home;
