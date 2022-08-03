import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;

  & + & {
    margin-top: 15px;
  }
`;

export const ImgThumb = styled.div`
  width: 250px;
  height: 300px;
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

export const EmptyText = styled.p`
  color: #ffff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;
