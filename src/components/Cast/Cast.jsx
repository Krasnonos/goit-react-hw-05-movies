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
  EmptyText,
} from './Cast.styled';

const defaultImg =
  'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCasts(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  if (!cast) {
    return;
  }

  const firstCastPast = cast.slice(0, 20);

  return firstCastPast.length === 0 ? (
    <EmptyText>Sorry but ve haven't casts</EmptyText>
  ) : (
    <List>
      {firstCastPast.map(
        ({ profile_path, original_name, character, cast_id }) => (
          <ListItem key={cast_id}>
            <ImgThumb>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w400${profile_path}`
                    : defaultImg
                }
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
        )
      )}
    </List>
  );
};

export default Cast;
