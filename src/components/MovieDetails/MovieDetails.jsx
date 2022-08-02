import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../utils/apiService';

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
        <NavLink to="/">Go back</NavLink>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
              alt={original_title}
            />
          </div>
          <p>
            {original_title} <span>{release_date}</span>
          </p>
          <p>score: {vote_average}</p>
          <p>Overviw</p>
          <p>{overview}</p>
          <p>Ganres</p>
          {genres.map(({ name, id }) => (
            <p key={id}>{name}</p>
          ))}
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="revievs">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
