import '../../styles/components/carrousel.css';
import React, { useState } from 'react';
import arrow from "../../assets/imgs/side-arrow.png";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__image-container" style={{ width: `${images.length * 100}%` }}>
        {images.map((image, index) => (
            <div key={index} className={index === currentIndex ? 'active slide' : 'slide'} style={{ transform: `translateX(${-currentIndex * 100}%)`, width: `${100 / images.length}%` }}>
                <img
                    src={image}
                    alt={`slide ${index}`}
                />
            </div>          
        ))}
      </div>
      {images.length > 1 &&
        <>
          <span className="carousel__pagination" >{currentIndex + 1}/{length}</span>
          <button className="carousel__prev-button" onClick={goToPrevSlide}>
            <img className="prev-button_arrow" src={arrow} alt="flèche gauche" />
          </button>
          <button className="carousel__next-button" onClick={goToNextSlide}>
            <img className="next-button_arrow " src={arrow} alt="flèche droite" />
          </button>
        </>
      }
    </div>
  );
};

export default Carousel;