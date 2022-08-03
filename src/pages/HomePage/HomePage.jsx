import { useState, useEffect } from 'react';
import {
  Title,
  List,
  ListItem,
  ImgLink,
  TitleLink,
  ImgThumb,
  Image,
} from './HomePage.styled';
import { getPopularMovie } from '../../utils/apiService';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    getPopularMovie().then(setPopularMovies).catch(console.log);
  }, []);

  if (!popularMovies) {
    return;
  }

  return (
    <>
      <Title>Tranding today</Title>
      <List>
        {popularMovies.map(({ title, id, backdrop_path }) => (
          <ListItem key={id}>
            <ImgLink to={`/movies/${id}`}>
              <ImgThumb>
                <Image
                  src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
                  alt={title}
                />
              </ImgThumb>
            </ImgLink>
            <TitleLink to={`/movies/${id}`}>{title}</TitleLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomePage;
