import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 0;
`;

export const ListItem = styled.li`
  & + & {
    margin-top: 15px;
  }
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

export const EmptyText = styled.p`
  color: #ffff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;
