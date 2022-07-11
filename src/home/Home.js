import CarouselBackground from "../components/UI/carousel/CarouselBackground";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <header id="home">
      <section className={classes.top}>
      <CarouselBackground/>
        <div className={classes['header-text']}>
        <h1>ENJOY JOLLOF RICE AT ITS BEST</h1>
        <p>Get your party jollof rice delivered to you from your comfort zone</p>
        </div>
      </section>
    </header>
  );
};
export default Home;
