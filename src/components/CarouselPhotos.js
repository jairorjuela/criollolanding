import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import rafa4 from '../images/rafa4.jpg';
import rafa2 from '../images/rafa2.jpg';
import rafa3 from '../images/rafa3.jpg';
import test from '../images/test.jpg';


export const CarouselPhotos = () => {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item className="imageResponsive">
        <img
          src={test}
          alt="CriolloSomosTodos"
        />
        <Carousel.Caption className="CarouselText">
          <h3>#CriolloSomosTodos</h3>
          <h4>Transformación</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="imageResponsive2">
        <img
          src={rafa2}
          alt="Third slide"
        />
        <Carousel.Caption className="CarouselText">
          <h3>#CriolloSomosTodos</h3>
          <h4>Principios</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="imageResponsive">
      <img
        src={rafa3}
        alt="Third slide"
      />
        <Carousel.Caption className="CarouselText">
          <h3>#CriolloSomosTodos</h3>
          <h4>Familia</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

};
export default CarouselPhotos;
