'use client';
import React, { useState } from 'react'
import './styles/slider.css'
import { ChevronLeftIcon, ChevronRightIcon, Phone } from 'lucide-react';

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
        <div className="slider-call-message">
          <Phone size={22} className="slider-call-icon" />
          <span>Call us now: <a href="tel:+358401234567">+358 40 123 4567</a></span>
        </div>
      </div>
      <button className="slider-btn right" onClick={nextSlide} aria-label="Next image">
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Slider
