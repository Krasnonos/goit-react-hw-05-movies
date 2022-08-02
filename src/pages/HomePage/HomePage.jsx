import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
      <h1>Tranding today</h1>
      <ul>
        {popularMovies.map(({ title, id }) => (
          <NavLink to={`/movies/${id}`} key={id}>
            {title}
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
