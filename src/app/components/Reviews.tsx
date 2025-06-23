'use client'
import React, { useState } from 'react'
import './styles/reviews.css'
import LargeText from './LargeText'
import { reviews } from '../data/reviews'
import Review from './Review'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  const [animating, setAnimating] = useState(false)

  const handlePrev = () => {
    if (animating) return
    setDirection('left')
    setAnimating(true)
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
      setAnimating(false)
    }, 300)
  }

  const handleNext = () => {
    if (animating) return
    setDirection('right')
    setAnimating(true)
    setTimeout(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
      setAnimating(false)
    }, 300)
  }

  return (
    <div className="reviews-container">
      <LargeText center>What our clients say</LargeText>
      <div className={`reviews-slider${direction && animating ? ` slide-${direction}` : ''}`} onAnimationEnd={() => setDirection(null)}>
        <Review review={reviews[index].review} name={reviews[index].name} />
      </div>
      <div className="reviews-chevrons">
        <button onClick={handlePrev} aria-label="Previous review" disabled={animating}>
          <ChevronLeft size={32} />
        </button>
        <button onClick={handleNext} aria-label="Next review" disabled={animating}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}

export default Reviews
