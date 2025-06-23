import React from 'react'
import './styles/hero.css'
import Slider from './Slider';
import LargeText from './LargeText';

const images = [
  '/auto-fix.jpg',
  '/happy-worker.jpg',
  '/tires-warehouse.jpg',
  '/tools.jpg',
];

const Hero = () => {
  return (
    <section className="hero-section">
      <LargeText>Your Trusted Auto Mechanic Partner</LargeText>
      <div className="hero-slider-wrapper">
        <Slider images={images} />
      </div>
    </section>
  );
}

export default Hero
