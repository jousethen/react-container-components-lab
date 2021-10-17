// Code MovieReviews Here

import React, { Component } from 'react'

const Review = (review) => {
  if (review) {
    return (
      <div className='review' key={review.headline}>
        <h3>{review.display_title}</h3>
        <p>{review.summary_short}</p>
      </div>
    )
  }
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews;