import CarouselBackground from "../components/UI/carousel/CarouselBackground";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <header>
      <section className={classes.top}>
      <CarouselBackground/>
        <div className={classes['header-text']}>
        
        <h1>ENJOY JOLLOF RICE AT ITS BEST</h1>
        <p>Get your party jollof rice delivered to you from the comfort of your home</p>
        </div>
      </section>
    </header>
  );
};
export default Home;
