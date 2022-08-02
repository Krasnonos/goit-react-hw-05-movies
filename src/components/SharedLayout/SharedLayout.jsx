import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="movies">movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
