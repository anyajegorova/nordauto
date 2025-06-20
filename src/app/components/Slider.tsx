'use client';
import React, { useState } from 'react'
import './styles/slider.css'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="slider-outer">
      <button className="slider-btn left" onClick={prevSlide} aria-label="Previous image">
        <ChevronLeftIcon />
      </button>
      <div className="slider-container">
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="slider-image"
        />
      </div>
      <button className="slider-btn right" onClick={nextSlide} aria-label="Next image">
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Slider
