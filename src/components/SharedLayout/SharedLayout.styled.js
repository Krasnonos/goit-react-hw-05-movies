import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 21%,
    rgba(23, 121, 9, 1) 53%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const NavigationLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
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

  & + & {
    margin-left: 20px;
  }
`;

export const ContentWrap = styled.div`
  padding: 0 30px;
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(
    326deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(23, 121, 9, 0.2623643207282913) 53%,
    rgba(0, 212, 255, 1) 100%
  );
`;
