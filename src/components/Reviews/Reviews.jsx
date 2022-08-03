import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, DescrLable, DescrText } from './Reviews.styled';

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

  return (
    <List>
      {reviews.map(({ id, content, author }) => (
        <ListItem key={id}>
          <DescrLable>
            Author: <DescrText>{author}</DescrText>
          </DescrLable>
          <DescrText>{content}</DescrText>
        </ListItem>
      ))}
    </List>
  );
};

export default Reviews;
