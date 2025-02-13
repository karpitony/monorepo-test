import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color:#175321;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 14px;
  color: #fcfcfc;
`;

export const Description = styled.p`
 font-size: 20px;
  font-weight: bold;
  color: #fcfcfc;
  line-height: 1.5;
`;
