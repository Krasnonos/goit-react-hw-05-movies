import { useLocation } from 'react-router-dom';
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

const defaultImg =
  'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const location = useLocation();

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
            <ImgLink to={`/movies/${id}`} state={{ from: location }}>
              <ImgThumb>
                <Image
                  src={
                    backdrop_path
                      ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
                      : defaultImg
                  }
                  alt={title}
                />
              </ImgThumb>
            </ImgLink>
            <TitleLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </TitleLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomePage;
