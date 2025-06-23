import React from 'react'
import './styles/review.css'

interface ReviewProps {
  review: string;
  name: string;
}

const Review: React.FC<ReviewProps> = ({ review, name }) => {
  return (
    <div className="review">
      <div className="review-text">{review}</div>
      <div className="review-author">{name}</div>
    </div>
  );
}

export default Review
