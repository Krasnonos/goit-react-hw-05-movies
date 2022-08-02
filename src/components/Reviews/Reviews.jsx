import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../utils/apiService';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews).catch(console.log);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  console.log(reviews);

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
