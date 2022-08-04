import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdGroup, MdPreview } from 'react-icons/md';
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

const defaultImg =
  'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backUrlPath = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovieInfo)
      .catch(err => {
        console.log(err);
        navigate(backUrlPath.current, { replace: true });
      });
  }, [movieId, navigate]);

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
        <Link to={backUrlPath.current}>
          <IoIosArrowBack />
          Go back
        </Link>
        <FlexBox>
          <ImgThumb>
            <Image
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w400${backdrop_path}`
                  : defaultImg
              }
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
            <Link to="cast">
              <MdGroup />
              Cast
            </Link>
          </NavItem>
          <NavItem>
            <Link to="reviews">
              <MdPreview />
              Reviews
            </Link>
          </NavItem>
        </NavList>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
