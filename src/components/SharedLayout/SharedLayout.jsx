import { Outlet } from 'react-router-dom';
import { Navigation, NavigationLink, ContentWrap } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Navigation>
        <NavigationLink to="/">home</NavigationLink>
        <NavigationLink to="movies">movies</NavigationLink>
      </Navigation>
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </>
  );
};

export default SharedLayout;
