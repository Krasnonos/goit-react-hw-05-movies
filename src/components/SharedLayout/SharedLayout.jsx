import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BiHome, BiMoviePlay } from 'react-icons/bi';
import { Navigation, NavigationLink, ContentWrap } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Navigation>
        <NavigationLink to="/">
          <BiHome />
          home
        </NavigationLink>
        <NavigationLink to="movies">
          <BiMoviePlay />
          movies
        </NavigationLink>
      </Navigation>
      <ContentWrap>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ContentWrap>
    </>
  );
};

export default SharedLayout;
