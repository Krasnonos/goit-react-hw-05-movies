import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

const MoviesPage = () => {
  const [filmList, setFilmList] = useState(null);
  const [searchFilter, setSearchFilter] = useSearchParams();

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
    setSearchFilter(queryString !== '' ? { filter: queryString } : {});
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <InputLable>
          Find movie
          <Input type="text" name="searchFilm" placeholder="Batmen" />
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </InputLable>
      </form>
      {filmList && (
        <List>
          {filmList.map(({ id, title, backdrop_path }) => (
            <ListItem key={id}>
              <ImgLink to={`${id}`}>
                <ImgThumb>
                  <Image
                    src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
                    alt={title}
                  />
                </ImgThumb>
              </ImgLink>
              <TitleLink to={`${id}`}>{title}</TitleLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default MoviesPage;
