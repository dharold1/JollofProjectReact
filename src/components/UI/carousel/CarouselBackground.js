import Carousel from 'react-bootstrap/Carousel';
import "./CarouselBackground.css";

const CarouselBackground = (props) => {
  return (
    <div className='carouselOverlay'>
   <Carousel controls={false} indicators={false} fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20for%20background.jpg?alt=media&token=a339a83c-099c-457f-a34f-d2995a1994ff"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fbg%20(5).jpeg?alt=media&token=f6b6a19b-6814-4847-ac2a-db1e95f7b507"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20rice%20for%20background%204.jpg?alt=media&token=7cc08344-ad30-4a25-bf0a-272c53564e1b"
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://firebasestorage.googleapis.com/v0/b/aspetfoods.appspot.com/o/bg%2Fjollof%20with%20chicken%204%20background%20.jpg?alt=media&token=57f1daf0-416c-412d-88cf-c1251be739d5"
      alt="Fifth slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default CarouselBackground;