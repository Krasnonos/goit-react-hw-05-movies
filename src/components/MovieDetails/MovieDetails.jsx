import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../utils/apiService';
import {
  FlexBox,
  Link,
  ImgThumb,
  Image,
  DescrLable,
  DescrText,
  NavList,
  NavItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieInfo).catch(console.log);
  }, [movieId]);

  if (!movieInfo) {
    return;
  }
  const {
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;

  return (
    <>
      <div>
        <Link to="/">Go back</Link>
        <FlexBox>
          <ImgThumb>
            <Image
              src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
              alt={original_title}
            />
          </ImgThumb>
          <div>
            <DescrLable>
              {original_title} <DescrText>({release_date})</DescrText>
            </DescrLable>
            <DescrLable>
              Score: <DescrText>{vote_average * 10} %</DescrText>
            </DescrLable>
            <DescrLable>Overview:</DescrLable>
            <DescrText>{overview}</DescrText>
            <DescrLable>
              Ganres:
              {genres.map(({ name, id }) => (
                <DescrText key={id}> {name}</DescrText>
              ))}
            </DescrLable>
          </div>
        </FlexBox>
        <NavList>
          <NavItem>
            <Link to="cast">Cast</Link>
          </NavItem>
          <NavItem>
            <Link to="revievs">Reviews</Link>
          </NavItem>
        </NavList>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
