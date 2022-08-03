import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InputLable = styled.label`
  display: flex;
  align-self: baseline;
  color: #ffff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: #8eff00;
  color: #111111;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: 5px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #8eff00;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;

  :hover,
  :focus {
    color: #8eff00;
    background-color: #ffffff;
  }
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
