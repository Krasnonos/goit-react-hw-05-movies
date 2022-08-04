import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { getMoviesByName } from '../../utils/apiService';
import {
  InputLable,
  Input,
  SubmitBtn,
  List,
  ListItem,
  ImgLink,
  TitleLink,
  ImgThumb,
  Image,
} from './MoviesPage.styled';
const defaultImg =
  'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const MoviesPage = () => {
  const [filmList, setFilmList] = useState(null);
  const [searchFilter, setSearchFilter] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const filmName = searchFilter.get('filter');
    if (!filmName) {
      return;
    }
    getMoviesByName(filmName).then(setFilmList);
  }, [searchFilter]);

  const submitForm = e => {
    e.preventDefault();
    const queryString = e.target.elements.searchFilm.value;
    setSearchFilter(
      queryString.trim() !== '' ? { filter: queryString.trim() } : {}
    );
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <InputLable>
          Find movie
          <Input type="text" name="searchFilm" placeholder="Batmen" />
          <SubmitBtn type="submit">
            <FiSend />
            Submit
          </SubmitBtn>
        </InputLable>
      </form>
      {filmList && (
        <List>
          {filmList.map(({ id, title, backdrop_path }) => (
            <ListItem key={id}>
              <ImgLink to={`${id}`} state={{ from: location }}>
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
              <TitleLink to={`${id}`} state={{ from: location }}>
                {title}
              </TitleLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default MoviesPage;
