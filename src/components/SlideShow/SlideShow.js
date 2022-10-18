import React from 'react';
import { Zoom } from 'react-slideshow-image';
import banner from '../../assets/images/banner.png'
import './SlideShow.css'

const images = [`${banner}`, `${banner}`, `${banner}`];

const zoomOutProperties = {
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};

  
const SlideShow = () => {
    return (
      <div className="slide__container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img className='slide__image' key={index} src={each} />
          ))}
        </Zoom>
      </div>
    );
  };

export default SlideShow;