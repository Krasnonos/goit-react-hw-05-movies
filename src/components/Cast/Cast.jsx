import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from '../../utils/apiService';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCasts(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <ul>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <div key={id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${profile_path}`}
              alt={character}
            />
          </div>
          <p>Name: {original_name}</p>
          <p>Character: {character}</p>
        </div>
      ))}
    </ul>
  );
};

export default Cast;
