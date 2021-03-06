import Carousel from 'react-bootstrap/Carousel';
import "./CarouselBackground.css";

const CarouselBackground = (props) => {
  return (
    <div className='carouselOverlay'>
   <Carousel controls={false} indicators={false} fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20for%20background.jpg?alt=media&token=92d48a6d-7c8a-4c8e-810e-abfc96b8e48a"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20background.jpg?alt=media&token=73e97c5f-eb76-40e4-8fcb-eb655a04d1e6"
      alt="Second slide"
    />
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20rice%20for%20background%204%20not%20resized.jpg?alt=media&token=4fa83ea0-8d1c-43d3-bb4c-89d448d6166d"
      alt="fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20rice%20for%20background%204.jpg?alt=media&token=f1561458-7f8b-4469-a9cd-c1b972138e02"
      alt="fifth slide"
    />
  </Carousel.Item>
 
</Carousel>
    </div>
  );
};

export default CarouselBackground;