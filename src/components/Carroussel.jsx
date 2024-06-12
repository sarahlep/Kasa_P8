import React from 'react';
import FlecheGauche from '../assets/images/fleche-gauche.png';
import FlecheDroite from '../assets/images/fleche-droite.png';
import '../sass/carrousel.scss';

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carrousel">
      <img src={FlecheGauche} alt="Previous" onClick={prevSlide} className="fleche-gauche" />
      <div className="slider">
        {pictures.map((picture, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            {index === currentIndex && <img src={picture} alt={`Slide ${index + 1}`} />}
          </div>
        ))}
      </div>
      <img src={FlecheDroite} alt="Next" onClick={nextSlide} className="fleche-droite" />
      <div className="slide-number">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Carrousel;