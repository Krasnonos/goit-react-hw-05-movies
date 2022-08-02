import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../utils/apiService';

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
    <div>
      <form onSubmit={submitForm}>
        <label>
          Find movie
          <input type="text" name="searchFilm" placeholder="Batmen" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {filmList && (
        <ul>
          {filmList.map(({ id, title }) => (
            <NavLink key={id} to={`${id}`}>
              {title}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
