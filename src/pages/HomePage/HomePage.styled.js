import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  & + & {
    margin-top: 15px;
  }
`;

export const ImgLink = styled(NavLink)`
  width: auto;
  height: auto;
`;

export const TitleLink = styled(NavLink)`
  width: auto;
  max-height: 30px;
  padding: 5px;
  margin-left: 10px;
  text-decoration: none;
  color: #111111;
  font-size: 20px;
  font-weight: 500;
`;

export const ImgThumb = styled.div`
  width: 400px;
  height: 225px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
