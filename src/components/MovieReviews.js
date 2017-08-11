import React from 'react';

const Review = ({ title, summary }) => {
  return (
    <div className="review">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
 <div className="review-list">
  {reviews.map(review => <Review title={review.headline} summary={review.summary_short} />)}
 </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
