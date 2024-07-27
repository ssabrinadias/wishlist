import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingStarsProps {
  rating?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating = 0 }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center mb-2">
      {[...Array(filledStars)].map((_, index) => (
        <FaStar
          key={index}
          className="text-yellow-500 size-3.5"
          data-testid="filled-star"
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt
          className="text-yellow-500 size-3.5"
          data-testid="half-star"
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar
          key={index}
          className="text-gray-300 size-3.5"
          data-testid="empty-star"
        />
      ))}
      <span className="text-gray-600 text-xs ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
