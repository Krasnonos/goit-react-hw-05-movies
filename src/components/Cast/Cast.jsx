import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from '../../utils/apiService';
import {
  List,
  ListItem,
  ImgThumb,
  Image,
  DescrLable,
  DescrText,
} from './Cast.styled';

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
    <List>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <ListItem key={id}>
          <ImgThumb>
            <Image
              src={`https://image.tmdb.org/t/p/w400${profile_path}`}
              alt={character}
            />
          </ImgThumb>
          <div>
            <DescrLable>
              Name: <DescrText>{original_name}</DescrText>
            </DescrLable>
            <DescrLable>
              Character:<DescrText>{character}</DescrText>
            </DescrLable>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default Cast;
