import React from 'react';
import { Slide } from 'react-slideshow-image';
import banner from '../../assets/images/banner.png'
import './SlideShow.css'

const images = [
  {
    url: banner,
    title: 'Slide 1'
  },
  {
    url: banner,
    title: 'Slide 2'
  },
  {
    url: banner,
    title: 'Slide 3'
  },
];

const customArrow = <button>{'>'}</button>

const slideProperties = {
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
  prevArrow: customArrow,
  nextArrow: customArrow
};

const SlideShow = () => {
  return (
    <div className="slide__container">
      <Slide {...slideProperties}>
        {images.map((slideImage, index) => (
          <img alt='banner "Bom pra Caju"' className='slide__image' key={index} src={slideImage.url} title={slideImage.title}
            />
          ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
