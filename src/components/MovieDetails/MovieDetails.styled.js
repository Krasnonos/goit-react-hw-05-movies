import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  color: #4caf50;
  background-color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.2s ease-in-out;

  &.active {
    color: #ffffff;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 21%,
      rgba(23, 121, 9, 1) 53%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #8eff00;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ImgThumb = styled.div`
  width: 500px;
  height: 325px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescrLable = styled.p`
  color: #ffff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;

export const DescrText = styled.span`
  color: #ffff;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  list-style: none;
`;

export const NavItem = styled.li`
  height: 42px;

  & + & {
    margin-left: 15px;
  }
`;
