import React, { useState } from 'react';
import { SliderData }  from '../components/sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }


  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <a href={slide.projectUrl} key={index}>
          <div className={index === current ? "slide active" : "slide"} key={index}>
            <div className="transparentbg">
              <h2>{slide.name}</h2>
            </div>
            {index === current && (<img src={slide.image} className="image" alt="Carousel"/>)}
          </div>
          </a>
        )
      })}
    </div>
  )
};
