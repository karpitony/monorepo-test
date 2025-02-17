import styled from 'styled-components';

export const ItemContainer = styled.div<{ $isMobile: boolean; $isTablet: boolean }>`
  width: ${({ $isMobile, $isTablet }) => ($isMobile ? "280px" : $isTablet ? "330px" : "390px")};
  height: ${({ $isMobile, $isTablet }) => ($isMobile ? "360px" : $isTablet ? "420px" : "480px")}; 
  margin-left: 30px;
  margin-right: 30px;
  background-color: #e5e5e5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img<{ $isMobile: boolean }>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "66.6%" : "66.6%")}; 
  object-fit: cover;
`;

export const Content = styled.div<{ $isMobile: boolean }>`
margin-top: 30px;
  padding: ${({ $isMobile }) => ($isMobile ? "10px" : "20px")};
`;

export const Title = styled.h3<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "10px" : "14px")};
  color: #404040;
`;

export const Description = styled.p<{ $isMobile: boolean }>`
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "20px")};
  font-weight: bold;
  color: #404040;
  line-height: 1.5;
`;
